import { GameState, GameStateType } from "../state/game"
import { Character } from "../state/character"
import { homeMap, startPos } from "../maps/home"
import { Wolf } from "../state/wolf"
import { gameKeys } from "../input/keys"

let _game
function getGame() {
  if (_game) return _game

  _game = GameState.create({
    character: Character.create({
      x: startPos[0],
      y: startPos[1],
      hp: 100,
    }),
    area: { map: homeMap },
    wolves: [
      Wolf.create({ x: 10, y: 10, hp: 100, status: "neutral" }),
      Wolf.create({ x: 14, y: 6, hp: 100, status: "neutral" }),
      Wolf.create({ x: 20, y: 19, hp: 100, status: "neutral" }),
      Wolf.create({ x: 5, y: 17, hp: 100, status: "hostile" }),
    ],
  })

  if (process.browser) _game.wolfHowl()

  return _game
}

export function useGame(): GameStateType {
  const game = getGame()

  gameKeys(game)

  return game
}
