import react from '@vitejs/plugin-react';
import stylex from '@stylexjs/unplugin';

export default {
  plugins: [
    stylex.vite(),
    react(),
  ],
};
