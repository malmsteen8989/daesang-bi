<script lang="ts" setup>
import DigitalService from '~~/services/DigitalService';
useHead({
  title: 'Youtube'
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      dataviewValue: null,
      layout: 'grid',
      sortKey: null,
      sortOrder: null,
      sortField: null,
      sortOptions: [
        { label: 'Viewer High to Low', value: '!viewer' },
        { label: 'Viewer Low to High', value: 'viewer' }
      ]
    };
  },
  digitalService: null,
  created() {
    this.digitalService = new DigitalService();
  },
  mounted() {
    this.digitalService.getYoutube().then(data => this.dataviewValue = data);
  },
  methods: {
    onSortChange(event) {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    }
  }
};
</script>

<template>
  <div><h5><b>MamaSuka Indonesia Youtube Channel</b></h5></div>
  <div class="grid">
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Subscribers</span>
            <div class="text-900 font-medium text-xl">
              109,125
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-user text-blue-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">115+ </span>
        <span class="text-500">New Subsribers since last month</span>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Total Video</span>
            <div class="text-900 font-medium text-xl">
              614
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-video text-orange-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">1+ </span>
        <span class="text-500">New Video since last month</span>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Play / View</span>
            <div class="text-900 font-medium text-xl">
              14,457 Million
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-play text-cyan-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">12k+  </span>
        <span class="text-500">Video Played since last month</span>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Comments</span>
            <div class="text-900 font-medium text-xl">
              1,345 Million
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-comment text-purple-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">135+ </span>
        <span class="text-500">New Comment Since Last Month</span>
      </div>
    </div>

    <!-- video -->
    <div class="col-12">
      <div class="card" style="background-color: #fefae0;">
        <h5>All Time Top 5 Video</h5>
        <DataView
          :value="dataviewValue"
          :layout="layout"
          :paginator="false"
        >
          <!-- <template #header> -->
          <!-- <div class="grid nogutter"> -->
          <!-- <div class="col-6 text-right">
                <DataViewLayoutOptions v-model="layout" />
              </div> -->
          <!-- </div> -->
          <!-- </template> -->

          <template #list="slotProps">
            <div class="col-12">
              <div class="product-list-item">
                <div class="product-list-detail">
                  <div class="text-xl font-bold">
                    {{ slotProps.data.title }}
                  </div>
                  <div class="mb-3 text-l">
                    Duration: {{ slotProps.data.duration }}
                    || View {{ slotProps.data.view }} View
                    <br>
                    <NuxtLink :to="`${slotProps.data.link}`" target="_blank">
                      Visit on Youtube
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template #grid="slotProps">
            <div class="col-12 md:col-4">
              <div class="card m-3 border-1 surface-border">
                <div class="text-center">
                  <!-- <img :src="`/images/product/${slotProps.data.title}`" :alt="slotProps.data.title" class="w-9 shadow-2 my-3 mx-0"> -->
                  <div class="text-xl font-bold">
                    {{ slotProps.data.title }}
                  </div>
                  <div class="mb-3 text-l font-semibold">
                    <br>
                    Duration : {{ slotProps.data.duration }}
                  </div>
                  <span class="text-2xl font-semibold">{{ slotProps.data.view }} View</span>
                  <br>
                  <NuxtLink :to="`${slotProps.data.link}`" target="_blank">
                    Visit on Youtube
                  </NuxtLink>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>
    <!-- video -->

    <div class="col-12 xl:col-6">
      <div class="card">
        <div class="flex justify-content-between align-items-center mb-5">
          <h5>Top 5 Viewer By Province/City, January 2023</h5>
        </div>
        <ul class="list-none p-0 m-0">
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-green-500 font-medium mr-2 mb-1 md:mb-0">DKI Jakarta</span>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
              <span class="text-green-500 ml-3 font-medium">124,342</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-orange-500 font-medium mr-2 mb-1 md:mb-0">Surabaya</span>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
              <span class="text-orange-500 ml-3 font-medium">113,531</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-blue-500 font-medium mr-2 mb-1 md:mb-0">Medan</span>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
              <span class="text-blue-500 ml-3 font-medium">102,396</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-cyan-500 font-medium mr-2 mb-1 md:mb-0">Sumatera Selatan, Palembang</span>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
              <span class="text-cyan-500 ml-3 font-medium">67,244</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-pink-500 font-medium mr-2 mb-1 md:mb-0">Jawa Tengah, Semarang</span>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
              <span class="text-pink-500 ml-3 font-medium">54,917</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
