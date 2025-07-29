<template>
  <AddRecordLayout :currentStep="1">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold text-black text-center mb-16">Create New Record</h2>
      
      <form class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Column 1 -->
          <div class="space-y-6 mr-4 ">
            <div class="mb-[45px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Date received <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="DD/MM/YYYY"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-500"
              >
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Customer title <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-700"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="mb-[45px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Date of birth
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-700"
              >
            </div>
          </div>
          
          <!-- Column 2 -->
          <div class="space-y-6">
            <div class="mb-[45px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Time received <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                value="15:00:00"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-700"
              >
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Customer name
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-700"
              >
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Sex
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-700"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Column 3 -->
          <div class="space-y-6">
            <div></div> <!-- Empty first -->
            
            <div>
                <label class="block text-sm font-medium mt-[7.25rem] text-gray-500 mb-2">
               First Name
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-700"
                >
              </div>
            </div>
            
            <div></div> <!-- Empty second -->
          </div>
        </div>
        
        <!-- Navigation Button -->
        <div class="flex justify-end pt-6">
          <button 
            type="button"
            @click="goToNextStep"
            class="bg-nf-dark-blue text-white px-12 py-1 rounded-lg button-shadow hover:bg-nf-dark-blue transition-colors"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  </AddRecordLayout>
</template>

<script>
import AddRecordLayout from '../components/AddRecordLayout.vue'

export default {
  name: 'AddRecordStep1',
  components: {
    AddRecordLayout
  },
  methods: {
    goToNextStep() {
      this.$router.push('/add-record/step2')
    }
  }
}
</script> 