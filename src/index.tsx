import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

// Import styles
import './styles/index.css';

// Import app to be injected
import App from './App';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

ReactDOM.render(
  //<React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  //</React.StrictMode>
  document.getElementById('root')
);

