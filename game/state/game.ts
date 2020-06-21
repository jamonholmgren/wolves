import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { Character } from "./character"
import { Wolf } from "./wolf"
import { Area } from "./area"

export const GameState = types
  .model("GameState", {
    character: Character,
    area: Area,
    wolves: types.array(Wolf),
  })
  .actions((game) => ({
    npcMove() {
      console.log("moving")
      game.wolves.forEach((wolf) => wolf.aiMove())
    },
  }))

export interface GameStateType extends Instance<typeof GameState> {}
export interface GameStateSnapshotIn extends SnapshotIn<typeof GameState> {}
export interface GameStateSnapshotOut extends SnapshotOut<typeof GameState> {}
