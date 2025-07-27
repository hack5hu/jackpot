import axios from "axios";

/**
 * Axios instance for API calls
 *
 * - `baseURL` points to `/api/proxy` which can be a Next.js API route or a reverse proxy endpoint
 * - `Content-Type` is set to `application/json` by default for all requests
 */
const api = axios.create({
  baseURL: "/api/proxy",
  headers: { "Content-Type": "application/json" },
});

export default api;

