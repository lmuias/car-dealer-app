# Car Dealer Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Application Overview

This car dealer application is built using **Next.js**, which enables server-side rendering and provides an efficient routing system. The app allows users to:

- **Load Car Brands**: Fetches a list of car brands from an API to populate dropdown menus for users to select their desired brand.
  
- **Select Year of Manufacture**: Users can choose the year of manufacture for the car they are interested in through a dropdown menu that contains a range of years.
  
- **Filtered Search**: Once the user selects a brand and year, they can perform a filtered search among available cars based on the selected criteria (brand ID and year). This is achieved by making another API request that retrieves cars matching the user's selections.
  
- **Display Results**: The filtered results are displayed in a user-friendly format, showcasing each car's details, such as model name and manufacturer.

## Architecture

### Routing
The application utilizes Next.js routing capabilities to navigate between different pages:

- **Home Page**: The main interface where users select car brands and years.
- **Result Page**: Displays the results based on the user's selections.

### Components
- **FilterChoice**: A component that houses the dropdowns for selecting car brands and years, managing local state for the selected values.
- **Dropdown**: A reusable component that renders the dropdowns for car makes and years.
- **CarList**: Displays the list of cars that match the selected filters.
- **CarItem**: Represents each individual car in the list.

### Data Fetching
The app employs asynchronous data fetching using the Fetch API:

- Initially retrieves the list of cars using `await fetch`.
- Handles loading states and errors gracefully, providing users with a smooth experience even when the API encounters issues.

### Environment Variables
The application uses environment variables (like `REACT_APP_LOCALE_URL_API`) to define the base URL for API requests. This allows for easy configuration and keeps sensitive information secure.

### Styling
**Tailwind CSS** is utilized for styling the application, ensuring a responsive and modern design without relying on external CSS frameworks.
