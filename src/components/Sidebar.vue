<template>
  <div 
    :class="[
      'bg-white sidebar-shadow transition-all duration-300 ease-in-out h-full',
      isCollapsed ? 'w-16' : 'w-64'
    ]"
  >
    <!-- Logo -->
    <div class="p-8  border-gray-200">
      <div class="flex items-center justify-center">
        <div class="text-4xl font-bold bg-gradient-to-b from-teal-300 to-blue-700 bg-clip-text text-transparent" style="letter-spacing: -0.2em;">
          NF
        </div>
      </div>
    </div>

    <!-- Navigation Items -->
    <nav class="mt-4">
      <div class="px-2">
        <div 
          v-for="item in navItems" 
          :key="item.id"
          @click="navigateTo(item.route)"
          :class="[
            'flex items-center px-3 py-3 mb-1 rounded-lg cursor-pointer transition-colors',
            item.isActive 
              ? 'bg-blue-100 text-nf-dark-blue' 
              : 'text-nf-dark-blue hover:bg-gray-50'
          ]"
        >
          <div class="flex-shrink-0">
            <component :is="item.icon" class="w-5 h-5" />
          </div>
          <span 
            v-if="!isCollapsed" 
            class="ml-3 text-sm font-medium whitespace-nowrap"
          >
            {{ item.label }}
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {
  DashboardIcon,
  FolderIcon,
  UserIcon,
  UsersIcon,
  LockIcon,
  LightbulbIcon,
  InfoIcon
} from './icons'

export default {
  name: 'Sidebar',
  components: {
    DashboardIcon,
    FolderIcon,
    UserIcon,
    UsersIcon,
    LockIcon,
    LightbulbIcon,
    InfoIcon
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      navItems: [
        { id: 1, label: 'Dashboard', icon: 'DashboardIcon', isActive: true, route: '/dashboard' },
        { id: 2, label: 'Records', icon: 'FolderIcon', isActive: false, route: '/add-record/step1' },
        { id: 3, label: 'My Account', icon: 'UserIcon', isActive: false, route: '/dashboard' },
        { id: 4, label: 'Users', icon: 'UsersIcon', isActive: false, route: '/dashboard' },
        { id: 5, label: 'Security', icon: 'LockIcon', isActive: false, route: '/dashboard' },
        { id: 6, label: 'Change Theme', icon: 'LightbulbIcon', isActive: false, route: '/dashboard' },
        { id: 7, label: 'Info', icon: 'InfoIcon', isActive: false, route: '/dashboard' }
      ]
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script> 