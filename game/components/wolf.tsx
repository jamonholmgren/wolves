import { WolfType } from "../state/wolf"
import { observer } from "mobx-react-lite"

type WolfProps = {
  wolf: WolfType
}

const Wolf = ({ wolf }: WolfProps) => {
  return (
    <div className="wolf">
      <style jsx>{`
        .wolf {
          background-image: url("/assets/wolf-1.png");
          background-repeat: no-repeat;
          background-position: 0 6px;
          width: 32px;
          height: 32px;
        }
      `}</style>
    </div>
  )
}

export default observer(Wolf)
