const env = envVar => process.env[envVar]

export default {
  apiBaseUrl: env('API_BASE_URL') || 'http://localhost:5000',
}
