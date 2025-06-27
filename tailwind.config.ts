import { type Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}", // if your links file is here
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // important!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
