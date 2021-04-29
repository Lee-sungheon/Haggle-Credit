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

const UserName = () => {
  return (
    <Container>
      <TagP>손동민 님</TagP>
    </Container>
  );
};

export default UserName;
