import { observer } from "mobx-react-lite"

import { useGame } from "../hooks/use-game"

import Character from "./character"
import { Tile, MapRow } from "../types"

export const Main = observer(function Main() {
  const game = useGame()

  return (
    <main>
      <h1>Wolves RPG</h1>
      <div id="wolves" key="wolves">
        {game.area.map.map((row: MapRow, y: number) => (
          <div className="map-row" data-row={y} key={`map-row-${y}`}>
            {row.map((tile: Tile, x: number) => (
              <div
                className={`map-tile tile-${tile}`}
                key={`map-tile-${x}-${y}`}
                data-column={x}
                data-coordinates={[x, y]}
              >
                {game.character.at(x, y) ? (
                  <Character character={game.character} key="character" />
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        main {
        }
        h1 {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        }
        #wolves {
          margin: 0 auto;
          width: 768px;
          height: 768px;
          padding: 10px;
          background-color: #343434;
          position: relative;
        }
        .map-row {
          width: 100%;
          height: 32px;
          overflow-x: hidden;
        }
        .map-tile {
          width: 32px;
          height: 32px;
          float: left;
        }
        .tile-ground {
          background-color: #56aa44;
        }
        .tile-tree {
          background-color: #56aa44;
          background-image: url("/assets/rpg-nature-sheet.png");
          background-position: -32px -32px;
          width: 32px;
          height: 32px;
        }
      `}</style>
    </main>
  )
})
