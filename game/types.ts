export const g = "ground"
export const t = "tree"

export type Tile = typeof g | typeof t
export type MapRow = Tile[]
export type AreaMap = MapRow[]
