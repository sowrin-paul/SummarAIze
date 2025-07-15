import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider as ReduxProvider } from 'react-redux';
// import { store } from './store';
import { Provider as UIProvider } from './components/ui/provider.tsx';
import './index.css';
import App from './App.tsx';
// import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ReduxProvider store={store}> */}
      <UIProvider>
        {/* <ChakraProvider value={theme}> */}
          <App />
        {/* </ChakraProvider> */}
      </UIProvider>
    {/* </ReduxProvider> */}
  </StrictMode>,
)
