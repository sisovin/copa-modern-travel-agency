import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../providers/AuthProvider';
import { I18nProvider } from '../providers/I18nProvider';
import '../styles/globals.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <I18nProvider>
          <div className="min-h-screen bg-gray-100">
            {children}
          </div>
        </I18nProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Layout;
