import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import store from "./common/store";
import Header from "./components/navigation/Header";
import Home from "./page/home/Home";
import { theme } from "./styles/theme";

const persistor = persistStore(store);

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
