import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { Tile } from "../types"

export const Area = types
  .model("Area", {
    map: types.frozen(),
  })
  .views((area) => ({
    // The tile at x/y coords
    at(x: number, y: number): Tile | undefined {
      return area.map[y] && area.map[y][x]
    },
  }))

export interface AreaType extends Instance<typeof Area> {}
export interface AreaSnapshotIn extends SnapshotIn<typeof Area> {}
export interface AreaSnapshotOut extends SnapshotOut<typeof Area> {}
