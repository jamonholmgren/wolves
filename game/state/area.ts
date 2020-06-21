import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { homeMap } from "../maps/home"

import { Tile } from "../types"

export const Area = types
  .model("Area", {
    map: types.frozen(),
  })
  .views((area) => ({
    // The tile at x/y coords
    at(x: number, y: number): Tile | undefined {
      return area.map[x][y]
    },
  }))

export interface AreaType extends Instance<typeof Area> {} // => { title: string; setTitle: (v: string) => void }
export interface AreaSnapshotIn extends SnapshotIn<typeof Area> {} // => { title?: string }
export interface AreaSnapshotOut extends SnapshotOut<typeof Area> {} // => { title: string }
