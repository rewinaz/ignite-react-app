const apiKey = "1b6f74392d9b4f83981bd528b8d002f2";

// Base URL
const base_url = `https://api.rawg.io/api/`;

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// https://api.rawg.io/api/games?key=1b6f74392d9b4f83981bd528b8d002f2&dates=2019-09-01,2019-09-30
// Popular Games
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;
// Game DEtails
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${apiKey}`;
export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${apiKey}`;
// Searched game
export const searchGameUrl = (game_name) =>
  `${base_url}games?search=${game_name}&key=${apiKey}&page_size=9`;
