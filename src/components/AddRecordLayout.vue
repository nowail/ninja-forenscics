<template>
  <div class="flex h-screen bg-white">
    <!-- Sidebar -->
    <div 
      class="relative"
      @mouseenter="isSidebarHovered = true"
      @mouseleave="isSidebarHovered = false"
    >
      <Sidebar :isCollapsed="!isSidebarHovered" />
    </div>
    
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-white px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <PlusIcon class="w-6 h-6 text-nf-green mr-2" />
            <h1 class="text-3xl font-bold text-nf-dark-blue">Add Record</h1>
          </div>
          <div class="flex items-center space-x-2">
            <button class="p-2 rounded-lg hover:bg-gray-100">
              <!-- Menu icon with dots and lines -->
              <div class="flex items-center space-x-1">
                <div class="flex flex-col space-y-1">
                  <div class="w-0.2 h-1.5 bg-nf-dark-blue rounded-full"></div>
                  <div class="w-1.5 h-1.5 bg-nf-dark-blue rounded-full"></div>
                  <div class="w-1.5 h-1.5 bg-nf-dark-blue rounded-full"></div>
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="w-[1.75rem] h-[0.45rem] bg-nf-dark-blue rounded mt-0.5"></div>
                  <div class="w-[1.75rem] h-[0.45rem] bg-nf-dark-blue rounded mt-0.5"></div>
                  <div class="w-[1.75rem] h-[0.45rem] bg-nf-dark-blue rounded mt-0.5"></div>
                </div>
              </div>
            </button>
            <button class="p-2 rounded-lg hover:bg-gray-100">
              <!-- Close icon with red circle and white X -->
              <div class="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 p-6 overflow-auto">
        <!-- Progress Indicator -->
        <div class="flex justify-center mb-12">
          <div class="flex items-center space-x-4">
            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="flex items-center"
            >
              <div 
                :class="[
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
                  step.isActive 
                    ? 'bg-gray-200 text-nf-blue' 
                    : step.isCompleted
                    ? 'bg-nf-blue text-white'
                    : 'bg-gray-200'
                ]"
              >
                <span v-if="step.isActive || step.isCompleted">{{ step.number }}</span>
              </div>
              <div 
                v-if="index < steps.length - 1"
                :class="[
                  'w-12 h-0.5 ml-2',
                  step.isCompleted ? 'bg-nf-blue' : 'bg-gray-200'
                ]"
              ></div>
            </div>
          </div>
        </div>

        <!-- Step Content -->
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import { PlusIcon, MenuIcon, CloseIcon } from './icons'

export default {
  name: 'AddRecordLayout',
  components: {
    Sidebar,
    PlusIcon,
    MenuIcon,
    CloseIcon
  },
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isSidebarHovered: false
    }
  },
  computed: {
    steps() {
      return [
        { number: 1, isActive: this.currentStep === 1, isCompleted: this.currentStep > 1 },
        { number: 2, isActive: this.currentStep === 2, isCompleted: this.currentStep > 2 },
        { number: 3, isActive: this.currentStep === 3, isCompleted: this.currentStep > 3 }
      ]
    }
  }
}
</script> 