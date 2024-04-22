const gamesRouter = require("express").Router();
const {
  getAllGames,
  deleteGame,
  addGameController,
} = require("../controllers/games");

gamesRouter.post("/games", addGameController);
gamesRouter.get("/games", getAllGames);
gamesRouter.delete("/games/:id", deleteGame);


module.exports = gamesRouter;
