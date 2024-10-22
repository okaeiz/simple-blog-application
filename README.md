# Simple Blog Application

A simple blog application built using **Next.js**, **React**, **TypeScript**, and **TailwindCSS**, with **React Query** for API data fetching and caching.

## Features

- **Home Page**: Displays a list of blog posts with titles and short excerpts.
- **Post Details Page**: Detailed view of each blog post, including comments.
- **Responsive Design**: Mobile-friendly layout using TailwindCSS.
- **React Query**: Efficient data fetching with caching and loading/error states.
- **Server-Side Rendering (SSR)**: Built with Next.js for improved SEO and performance.
- **Read-Only Components**: Some parts of the blog are read-only, indicated by non-functional buttons that change color on hover (e.g., red hover state).

## Figma Design

The design for this project can be found at the following link: [Figma Design](<https://www.figma.com/design/pLFQDhxI84Zpq7Gskf86SI/Free-Blog-Template--%7C-Modern-%26-Creative-design-(Community)?node-id=2101-19307&node-type=frame&t=CaYaVOsnUFBvhzz1-0>). Please note that due to the complexity of the Figma design, some UI elements are non-interactive.

## Technologies

- **Next.js** for server-side rendering.
- **React Query** for data fetching.
- **TypeScript** for type safety.
- **TailwindCSS** for styling.

## API

Data is fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/), including posts and comments. Note that some strings and images have been modified to align with task requirements.

## SSR and Caching Implementation

This project utilizes Server-Side Rendering (SSR) to enhance performance and SEO capabilities. The initial page load fetches data on the server, which is then sent to the client, ensuring that users receive fully rendered pages. Additionally, React Query is employed for efficient data fetching and caching strategies, allowing for seamless updates and reducing unnecessary network requests.

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
   ```

   Visit the app at http://localhost:3000.

### Production Build

To build and run the app in production mode:

```bash
npm run build
npm start
```
