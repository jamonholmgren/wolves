import { Instance, SnapshotIn, SnapshotOut, getRoot } from "mobx-state-tree"
import { NPC } from "./npc"
import { GameStateType } from "./game"
import { Tile } from "../types"

export const Character = NPC.named("Character")
  .actions((char) => ({
    tryMove(x, y) {
      const succeeded = char.move(x, y)
      if (succeeded) {
        // let all the NPCs move too
        const game: GameStateType = getRoot(char)
        game.npcMove()
      }
    },
  }))
  .views((char) => ({
    passable(): Tile[] {
      return ["ground", "door"]
    },
  }))

export interface CharacterType extends Instance<typeof Character> {}
export interface CharacterSnapshotIn extends SnapshotIn<typeof Character> {}
export interface CharacterSnapshotOut extends SnapshotOut<typeof Character> {}
