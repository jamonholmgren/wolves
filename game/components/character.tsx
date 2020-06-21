import { CharacterType } from "../state/character"
import { observer } from "mobx-react-lite"

type CharacterProps = {
  character: CharacterType
}

const Character = ({ character }: CharacterProps) => {
  return (
    <div id="character">
      <style jsx>{`
        #character {
          background-image: url("/assets/rpg-sheet.png");
          background-position: -32px 0px;
          width: 32px;
          height: 32px;
        }
      `}</style>
    </div>
  )
}

export default observer(Character)
