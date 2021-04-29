import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: auto;
  text-align: left;
`;

const TagP = styled.p`
  margin: 0;
  position: relative;
  padding-left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const Credit = () => {
  return (
    <Container>
      <TagP>보유 credit : 0 C</TagP>
    </Container>
  );
};

export default Credit;
