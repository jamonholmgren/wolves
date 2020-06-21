import { GameStateType } from "../state/game"
import { useKeyPress } from "../hooks/use-key-press"

export function gameKeys(game: GameStateType) {
  // wasd
  useKeyPress("w", () => game.character.tryMove(0, -1))
  useKeyPress("x", () => game.character.tryMove(0, 1))
  useKeyPress("a", () => game.character.tryMove(-1, 0))
  useKeyPress("d", () => game.character.tryMove(1, 0))

  // diagonal
  useKeyPress("q", () => game.character.tryMove(-1, -1))
  useKeyPress("e", () => game.character.tryMove(1, -1))
  useKeyPress("c", () => game.character.tryMove(1, 1))
  useKeyPress("z", () => game.character.tryMove(-1, 1))

  // rest
  useKeyPress("s", () => game.character.rest())
}
