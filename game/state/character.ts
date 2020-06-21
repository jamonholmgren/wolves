import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"

export const Character = types
  .model("Character", {
    x: types.number,
    y: types.number,
    name: types.string,
  })
  .actions((character) => ({
    move(x: number, y: number) {
      character.x += x
      character.y += y
      console.log(character.x, character.y)
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
