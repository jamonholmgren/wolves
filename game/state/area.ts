import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { passable, Tile } from "../types"

export const Area = types
  .model("Area", {
    map: types.frozen(),
  })
  .views((area) => ({
    // The tile at x/y coords
    at(x: number, y: number): Tile | undefined {
      return area.map[y] && area.map[y][x]
    },
    // Can pass here?
    pass(x: number, y: number): boolean {
      const tile = this.at(x, y)
      return !!tile && passable.includes(tile)
    },
  }))

export interface AreaType extends Instance<typeof Area> {} // => { title: string; setTitle: (v: string) => void }
export interface AreaSnapshotIn extends SnapshotIn<typeof Area> {} // => { title?: string }
export interface AreaSnapshotOut extends SnapshotOut<typeof Area> {} // => { title: string }
