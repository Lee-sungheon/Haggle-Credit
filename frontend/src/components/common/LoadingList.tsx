import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import LoadingItem from './LoadingItem';

interface Props {
  itemNum: number;
}

const useStyles = makeStyles(() => ({
  gridList: {
    height: "100%",
  },
}));

const LoadingList = ({itemNum}: Props) => {
  const classes = useStyles();
  
  return (
    <GridList
    cellHeight={"auto"}
    className={classes.gridList}
    cols={itemNum}
    spacing={7}
    >
      {products.length > 0 && products.map((item) => (
        <GridListTile key={item}>
          <LoadingItem />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default LoadingList;

const products: number[] = []
for (let i=0; i<100 ; i++){
  products.push(i)
}