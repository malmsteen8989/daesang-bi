<script lang="ts" setup>
useHead({
  title: 'Human Capital'
});
const x = null;
</script>

<script lang="ts">
export default {
  data() {
    return {
      empData: {
        labels: ['SLTA/SMU/SMK', 'Diploma 3 (D3)', 'Sarjana (S1)', 'Master (S2)'],
        datasets: [
          {
            label: 'Total',
            backgroundColor: '#f28482',
            data: [100, 200, 630, 70]
          }
        ]
      },
      empOptions: {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          }
        }
      },
      ageData: {
        labels: ['<26', '26-30', '31-40', '41-45', '46-50', '51-55'],
        datasets: [
          {
            label: 'Total',
            backgroundColor: '#ffafcc',
            data: [140, 160, 330, 170, 180, 20]
          }
        ]
      },
      ageOption: {
        indexAxis: 'y',
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          }
        }
      },
      turnData: {
        labels: ['2018', '2019', '2020', '2021', '2022'],
        datasets: [
          {
            label: 'Hiring',
            backgroundColor: '#457b9d',
            data: [5, 6, 2, 12, 5]
          },
          {
            label: 'Resign',
            backgroundColor: '#e63946',
            data: [4, 3, 5, 2, 1]
          }
        ]
      },
      turnOption: {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          }
        }
      }

    };
  }
};
</script>

<template>
  <div class="grid">
    <div class="card" style="background-color: cornsilk">
      <div class="flex justify-content-between align-items-center mb-5">
        <h5>Best Employee in History</h5>
      </div>
      <ul class="list-none p-0 m-0">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div>
            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Wahyuddin</span>
            <div class="mt-1 text-600">
              2023
            </div>
          </div>
          <div class="mt-2 md:mt-0 flex align-items-center">
            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
              <div class="bg-orange-500 h-full" style="width:90%" />
            </div>
            <span class="text-orange-500 ml-3 font-medium">145 pts</span>
          </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div>
            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">James White</span>
            <div class="mt-1 text-600">
              2022
            </div>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
              <div class="bg-cyan-500 h-full" style="width:85%" />
            </div>
            <span class="text-cyan-500 ml-3 font-medium">135 pts</span>
          </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div>
            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Putri Indah Ariesta</span>
            <div class="mt-1 text-600">
              2021
            </div>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
              <div class="bg-pink-500 h-full" style="width:100%" />
            </div>
            <span class="text-pink-500 ml-3 font-medium">150 pts</span>
          </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div>
            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Intan Simanjuntak</span>
            <div class="mt-1 text-600">
              2020
            </div>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
              <div class="bg-green-500 h-full" style="width:95%" />
            </div>
            <span class="text-green-500 ml-3 font-medium">145 pts</span>
          </div>
        </li>
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div>
            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Anton Purboyo</span>
            <div class="mt-1 text-600">
              2019
            </div>
          </div>
          <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px">
              <div class="bg-purple-500 h-full" style="width:90%" />
            </div>
            <span class="text-purple-500 ml-3 font-medium">140 pts</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-12 xl:col-7">
      <div class="card" style="background-color: #f1faee">
        <h5>Employee Turn Over</h5>
        <Chart type="bar" :data="turnData" :options="turnOption" />
      </div>
    </div>

    <div class="col-12 xl:col-6">
      <div class="card" style="background-color: #f7ede2">
        <h5>Employee Education</h5>
        <Chart type="bar" :data="empData" :options="empOptions" />
      </div>
    </div>
    <div class="col-12 xl:col-6">
      <div class="card" style="background-color: #e9ecef">
        <h5>Employee Age</h5>
        <Chart type="bar" :data="ageData" :options="ageOption" />
      </div>
    </div>
  </div>
</template>
