import {
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
  getParent,
} from "mobx-state-tree"
import { GameStateType } from "./game"

export const Character = types
  .model("Character", {
    x: types.number,
    y: types.number,
    name: types.string,
  })
  .actions((character) => ({
    move(x: number, y: number) {
      const game: GameStateType = getParent(character)

      const newX = character.x + x
      const newY = character.y + y

      // You shall not pass
      if (!game.area.pass(newX, newY)) return

      // Okay, you can pass
      character.x = newX
      character.y = newY
    },
  }))
  .views((character) => ({
    // The character is at x/y coords
    at(x: number, y: number): boolean {
      return character.x === x && character.y === y
    },
  }))

export interface CharacterType extends Instance<typeof Character> {} // => { title: string; setTitle: (v: string) => void }
export interface CharacterSnapshotIn extends SnapshotIn<typeof Character> {} // => { title?: string }
export interface CharacterSnapshotOut extends SnapshotOut<typeof Character> {} // => { title: string }
