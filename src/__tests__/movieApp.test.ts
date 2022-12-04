/**
 * @jest-environment jsdom
 */
import * as movieAppFunctions from "../ts/movieApp";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";

/* import { jest } from "@jest/globals";
import * as movieserviceFunctions from "../ts/services/movieservice";
import { mockData } from "../ts/services/__mocks__/movieservice";
import { AxiosResponse } from "axios"; */

jest.mock("../ts/services/movieservice.ts");

//init

test("should call handleSubmit", () => {
  // arrange
  let spy = jest.spyOn(movieAppFunctions, "handleSubmit").mockReturnThis();

  document.body.innerHTML = `
      <form id="searchForm">
      <button type="submit" id="search">Sök</button>
      </form>
      `;

  movieAppFunctions.init();

  expect.assertions(1);

  //act
  (document.getElementById("searchForm") as HTMLFormElement)?.submit();

  //assert
  expect(spy).toHaveBeenCalled();

  document.body.innerHTML = "";
});

//handleSubmit

describe("handleSubmit()", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should call createHTML", async () => {
    document.body.innerHTML = `
 
  <form id="searchForm">
  <input type="text" id="searchText" placeholder="Skriv titel här" />
  <button type="submit" id="search">Sök</button>
  </form>
  <div id="movie-container"></div>
  `;

    let spy = jest.spyOn(movieAppFunctions, "createHtml").mockReturnValue();
    expect.assertions(1);

    //act
    await movieAppFunctions.handleSubmit();

    //Assert
    expect(spy).toHaveBeenCalled();

    document.body.innerHTML = "";
  });
});

//createHTML
describe("createHtml", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should create html", async () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let searchText: string = "hej";
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    let movies: IMovie[] = await getData(searchText);
    expect.assertions(3);

    //Act

    movieAppFunctions.createHtml(movies, container);

    //Assset

    expect(document.querySelectorAll("div.movie")?.length).toBe(3);

    expect(document.querySelectorAll("h3")?.length).toBe(3);

    expect(document.querySelectorAll("img")?.length).toBe(3);

    document.body.innerHTML = "";
  });
});

//displayNoResult
test("should display message", async () => {
  // arrange
  /*
  let container: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  let noMessage: HTMLParagraphElement = document.createElement(
    "p"
  ) as HTMLParagraphElement;
  noMessage.innerHTML = "Inga sökresultat att visa";
  expect.assertions(1);
  //act
  movieAppFunctions.displayNoResult(container);
  //assert
  //assert
    expect(container.innerHTML).toBe(`<p>Inga sökresultat att visa</p>`);
 */

  document.body.innerHTML = `<div id="movie-container"></div>`;
  let container: HTMLDivElement = document.getElementById(
    "movie-container"
  ) as HTMLDivElement;
  expect.assertions(1);

  //act
  movieAppFunctions.displayNoResult(container);
  //assert
  expect(document.querySelector("p")?.innerHTML).toBe(
    `Inga sökresultat att visa`
  );

  document.body.innerHTML = "";
});
