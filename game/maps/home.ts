import { AreaMap, t, w, d } from "../types"

export const startPos = [4, 4]

// prettier-ignore
export const homeMap: AreaMap = [
  [ t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t],
  [ t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  , w, w, w, w, w, w,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  , w,  ,  ,  ,  , w,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  , w,  ,  ,  ,  , w,  ,  ,  , t, t,  ,  ,  ,  ,  ,  ,  ,  ,  , t, t],
  [ t,  , w,  ,  ,  ,  , w,  ,  , t, t, t, t,  ,  ,  ,  ,  ,  ,  , t, t, t],
  [ t,  , w, w, d, w, w, w,  ,  ,  , t, t, t,  ,  ,  ,  , t,  ,  , t, t, t],
  [ t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t, t,  ,  ,  ,  ,  ,  ,  ,  , t, t],
  [ t,  ,  ,  ,  ,  , t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  ,  ,  , t, t,  ,  ,  ,  ,  ,  ,  ,  , t, t,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  ,  ,  ,  , t, t,  ,  ,  ,  ,  ,  , t, t, t,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  ,  ,  ,  , t, t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t, t,  ,  ,  ,  , t],
  [ t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  ,  ,  ,  ,  ,  , t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  ,  , t, t,  , t, t,  ,  ,  ,  ,  ,  ,  , t,  ,  ,  ,  ,  ,  ,  , t],
  [ t,  , t, t, t,  ,  ,  ,  ,  ,  ,  ,  ,  , t, t,  ,  ,  ,  ,  ,  , t, t],
  [ t, t, t, t, t, t,  ,  ,  ,  ,  ,  , t, t, t, t, t, t,  ,  ,  ,  , t, t],
  [ t, t, t, t, t, t,  ,  ,  ,  ,  ,  , t, t, t, t, t,  ,  ,  ,  , t,  , t],
  [ t,  ,  , t, t,  ,  ,  ,  ,  ,  , t, t, t, t, t, t, t,  ,  ,  ,  ,  , t],
  [ t,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , t, t,  , t, t, t,  ,  ,  ,  , t,  , t],
  [ t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t],
].map(r => Array.from(r)) // converts empty values to `undefined`
