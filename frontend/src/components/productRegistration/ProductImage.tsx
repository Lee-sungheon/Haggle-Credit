import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { changeProfileImageAPI } from '../../api/UserApi';

const ImgSection = styled.div`
  position: relative;
  top: 50%;
`;
const ImgSection2 = styled.div``;

const ImgInputButton = styled.button`
  padding: 6px 25px;
  border: none;
  background-color: #ff6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-left: 45px;
`;

const ImgRemoveButton = styled.button`
  position: relative;
  padding: 6px 25px;
  border: none;
  background-color: #ff6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const ImageList = styled.div`
  margin: 5px;
  text-align: center;
  widtg: 100px;
  height: 100px;
  ${ImgSection2} {
    visibility: hidden;
  }
  :hover {
    ${ImgSection2} {
      visibility: visible;
    }
  }
`;
interface ProductImageProps {
  onisProductPhoto: (name: any) => void;
}
const ProductImage = ({ onisProductPhoto }: ProductImageProps) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userData);

  const [images, setImages] = useState([]);
  const maxNumber = 8;

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
    onisProductPhoto(imageList as never[]);
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

  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <>
            <div
              id="imgSection"
              style={{
                display: 'flex',
                borderBottom: '1px solid gray',
                padding: '25px 0',
              }}
            >
              <div
                style={{
                  width: '180px',
                  fontSize: '17px',
                  fontWeight: 'bolder',
                }}
              >
                <p>
                  상품이미지<span style={{ color: 'red' }}>* </span>
                  <span style={{ color: 'gray', fontWeight: 'normal' }}>
                    ({images.length}/8)
                  </span>
                </p>
              </div>
              <div
                style={{
                  width: 'auto',
                }}
              >
                <div>
                  <div style={{ height: '200px', display: 'flex' }}>
                    <div
                      style={{
                        width: '200px',
                        backgroundColor: '#eeeeee',
                        height: '100%',
                      }}
                    >
                      <ImgSection>
                        <ImgInputButton
                          style={isDragging ? { color: 'red' } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          사진등록
                        </ImgInputButton>
                      </ImgSection>
                    </div>
                    <div
                      style={{
                        marginTop: '40px',
                        marginLeft: '40px',
                        color: '#29b6f6',
                        fontSize: '14px',
                      }}
                    >
                      <span style={{ fontWeight: 'bolder' }}>
                        * 상품 이미지는 640x640에 최적화 되어 있습니다.
                      </span>
                      <br />
                      <span>
                        - 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다.
                      </span>
                      <br />
                      <span>
                        - 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다.
                      </span>
                      <br />
                      <span>
                        - 이미지를 클릭 후 이동하여 등록순서를 변경할 수
                        있습니다.
                      </span>
                      <br />
                      <span>
                        - 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수
                        있습니다.
                      </span>
                      <br />
                      <span>
                        최대 지원 사이즈인 640 X 640 으로 리사이즈 해서
                        올려주세요.(개당 이미지 최대 10M)
                      </span>
                      <br />
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: '20px',
                      width: '600px',
                      display: 'flex',
                    }}
                  >
                    {imageList.map((image, index) => (
                      <ImageList key={index} className="image-item">
                        <img
                          src={image.dataURL}
                          alt=""
                          width="120"
                          height="120"
                          style={{ position: 'relative' }}
                        />
                        <div
                          className="image-item__btn-wrapper"
                          style={{ position: 'relative', top: '-70%' }}
                        >
                          <ImgSection2>
                            <ImgRemoveButton
                              onClick={() => onImageRemove(index)}
                            >
                              삭제
                            </ImgRemoveButton>
                          </ImgSection2>
                        </div>
                      </ImageList>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </ImageUploading>
    </>
  );
};

export default ProductImage;
