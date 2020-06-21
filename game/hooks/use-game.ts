import { GameState, GameStateType } from "../state/game"
import { Character } from "../state/character"
import { useKeyPress } from "./use-key-press"
import { homeMap, startPos } from "../maps/home"
import { Wolf } from "../state/wolf"

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
  return _game
}

export function useGame(): GameStateType {
  const game = getGame()

  useKeyPress("w", () => game.character.tryMove(0, -1))
  useKeyPress("s", () => game.character.tryMove(0, 1))
  useKeyPress("a", () => game.character.tryMove(-1, 0))
  useKeyPress("d", () => game.character.tryMove(1, 0))

  return game
}
