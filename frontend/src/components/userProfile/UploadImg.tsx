import styled from 'styled-components';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  width: 30%;
  height: 20vw;
  background-color: #f5f5f5;
`;

const ImgSection = styled.div`
  position: relative;
  top: 50%;
`;

const ImageList = styled.div`
  width: 20vw;
  text-align: center;
  position: inline-block;
`;
interface ProfileSectionProps {
  userData: USERDATA;
}
const UploadImg = ({ userData }: ProfileSectionProps) => {
  return (
    <>
      {userData.uImage ? (
        <>
          <ImageList>
            <img
              src={userData.uImage}
              id="img"
              style={{
                width: '20vw',
                height: '20vw',
                position: 'relative',
              }}
            ></img>
          </ImageList>
        </>
      ) : (
        <Container>
          <ImgSection></ImgSection>
        </Container>
      )}
    </>
  );
};

export default UploadImg;
