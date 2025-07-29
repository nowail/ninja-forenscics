<template>
  <AddRecordLayout :currentStep="3">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Seals Section -->
      <div class="bg-white border border-gray-200 rounded-lg p-6 card-shadow">
        <div class="flex border-b border-gray-200 mb-6">
          <button class="px-4 py-2 bg-nf-blue text-white rounded-t-lg">Seal 1</button>
          <button class="px-4 py-2 text-gray-600 hover:text-nf-blue">+ Add Seal</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block text-sm font-medium text-gray-500 mb-2">
              Reception Date
            </label>
            <input 
              type="text" 
              placeholder="DD/MM/YYYY"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent text-gray-500"
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-500 mb-2">
              Seal State
            </label>
            <div class="relative">
              <input 
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 text-gray-500"
              >
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Images Section -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-4">Images</label>
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="mt-2 text-sm text-gray-600">Drag files here to upload.</p>
          </div>
          
          <div class="text-center mt-4">
            <span class="text-sm text-gray-500">Or</span>
          </div>
          
          <div class="text-center mt-2">
            <button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Select Files
            </button>
          </div>
          
          <!-- File List -->
          <div class="mt-4 space-y-2">
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="text-sm font-medium text-gray-900">van 2 rr.xls</p>
                  <p class="text-xs text-gray-500">121.00 KB</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="p-1 hover:bg-gray-200 rounded">
                  <EyeIcon class="w-4 h-4 text-gray-600" />
                </button>
                <button class="p-1 hover:bg-gray-200 rounded">
                  <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p class="text-sm font-medium text-gray-900">van 2 rr.xls</p>
                  <p class="text-xs text-gray-500">121.00 KB</p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="p-1 hover:bg-gray-200 rounded">
                  <EyeIcon class="w-4 h-4 text-gray-600" />
                </button>
                <button class="p-1 hover:bg-gray-200 rounded">
                  <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Sample Section -->
      <div class="bg-white border border-gray-200 rounded-lg p-6 card-shadow">
        <h3 class="text-lg font-semibold text-black mb-6">Sample 1-A</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block text-sm font-medium text-gray-500 mb-2">
              Sample Date
            </label>
            <input 
              type="text" 
              placeholder="DD/MM/YYYY"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent text-gray-500"
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-500 mb-2">
              Sample Time
            </label>
            <div class="relative">
              <input 
                type="text" 
                value="15:00:00"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 text-gray-500"
              >
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-500 mb-2">
            Sample Description
          </label>
          <textarea 
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent text-gray-500"
          ></textarea>
        </div>
        
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-500 mb-2">
            Analyses <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input 
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nf-blue focus:border-transparent pr-10 text-gray-500"
            >
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg class="w-4 h-4 text-nf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <button class="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            + Add Sample
          </button>
        </div>
      </div>
      
      <!-- Navigation Buttons -->
      <div class="flex justify-end space-x-4">
        <button 
          type="button"
          @click="goToPreviousStep"
          class="bg-nf-green text-white px-6 py-2 rounded-lg button-shadow hover:bg-green-600 transition-colors"
        >
          Previous
        </button>
        <button 
          type="button"
          @click="finishProcess"
          class="bg-nf-blue text-white px-6 py-2 rounded-lg button-shadow hover:bg-nf-dark-blue transition-colors"
        >
          Finish
        </button>
      </div>
    </div>
  </AddRecordLayout>
</template>

<script>
import AddRecordLayout from '../components/AddRecordLayout.vue'
import { EyeIcon, TrashIcon } from '../components/icons'

export default {
  name: 'AddRecordStep3',
  components: {
    AddRecordLayout,
    EyeIcon,
    TrashIcon
  },
  methods: {
    goToPreviousStep() {
      this.$router.push('/add-record/step2')
    },
    finishProcess() {
      this.$router.push('/dashboard')
    }
  }
}
</script> 