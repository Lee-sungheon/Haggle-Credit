import axios from "axios";

export function callApiMovieList() {
  const url: string = `netcha/movie/list`;
  return axios
    .get(url)
    .then((Response) => {
      return Response.data;
    })
    .catch((Error) => {
      console.log(Error);
    });
}