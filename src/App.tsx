import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Toast from 'components/Toast';
import { Layout, LandingPage } from 'pages';
import { FullScreenImage } from 'pages/LandingPage/components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from 'theme';

import './App.css';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app">
        <FullScreenImage />

        <Layout>
          <ErrorBoundary>
            <LandingPage />
          </ErrorBoundary>
        </Layout>

        <Toast />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
