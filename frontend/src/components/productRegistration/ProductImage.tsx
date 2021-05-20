import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { changeProfileImageAPI } from '../../api/UserApi';

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 25px 0;
  width: 100%;
`;

const ImgSection = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  top: -50%;
`;
const ImgSection2 = styled.div``;
const RemoveButton = styled.img`
  position: absolute;
  width: 30px;
  :hover {
    cursor: pointer;
  }
`;
const ImgInputButton = styled.button`
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
interface ProductImageProps {
  onisProductPhoto: (name: any) => void;
}
const ProductImage = ({ onisProductPhoto }: ProductImageProps) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userData);
  const [isWrap, setIsWrapm] = useState(false);

  const [images, setImages] = useState([]);
  const maxNumber = 8;

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
    onisProductPhoto(imageList as never[]);
  };
  const ConfirmWidth = useCallback(() => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 1622) {
      setIsWrapm(false);
    } else {
      setIsWrapm(true);
    }
  }, []);
  useEffect(() => {
    ConfirmWidth();
    window.addEventListener('resize', ConfirmWidth);
    return () => {
      window.removeEventListener('resize', ConfirmWidth);
    };
  });


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
            <Container id="imgSection">
              <div
                style={{
                  width: '20%',
                  fontSize: '17px',
                  fontWeight: 'bolder',
                  minWidth: '120px',
                }}
              >
                상품이미지<span style={{ color: 'red' }}>* </span>
                <span style={{ color: 'gray', fontWeight: 'normal' }}>
                  ({images.length}/8)
                </span>
              </div>
              <div
                style={{
                  width: '80%',
                  paddingLeft: '20px',
                  minWidth: '650px',
                }}
              >
                <div>
                  <div style={{ height: '15vw', display: 'flex' }}>
                    <div>
                      <div
                        style={{
                          width: '15vw',
                          backgroundColor: '#eeeeee',
                          height: '100%',
                        }}
                      ></div>
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
                        marginTop: '3vw',
                        color: '#29b6f6',
                        fontSize: '1vw',
                        width: '100%',
                        textAlign: 'left',
                        paddingLeft: '3vw',
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
                    style={
                      isWrap
                        ? {
                            flexWrap: 'wrap',
                            margin: 0,
                            marginTop: '20px',
                            width: '90%',
                            maxWidth: '1000px',
                            display: 'flex',
                          }
                        : {
                            margin: 0,
                            marginTop: '20px',
                            width: '90%',
                            maxWidth: '1000px',
                            display: 'flex',
                          }
                    }
                  >
                    {imageList.map((image, index) => (
                      <ImageList
                        key={index}
                        className="image-item"
                        style={{ display: 'flex' }}
                      >
                        <img
                          src={image.dataURL}
                          alt=""
                          width="120px"
                          height="120px"
                        />
                        <RemoveButton
                          src={'../images/removeButton.png'}
                          onClick={() => onImageRemove(index)}
                        ></RemoveButton>
                      </ImageList>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </>
        )}
      </ImageUploading>
    </>
  );
};

export default ProductImage;
