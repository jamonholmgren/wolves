import { GameState } from "../state/game"
import { Character } from "../state/character"
import { useKeyPress } from "./use-key-press"
import { homeMap, startPos } from "../maps/home"

let _game
const getGame = () => {
  if (_game) return _game

  _game = GameState.create({
    character: Character.create({
      x: startPos[0],
      y: startPos[1],
    }),
    area: { map: homeMap },
  })
  return _game
}

export const useGame = () => {
  const game = getGame()

  useKeyPress("w", () => game.character.move(0, -1))
  useKeyPress("s", () => game.character.move(0, 1))
  useKeyPress("a", () => game.character.move(-1, 0))
  useKeyPress("d", () => game.character.move(1, 0))

  return game
}
