import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductImage from '../../components/itemBuy/ProductImage';

import ProductName from '../../components/itemBuy/ProductName';
import ProductCategory from '../../components/itemBuy/ProductCategory';
import DealRegion from '../../components/itemBuy/DealRegion';
import ProductPrice from '../../components/itemBuy/ProductPrice';
import ProductDescription from '../../components/itemBuy/ProductDescription';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import axios from 'axios';
import { ImageListType } from 'react-images-uploading';
import { useHistory } from 'react-router-dom';
import { changeProfileImageAPI } from '../../api/UserApi';

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
  const [isLoading, setIsLoading] = useState(false);

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
    return () => {};
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
    setIsLoading(true);
    // const body = productData;
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

    if (!body.ibUserNo) {
      alert('다시 로그인해주세요');
      setIsLoading(false);
      return;
    }

    if (!body.ibName) {
      alert('상품 이름을 입력해주세요');
      setIsLoading(false);
      return;
    }
    if (!body.ibCategoryMain) {
      alert('메인카테고리를 설정해주세요');
      setIsLoading(false);
      return;
    }

    if (!body.ibAuctionIngPrice && body.ibAuctionIngPrice) {
      alert('경매시작가격을 설정해주세요');
      setIsLoading(false);
      return;
    }

    if (!body.ibEndDate) {
      alert('경매종료시간을 설정해주세요');
      setIsLoading(false);
      return;
    }

    if (
      body.ibUserNo &&
      body.ibName &&
      body.ibCategoryMain &&
      body.ibEndDate &&
      body.ibAuctionIngPrice &&
      body.ibAuctionInitPrice &&
      body.ibDealAddress
    ) {
      axios
        .post('https://k4d107.p.ssafy.io/haggle-credit/itemBuy/regist', body, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          alert('구매글을 등록하였습니다.');
          uploadImage(productPhoto, res);
          history.push('/home');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };
  const uploadImage = async (imageList: ImageListType, res: any) => {
    if (imageList.length > 0) {
      const ibItemNo = res.data.ibItemNo;

      imageList.forEach((item, idx) => {
        if (item.file && ibItemNo) {
          let formd = new FormData();
          formd.append('File', item.file);
          formd.append('iNo', ibItemNo);
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
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        }
      });
    } else {
      const ibItemNo = res.data.ibItemNo;

      let formd = new FormData();
      formd.append('file', 'null');
      formd.append('iNo', ibItemNo);
      formd.append('check', 'false');

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
        .then((res) => {})
        .catch((err) => {
          console.log(err);
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
          position: 'fixed',
          backgroundColor: 'white',
          paddingBottom: '20px',
          bottom: '0px',
        }}
      >
        <RegistButton onClick={onRegist}>
          {!isLoading ? <span>등록하기</span> : <span>Loading...</span>}
        </RegistButton>
      </div>
    </>
  );
};

export default ItemBuy;
