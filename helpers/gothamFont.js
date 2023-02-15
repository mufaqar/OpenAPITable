import localFont from '@next/font/local';

export const gothamFont = localFont({
  src: [
    {
      path: '../assets/fonts/gotham/Gotham-Black.otf',
      weight: '400',
    },
    {
      path: '../assets/fonts/gotham/Gotham-Bold.otf',
      weight: '800',
    },
    {
      path: '../assets/fonts/gotham/Gotham-Book.otf',
      weight: '400',
    },
    {
      path: '../assets/fonts/gotham/Gotham-Medium.otf',
      weight: '600',
    },
  ],
});
