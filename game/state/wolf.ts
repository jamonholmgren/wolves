import {
  types,
  getParent,
  Instance,
  SnapshotIn,
  SnapshotOut,
} from "mobx-state-tree"
import { NPC } from "./npc"
import { GameStateType } from "./game"

export const Wolf = NPC.props({
  status: types.enumeration(["neutral", "hostile", "friendly"]),
}).actions((wolf) => ({
  do() {
    const game: GameStateType = getParent(wolf)

    // the wolf will now do something based on its aggression level
    if (wolf.status === "hostile") {
      if (wolf.nextTo(game.character)) {
        // TODO: attack!
      } else if (wolf.distanceTo(game.character) < 8) {
        // if it can see the player?
        wolf.moveToward(game.character)
      } else {
        // move randomly sometimes
        const rand = Math.random()
        if (rand < 0.1) {
          wolf.move(-1, 0)
        } else if (rand < 0.2) {
          wolf.move(1, 0)
        } else if (rand < 0.3) {
          wolf.move(0, -1)
        } else if (rand < 0.4) {
          wolf.move(0, 1)
        }
      }
    }
  },
}))

export interface WolfType extends Instance<typeof Wolf> {}
export interface WolfSnapshotIn extends SnapshotIn<typeof Wolf> {}
export interface WolfSnapshotOut extends SnapshotOut<typeof Wolf> {}
