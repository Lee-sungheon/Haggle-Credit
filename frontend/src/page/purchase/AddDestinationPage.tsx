import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";
import { useHistory } from "react-router";
import AddDestination from '../../components/purchase/AddDestination';

const Container = styled.div`
  min-width: 320px;
  max-width: 640px;
  min-height: 100vh;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 0 12px;
`;

const Header = styled.div`
  position: sticky;
  padding: 5px 0;
  top: 0px;
  min-height: 3.125rem;
  line-height: 3.125rem;
  font-weight: bold;
  text-align: center;
  color: rgb(30, 29, 41);
  background-color: rgb(255, 255, 255);
  z-index: 2;
  border-bottom: 1px solid black;
`;

const BackButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0.825rem;
  display: block;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjE5MiA3Ljc5M2ExIDEgMCAwIDEgMCAxLjQxNEwxMC40IDE1SDI0YTEgMSAwIDAgMSAwIDJIMTAuNDI5bDUuNzYzIDUuNzYzYTEgMSAwIDEgMS0xLjQxNCAxLjQxNWwtNy40ODUtNy40ODZhMSAxIDAgMCAxIDAtMS40MTRsNy40ODUtNy40ODVhMSAxIDAgMCAxIDEuNDE0IDB6Ii8+Cjwvc3ZnPgo=) center center no-repeat;
  width: 30px;
  height: 30px;
`;

const AddDestinationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(commonActions.setIsIndex(true));
    dispatch(commonActions.setIsPurchase(true));
    return () => {
      dispatch(commonActions.setIsIndex(false));
      dispatch(commonActions.setIsPurchase(false));
    };
  }, [dispatch]);
  return (
    <Container>
      <Header>
        <h3 style={{ margin: '0' }}>배송지 추가</h3>
        <BackButton 
        onClick={() => history.goBack()} />
      </Header>
      <AddDestination />
    </Container>
  )
}

export default AddDestinationPage;