# Farm to Table Marketplace

A modern React application showcasing a farm-to-table marketplace that connects local farms with consumers.

## Features

- **Component Architecture**: Modular, reusable React components
- **State Management**: Context API for global cart state with hooks
- **React Router**: Multi-page navigation with dynamic routing
- **API Integration**: Mock API service simulating backend calls
- **Responsive Design**: Mobile-friendly interface

## Key Technologies

- React 18
- React Router DOM
- Context API
- React Hooks (useState, useEffect, useContext)
- Vite (Build tool)

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── FarmCard.jsx
│   └── FilterBar.jsx
├── pages/           # Page components with routing
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Farms.jsx
│   ├── FarmDetails.jsx
│   └── Cart.jsx
├── context/         # Global state management
│   └── CartContext.jsx
├── services/        # API integration
│   └── api.js
└── App.jsx          # Main app with routing
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Features Demonstrated

### Components
- Navbar with cart badge
- Product and Farm cards
- Filter bar with category filtering
- Responsive grid layouts

### State & Props
- Props drilling from parent to child components
- Controlled components with local state
- Complex state updates in cart management

### Hooks
- `useState` - Local component state
- `useEffect` - Data fetching and side effects
- `useContext` - Global cart state access
- Custom hook `useCart()` for cart operations

### Routing
- Client-side routing with React Router
- Dynamic routes with parameters
- Nested routes and navigation
- Link components for navigation

### API Usage
- Mock API service with async operations
- Data fetching with loading states
- Product filtering and searching
- LocalStorage persistence

## Key Learning Points

1. **Component Composition**: Breaking UI into reusable pieces
2. **State Management**: Managing both local and global state
3. **Side Effects**: Handling async operations and lifecycle
4. **Routing**: Creating a multi-page SPA experience
5. **Context API**: Sharing state across components
6. **Props Pattern**: Passing data and callbacks between components
