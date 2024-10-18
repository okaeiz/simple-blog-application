# Simple Blog Application

A simple blog application built using **Next.js**, **React**, **TypeScript**, and **TailwindCSS**, with **React Query** for API data fetching and caching.

## Features

- **Home Page**: Displays a list of blog posts with titles and short excerpts.
- **Post Details Page**: Detailed view of each blog post, including comments.
- **Responsive Design**: Mobile-friendly layout using TailwindCSS.
- **React Query**: Efficient data fetching with caching and loading/error states.
- **Server-Side Rendering (SSR)**: Built with Next.js for improved SEO and performance.

## Technologies

- **Next.js** for server-side rendering.
- **React Query** for data fetching.
- **TypeScript** for type safety.
- **TailwindCSS** for styling.

## API

Data is fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/), including posts and comments.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/okaeiz/simple-blog-application.git
   cd simple-blog-application
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev #or `npx next`
   Visit the app at http://localhost:3000.
   ```

### Production Build

To build and run the app in production mode:

```bash
npm run build
npm start
```

### Folder Structure

```bash
.
├── app/
│   ├── layout.tsx             # Root layout with QueryClientProvider
│   ├── page.tsx               # Home page
│   └── post/[id]/page.tsx     # Dynamic post details page
├── services/                  # API request functions
├── public/                    # Fonts and favicon
└── styles/globals.css         # Global styles
```
