import styled from 'styled-components';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import ProductItem from './ProductItem';
import { ITEM } from "styled-components";

interface PruductListProps {
  buy: boolean;
  products: ITEM[];
  itemNum: number;
}

const useStyles = makeStyles(() => ({
  gridList: {
    height: "100%",
  },
}));

const NoneContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0px 8rem;
`;

const NoneBox = styled.div`
  width: 100%;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 35px;
`;

const ProductList = ({buy, products, itemNum}: PruductListProps) => {
  const classes = useStyles();
  
  return (
    <>
    <GridList
    cellHeight={"auto"}
    className={classes.gridList}
    cols={itemNum}
    spacing={7}
    >
      {products.length > 0 && products.map((item, idx) => (
        <GridListTile key={idx}>
          <ProductItem item={item} buy={buy}/>
        </GridListTile>
      ))}
    </GridList>
    {products.length === 0 &&
      <NoneContainer>
        <NoneBox>
          검색결과가 없습니다.
        </NoneBox>
      </NoneContainer>}
    </>
  );
}

export default ProductList;