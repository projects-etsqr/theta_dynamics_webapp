import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.thetadynamics.pmo',
  appName: 'Theta Pulse',
  webDir: 'dist',

  server: {
    androidScheme: 'http',
    cleartext: true,
    allowNavigation: [
      'http://backend.thetadynamics.io',
      'https://backend.thetadynamics.io',
      'http://35.242.155.94',
      'http://35.242.155.94:8080',
    ],
  },
};

export default config;