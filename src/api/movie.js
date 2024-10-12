import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASEURL;
const apiToken = import.meta.env.VITE_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiToken}`,
  },
};

// MEnagmbil movie tranding
export const getMovieTrending = async () => {
  try {
    const trending = await axios.get(
      `${BASE_URL}/movie/popular?language=en-US&page=1`,
      options
    );
    // console.log({ Trending: trending.data.results });
    return trending.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return []; // Return an empty array in case of an error
  }
};

export const getMovieList = async () => {
  try {
    const movie = await axios.get(
      `${BASE_URL}discover/movie?language=en-US&page=1&sort_by=primary_release_date.desc`,
      options
    );
    // console.log({ movie: movie.data.results });
    return movie.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return []; // Return an empty array in case of an error
  }
};
