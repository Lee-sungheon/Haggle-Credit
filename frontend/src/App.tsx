import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import store from './common/store';
import Header from './components/navigation/Header';
import NavBar from './components/navigation/NavBar';
import IndexPage from './page/home/IndexPage';
import Signup from './page/signup/Signup';
import { theme } from './styles/theme';

const persistor = persistStore(store);

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <Route exact path="/" component={IndexPage} />
            </Switch>
            <Switch>
              <Route path="/home">
                <NavBar />
              </Route>
            </Switch>
            <Switch>
              <Route path="/signup" component={Signup} />
            </Switch>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
