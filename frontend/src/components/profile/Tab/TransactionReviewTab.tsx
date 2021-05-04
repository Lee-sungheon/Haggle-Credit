import { useEffect } from 'react';
import styled from 'styled-components';
import TransactionReviewList from './TransactionReviewList';
const Container = styled.div``;

const TransactionReviewTab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <TransactionReviewList />
    </Container>
  );
};

export default TransactionReviewTab;
