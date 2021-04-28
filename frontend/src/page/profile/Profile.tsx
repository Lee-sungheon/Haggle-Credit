import ProfileTab from '../../components/profile/ProfileTab';

const Profile = () => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '1000px',
          height: '600px',
          margin: 'auto',
          marginTop: '196px',
          fontSize: '18px',
          fontFamily: 'Bazzi',
          border: '1px solid black',
        }}
      >
        <div
          style={{
            width: '1000px',
            height: '300px',
            border: '1px solid black',
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '300px',
              height: '300px',
              border: '1px solid black',
            }}
          >
            <div style={{ position: 'relative', top: '50%' }}>
              <label
                htmlFor="input-file"
                style={{
                  padding: '6px 25px',
                  backgroundColor: '#FF6600',
                  borderRadius: '4px',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                사진등록
              </label>
              <input type="file" id="input-file" style={{ display: 'none' }} />
            </div>
          </div>
          <div
            style={{
              width: '700px',
              height: '300px',
              border: '1px solid black',
            }}
          >
            <div
              style={{
                width: '700px',
                height: '70px',
                border: '1px solid black',
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: '200px',
                  height: 'auto',
                  border: '1px solid black',
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    position: 'relative',
                    paddingLeft: '20px',
                    top: '50%',
                    transform: `translateY(-50%)`,
                  }}
                >
                  손동민 님
                </p>
              </div>
              <div
                style={{
                  width: '200px',
                  height: 'auto',
                  border: '1px solid black',
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    position: 'relative',
                    paddingLeft: '20px',
                    top: '50%',
                    transform: `translateY(-50%)`,
                  }}
                >
                  보유 credit : 0 C
                </p>
              </div>
              {/* <div
                style={{
                  width: '300px',
                  height: 'auto',
                  border: '1px solid black',
                  textAlign: 'right',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    position: 'relative',
                    paddingRight: '20px',
                    transform: `translateY(60%)`,
                  }}
                >
                  계좌연결 완료
                </p>
                <p
                  style={{
                    margin: 0,
                    position: 'relative',
                    paddingRight: '20px',
                    transform: `translateY(80%)`,
                  }}
                >
                  연결계좌변경
                </p>
              </div> */}
              <div
                style={{
                  width: '300px',
                  height: 'auto',
                  border: '1px solid black',
                  textAlign: 'right',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    position: 'relative',
                    paddingRight: '20px',
                    transform: `translateY(60%)`,
                  }}
                >
                  연결된계좌 없음
                </p>
                <p
                  style={{
                    margin: 0,
                    position: 'relative',
                    paddingRight: '20px',
                    transform: `translateY(80%)`,
                  }}
                >
                  계좌 연결
                </p>
              </div>
            </div>
            <div
              style={{
                border: '1px solid red',
                height: '230px',
                marginLeft: '20px',
              }}
            >
              <p
                style={{
                  textAlign: 'left',
                  marginBottom: '0',
                }}
              >
                내 소개
              </p>
              <div
                style={{
                  margin: '0',
                  textAlign: 'right',
                  marginTop: '-20px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <button
                  style={{
                    fontSize: '10px',
                    margin: '0',
                    marginRight: '25px',
                    marginBottom: '10px',
                    backgroundColor: 'white',
                    border: '1px solid gray',
                    color: 'rgb(136, 136, 136)',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    width: '50px',
                    height: '20px',
                    // hover: ,
                  }}
                >
                  수정
                </button>
              </div>
              {/* <div
                style={{
                  margin: '0',
                  textAlign: 'right',
                  marginTop: '-20px',
                }}
              >
                <button
                  style={{
                    margin: '0',
                    marginRight: '40px',
                    marginBottom: '10px',
                  }}
                >
                  수정완료
                </button>
              </div> */}
              {/* <div
                style={{
                  border: '1px solid black',
                  width: '90%',
                  height: '60%',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
                가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
              </div> */}
              <textarea
                style={{
                  border: '1px solid black',
                  width: '90%',
                  height: '60%',
                  textAlign: 'left',
                  padding: '8px',
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <ProfileTab></ProfileTab>
      </div>
    </div>
  );
};

export default Profile;
