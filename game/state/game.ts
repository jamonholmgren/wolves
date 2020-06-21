import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { Character } from "./character"
import { Wolf } from "./wolf"
import { Area } from "./area"

export const GameState = types
  .model("GameState", {
    character: Character,
    area: Area,
    wolves: types.array(Wolf),
    sound: true,
  })
  .actions((game) => ({
    npcMove() {
      game.wolves.forEach((wolf) => wolf.aiMove())
    },
    soundToggle() {
      game.sound = !game.sound
    },
    wolfHowl() {
      if (!game.sound) return

      const howls = [
        `/assets/wolf2.mp3`,
        `/assets/wolf6.mp3`,
        `/assets/wolf7.mp3`,
      ]

      const audio = new Audio(howls[Math.floor(Math.random() * 3)])
      audio.play()
    },
  }))

export interface GameStateType extends Instance<typeof GameState> {}
export interface GameStateSnapshotIn extends SnapshotIn<typeof GameState> {}
export interface GameStateSnapshotOut extends SnapshotOut<typeof GameState> {}
