import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or whatever framework plugin you're using (e.g., vue, svelte)

export default defineConfig({
  plugins: [react()], // Include your framework plugins here
  server: {
    // ... other server options
    allowedHosts: [
      'portfolio-25xa.onrender.com',
      // You might also want to include 'localhost' for local development
      'localhost',
      '127.0.0.1'
    ],
    // If you are explicitly setting the host, ensure it's compatible
    // host: '0.0.0.0', // This can be useful for external access in dev
  },
  // ... other Vite configurations
});