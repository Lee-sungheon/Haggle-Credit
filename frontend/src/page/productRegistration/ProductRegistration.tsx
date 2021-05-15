import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductImage from '../../components/productRegistration/ProductImage';
import ProductName from '../../components/productRegistration/ProductName';
import ProductCategory from '../../components/productRegistration/ProductCategory';
import DealRegion from '../../components/productRegistration/DealRegion';
import ProductState from '../../components/productRegistration/ProductState';
import ProductPrice from '../../components/productRegistration/ProductPrice';
import ProductDescription from '../../components/productRegistration/ProductDescription';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import axios from 'axios';
import { ImageListType } from 'react-images-uploading';
import { useHistory } from 'react-router-dom';

const RegistButton = styled.button`
  height: 50px;
  width: 200px;
  background-color: #ff6600;
  color: white;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
const ProductRegistration = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  const history = useHistory();

  const [productData, setProductData] = useState({
    isUserNo: 0,
    isItemName: '',
    isCategoryMain: '',
    isCategorySub: '',
    isContent: '',
    isEndDate: '',
    isCoolPrice: 0,
    isAuctionIngPrice: 0,
    isAuctionInitPrice: 0,
    isDealPrice: 0,
    isUsedStatus: '',
  });
  const [productPhoto, setProductPhoto] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (userData.uNo) {
      setProductData({ ...productData, isUserNo: userData.uNo });
    } else {
      window.location.href = '/home';
    }
  }, []);

  const onIsNameHandler = (name: any) => {
    setProductData({ ...productData, isItemName: name });
  };
  const onIsCategoryMain = (categoryMain: any) => {
    setProductData({ ...productData, isCategoryMain: categoryMain });
  };
  const onIsCategorySub = (categorySub: any) => {
    setProductData({ ...productData, isCategorySub: categorySub });
  };
  const onIsContent = (content: any) => {
    setProductData({ ...productData, isContent: content });
  };
  const onIsEndDate = (endDate: any) => {
    setProductData({ ...productData, isEndDate: endDate });
  };
  const onIsCoolPrice = (coolPrice: any) => {
    let price = Math.floor(Number(coolPrice) / 100) * 100;
    setProductData({ ...productData, isCoolPrice: price });
  };
  const onIsAuctionPrice = (auctionPrice: any) => {
    let price = Math.floor(Number(auctionPrice) / 100) * 100;
    setProductData({
      ...productData,
      isAuctionIngPrice: price,
      isAuctionInitPrice: price,
    });
  };

  const onIsUsedStatus = (usedStatus: any) => {
    setProductData({ ...productData, isUsedStatus: usedStatus });
  };
  const onisProductPhoto = (photoList: any) => {
    setProductPhoto(photoList);
  };

  const onRegist = () => {
    console.log('regist');
    const body = productData;
    if (
      productData.isUserNo &&
      productData.isItemName &&
      productData.isCategoryMain &&
      productData.isEndDate &&
      productData.isCoolPrice &&
      productData.isAuctionIngPrice &&
      productData.isAuctionInitPrice &&
      productData.isUsedStatus
    ) {
      console.log('data다있음');
      if (productPhoto.length > 0) {
        console.log(body);
        axios
          .post(
            'https://k4d107.p.ssafy.io/haggle-credit/itemSell/regist',
            body,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((res) => {
            console.log(res);
            uploadImage(productPhoto, res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const uploadImage = (imageList: ImageListType, res: any) => {
    const isItemNo = res.data.isItemNo;

    for (let i = 0; i < imageList.length; i++) {
      console.log(imageList[i]);
      const body2 = {
        ipItemNo: isItemNo,
        ipValue: imageList[i].dataURL,
      };
      axios
        .post(
          'https://k4d107.p.ssafy.io/haggle-credit/image/itemPhotoUpload',
          body2,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert('판매글을 등록하였습니다.');
          history.push('/home');
        })
        .catch((err) => {
          console.log(err);
          alert('판매글을 등록을 실패하였습니다.');
        });
    }
  };
  return (
    <div
      style={{
        // padding: '0 300px',
        margin: 'auto',
        width: '80vw',
        maxWidth: '1200px',
        paddingTop: '196px',
      }}
    >
      <div>
        <div
          id="header"
          style={{
            height: '90px',
            display: 'flex',
            borderBottom: '2px solid black',
          }}
        >
          <div style={{ fontSize: '25px', width: '150px', fontWeight: 500 }}>
            <p>판매글</p>
          </div>
          <div
            style={{
              position: 'relative',
              fontWeight: 500,
              marginTop: '15px',
            }}
          >
            <p style={{ color: 'red', fontSize: '15px' }}>
              <span>*</span>필수항목
            </p>
          </div>
        </div>
        <ProductImage onisProductPhoto={onisProductPhoto} />
        <ProductName onIsNameHandler={onIsNameHandler} />
        <ProductCategory
          onIsCategoryMain={onIsCategoryMain}
          onIsCategorySub={onIsCategorySub}
        />
        {/* <DealRegion /> */}
        <ProductState onIsUsedStatus={onIsUsedStatus} />
        <ProductPrice
          onIsCoolPrice={onIsCoolPrice}
          onIsAuctionPrice={onIsAuctionPrice}
          onIsEndDate={onIsEndDate}
        />
        <ProductDescription onIsContent={onIsContent} />

        {/* <div
          id="address"
          style={{
            display: 'flex',
            padding: '25px 0',
            borderBottom: '1px solid gray',
            marginBottom: '100px',
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
              교환<span style={{ color: 'red' }}>* </span>
            </p>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div>
                <Radio
                  id="radio1"
                  checked={changeSelectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <span>교환가능</span>
              </div>
              <div>
                <Radio
                  id="radio1"
                  checked={changeSelectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
                <span>교환불가</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div
          id="address"
          style={{
            display: 'flex',
            padding: '25px 0',
            borderBottom: '1px solid gray',
          }}
        >
          <div
            style={{
              width: '180px',
              fontSize: '17px',
              fontWeight: 'bolder',
            }}
          >
            <p>연관태그</p>
          </div>
          <div>
            <input
              style={{
                height: '40px',
                width: '800px',
                marginRight: '25px',
              }}
              placeholder="연관태그를 입력해주세요.(최대 5개)"
            ></input>
            <div
              style={{
                fontSize: '13px',
                marginTop: '5px',
              }}
            >
              <span>
                - 태그는 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있습니다.
              </span>
              <br />
              <span>
                - 태그는 검색의 부가정보로 사용 되지만, 검색 결과 노출을
                보장하지는 않습니다.
              </span>
              <br />
              <span>- 검색 광고는 태그정보를 기준으로 노출됩니다.</span>
              <br />
              <span>
                - 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드
                등을 입력하면 노출이 중단되거나 상품이 삭제될 수 있습니다.
              </span>
            </div>
          </div>
        </div> */}
        {/* <div
          id="address"
          style={{
            display: 'flex',
            padding: '25px 0',
            marginBottom: '100px',
          }}
        >
          <div
            style={{
              width: '180px',
              fontSize: '17px',
              fontWeight: 'bolder',
            }}
          >
            <p>수량</p>
          </div>
          <div>
            <input
              value="1"
              style={{
                height: '20px',
                padding: '10px',
                marginTop: '5px',
              }}
            ></input>{' '}
            개
          </div>
        </div> */}
      </div>
      <div
        style={{
          width: '80vw',
          maxWidth: '1200px',
          textAlign: 'center',
          padding: '10px 0',
          // backgroundColor: 'rgb(250, 250, 253)',
          backgroundColor: 'white',
          position: 'fixed',
          bottom: '10px',
        }}
      >
        <RegistButton onClick={onRegist}>등록하기</RegistButton>
      </div>
    </div>
  );
};

export default ProductRegistration;
