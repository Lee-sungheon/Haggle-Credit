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
            <p style={{ position: 'relative', top: '40%' }}>사진</p>
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
                }}
              >
                <button
                  style={{
                    margin: '0',
                    marginRight: '25px',
                    marginBottom: '10px',
                    backgroundColor: 'white',
                    border: '1px solid gray',
                    color: 'rgb(136, 136, 136)',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    width: '50px',
                    height: '30px',
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
      </div>
    </div>
  );
};

export default Profile;
