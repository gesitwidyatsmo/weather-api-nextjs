# Weather Web With Nextjs and Tailwindcss

![image](https://github.com/gesitwidyatsmo/weather-api-nextjs/assets/140772511/af2c25f2-52b5-41f2-9b69-e035f0516d17)
You can view the site here [Click Me](https://weather-api-nextjs-30p39vm8e-gesit-widi-atmokos-projects.vercel.app/)

## API Reference
[`weatherapi`](https://www.weatherapi.com/)

## Getting Started
These instructions will help you get a copy of the project and run it on your local machine for development and testing purposes. See the deployment section for notes on how to deploy the project on a live system.

### Prerequisites
First, you need to obtain an API key from [WeatherAPI](https://www.weatherapi.com/). Follow these steps to obtain the API key:

1. Sign up or log in to your WeatherAPI account.
2. Navigate to the API section in your dashboard to generate an API key.
3. Copy the API key provided.

After obtaining the API key, create an .env file in the root directory of the project and add the following configuration:

```bash
NEXT_PUBLIC_WEATHER_BASE_URL=https://api.weatherapi.com/v1
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_API_KEY
```

### Installation
Once you have set up the API key, follow these steps to install the project:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using your preferred package manager and run:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With
1. Front End
   * React JS
   * Next JS
   * Swiper JS
3. Styling Utilities
   * Tailwindcss
   * React Icon
   * Swiper JS
5. API Requests
   * Axios
