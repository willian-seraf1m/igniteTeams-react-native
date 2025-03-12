import React from 'react';
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}
