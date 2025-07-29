<template>
  <div class="fixed top-4 right-4 z-50">
    <div class="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
      <h3 class="text-sm font-medium text-gray-700 mb-3">Navigation</h3>
      <div class="space-y-2">
        <button 
          @click="$router.push('/dashboard')"
          class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
        >
          Dashboard
        </button>
        <button 
          @click="$router.push('/add-record/step1')"
          class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
        >
          Add Record - Step 1
        </button>
        <button 
          @click="$router.push('/add-record/step2')"
          class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
        >
          Add Record - Step 2
        </button>
        <button 
          @click="$router.push('/add-record/step3')"
          class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
        >
          Add Record - Step 3
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script> 