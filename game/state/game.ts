import { types } from "mobx-state-tree"
import { Character } from "./character"
import { Area } from "./area"

export const GameState = types.model("GameState", {
  character: Character,
  area: Area,
})
