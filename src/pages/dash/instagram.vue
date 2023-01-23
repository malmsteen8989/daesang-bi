<script lang="ts" setup>
useHead({
  title: 'Instagram'
});
</script>

<template>
  <div><h5><b>MamaSuka Indonesia Instagram</b></h5></div>
  <div class="grid">
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Followers</span>
            <div class="text-900 font-medium text-xl">
              214,542
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-user text-blue-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">468+ </span>
        <span class="text-500">New Follower since last month</span>
      </div>
    </div>
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Total Post</span>
            <div class="text-900 font-medium text-xl">
              2008
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-send text-orange-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">13+ </span>
        <span class="text-500">New Post since last month</span>
      </div>
    </div>
  </div>
</template>
