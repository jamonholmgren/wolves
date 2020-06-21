import {
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
  getRoot,
} from "mobx-state-tree"
import { GameStateType } from "./game"
import { Tile } from "../types"

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
    passable(): Tile[] {
      return ["ground"]
    },
  }))
  .actions((npc) => ({
    move(x: number, y: number) {
      const game = getRoot(npc) as GameStateType

      // Let's check where we're trying to move
      const newX = npc.x + x
      const newY = npc.y + y

      // You shall not pass
      const tileAtNewSpot = game.area.at(newX, newY)
      if (npc.passable().includes(tileAtNewSpot) === false) return false

      // Okay, you can pass
      npc.x = newX
      npc.y = newY

      return true
    },
    moveToward({ x, y }) {
      if (x < npc.x) {
        this.move(-1, 0)
      } else if (x > npc.x) {
        this.move(1, 0)
      } else if (y < npc.y) {
        this.move(0, -1)
      } else if (y > npc.y) this.move(0, 1)
    },
  }))

export interface NPCType extends Instance<typeof NPC> {}
export interface NPCSnapshotIn extends SnapshotIn<typeof NPC> {}
export interface NPCSnapshotOut extends SnapshotOut<typeof NPC> {}
