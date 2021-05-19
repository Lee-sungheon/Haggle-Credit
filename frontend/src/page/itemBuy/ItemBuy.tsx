import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductImage from '../../components/itemBuy/ProductImage';

import ProductName from '../../components/itemBuy/ProductName';
import ProductCategory from '../../components/itemBuy/ProductCategory';
import DealRegion from '../../components/itemBuy/DealRegion';
import ProductPrice from '../../components/itemBuy/ProductPrice';
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
const Container = styled.div`
  text-align: center;
  padding: 196px 200px 0 200px;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    padding: 196px 40px 0 40px;
  }
`;
const ItemBuy = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
  const history = useHistory();

  const [productData, setProductData] = useState({
    ibUserNo: 0,
    ibName: '',
    ibCategoryMain: '',
    ibCategorySub: '',
    ibContent: '',
    ibEndDate: '',
    ibCoolPrice: 0,
    ibAuctionIngPrice: 0,
    ibAuctionInitPrice: 0,
    ibDealAddress: -1,
  });
  const [productPhoto, setProductPhoto] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (userData.uNo) {
      setProductData({ ...productData, ibUserNo: userData.uNo });
    }
  }, [userData]);
  const onIsNameHandler = (name: any) => {
    setProductData({ ...productData, ibName: name });
  };
  const onIsRegionHandler = (address: any) => {
    setProductData({ ...productData, ibDealAddress: address });
  };
  const onIsCategoryMain = (categoryMain: any) => {
    setProductData({ ...productData, ibCategoryMain: categoryMain });
  };
  const onIsCategorySub = (categorySub: any) => {
    setProductData({ ...productData, ibCategorySub: categorySub });
  };
  const onIsContent = (content: any) => {
    setProductData({ ...productData, ibContent: content });
  };
  const onIsEndDate = (endDate: any) => {
    setProductData({ ...productData, ibEndDate: endDate });
  };
  const onIsCoolPrice = (coolPrice: any) => {
    let price = Math.floor(Number(coolPrice) / 100) * 100;
    setProductData({ ...productData, ibCoolPrice: price });
  };
  const onIsAuctionPrice = (auctionPrice: any) => {
    let price = Math.floor(Number(auctionPrice) / 100) * 100;
    setProductData({
      ...productData,
      ibAuctionIngPrice: price,
      ibAuctionInitPrice: price,
    });
  };

  const onisProductPhoto = (photoList: any) => {
    setProductPhoto(photoList);
  };

  const onRegist = () => {
    console.log('regist');
    const body = {
      ibUserNo: userData.uNo,
      ibName: productData.ibName,
      ibCategoryMain: productData.ibCategoryMain,
      ibCategorySub: productData.ibCategorySub,
      ibContent: productData.ibContent,
      ibEndDate: productData.ibEndDate,
      ibAuctionIngPrice: productData.ibAuctionIngPrice,
      ibAuctionInitPrice: productData.ibAuctionInitPrice,
      ibDealAddress: productData.ibDealAddress,
    };
    console.log(body);

    if (
      productData.ibUserNo &&
      productData.ibName &&
      productData.ibCategoryMain &&
      productData.ibEndDate &&
      productData.ibAuctionIngPrice &&
      productData.ibAuctionInitPrice &&
      productData.ibDealAddress
    ) {
      console.log('data다있음');
      if (productPhoto.length > 0) {
        console.log(body);
        axios
          .post(
            'https://k4d107.p.ssafy.io/haggle-credit/itemBuy/regist',
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
    const ibItemNo = res.data.ibItemNo;
    console.log(ibItemNo);
    for (let i = 0; i < imageList.length; i++) {
      console.log(imageList[i]);
      const body2 = {
        ipItemNo: ibItemNo,
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
          alert('구매글을 등록하였습니다.');
          history.push('/home');
        })
        .catch((err) => {
          console.log(err);
          alert('구매글 등록을 실패하였습니다.');
        });
    }
  };
  return (
    <>
      <Container>
        <div>
          <div
            id="header"
            style={{
              height: '4.5vw',
              display: 'flex',
              borderBottom: '0.1vw solid black',
            }}
          >
            <div
              style={{ fontSize: '1.25vw', width: '7.5vw', fontWeight: 500 }}
            >
              <p>구매글</p>
            </div>
            <div
              style={{
                position: 'relative',
                fontWeight: 500,
                marginTop: '0.75vw',
              }}
            >
              <p style={{ color: 'red', fontSize: '0.75vw' }}>
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
          <DealRegion onIsRegionHandler={onIsRegionHandler} />
          <ProductPrice
            onIsCoolPrice={onIsCoolPrice}
            onIsAuctionPrice={onIsAuctionPrice}
            onIsEndDate={onIsEndDate}
          />
          <ProductDescription onIsContent={onIsContent} />
        </div>
      </Container>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          padding: '10px 0',
          // backgroundColor: 'rgb(250, 250, 253)',
          position: 'fixed',
          backgroundColor: 'white',
          bottom: '10px',
        }}
      >
        <RegistButton onClick={onRegist}>등록하기</RegistButton>
      </div>
    </>
  );
};

export default ItemBuy;
