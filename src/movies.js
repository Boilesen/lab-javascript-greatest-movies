// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directorsArray = movies.map((movie) => {
    return movie.director;
  });
  return directorsArray;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaMovies = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return dramaMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const sum = (movie) => {
    return movie.rate;
  };
  let avg = movies.reduce((acc, el) => {
    acc += sum(el) / movies.length;
    return acc;
  }, 0);
  return Number(avg.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaArray = movies.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  let dramaRate = (dramaArray) => {
    return dramaArray.rate;
  };
  let dramaavg = dramaArray.reduce((acc, el) => {
    acc += dramaRate(el) / dramaArray.length;
    return acc;
  }, 0);
  return Number(dramaavg.toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = (arr) => {
  let sortedByYear = arr.sort((a, b) => a.year - b.year);

  let anos = sortedByYear.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title === b.title) {
        return 0;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  return [...anos];
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (arr) => {
  let mySort = [...arr].sort((a, b) => a.title.localeCompare(b.title));
  let myTitles = mySort.map((el) => el.title);
  return myTitles.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
