import { useState } from 'react';
import Radio from '@material-ui/core/Radio';

const ProductRegistration = () => {
  const [stateSelectedValue, setStateSelectedValue] = useState('a');
  const [changeSelectedValue, setChangeSelectedValue] = useState('a');

  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateSelectedValue(event.target.value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChangeSelectedValue(event.target.value);
  };
  return (
    <div
      style={{
        // padding: '0 300px',
        margin: 'auto',
        width: '1200px',
        paddingTop: '196px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            width: '120px',
            height: '50px',
          }}
        >
          <p>상품등록</p>
        </div>
        <div
          style={{
            width: '120px',
            height: '50px',
          }}
        >
          <p>상품관리</p>
        </div>
        <div
          style={{
            width: '120px',
            height: '50px',
          }}
        >
          <p>구매/판매 내역</p>
        </div>
      </div>
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
            <p>기본정보</p>
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
        <div
          id="imgSection"
          style={{
            display: 'flex',
            borderBottom: '1px solid gray',
            padding: '25px 0',
          }}
        >
          <div
            style={{ width: '180px', fontSize: '17px', fontWeight: 'bolder' }}
          >
            <p>
              상품이미지<span style={{ color: 'red' }}>* </span>
              <span style={{ color: 'gray', fontWeight: 'normal' }}>
                (0/12)
              </span>
            </p>
          </div>
          <div
            style={{
              width: 'auto',
            }}
          >
            <div style={{ height: '200px' }}>
              <div
                style={{
                  width: '200px',
                  backgroundColor: '#eeeeee',
                  height: '100%',
                }}
              >
                <p>이미지 등록</p>
                <input
                  type="file"
                  id="input-file"
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            <div
              style={{ marginTop: '10px', color: '#29b6f6', fontSize: '14px' }}
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
                - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
              </span>
              <br />
              <span>
                - 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
              </span>
              <br />
              <span>
                최대 지원 사이즈인 640 X 640 으로 리사이즈 해서 올려주세요.(개당
                이미지 최대 10M)
              </span>
              <br />
            </div>
          </div>
        </div>
        <div
          id="titleSection"
          style={{
            height: 'auto',
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
              제목<span style={{ color: 'red' }}>* </span>
            </p>
          </div>
          <div>
            <input
              style={{
                height: '40px',
                width: '800px',
                border: '1px solid #FF6600',
                marginRight: '25px',
              }}
              placeholder="상품 제목을 입력해주세요."
            ></input>
            <span>(0/40)</span>
          </div>
        </div>
        <div
          id="categorySection"
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
            <p>
              카테고리<span style={{ color: 'red' }}>* </span>
            </p>
          </div>
          <div></div>
        </div>
        <div
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
            <p>
              거래지역<span style={{ color: 'red' }}>* </span>
            </p>
          </div>
        </div>
        <div
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
            <p>
              상태<span style={{ color: 'red' }}>* </span>
            </p>
          </div>
          <div
            style={{
              display: 'flex',
            }}
          >
            <div>
              <Radio
                id="radio1"
                checked={stateSelectedValue === 'a'}
                onChange={handleState}
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />
              <span>중고상품</span>
            </div>
            <div>
              <Radio
                id="radio1"
                checked={stateSelectedValue === 'b'}
                onChange={handleState}
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
              />
              <span>중고상품</span>
            </div>
          </div>
        </div>
        <div
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
        </div>
        <div
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
            <p>
              가격<span style={{ color: 'red' }}>* </span>
            </p>
          </div>
          <div>
            <div>
              <input
                style={{
                  height: '20px',
                  width: '200px',
                  padding: '10px',
                }}
                placeholder="숫자만 입력해주세요."
              ></input>{' '}
              원
            </div>
            <div></div>
          </div>
        </div>
        <div
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
            <p>설명</p>
          </div>
          <div>
            <textarea
              placeholder="상품설명을 입력해주세요."
              style={{ width: '1000px', height: '200px' }}
            ></textarea>
            <p style={{ textAlign: 'right', marginTop: '-2px' }}>0/2000</p>
          </div>
        </div>
        <div
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
        </div>
        <div
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
        </div>
      </div>
      <div
        style={{
          width: '1200px',
          textAlign: 'center',
          padding: '10px 0',
          // backgroundColor: 'rgb(250, 250, 253)',
          backgroundColor: 'white',
          position: 'fixed',
          bottom: '10px',
        }}
      >
        <button
          style={{
            height: '50px',
            width: '200px',
            backgroundColor: '#FF6600',
            color: 'white',
            border: 'none',
          }}
        >
          등록하기
        </button>
      </div>
    </div>
  );
};

export default ProductRegistration;
