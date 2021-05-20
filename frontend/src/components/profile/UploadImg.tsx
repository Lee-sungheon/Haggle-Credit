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
  width: 30%;
  height: 20vw;
  background-color: #f5f5f5;
`;

const ImgSection = styled.div`
  position: relative;
  top: 50%;
`;
const ImgSection2 = styled.div`
  position: relative;
  top: -14vw;
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
  top: -20vw;
  left: 8.5vw;
  width: 2vw;
  :hover {
    cursor: pointer;
  }
`;

const ImageList = styled.div`
  width: 20vw;
  text-align: center;
  position: inline-block;
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
interface ProfileSectionProps {
  userData: USERDATA;
}
const UploadImg = ({ userData }: ProfileSectionProps) => {
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  useEffect(() => {
    updateProfile(images);
  }, [images]);

  const updateProfile = (imageList: ImageListType) => {
    if (imageList.length <= 0) {
      return;
    }
    let formData = new FormData();
    if (imageList[0].file && userData.uEmail) {
      formData.append('File', imageList[0].file);
      formData.append('UserEmail', userData.uEmail);
    }
    if (imageList[0].dataURL) {
      changeProfileImageAPI(formData)
        .then((res) => {
          dispatch(userActions.changeProfileImage(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const onRemoveImage = () => {
    let body = userData;
    let num = Math.floor(Math.random() * 6) + 1;
    body.uImage = `../images/profileImage_${num}.jpg`;
    changeProfileImageAPI(body)
      .then((res) => {
        dispatch(userActions.changeProfileImage(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
        {({ onImageUpload, isDragging, dragProps }) => (
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
                  <RemoveButton
                    src={'../images/removeButton.png'}
                    onClick={() => onRemoveImage()}
                  ></RemoveButton>
                  <ImgSection2>
                    <ImgInputButton
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      사진바꾸기
                    </ImgInputButton>
                  </ImgSection2>
                </ImageList>
              </>
            ) : (
              <Container>
                <ImgSection>
                  <ImgInputButton onClick={onImageUpload}>
                    사진등록
                  </ImgInputButton>
                </ImgSection>
              </Container>
            )}
          </>
        )}
      </ImageUploading>
    </>
  );
};

export default UploadImg;
