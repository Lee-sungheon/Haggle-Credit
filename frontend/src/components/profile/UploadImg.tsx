import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import axios from 'axios';
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

  const uploadImgHandler = (e: any) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    axios
      .put('https://k4d107.p.ssafy.io/haggle-credit/image/profileUpload', {
        uImage: imageUrl,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {userData.uImage ? (
        <img
          src={userData.uImage}
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
