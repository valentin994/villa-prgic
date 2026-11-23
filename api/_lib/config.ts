/// <reference types="vite/client" />

export const API_BASE_URL = import.meta.env.DEV
  ? "http://localhost:3000"
  : "https://api.apartmani-prgic.hr";
