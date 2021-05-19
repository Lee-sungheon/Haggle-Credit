import { useEffect } from 'react';
import styled from 'styled-components';
import TransactionReviewList from './TransactionReviewList';
import { USERDATA } from 'styled-components';
const Container = styled.div``;
interface TransactionReviewTabProps {
  userData: USERDATA;
}
const TransactionReviewTab = ({ userData }: TransactionReviewTabProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <TransactionReviewList userData={userData} />
    </Container>
  );
};

export default TransactionReviewTab;
