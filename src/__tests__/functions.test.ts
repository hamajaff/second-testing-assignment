/**
 * @jest-environment jsdom
 */

import * as functions from "./../ts/functions";
import { IMovie } from "./../ts/models/Movie";

describe("movieSort", () => {
  test("should sort movies from a to z", () => {
    //Arrange
    let myMovies: IMovie[] = [
      {
        Title: "Harry Potter",
        imdbID: "1",
        Type: "Movie",
        Poster: "url",
        Year: "2001",
      },

      {
        Title: "Toy Story",
        imdbID: "1",
        Type: "Movie",
        Poster: "url",
        Year: "1995",
      },

      {
        Title: "Aladdin",
        imdbID: "3",
        Type: "Movie",
        Poster: "url",
        Year: "1992",
      },
    ];

    expect.assertions(2);

    //Act
    functions.movieSort(myMovies);

    //Assert

    expect(myMovies[0].Title).toBe("Aladdin");
    expect(myMovies[2].Title).toBe("Toy Story");
  });

  test("should sort movies from z to a", () => {
    //Arrange

    let myMovies: IMovie[] = [
      {
        Title: "Harry Potter",
        imdbID: "1",
        Type: "Movie",
        Poster: "url",
        Year: "2001",
      },

      {
        Title: "Toy Story",
        imdbID: "1",
        Type: "Movie",
        Poster: "url",
        Year: "1995",
      },

      {
        Title: "Aladdin",
        imdbID: "3",
        Type: "Movie",
        Poster: "url",
        Year: "1992",
      },
    ];
    let desc: boolean = false;
    expect.assertions(2);

    //Act

    functions.movieSort(myMovies, desc);
    //Assert

    expect(myMovies[0].Title).toBe("Toy Story");
    expect(myMovies[2].Title).toBe("Aladdin");
  });

  test("should not sort movies from a to z", () => {
    //Arrange
    let myMovies: IMovie[] = [
      {
        Title: "Harry Potter",
        imdbID: "1",
        Type: "Movie",
        Poster: "url",
        Year: "1997",
      },
      {
        Title: "Harry Potter",
        imdbID: "2",
        Type: "Movie",
        Poster: "url",
        Year: "1998",
      },
      {
        Title: "Harry Potter",
        imdbID: "3",
        Type: "Movie",
        Poster: "url",
        Year: "1999",
      },
    ];
    expect.assertions(2);

    //Act

    functions.movieSort(myMovies);

    //Assert
    expect(myMovies[0].Year).toBe("1997");
    expect(myMovies[2].Year).toBe("1999");
  });

  test("should not sort movies from z to a", () => {
    //Arrange
    let myMovies: IMovie[] = [
      {
        Title: "Harry Potter",
        imdbID: "1",
        Type: "Movie",
        Poster: "url",
        Year: "1997",
      },
      {
        Title: "Harry Potter",
        imdbID: "1",
        Type: "Movie",
        Poster: "url",
        Year: "1998",
      },
      {
        Title: "Harry Potter",
        imdbID: "1",
        Type: "Movie",
        Poster: "url",
        Year: "1999",
      },
    ];

    let desc: boolean = false;
    expect.assertions(2);

    //Act

    functions.movieSort(myMovies, desc);

    //Assert
    expect(myMovies[0].Year).toBe("1997");
    expect(myMovies[2].Year).toBe("1999");
  });
});
