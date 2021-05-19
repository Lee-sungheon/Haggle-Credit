import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductImage from '../../components/productRegistration/ProductImage';
import ProductName from '../../components/productRegistration/ProductName';
import ProductCategory from '../../components/productRegistration/ProductCategory';
import ProductEventAgree from '../../components/productRegistration/ProductEventAgree';
import ProductState from '../../components/productRegistration/ProductState';
import ProductPrice from '../../components/productRegistration/ProductPrice';
import ProductDescription from '../../components/productRegistration/ProductDescription';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import axios from 'axios';
import { ImageListType } from 'react-images-uploading';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
  padding: 196px 200px 0 200px;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    padding: 196px 40px 0 40px;
  }
`;

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
    isEventAgree: '',
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
  const onIsEventAgree = (eventAgree: any) => {
    setProductData({ ...productData, isEventAgree: eventAgree });
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
      productData.isUsedStatus &&
      productData.isEventAgree
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
    if (imageList.length > 0) {
      const isItemNo = res.data.isItemNo;
      console.log(isItemNo);
      console.log(imageList);

      imageList.forEach((item, idx) => {
        if (item.file && isItemNo) {
          let formd = new FormData();
          formd.append('file', item.file);
          formd.append('iNo', isItemNo);
          formd.append('check', 'true');

          axios
            .post(
              'https://k4d107.p.ssafy.io/haggle-credit/image/itemPhotoUpload',
              formd,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
      alert('판매글을 등록하였습니다.');

      history.push('/home');
    } else {
      alert('판매글 등록을 실패하였습니다.');
    }
    // for (let i = 0; i < imageList.length; i++) {
    //   console.log(imageList[i]);
    //   const body2 = {
    //     ipItemNo: isItemNo,
    //     ipValue: imageList[i].dataURL,
    //   };
    //   axios
    //     .post(
    //       'https://k4d107.p.ssafy.io/haggle-credit/image/itemPhotoUpload',
    //       body2,
    //       {
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res);
    //       alert('판매글을 등록하였습니다.');
    //       history.push('/home');
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       alert('판매글을 등록을 실패하였습니다.');
    //     });
    // }
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
              <p>판매글</p>
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
          {/* <DealRegion /> */}
          <ProductState onIsUsedStatus={onIsUsedStatus} />
          <ProductEventAgree onIsEventAgree={onIsEventAgree} />
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
          position: 'fixed',
          backgroundColor: 'white',
          paddingBottom: '20px',
          bottom: '0px',
        }}
      >
        <RegistButton onClick={onRegist}>등록하기</RegistButton>
      </div>
    </>
  );
};

export default ProductRegistration;
