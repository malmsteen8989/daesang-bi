<script lang="ts" setup>
import ProductService from '~~/services/ProductService';

const productService = new ProductService();

useHead({
  title: 'Performance Highlight'
});

const products = ref([]);
const items = ref([
  { label: 'Add New', icon: 'pi pi-fw pi-plus' },
  { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineSalesRevenue = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Revenue',
      data: [6196, 5831, 5973, 5762, 6893, 6234, 5855],
      fill: false,
      backgroundColor: '#006d77',
      borderColor: '#006d77',
      tension: 0.4
    },
    {
      label: 'Profit',
      data: [6493, 6213, 6145, 6242, 7215, 6610, 6313],
      fill: false,
      backgroundColor: '#ff5400',
      borderColor: '#ff5400',
      tension: 0.4
    }
  ]
});

const lineRevenueCost = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Revenue',
      data: [6196, 5831, 5973, 5762, 6893, 6234, 5855],
      fill: false,
      backgroundColor: '#118ab2',
      borderColor: '#118ab2',
      tension: 0.4
    },
    {
      label: 'Cost',
      data: [5015, 4562, 5216, 4329, 6095, 4234, 3855],
      fill: false,
      backgroundColor: '#ef476f',
      borderColor: '#ef476f',
      tension: 0.4
    }
  ]
});

const chartData = ref({
  labels: ['Distibutor', 'Direct Sales', 'Others'],
  datasets: [
    {
      data: [3531, 1831, 291],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
});
const	lightOptions = ref({
  plugins: {
    legend: {
      labels: {
        color: '#495057'
      }
    }
  }
});

const polarData = ref({
  datasets: [{
    data: [134, 446, 254, 231, 321],
    backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#26C6DA', '#7E57C2'],
    label: 'My dataset'
  }],
  labels: ['Marketing', 'Production', 'General', 'Employee Salary', 'Distribution']
});
const	polarOptions = ref({
  plugins: {
    legend: {
      labels: {
        color: '#495057'
      }
    }
  },
  scales: {
    r: {
      grid: {
        color: '#ebedef'
      }
    }
  }
});

function formatCurrency(value) {
  // @ts-ignore
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

onMounted(() => {
  productService.getProductsSmall().then((data) => {
    products.value = data;
  });
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      date1: null,
      date2: null
    };
  }
};
</script>

<template>
  <div class="card" style="background-color: #f7ede2; padding: 1.2rem;">
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
              <span class="block text-500 font-medium mb-3">Revenue</span>
              <div class="text-900 font-medium text-xl">
                IDR 5.653 Billion
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center bg-blue-100 border-round"
              style="width:2.5rem;height:2.5rem"
            >
              <i class="pi pi-shopping-cart text-blue-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">%3,5+</span>
          <span class="text-500"> vs previous month</span>
        </div>
      </div>

      <div class="col-12 lg:col-6 xl:col-3">
        <div class="card mb-0">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Profit</span>
              <div class="text-900 font-medium text-xl">
                IDR 3.653 Billion
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center bg-blue-100 border-round"
              style="width:2.5rem;height:2.5rem"
            >
              <i class="pi pi-shopping-cart text-blue-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">%3,7+</span>
          <span class="text-500"> vs previous month</span>
        </div>
      </div>
      <div class="col-12 lg:col-6 xl:col-3">
        <div class="card mb-0">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Cost</span>
              <div class="text-900 font-medium text-xl">
                IDR 1.454 Billion
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center bg-orange-100 border-round"
              style="width:2.5rem;height:2.5rem"
            >
              <i class="pi pi-map-marker text-orange-500 text-xl" />
            </div>
          </div>
          <span class="text-green-500 font-medium">%2,1- </span>
          <span class="text-500"> vs last month</span>
        </div>
      </div>
      <div class="col-12 lg:col-6 xl:col-3">
        <div class="card mb-0">
          <div class="flex justify-content-between mb-3">
            <div>
              <span class="block text-500 font-medium mb-3">Cash Flow</span>
              <div class="text--900 font-medium text-xl">
                IDR 7.65 B <span class="text-green-500 font-medium">(Cash In) </span>
              </div>
              <div class="text--900 font-medium text-xl">
                IDR 1.54 B <span class="text-orange-500 font-medium">(Cash Out) </span>
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center bg-cyan-100 border-round"
              style="width:2.5rem;height:2.5rem"
            >
              <i class="pi pi-wallet text-cyan-500 text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 xl:col-6">
        <div class="card">
          <h5>Revenue per Customer Segment (in Million)</h5>
          <Chart type="doughnut" :data="chartData" :options="lightOptions" />
        </div>
      </div>

      <div class="col-12 xl:col-6">
        <div class="card">
          <h5>Cost Grouping (in Million)</h5>
          <Chart type="polarArea" :data="polarData" :options="polarOptions" />
        </div>
      </div>
    </div>
  </div>
  <div class="card" style="background-color: #fcd5ce; padding: 1.2rem;">
    <div class="grid">
      <div class="col-12">
        <!-- Range onth Picker -->
        <span class="text-500 font-medium mb-3 mr-5">Select Period</span>
        <Calendar v-model="date2" selection-mode="range" view="month" date-format="yy-MM" />
        <Button class="button-small" label="Filter" icon="pi pi-search" :loading="isLoading" />
      </div>
      <div class="col-12 xl:col-6">
        <div class="card">
          <h5>Revenue vs Profit (in Million)</h5>
          <Chart type="line" :data="lineSalesRevenue" />
        </div>
      </div>
      <div class="col-12 xl:col-6">
        <div class="card">
          <h5>Revenue vs Cost (in Million)</h5>
          <Chart type="line" :data="lineRevenueCost" />
        </div>
      </div>

      
    </div>
  </div>
</template>
