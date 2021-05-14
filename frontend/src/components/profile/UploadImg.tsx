import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { changeProfileImageAPI } from '../../api/UserApi';

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
  const userData = useSelector((state: RootState) => state.user.userData);

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
    let body = userData;
    body.uImage = imageList[0].dataURL;
    if (imageList[0].dataURL) {
      changeProfileImageAPI(body)
        .then((res) => {
          console.log(res);
          dispatch(userActions.changeProfileImage(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const onRemoveImage = () => {
    let body = userData;
    body.uImage = '';
    changeProfileImageAPI(body)
      .then((res) => {
        console.log(res);
        dispatch(userActions.changeProfileImage(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
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
                  <RemoveButton
                    src={'../images/removeButton.png'}
                    onClick={() => onRemoveImage()}
                  ></RemoveButton>
                  {/* <ImgInputButton
                    onClick={() => onRemoveImage()}
                    style={{
                      position: 'relative',
                      top: '-300px',
                      right: '-100px',
                    }}
                  ></ImgInputButton> */}
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
