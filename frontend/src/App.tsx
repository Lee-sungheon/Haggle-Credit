import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/navigation/Header';
import NavBar from './components/navigation/NavBar';
import LikeBox from './components/navigation/LikeBox';
import Footer from './components/common/Footer';
import Home from './page/home/Home';
import CategoryPage from './page/category/CategoryPage';
import IndexPage from './page/home/IndexPage';
import DetailPage from './page/detail/DetailPage';
import DonationDetailPage from './page/donationdetail/DonationDetailPage';
import AuctionPage from './page/purchase/AuctionPage';
import SellAuctionPage from './page/purchase/SellAuctionPage';
import PurchasePage from './page/purchase/PurchasePage';
import DonationPage from './page/purchase/DonationPage';
import SearchPage from './page/search/SearchPage';
import EventPage from './page/event/EventPage';
import ChatPage from './page/chat/ChatPage';
import ChatListPage from './page/chat/ChatListPage';
import AddDestinationPage from './page/purchase/AddDestinationPage';
import Signup from './page/signup/Signup';
import Profile from './page/profile/Profile';
import UserProfile from './page/userProfile/UserProfile';
import CertificationPage from './page/certification/CertificationPage';
import ProductRegistration from './page/productRegistration/ProductRegistration';
import ItemBuy from './page/itemBuy/ItemBuy';
import { theme } from './styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from './common/store';
import RecentlyBox from './components/navigation/RecentlyBox';

const App = () => {
  const isIndex = useSelector((state: RootState) => state.common.isIndex);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Header />
        {!isIndex && (
          <>
            <NavBar />
            <LikeBox />
            <RecentlyBox />
          </>
        )}
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/home" component={Home} />
          <Route path="/category/:name" component={CategoryPage} />
          <PublicRoute
            restricted
            path="/signup"
            component={Signup}
            isLogin={isLogin}
          ></PublicRoute>
          <PrivateRoute path="/profile" component={Profile} isLogin={isLogin} />
          <Route path="/userprofile/:id" component={UserProfile} />
          <PrivateRoute
            path="/productregistraion"
            npm
            component={ProductRegistration}
            isLogin={isLogin}
          />
          <PrivateRoute path="/itemBuy" component={ItemBuy} isLogin={isLogin} />
          <Route path="/search" component={SearchPage} />
          <Route path="/user/key_alter" component={CertificationPage} />
          <Route path="/event" component={EventPage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/donation_detail/:id" component={DonationDetailPage} />
          <PrivateRoute path="/auction/buy/:itemNo" component={AuctionPage} isLogin={isLogin}/>
          <PrivateRoute path="/auction/sell/:itemNo" component={SellAuctionPage} isLogin={isLogin}/>
          <PrivateRoute path="/donation/:itemNo" component={DonationPage} isLogin={isLogin}/>
          <PrivateRoute path="/purchase/:itemNo" component={PurchasePage} isLogin={isLogin}/>
          <PrivateRoute path="/add_destination" component={AddDestinationPage} isLogin={isLogin}/>
          <PrivateRoute path="/chat/:id/:roomNo" component={ChatPage} isLogin={isLogin}/>
          <PrivateRoute path="/chatlist/:id" component={ChatListPage} isLogin={isLogin}/>
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

const PublicRoute = ({
  component: Component,
  restricted,
  isLogin,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !!isLogin && restricted ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const PrivateRoute = ({ component: Component, isLogin, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => (!!isLogin ? <Component {...props} /> : shotAlert())}
    />
  );
};

const shotAlert = () => {
  alert('로그인 후 이용할 수 있는 페이지입니다.');
  return <Redirect to="/home" />;
};
