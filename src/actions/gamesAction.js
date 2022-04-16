import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

// ACTIONS Creator

export const loadGames = () => async (dispatch) => {
  // Fetch axios
  const popularGameData = await axios.get(popularGamesUrl());
  const newGameData = await axios.get(newGamesUrl());
  const upcomingGameData = await axios.get(upcomingGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGameData.data.results,
      newGames: newGameData.data.results,
      upcoming: upcomingGameData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
