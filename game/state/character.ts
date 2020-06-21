import { Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { NPC } from "./npc"

export const Character = NPC.named("Character").props({})

export interface CharacterType extends Instance<typeof Character> {} // => { title: string; setTitle: (v: string) => void }
export interface CharacterSnapshotIn extends SnapshotIn<typeof Character> {} // => { title?: string }
export interface CharacterSnapshotOut extends SnapshotOut<typeof Character> {} // => { title: string }
