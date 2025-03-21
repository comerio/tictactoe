const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard( {onSelectSquare, turns} ) {
    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard( (prevGameBoard) => {
    //         const uptadedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         uptadedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return uptadedBoard;
    //     });

    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => (onSelectSquare(rowIndex, colIndex))}>
                            {playerSymbol}
                        </button>    
                    </li>)}    
                </ol>    
            </li>)}
        </ol>
    )
}