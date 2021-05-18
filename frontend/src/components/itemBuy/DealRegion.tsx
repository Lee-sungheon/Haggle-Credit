import { useState } from 'react';
import styled from 'styled-components';
import Destination from './Destination';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
interface DealRegionProps {
  onIsRegionHandler: (name: any) => void;
}
const Container = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 25px 0;
  width: 100%;
`;

const DealRegion = ({ onIsRegionHandler }: DealRegionProps) => {
  const userData = useSelector((state: RootState) => state.user.userData);

  let isModal: boolean = false;

  return (
    <Container id="titleSection">
      <div
        style={{
          width: '20%',
          fontSize: '17px',
          fontWeight: 'bolder',
          minWidth: '130px',
        }}
      >
        거래지역<span style={{ color: 'red' }}>* </span>
      </div>
      <div
        style={{
          width: '80%',
          paddingLeft: '20px',
          minWidth: '650px',
          textAlign: 'left',
        }}
      >
        <Destination
          isModal={isModal}
          onIsRegionHandler={onIsRegionHandler}
          userData={userData}
        />
      </div>
    </Container>
  );
};

export default DealRegion;
