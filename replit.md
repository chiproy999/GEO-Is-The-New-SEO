# Overview

This is a React-based web application for a Generative Engine Optimization (GEO) and Google Maps ranking guide. The application provides comprehensive educational content about optimizing for AI search platforms like ChatGPT, Claude, Gemini, and Perplexity, along with Google Maps local SEO strategies. It features an interactive checklist system that allows users to track their optimization progress across different categories.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Styling**: Tailwind CSS with a custom design system using shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **UI Components**: Comprehensive component library built on Radix UI primitives with custom styling

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Design**: RESTful API endpoints for checklist progress management
- **Data Layer**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement with Vite integration for development workflow

## Database Schema
The application defines a PostgreSQL schema using Drizzle ORM with the following entities:
- **Users**: Basic user management with username and password
- **Checklist Progress**: Tracks completion status of optimization tasks across categories (geo, maps, technical)
- **Schema Structure**: Uses UUID primary keys and proper foreign key relationships

## Content Management
- **Static Content**: Educational content is component-based, allowing for easy updates and maintenance
- **Interactive Elements**: Checklist items are data-driven from a centralized configuration file
- **Progress Tracking**: Real-time progress calculation across multiple optimization categories

## Performance Optimizations
- **Code Splitting**: Vite handles automatic code splitting and lazy loading
- **Caching Strategy**: TanStack Query provides intelligent caching of API responses
- **Development Tools**: Runtime error overlays and development banners for enhanced developer experience

# External Dependencies

## Core Infrastructure
- **Database**: PostgreSQL with Neon serverless hosting for production deployments
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Session Management**: PostgreSQL session store for user authentication

## UI/UX Libraries
- **Component System**: Radix UI for accessible, unstyled component primitives
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography

## Development Tools
- **Build System**: Vite for fast development and optimized production builds
- **Type Checking**: TypeScript for compile-time type safety
- **Code Quality**: ESLint and Prettier configurations for consistent code formatting
- **Replit Integration**: Custom plugins for Replit-specific development features

## Third-party Services
- **Validation Tools**: Integration points for Google Rich Results Test and Schema.org validators
- **Analytics**: Prepared for Google Analytics 4 integration for tracking AI platform referrals
- **External APIs**: Ready for integration with Google Business Profile API for Maps optimization

The architecture is designed to be scalable and maintainable, with clear separation of concerns between the educational content delivery and the interactive progress tracking functionality.