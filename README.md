#DigiProd task



## Usage

This starter pack includes a basic setup for using **Tailwind CSS with React**. To start building your own components and styles, follow these steps:

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/ghshivamkashyap/digiprod_task.git
    ```

1. Install the required packages.
    ```sh
    cd frontend
    npm install
    then
    cd backend
    npm install
    ```

1. Start the development server.
    ```sh
    npm start on both frontend and backend
    ```
1. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.
1. Create your React components and add your styles using Tailwind classes. You can also create new CSS files and import them into your components.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.

## Overview

This web application is designed to display a line chart using React.js and Chart.js. It fetches data from a backend API to dynamically update the chart. Additionally, it includes features like filtering data in a table, displaying tabbed layouts, and sending alerts at specific times.

## Components

### 1. Line Chart

- Displays a line chart using Chart.js.
- Fetches data from the backend API to dynamically update the chart.
- Responsive design for optimal viewing on various devices.

### 2. Tabs

- Implements a tabbed layout with multiple tabs.
- Each tab contains unique content.

### 3. Table

- Displays a table with filter options.
- Users can filter data based on product name, color, category, and price.

### 4. Google Maps Integration

- Integrates Google Maps using the `google-map-react` library.
- Displays a map with a marker at a predefined location.

## Backend Integration

- The application fetches line chart data from the backend API (`https://digiprod.onrender.com/api/getlinechartdata`).

## Drag and Drop (Pending)

- Implementing drag and drop functionality for items between tabbed layouts.

## Scheduled Alerts (Pending)

- Sends alerts at specific times (2:55 PM, 4:55 PM, 6:55 PM).

## Installation

1. Clone the repository: `git clone https://github.com/your-username/your-project.git`
2. Navigate to the project directory: `cd your-project`
3. Install dependencies: `npm install`

## Usage

- Run the project: `npm start`

## Technologies Used

- React.js
- Chart.js
- Google Map React
- Tailwind CSS

## Contributing

- Bug reports, feature requests, and code contributions are welcome.

## Acknowledgements

- Special thanks to external libraries, resources, or individuals whose work has been used in this project.

