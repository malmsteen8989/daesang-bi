<script lang="ts" setup>
import ProductService from '~~/services/ProductService';

const productService = new ProductService();

useHead({
  title: 'Sales Overview'
});

const products = ref([]);
const items = ref([
  { label: 'Add New', icon: 'pi pi-fw pi-plus' },
  { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Revenue',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: '#2f4860',
      borderColor: '#2f4860',
      tension: 0.4
    },
    {
      label: 'Sales',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: '#00bb7e',
      borderColor: '#00bb7e',
      tension: 0.4
    }
  ]
});

function formatCurrency(value) {
  // @ts-ignore
  return value.toLocaleString('en-US', { style: 'currency', currency: 'IDR' });
}

onMounted(() => {
  productService.getProductsSmall().then((data) => {
    products.value = data;
  });
});
</script>

<template>
  <div><h5><b>Sales Overview, 2023 December</b></h5></div>
  <div class="grid">
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Orders</span>
            <div class="text-900 font-medium text-xl">
              324.542
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-shopping-cart text-blue-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">320.100 Good Issue </span>
        <span class="text-500">4442 Pending</span>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Gross Income</span>
            <div class="text-900 font-medium text-xl">
              1,285 Billion
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-map-marker text-orange-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">846,5 Million </span>
        <span class="text-500">Revenue</span>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Customers</span>
            <div class="text-900 font-medium text-xl">
              8331
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-inbox text-cyan-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">238  </span>
        <span class="text-500">newly registered</span>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Products</span>
            <div class="text-900 font-medium text-xl">
              3304
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-comment text-purple-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">2858 </span>
        <span class="text-500">active selling</span>
      </div>
    </div>

    <div class="col-12 xl:col-6">
      <div class="card">
        <h5>Top 5 Product</h5>
        <DataTable :value="products" :rows="5" :paginator="true" responsive-layout="scroll">
          <Column style="width:15%">
            <template #header>
              Image
            </template>
            <template #body="slotProps">
              <img :src="`/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" width="50" class="shadow-2">
            </template>
          </Column>
          <Column field="name" header="Name" :sortable="true" style="width:35%" />
          <Column field="price" header="Price" :sortable="true" style="width:35%">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column field="quantity" header="Transaction" :sortable="true" style="width:35%" />
          <!-- <Column style="width:15%">
            <template #header>
              Transaction
            </template>
            <template #body>
              <Button icon="pi pi-search" type="button" class="p-button-text" />
            </template>
          </Column> -->
        </DataTable>
      </div>
      <div class="card">
        <div class="flex justify-content-between align-items-center mb-5">
          <h5>Area Target Fulfillment (MTD)</h5>
          <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu2.toggle($event)" />
            <ClientOnly>
              <Menu ref="menu2" :popup="true" :model="items" />
            </ClientOnly>
          </div>
        </div>
        <ul class="list-none p-0 m-0">
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Area I (Jabodetabek)</span>
              <div class="mt-1 text-600">
                542,1 Million
              </div>
            </div>
            <div class="mt-2 md:mt-0 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-orange-500 h-full" style="width:95%" />
              </div>
              <span class="text-orange-500 ml-3 font-medium">%95</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Area II (Jawa Tengah dan Jawa Timur)</span>
              <div class="mt-1 text-600">
                480,1 Million
              </div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-cyan-500 h-full" style="width:86%" />
              </div>
              <span class="text-cyan-500 ml-3 font-medium">%86</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Area III (Bali dan Nusa Tenggara)</span>
              <div class="mt-1 text-600">
                240,41 Million
              </div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-pink-500 h-full" style="width:90%" />
              </div>
              <span class="text-pink-500 ml-3 font-medium">%90</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Area IV (Sulawesi dan Papua)</span>
              <div class="mt-1 text-600">
                234,18 Million
              </div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-green-500 h-full" style="width:75%" />
              </div>
              <span class="text-green-500 ml-3 font-medium">%75</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Area V (Kalimantan)</span>
              <div class="mt-1 text-600">
                348,78 Million
              </div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-purple-500 h-full" style="width:89%" />
              </div>
              <span class="text-purple-500 ml-3 font-medium">%89</span>
            </div>
          </li>
          <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
            <div>
              <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Area VI (Sumatera)</span>
              <div class="mt-1 text-600">
                672,649 Million
              </div>
            </div>
            <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
              <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
                <div class="bg-teal-500 h-full" style="width:93%" />
              </div>
              <span class="text-teal-500 ml-3 font-medium">%93</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card">
        <h5>Sales Overview</h5>
        <Chart type="line" :data="lineData" />
      </div>
      <div class="card">
        <div class="flex align-items-center justify-content-between mb-4">
          <h5>Top 5 Distributor</h5>
          <div>
            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu1.toggle($event)" />
            <ClientOnly>
              <Menu ref="menu1" :popup="true" :model="items" />
            </ClientOnly>
          </div>
        </div>

        <ul class="p-0 mx-0 mt-0 mb-4 list-none">
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">1</div>
            <span class="text-900 line-height-3">PT. INDOMARCO PRISMATAMA
            </span>
          </li>
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">2</div>
            <span class="text-900 line-height-3">PT. SUMBER ALFARIA TRIJAYA
            </span>
          </li>
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">3</div>
            <span class="text-900 line-height-3">PT. BINTANG MAS ANUGRAH MAKMUR
            </span>
          </li>
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-yellow-100 border-circle mr-3 flex-shrink-0">4</div>
            <span class="text-900 line-height-3">PT. LOTTE SHOPPING IND
            </span>
          </li>
          <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-green-400 border-circle mr-3 flex-shrink-0">5</div>
            <span class="text-900 line-height-3">PT. ANUGERAH BINA USAHA
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
