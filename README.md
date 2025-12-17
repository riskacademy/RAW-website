# RAW Website

This is the official website for RAW (Risk Awareness Week), built with Next.js 16 and React 19. It serves as a platform to showcase upcoming and past risk management events, provide resources, and engage with the risk management community.

## Overview

The project is a modern web application designed to be fast, responsive, and SEO-friendly. It utilizes the latest web technologies to deliver a premium user experience.

### Key Features

*   **Event Management:** Showcases "Upcoming Events" and an archive of "Past Events".
*   **Informational Sections:** Includes detailed sections like "What is RAW", "Why Attend", "Practical Value", and "FAQ" to inform visitors.
*   **Faculty Showcase:** Highlights the experts and speakers involved in the events.
*   **Newsletter Integration:** Features a newsletter signup form integrated with Brevo (formerly Sendinblue).
*   **Resources:** Provides downloadable resources like the "Justification Kit".
*   **Legal Pages:** Includes standard "Privacy Policy", "Terms of Service", and "Cookie Policy" pages.

## Tech Stack

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **Library:** [React 19](https://react.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Language:** TypeScript

## Project Structure

The project follows a standard Next.js App Router structure:

*   `src/app`: Contains the main application routes and pages (Home, Privacy, Terms, Cookies).
    *   `api/`: Backend API routes (e.g., for newsletter subscription).
*   `src/components`: Reusable UI components.
    *   `sections/`: Major page sections (Hero, Faculty, FAQ, etc.).
    *   `layout/`: Layout components like Header and Footer.
    *   `ui/`: Generic UI elements.
*   `public/`: Static assets.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/riskacademy/RAW-website.git
    cd RAW-website
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Set up environment variables:
    *   Copy the example environment file:
        ```bash
        cp .env.example .env
        ```
    *   Open `.env` and specifically configure the following variables for newsletter functionality:
        *   `BREVO_API_KEY`: Your Brevo API key.
        *   `BREVO_LIST_ID`: The ID of the contact list in Brevo.

### Running the Development Server

Start the local development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/).

1.  Push your code to a git repository.
2.  Import the project into Vercel.
3.  Configure the environment variables in the Vercel dashboard.
4.  Deploy.

## Learn More

*   [Next.js Documentation](https://nextjs.org/docs)
*   [React Documentation](https://react.dev/)
*   [Tailwind CSS Documentation](https://tailwindcss.com/)
