# Weather App Project

This project is a React-based weather application that allows users to search for real-time weather information by entering city names. It utilizes Material UI for the user interface and Emotion for styling.

## Features

- Search for weather conditions by city name.
- Responsive UI using Material UI.
- Styled components with Emotion.
- Display temperature, humidity, and weather conditions.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14)
- pnpm (>=6)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KAMRANKHANALWI/Weather
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Application

To start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Building the Application

To create a production-ready build:

```bash
pnpm build
```

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBox.jsx  # Search bar component
│   │   ├── WeatherDisplay.jsx  # Weather data display component
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point
├── package.json          # Project dependencies
├── README.md             # Project documentation
├── vite.config.js        # Vite configuration
```

## Weather API Integration

This project fetches weather data from a third-party API (e.g., OpenWeatherMap or WeatherAPI). The API provides real-time weather data based on user input such as city names.

### How We Use Weather API

1. **API Endpoint:**

   - The app sends a request to the weather API endpoint with the city name and an API key.

2. **Fetching Data Using `fetch` or `axios`:**
   - We use `fetch` (a built-in JavaScript API) or `axios` (a popular HTTP client) to make asynchronous requests to the API.

### Example Using `fetch`:

```jsx
const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
```

### Example Using `axios`:

```jsx
import axios from "axios";

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
```

### Why Use Third-Party APIs?

- To access real-time or large-scale data without building your own backend.
- To reduce development time and effort by leveraging existing services.
- To provide additional features and data visualization capabilities.

### When to Use `fetch` vs. `axios`

| Feature         | fetch                   | axios                                      |
| --------------- | ----------------------- | ------------------------------------------ |
| Browser support | Built-in                | Requires installation                      |
| Error Handling  | Manual with try-catch   | Automatic error handling                   |
| Request Types   | Basic requests          | Advanced features (timeouts, interceptors) |
| Simplicity      | Lightweight and minimal | More features and flexibility              |

## Concepts Learned

### 1. React

- **What is it?**
  A JavaScript library for building user interfaces.
- **Why used?**
  To build reusable, component-based UI for the weather app.
- **Key Hooks:**
  - `useState` - to manage input and weather data.
  - `useEffect` - to fetch weather data on input changes.

### 2. Material UI (MUI)

- **What is it?**
  A popular React component library for building responsive UI.
- **Why used?**
  To provide pre-designed UI components for better styling and user experience.
- **Key Components:**
  - `TextField` - for input fields.
  - `Card` - for displaying weather details.
  - `Button` - for form submission.

### 3. Emotion (CSS-in-JS)

- **What is it?**
  A CSS-in-JS solution for styling React components dynamically.
- **Why used?**
  To style components directly within the React code without separate CSS files.
- **Key Methods:**
  - `styled` - for creating styled components.
  - `css` - for applying conditional styling.

### 4. API Integration

- **What is it?**
  Connecting to external services to fetch weather data.
- **Why used?**
  To retrieve live weather information by city name.
- **Key Functions:**
  - `fetch` - to make API requests.
  - `async/await` - for handling asynchronous API calls.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit.
4. Open a pull request.

## License

This project is licensed under the MIT License.
