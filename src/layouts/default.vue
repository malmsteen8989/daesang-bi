<!-- eslint-disable @typescript-eslint/indent -->
<script lang="ts">
import AppTopBar from '~/components/layouts/default/AppTopbar.vue';
import AppMenu from '~/components/layouts/default/AppMenu.vue';
// import AppConfig from '~/components/layouts/default/AppConfig.vue';
import AppFooter from '~/components/layouts/default/AppFooter.vue';

export default {
  components: {
    AppTopBar,
    AppMenu,
    // AppConfig,
    AppFooter
  },
  data() {
    return {
      layoutMode: 'static',
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      menu: [
        {
          label: 'Dashboard',
          items: [{
            label: 'Performance Highlight', icon: 'pi pi-fw pi-chart-bar', to: '/'
          }]
        },
        {
          label: 'Sales & Distribution',
          icon: 'pi pi-fw pi-sitemap',
          items: [
            { label: 'Overview', icon: 'pi pi-fw pi-cart-plus', to: '/dash/sales' }
          ]
        },
        {
          label: 'Production',
          items: [
            { label: 'Trend', icon: ' pi pi-fw pi-arrow-right-arrow-left', to: '/dash/production' }
          ]
        },
        {
          label: 'Human Capital',
          icon: 'pi pi-fw pi-clone',
          items: [
            { label: 'Composition', icon: 'pi pi-fw pi-user-edit', to: '/dash/hcm' }
          ]
        },
        {
          label: 'Digital Marketing',
          icon: 'pi pi-fw pi-search',
          items: [
            {
              label: 'Youtube',
              icon: 'pi pi-fw pi-youtube',
              to: '/dash/youtube'
            },
            {
              label: 'Instagram',
              icon: 'pi pi-fw pi-instagram',
              to: '/dash/instagram'
            }
          ]
        }
      ]
    };
  },
  computed: {
    containerClass() {
      return ['layout-wrapper', {
        'layout-overlay': this.layoutMode === 'overlay',
        'layout-static': this.layoutMode === 'static',
        'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
        'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
        'layout-mobile-sidebar-active': this.mobileMenuActive,
        'p-input-filled': this.$primevue.config.inputStyle === 'filled',
        'p-ripple-disabled': this.$primevue.config.ripple === false,
        'layout-theme-light': this.$appState.theme.startsWith('saga')
      }];
    },
    logo() {
      return (this.$appState.darkTheme) ? '/images/logo-white.svg' : '/images/logo.svg';
    }
  },
  watch: {
    $route() {
      this.menuActive = false;
      this.$toast.removeAllGroups();
    }
  },
  beforeUpdate() {
    if (this.mobileMenuActive) {
      this.addClass(document.body, 'body-overflow-hidden');
    } else {
      this.removeClass(document.body, 'body-overflow-hidden');
    }
  },
  methods: {
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }

      this.menuClick = false;
    },
    onMenuToggle() {
      this.menuClick = true;

      if (this.isDesktop()) {
        if (this.layoutMode === 'overlay') {
          if (this.mobileMenuActive === true) {
            this.overlayMenuActive = true;
          }

          this.overlayMenuActive = !this.overlayMenuActive;
          this.mobileMenuActive = false;
        } else if (this.layoutMode === 'static') {
          this.staticMenuInactive = !this.staticMenuInactive;
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive;
      }

      event.preventDefault();
    },
    onSidebarClick() {
      this.menuClick = true;
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode;
    },
    addClass(element, className) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        element.className += ` ${className}`;
      }
    },
    removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        element.className = element.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
      }
    },
    isDesktop() {
      return window.innerWidth >= 992;
    },
    isSidebarVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === 'static') {
          return !this.staticMenuInactive;
        } else if (this.layoutMode === 'overlay') {
          return this.overlayMenuActive;
        }
      }

      return true;
    }
  }
};
</script>

<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" />
    <div class="layout-sidebar" @click="onSidebarClick">
      <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
    </div>

    <div class="layout-main-container">
      <div class="layout-main">
        <slot />
      </div>
      <AppFooter />
    </div>

    <AppConfig :layout-mode="layoutMode" @layout-change="onLayoutChange" />
    <transition name="layout-mask">
      <div v-if="mobileMenuActive" class="layout-mask p-component-overlay" />
    </transition>
  </div>
</template>

<style lang="scss">
@import '~/assets/styles/App.scss';
</style>
