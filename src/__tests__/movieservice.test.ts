/**
 * @jest-environment jsdom
 */

import { IMovie } from "../ts/models/Movie";

import { getData } from "../ts/services/movieservice";

import { mockData } from "../ts/services/__mocks__/movieservice";

/* import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>; */

//jest.mock("./../ts/services/movieservice.ts");

/* let mockData: IMovie[] = [
  {
    Title: "Harry Potter 1",
    imdbID: "1",
    Type: "Movie",
    Poster: "url",
    Year: "2001",
  },
  {
    Title: "Harry Potter 2",
    imdbID: "2",
    Type: "Movie",
    Poster: "url",
    Year: "2002",
  },
  {
    Title: "Harry Potter 3",
    imdbID: "3",
    Type: "Movie",
    Poster: "url",
    Year: "2003",
  },
];
*/
jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({
        data: {
          Search: mockData,
        },
      });
    });
  },
}));

test("Should get mock data", async () => {
  //arrange

  let searchText: string = "hej";

  expect.assertions(2);

  //act

  let response: IMovie[] = await getData(searchText);

  //assert

  expect(response.length).toBe(3);

  expect(response[0].Title).toBe("Harry Potter 1");
});
