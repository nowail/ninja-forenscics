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
    <div class="flex-1 mt-6 flex flex-col">
      <!-- Header -->
      <header class="bg-white  border-gray-200 px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex items-center">
              <DashboardIcon class="w-7 h-7 text-nf-blue mr-3" />
              <h1 class="text-3xl font-bold text-nf-dark-blue">Dashboard</h1>
            </div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 p-6 overflow-auto">
        <!-- Summaries Section -->
        <section class="mb-8">
          <h2 class="text-2xl font-bold text-black mb-6">Summaries</h2>
          <div class="grid grid-cols-3 gap-4 max-w-4xl">
            <!-- First Row - 3 cards -->
            <div class="bg-white border-[1px] border-solid border-gray-500 rounded-lg p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-center">
              <h3 class="text-sm font-semibold text-gray-500">Total Records</h3>
            </div>
            <div class="bg-white border-[1px] border-solid border-gray-500 rounded-lg p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-center">
              <h3 class="text-sm font-semibold text-gray-500">Records Pending</h3>
            </div>
            <div class="bg-white border-[1px] border-solid border-gray-500 rounded-lg p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-center">
              <h3 class="text-sm font-semibold text-gray-500">Processes Pending</h3>
            </div>
            <!-- Second Row - 2 cards -->
            <div class="bg-white border-[1px] border-solid border-gray-500 rounded-lg p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-center">
              <h3 class="text-sm font-semibold text-gray-500">Submitted Today</h3>
            </div>
            <div class="bg-white border-[1px] border-solid border-gray-500 rounded-lg p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-center">
              <h3 class="text-sm font-semibold text-gray-500">Submitted this Month</h3>
            </div>
          </div>
        </section>

        <!-- Quick Menu Section -->
        <section>
          <h2 class="text-2xl font-bold text-black mb-6">Quick Menu</h2>
          <div class="grid grid-cols-3 gap-4 max-w-4xl">
            <div class="bg-white border-[1px] border-solid border-gray-500 rounded-lg p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-center">
              <h3 class="text-sm font-semibold text-gray-500">Add a new record</h3>
            </div>
            <div class="bg-white border-[1px] border-solid border-gray-500 rounded-lg p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-center">
              <h3 class="text-sm font-semibold text-gray-500">View past records</h3>
            </div>
            <div class="bg-white border-[1px] border-solid border-gray-500 rounded-lg p-4 shadow-[4px_4px_8px_rgba(0,0,0,0.3)] text-center">
              <h3 class="text-sm font-semibold text-gray-500">Process new records</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import { DashboardIcon } from '../components/icons'

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    DashboardIcon
  },
  data() {
    return {
      isSidebarHovered: false
    }
  }
}
</script> 