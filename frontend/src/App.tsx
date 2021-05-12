import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/navigation/Header';
import NavBar from './components/navigation/NavBar';
import LikeBox from './components/navigation/LikeBox';
import Home from './page/home/Home';
import CategoryPage from './page/category/CategoryPage';
import IndexPage from './page/home/IndexPage';
import DetailPage from './page/detail/DetailPage';
import AuctionPage from './page/purchase/AuctionPage';
import SellAuctionPage from './page/purchase/SellAuctionPage';
import PurchasePage from './page/purchase/PurchasePage';
import SearchPage from './page/search/SearchPage';
import EventPage from './page/event/EventPage';
import AddDestinationPage from './page/purchase/AddDestinationPage';
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
          <Route path="/home" component={Home} />
          <Route path="/category/:name" component={CategoryPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/productregistraion" component={ProductRegistration} />
          <Route path="/search" component={SearchPage} />
          <Route path="/event" component={EventPage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/auction/buy/:id" component={AuctionPage} />
          <Route path="/auction/sell/:id" component={SellAuctionPage} />
          <Route path="/purchase/:id" component={PurchasePage} />
          <Route path="/add_destination" component={AddDestinationPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
