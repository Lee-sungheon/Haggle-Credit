import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

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
  const userData = useSelector((state: RootState) => state.user.userData);

  const [ImgData, setImgData] = useState({
    imageUrl: '',
  });
  useEffect(() => {
    if (userData) {
    }
  }, []);
  const uploadImgHandler = (e: any) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImgData({ ...ImgData, imageUrl: imageUrl });
  };
  return (
    <>
      {ImgData.imageUrl ? (
        <img
          src={ImgData.imageUrl}
          id="img"
          style={{
            width: '300px',
          }}
        ></img>
      ) : (
        <Container>
          <ImgSection>
            <ImgInputLabel htmlFor="input-file">사진등록</ImgInputLabel>
            <input
              type="file"
              id="input-file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={uploadImgHandler}
            />
          </ImgSection>
        </Container>
      )}
    </>
  );
};

export default UploadImg;
