import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f5f5f5;
`;

const ImgSection = styled.div`
  position: relative;
  top: 50%;
`;

const ImgInputLabel = styled.label`
  padding: 6px 25px;
  background-color: #ff6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const UploadImg = () => {
  return (
    <Container>
      <ImgSection>
        <ImgInputLabel htmlFor="input-file">사진등록</ImgInputLabel>
        <input type="file" id="input-file" style={{ display: 'none' }} />
      </ImgSection>
    </Container>
  );
};

export default UploadImg;
