# Tripzy Frontend Test

A modern travel booking search interface built with Next.js, featuring location selection, date pickers, and passenger management.

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm, npm, or yarn

### Installation

Install dependencies using your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

### Development

Start the development server:

```bash
# Using pnpm
pnpm dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Build the application for production:

```bash
# Using pnpm
pnpm build

# Using npm
npm run build

# Using yarn
yarn build
```

### Production

Start the production server:

```bash
# Using pnpm
pnpm start

# Using npm
npm start

# Using yarn
yarn start
```

## Architecture

### Framework & Core Technologies

- **Next.js 16** (App Router) - React framework with server-side rendering and routing
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework

### Key Libraries & Decisions

#### UI Components
- **@headlessui/react** - Unstyled, accessible UI components (used for Combobox)
- **dayjs** - Lightweight date manipulation library
- **Custom Components** - Built reusable components for calendar, date inputs, and location selection

#### Styling
- **Tailwind CSS v4** - Modern utility-first CSS with `@theme` configuration
- **Custom CSS Variables** - Centralized color system using HSL values
- **Responsive Design** - Mobile-first approach with flexible layouts

#### State Management
- **React Hooks** - useState, useEffect for local component state
- **URL Search Params** - Next.js router for sharing search state via query parameters

### Key Technical Decisions

1. **Next.js App Router**: Chosen for modern routing, server components, and better performance
2. **TypeScript**: Full type safety for better developer experience and fewer runtime errors
3. **Tailwind CSS v4**: Latest version with improved performance and `@theme` API for design tokens
4. **dayjs**: Chosen over Moment.js due to its lightweight size (2KB vs 67KB), providing robust date manipulation without bloating the bundle.
5. **Headless UI**: Accessible components without opinionated styling
6. **Component-based Architecture**: Reusable, composable components for maintainability
7. **URL-based State**: Search parameters in URL for shareable links and browser history
8. **Client-side Validation**: Real-time form validation with clear error messages
9. **Custom Calendar**: Built double-month calendar component for better UX
10. **Responsive Design**: Mobile-first approach ensuring works on all screen sizes


## Demo

[Vercel Demo Link](https://your-demo-link.vercel.app)

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint

## Development Notes

- The project uses path aliases (`@/*`) for cleaner imports
- Global styles are configured in `app/globals.css` with Tailwind v4 `@theme`
- All number inputs have spinner buttons hidden via global CSS
- Form validation ensures data integrity before navigation
