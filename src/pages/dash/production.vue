<script lang="ts" setup>
useHead({
  title: 'Production'
});

const products = ref([]);
const items = ref([
  { label: 'Add New', icon: 'pi pi-fw pi-plus' },
  { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);

const lineSalesRevenue = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'MSG Export Bulk',
      data: [321, 335, 314, 295, 279, 321, 339, 314, 295, 279, 331, 298],
      fill: false,
      backgroundColor: '#118ab2',
      borderColor: '#118ab2',
      tension: 0.4
    },
    {
      label: 'Corn Starch-Domestic',
      data: [221, 265, 214, 244, 231, 229, 234, 257, 244, 249, 236, 218],
      fill: false,
      backgroundColor: '#ef476f',
      borderColor: '#ef476f',
      tension: 0.4
    },
    {
      label: 'Dextrose - Domestic',
      data: [184, 191, 178, 189, 204, 185, 195, 201, 180, 186, 195, 193],
      fill: false,
      backgroundColor: '#ef476f',
      borderColor: '#ef476f',
      tension: 0.4
    }

  ]
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      date1: null,
      date2: null,
      selectedFG: null,
      isLoading: false,
      finishGood: [
        { material: 'MSG Export Bulk', value: 'MSG Export Bulk' },
        { material: 'Corn Starch-Domestic', value: 'Corn Starch-Domestic' },
        { material: 'MSG CP-Super', value: 'MSG CP-Super' },
        { material: 'Dextrose - Domestic', value: 'Dextrose - Domestic' },
        { material: 'Fructodse - Domestic', value: 'Fructodse - Domestic' }
      ]
    };
  }
};
</script>

<template>
  <div class="card" style="background-color: #caf0f8; padding: 1.2rem;">
    <div class="col-12">
      <!-- Month Picker -->
      <span class="text-500 font-medium mb-3 mr-5">Select Month</span>
      <Calendar v-model="date1" selection-mode="single" view="month" date-format="yy-MM" />      
      <Button class="button-small" label="Filter" icon="pi pi-search" :loading="isLoading" />
    </div>
    <div class="grid">
      <div class="col-12 lg:col-6 xl:col-3">
        <div class="card mb-0">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Production</span>
              <div class="text--900 font-medium text-xl">
                55,553 Ton
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center bg-cyan-100 border-round"
              style="width:2.5rem;height:2.5rem"
            >
              <i class="pi pi-chart-line text-cyan-500 text-xl" />
            </div>
          </div>
          <span class="text-orange-500 font-medium">%1,4- </span>
          <span class="text-500"> from last month</span>
        </div>
      </div>
      <div class="col-12 lg:col-6 xl:col-3">
        <div class="card mb-0">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Import</span>
              <div class="text-900 font-medium text-l">
                29,394 Ton Yellow Maize
              </div>
              <div class="text-900 font-medium text-l">
                6,394 Ton Raw Sugar
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center bg-blue-100 border-round"
              style="width:2.5rem;height:2.5rem"
            >
              <i class="pi pi-backward text-blue-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">%1,5+</span>
          <span class="text-500"> from previous month</span>
        </div>
      </div>

      <div class="col-12 lg:col-6 xl:col-3">
        <div class="card mb-0">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Export</span>
              <div class="text-900 font-medium text-xl">
                33,394 Ton
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center bg-blue-100 border-round"
              style="width:2.5rem;height:2.5rem"
            >
              <i class="pi pi-forward text-blue-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">%6,2+</span>
          <span class="text-500"> from previous month</span>
        </div>
      </div>
      <div class="col-12 lg:col-6 xl:col-3">
        <div class="card mb-0">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Domestic</span>
              <div class="text-900 font-medium text-xl">
                22,139 Ton
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center bg-orange-100 border-round"
              style="width:2.5rem;height:2.5rem"
            >
              <i class="pi pi-chevron-right text-orange-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">%2,1+ </span>
          <span class="text-500"> from last month</span>
        </div>
      </div>
    </div>
  </div>
  <div class="card" style="background-color: #ffc8dd; padding: 1.2rem;">
    <div class="grid">
      <div class="col-12">
        <!-- Range onth Picker -->

        <span class="text-500 font-medium mb-3 mr-5">Select Period</span>
        <Calendar v-model="date2" selection-mode="range" view="month" date-format="yy-MM" />
        <span class="text-500 font-medium mb-3 ml-5 mr-5">Select Product</span>
        <MultiSelect v-model="selectedFG" :options="finishGood" option-label="material" placeholder="Select Product" />

        <Button class="ml-2" label="Filter" icon="pi pi-search" :loading="isLoading" />
      </div>
      <div class="col-12 xl:col-6 ">
        <div class="card">
          <h5>Production Trend (in Ton)</h5>
          <Chart type="line" :data="lineSalesRevenue" />
        </div>
      </div>
    </div>
  </div>
</template>
