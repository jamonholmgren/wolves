export const g = "ground"
export const t = "tree"
export const w = "wall"
export const d = "door"
export const passable = [g, d]

export type Tile = typeof g | typeof t | typeof w | typeof d
export type MapRow = Tile[]
export type AreaMap = MapRow[]
