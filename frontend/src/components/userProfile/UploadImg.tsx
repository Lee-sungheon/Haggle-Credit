import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { changeProfileImageAPI } from '../../api/UserApi';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f5f5f5;
`;

const ImgSection = styled.div`
  position: relative;
  top: 50%;
`;
const ImgSection2 = styled.div`
  position: relative;
  margin-top: -200px;
`;

const ImgInputButton = styled.button`
  padding: 6px 25px;
  border: none;
  background-color: #ff6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;
const RemoveButton = styled.img`
  position: relative;
  top: -290px;
  right: -120px;
  width: 40px;
  :hover {
    cursor: pointer;
  }
`;

const ImageList = styled.div`
  text-align: center;
  ${ImgSection2} {
    visibility: hidden;
  }
  ${RemoveButton} {
    visibility: hidden;
  }
  :hover {
    ${ImgSection2} {
      visibility: visible;
    }
    ${RemoveButton} {
      visibility: visible;
    }
  }
`;

const UploadImg = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.joinUserData);

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  return (
    <>
      {userData.uImage ? (
        <>
          <ImageList>
            <img
              src={userData.uImage}
              id="img"
              style={{
                width: '300px',
                height: '300px',
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
