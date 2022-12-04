import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/Movie";

export const mockData: IMovie[] = [
  {
    Title: "Harry Potter 1",
    imdbID: "1",
    Type: "Movie",
    Poster: "url",
    Year: "1997",
  },

  {
    Title: "Harry Potter 2",
    imdbID: "2",
    Type: "Movie",
    Poster: "url",
    Year: "1998",
  },

  {
    Title: "Harry Potter 3",
    imdbID: "3",
    Type: "Movie",
    Poster: "url",
    Year: "1999",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(mockData);
  });
};
