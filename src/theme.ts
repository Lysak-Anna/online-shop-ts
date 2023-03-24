import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    accent: '#e9322e',
    brown: '#45433e',
    gray: '#959794',
    white: '#ffffff',
    black: '#19171a',
  },
  styles: {
    global: {
      'html, body': {
        color: 'black',
        lineHeight: 'tall',
      },
    },
  },
});
