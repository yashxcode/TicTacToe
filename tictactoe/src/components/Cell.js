// destructuring props coming from App
const Cell = ({ id, cell, setCells, turn, setTurn, cells, winningMsg }) => {

    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains("circle") || 
            e.target.firstChild.classList.contains("cross")

        if (!taken) {
            if (turn === "circle") {
                e.target.firstChild.classList.add("circle")
                handleCellChange("circle")
                setTurn("cross")
            }
            if (turn === "cross") {
                e.target.firstChild.classList.add("cross")
                handleCellChange("cross")
                setTurn("circle")
            }
        }
    }

    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })

        setCells(nextCells)

    }

    return (
        <div className="square" id={id} onClick={!winningMsg && handleClick}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell