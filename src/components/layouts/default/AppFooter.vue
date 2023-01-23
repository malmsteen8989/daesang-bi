<script lang="ts">
export default {
  name: 'AppFooter',
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  },
  methods: {
    footerImage() {
      // return this.$appState.darkTheme ? '/images/logo-white.svg' : '/images/logo-dark.svg';
      return '/images/daesang-notext-tiny.png';
    }
  }
};
</script>

<template>
  <div class="layout-footer">
    <img alt="Logo" :src="footerImage()" height="20" class="mr-2">
    &copy;
    <span class="font-medium ml-2">Daesang Ingredient Indonesia 2023</span>
  </div>
</template>

<style scoped>

</style>
