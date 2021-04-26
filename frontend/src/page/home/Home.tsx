import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

const Home = () => {
  const similarMovie = useSelector((state: RootState) => state.home.movieLists);
  useEffect(()=>{
    console.log(similarMovie);
  });
  return (
    <>
      <h1>YES</h1>
      {similarMovie.map((item, idx) => (
        <div key={idx}>{Object.keys(item)}</div>
      ))}
    </>
  );
};

export default Home;