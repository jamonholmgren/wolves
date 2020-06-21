import {
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
  getRoot,
} from "mobx-state-tree"
import { NPC } from "./npc"
import { GameStateType } from "./game"

export const Wolf = NPC.props({
  status: types.enumeration(["neutral", "hostile", "friendly"]),
}).actions((wolf) => ({
  aiMove() {
    const game = getRoot(wolf) as GameStateType

    // if far away, just move randomly
    if (wolf.distanceTo(game.character) >= 5) return wolf.moveRandom()

    // the wolf will now do something based on its aggression level
    if (wolf.status === "hostile") {
      if (wolf.nextTo(game.character)) {
        // TODO: attack!
      } else {
        if (Math.random() < 0.4) {
          wolf.moveRandom()
        } else {
          wolf.moveToward(game.character)
        }
      }
    } else if (wolf.status === "neutral") {
      // run away
      wolf.moveAway(game.character)
    } else {
      wolf.moveRandom()
    }
  },
}))

export interface WolfType extends Instance<typeof Wolf> {}
export interface WolfSnapshotIn extends SnapshotIn<typeof Wolf> {}
export interface WolfSnapshotOut extends SnapshotOut<typeof Wolf> {}
