import { types } from "mobx-state-tree"
import { Character } from "./character"

export const GameState = types.model("GameState", {
  character: Character,
})
