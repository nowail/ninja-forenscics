# Ninja Forensics Front-End Assessment

This is a Vue.js application that recreates the provided wireframes for the Ninja Forensics front-end assessment with enhanced styling and functionality.

## Features

- **Dashboard Page**: Shows summaries and quick menu with hover-expandable sidebar
- **Add Record Flow**: Multi-step form with 3 steps:
  - Step 1: Basic information (date, name, DOB, etc.) - 3-column layout
  - Step 2: Judicial case references - 3-column layout with enhanced spacing
  - Step 3: Seals and sample entry with file upload area and cross buttons

## Technology Stack

- **Vue.js 3.3.4** - Progressive JavaScript framework
- **Vue Router 4.2.4** - Official router for Vue.js
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Vite 4.4.5** - Fast build tool and dev server
- **PostCSS 8.4.24** - CSS processing tool
- **Autoprefixer 10.4.14** - CSS vendor prefixing

## Project Structure

```
ninja-forensics/
├── src/
│   ├── components/
│   │   ├── icons/          # SVG icon components (Dashboard, Folder, User, etc.)
│   │   ├── Sidebar.vue     # Reusable sidebar component with hover expansion
│   │   ├── AddRecordLayout.vue # Layout for add record pages with progress indicator
│   │   └── Navigation.vue  # Navigation component for testing
│   ├── pages/
│   │   ├── Dashboard.vue   # Dashboard page with summary cards
│   │   ├── AddRecordStep1.vue # Step 1 of add record flow
│   │   ├── AddRecordStep2.vue # Step 2 of add record flow
│   │   └── AddRecordStep3.vue # Step 3 of add record flow
│   ├── router/
│   │   └── index.js        # Vue Router configuration
│   ├── App.vue             # Main app component
│   ├── main.js             # App entry point
│   └── style.css           # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Routing Configuration

The application uses Vue Router with the following routes:

### Route Structure
```javascript
const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/add-record/step1',
    name: 'AddRecordStep1',
    component: AddRecordStep1
  },
  {
    path: '/add-record/step2',
    name: 'AddRecordStep2',
    component: AddRecordStep2
  },
  {
    path: '/add-record/step3',
    name: 'AddRecordStep3',
    component: AddRecordStep3
  }
]
```
### Navigation Flow
- **Dashboard** → Click "Add a new record" → **Step 1**
- **Step 1** → Click "Next" → **Step 2**
- **Step 2** → Click "Previous" → **Step 1** | Click "Next" → **Step 3**
- **Step 3** → Click "Previous" → **Step 2** | Click "Finish" → **Dashboard**

## Dependencies

### Production Dependencies
```json
{
  "vue": "^3.3.4",
  "vue-router": "^4.2.4"
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-vue": "^4.2.3",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24",
  "tailwindcss": "^3.3.2",
  "vite": "^4.4.5"
}
```

### Custom Color Palette
- **nf-green**: `#10B981` - Primary brand color
- **nf-blue**: `#3B82F6` - Secondary brand color
- **nf-dark-blue**: `#1E40AF` - Dark accent color
- **nf-gray**: `#6B7280` - Text and border color
- **nf-light-gray**: `#F3F4F6` - Background color

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ninja-forensics
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:3000
```
## Navigation

The application includes complete navigation functionality:

- **Sidebar Navigation**: Hover to expand, click icons to navigate
- **Step Navigation**: Previous/Next buttons between form steps
- **Progress Indicator**: Shows current step with completed steps highlighted

