import { GameState } from "../state/game"
import { Character } from "../state/character"
import { useKeyPress } from "./use-key-press"

let _game
const getGame = () => {
  if (_game) return _game

  _game = GameState.create({
    character: Character.create({
      x: 10,
      y: 10,
      name: "Hans",
    }),
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
