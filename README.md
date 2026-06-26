# 996 Market Frontend

## Overview
The 996 Market Frontend is the customer-facing user interface for the e-commerce platform. It provides a robust, modern, and highly-performant browsing experience featuring a componentized React architecture, a flat design system, and responsive mobile-first layouts.

## Technology Stack
*   **Framework**: Next.js (App Router)
*   **UI Library**: React
*   **Styling**: Tailwind CSS
*   **Icons**: Lucide React
*   **State Management**: Zustand
*   **Language**: TypeScript

## Project Structure
The application follows standard Next.js App Router conventions combined with a modular component architecture:
*   `/src/app`: Contains the routing structure (`page.tsx`, `layout.tsx`) leveraging React Server Components for optimal performance.
*   `/src/components/layout`: Global layout pieces like the Header, Footer, and responsive Sidebar.
*   `/src/components/home`: Modular sections for the Home page, including `HeroBanner`, `CategoryGrid`, and `ProductGrid`.
*   `/src/components/product`: Highly reusable product components like `ProductCard`.
*   `/src/store`: Zustand stores for client-side state management (e.g., Sidebar visibility).
*   `/src/lib/api.ts`: Centralized utility for communicating with the NestJS backend API.

## Getting Started

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm
*   The 996 Market Backend must be running concurrently (typically on port 3000) for data fetching to succeed.

### Installation
1. Navigate to the frontend directory.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Running the Application
The frontend development server runs on port 3001 to avoid conflicts with the backend.

*   **Development mode** (with hot-reload):
    ```bash
    npm run dev
    ```
    Open `http://localhost:3001` in your browser.

*   **Production build**:
    ```bash
    npm run build
    npm start
    ```

*   **Testing**:
    The project is set up with Jest and React Testing Library.
    ```bash
    npm test
    ```

## Architecture Highlights
*   **Server Components**: The root `layout.tsx` and `page.tsx` heavily utilize Next.js Server Components. They securely fetch categories and products from the backend API on the server before streaming the HTML to the client, ensuring fast initial page loads and excellent SEO.
*   **Client Components**: Interactive elements, such as the `Header` and `Sidebar`, use `"use client"` and integrate with `Zustand` for snappy, local state management without requiring full page reloads.
*   **Design System**: The application uses a custom Tailwind CSS configuration to enforce a modern "flat design" aesthetic with sharp edges, solid borders, and clear brand colors.
