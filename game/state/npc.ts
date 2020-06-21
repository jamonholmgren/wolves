import {
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
  getParent,
} from "mobx-state-tree"
import { GameStateType } from "./game"

export const NPC = types
  .model({
    hp: types.number,
    x: types.number,
    y: types.number,
  })
  .views((npc) => ({
    distanceTo(other): number {
      // pythagorean
      const a = Math.abs(npc.x - other.x)
      const b = Math.abs(npc.y - other.y)
      return Math.sqrt(a * a + b * b)
    },
    at(x: number, y: number): boolean {
      // is it at this x/y coordinate?
      return npc.x === x && npc.y === y
    },
    nextTo(other): boolean {
      const deltaX = Math.abs(other.x - npc.x)
      const deltaY = Math.abs(other.y - npc.y)

      return (deltaX === 1 && deltaY === 0) || (deltaX === 0 && deltaY === 1)
    },
  }))
  .actions((npc) => ({
    move(x: number, y: number) {
      const game: GameStateType = getParent(npc)

      // Let's check where we're trying to move
      const newX = npc.x + x
      const newY = npc.y + y

      // You shall not pass
      if (!game.area.pass(newX, newY)) return

      // Okay, you can pass
      npc.x = newX
      npc.y = newY
    },
    moveToward({ x, y }) {
      if (npc.x < x) {
        this.move(-1, 0)
      } else if (npc.x > x) {
        this.move(1, 0)
      } else if (npc.y < y) {
        this.move(0, -1)
      } else if (npc.y > y) this.move(0, 1)
    },
  }))

export interface NPCType extends Instance<typeof NPC> {}
export interface NPCSnapshotIn extends SnapshotIn<typeof NPC> {}
export interface NPCSnapshotOut extends SnapshotOut<typeof NPC> {}
