import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/navigation/Header';
import NavBar from './components/navigation/NavBar';
import Home from './page/home/Home';
import IndexPage from './page/home/IndexPage';
import Signup from './page/signup/Signup';
import Profile from './page/profile/Profile';
import { theme } from './styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from './common/store';

const App = () => {
  const isIndex = useSelector((state: RootState) => state.common.isIndex);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Header />
        {!isIndex && <NavBar />}
        <Switch>
          <Route exact path="/" component={IndexPage} />
        </Switch>
        <Switch>
          <Route path="/home" component={Home}>
          </Route>
        </Switch>
        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
