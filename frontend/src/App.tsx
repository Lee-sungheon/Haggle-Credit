import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/navigation/Header';
import NavBar from './components/navigation/NavBar';
import LikeBox from './components/navigation/LikeBox';
import Home from './page/home/Home';
import CategoryPage from './page/category/CategoryPage';
import IndexPage from './page/home/IndexPage';
import DetailPage from './page/detail/DetailPage';
import PurchasePage from './page/purchase/PurchasePage';
import Signup from './page/signup/Signup';
import Profile from './page/profile/Profile';
import ProductRegistration from './page/productRegistration/ProductRegistration'
import { theme } from './styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from './common/store';
import RecentlyBox from './components/navigation/RecentlyBox';

const App = () => {
  const isIndex = useSelector((state: RootState) => state.common.isIndex);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Header />
        {!isIndex && <><NavBar /><LikeBox /><RecentlyBox /></>}
        <Switch>
          <Route exact path="/" component={IndexPage} />
        </Switch>
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
        <Switch>
          <Route path="/category/:name" component={CategoryPage} />
        </Switch>
        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
        <Switch>
          <Route path="/profile" component={Profile} />
        </Switch>
        <Switch>
          <Route path="/productregistraion" component={ProductRegistration} />
        </Switch>
        <Switch>
          <Route path="/detail/:id" component={DetailPage} />
        </Switch>
        <Switch>
          <Route path="/purchase/:id" component={PurchasePage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
