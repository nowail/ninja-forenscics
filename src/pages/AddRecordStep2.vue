<template>
  <AddRecordLayout :currentStep="2">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-black text-center mb-8">Judicial Case References</h2>
      
      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[5rem]">
          <!-- Column 1 -->
          <div class="space-y-4">
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Name OPJ
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-500"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                PV Number
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-500"
              >
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Magistrate Name
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-500"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Instruction number
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-500"
              >
            </div>
          </div>
          
          <!-- Column 2 -->
          <div class="space-y-4">
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Service Police
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-500"
              >
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Nationality
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 shadow-[3px_3px_8px_rgba(0,0,0,0.15)] text-gray-500"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Magistrate Grade
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 shadow-[3px_3px_8px_rgba(0,0,0,0.15)]"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Justice identifier
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)]"
              >
            </div>
          </div>
          
          <!-- Column 3 -->
          <div class="space-y-4">
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                OPJ Grade
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)]"
              >
            </div>
            
            <div class="pb-[25px]">
              <label class="block text-sm font-medium text-gray-500 mb-2">
                TGI of
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 shadow-[3px_3px_8px_rgba(0,0,0,0.15)]"
                >
                <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div class="pb-[25px]" >
              <label class="block text-sm font-medium text-gray-500 mb-2">
                Prosecutor's office number
              </label>
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent shadow-[3px_3px_8px_rgba(0,0,0,0.15)]"
              >
            </div>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <div class="flex justify-end space-x-4 pt-6">
          <button 
            type="button"
            @click="goToPreviousStep"
            class="bg-nf-green text-white px-6 py-2 rounded-lg button-shadow hover:bg-green-600 transition-colors"
          >
            Previous
          </button>
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
  name: 'AddRecordStep2',
  components: {
    AddRecordLayout
  },
  methods: {
    goToPreviousStep() {
      this.$router.push('/add-record/step1')
    },
    goToNextStep() {
      this.$router.push('/add-record/step3')
    }
  }
}
</script> 