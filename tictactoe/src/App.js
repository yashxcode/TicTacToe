import Cell from "./components/Cell"
import { useState, useEffect } from "react"

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [turn, setTurn] = useState("circle")
  const [winningMsg, setWinningMsg] = useState(null)

  const message = `It is now ${turn}'s turn.`

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")
      if (circleWins) {
        setWinningMsg("Circle Wins!")
      }
    })

    winningCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === "cross")
      if (crossWins) {
        setWinningMsg("Cross Wins!")
      }
    })
  }

  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => 
          <Cell 
            key={index} 
            id={index} 
            cell={cell} 
            setCells={setCells} 
            turn={turn}
            setTurn={setTurn}
            cells={cells}
            winningMsg={winningMsg}
          />)} 
      </div>
      <p>{winningMsg || message}</p>
    </div>
  )
}

export default App
