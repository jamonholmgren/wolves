import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { Character } from "./character"
import { Area } from "./area"

export const GameState = types.model("GameState", {
  character: Character,
  area: Area,
})

export interface GameStateType extends Instance<typeof GameState> {} // => { title: string; setTitle: (v: string) => void }
export interface GameStateSnapshotIn extends SnapshotIn<typeof GameState> {} // => { title?: string }
export interface GameStateSnapshotOut extends SnapshotOut<typeof GameState> {} // => { title: string }
