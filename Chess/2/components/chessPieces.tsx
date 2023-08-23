import { useState } from "react"
import Pieces from "./pieces"
// import Horse from "./PieceFuntions/horse"



export default function ChessPieces ({ oneBlock}) {
    const [pieces, setPieces] = useState([
        {
            id : "wp1",
            color : "white",
            position : {top : 7 ,left : 1},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {
            id : "wp2",
            color : "white",
            position : {top : 7 ,left : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {
            id : "wp3",
            color : "white",
            position : {top : 7 ,left : 3},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp4",
            color : "white",
            position : {top : 7 ,left : 4},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp5",
            color : "white",
            position : {top : 7 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp6",
            color : "white",
            position : {top : 7 ,left : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp7",
            color : "white",
            position : {top : 7 ,left : 7},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp8",
            color : "white",
            position : {top : 7 ,left : 8},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "bp1",
            color : "black",
            position : {top : 2 ,left : 1},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "bp2",
            color : "black",
            position : {top : 2 ,left : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "bp3",
            color : "black",
            position : {top : 2 ,left : 3},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "bp4",
            color : "black",
            position : {top : 2 ,left : 4},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "bp5",
            color : "black",
            position : {top : 2 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "bp6",
            color : "black",
            position : {top : 2 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "bp7",
            color : "black",
            position : {top : 2 ,left : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "bp8",
            color : "black",
            position : {top : 2 ,left : 7},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "bp1",
            color : "black",
            position : {top : 2 ,left : 8},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "wbr",
            color : "white",
            position : {top : 8 ,left : 3},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png"
        },
        {   
            id : "wbl",
            color : "white",
            position : {top : 8 ,left : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png"
        },
        {   
            id : "bbl",
            color : "black",
            position : {top : 1 ,left : 3},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png"
        },
        {   
            id : "bbr",
            color : "black",
            position : {top : 1 ,left : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png"
        },
        
        {   
            id : "wnl",
            color : "white" , 
            position : {top : 8 ,left : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
        } , 
        {   
            id : "wnr",
            color : "white",
            position : {top : 8 , left : 7},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
        },
        {   
            id : "bnl",
            color : "black" , 
            position : {top : 1 , left : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
        },
        {   
            id : "bnr",
            color : "black" , 
            position : {top : 1 , left : 7},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
        },
        {   
            id : "wrl",
            color : "white",
            position : {top : 8 ,left : 1},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png"
        },
        {   
            id : "wrr",
            color : "white",
            position : {top : 8 ,left : 8},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png"
        },
        {   
            id : "brl",
            color : "black",
            position : {top : 1 ,left : 1},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
        },
        {   
            id : "brr",
            color : "black",
            position : {top : 1 ,left : 8},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
        },
        {   
            id : "wQ",
            color : "white",
            position : {top : 8 ,left : 4},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png"
        },
        {   
            id : "bQ",
            color : "black",
            position : {top : 1 ,left : 4},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png"
        },
        {   
            id : "wK",
            color : "white",
            position : {top : 8 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png"
        },
        {   
            id : "bK",
            color : "white",
            position : {top : 1 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png"
        },
    ])

    const knightIndex = 21;
    const knightPosition = pieces[knightIndex].position;
    const [isNight , setIsNight] = useState(false)
    const possibleMoves = [
        { top: -2, left: 1 },
        { top: -2, left: -1 },
        { top: 2, left: 1 },
        { top: 2, left: -1 },
        { top: 1, left: 2 },
        { top: 1, left: -2 },
        { top: -1, left: 2 },
        { top: -1, left: -2 },
      ];
    
      const highlightStyle = {
        // boxShadow: "0 0 10px 30px grey",

      };
    
      function isPositionValid(position) {
        return (
          position.top >= 1 &&
          position.left >= 1 &&
          position.top <= 8 &&
          position.left <= 8
        );
      }
    
      function Horse() {
        const newPieces = pieces.map((piece, index) => {
          if (piece.id.charAt(1) === "n") {
            const newPosition = {
              top: piece.position.top - 2,
              left: piece.position.left + 1,
            };
            if (isPositionValid(newPosition)) {
              return { ...piece, position: newPosition };
            }
          }
          return piece;
        });
    
        setPieces(newPieces);
      }
    
      return (
        <div>
          <img
            src={pieces[21]?.URl}
            style={{
              width: oneBlock,
              height: oneBlock,
              position: "absolute",
              marginTop: (pieces[21].position.top - 1) * oneBlock,
              marginLeft: (pieces[21].position.left - 1) * oneBlock,
            }}
            onClick={() => setIsNight(true)}
          />
          <div>
            {isNight?(<div>
                {possibleMoves?.map((move, index) => {
              const movePosition = {
                top: knightPosition.top + move.top,
                left: knightPosition.left + move.left,
              };
              if (isPositionValid(movePosition)) {
                return (
                  <div
                  className="absolute"
                    key={index}
                    style={{
                        width : oneBlock,
                        height : oneBlock,
                        top: (movePosition.top - 1) * oneBlock,
                        left: (movePosition.left - 1) * oneBlock,
                        alignItems : "center",
                        justifyContent : 'center',
                        display : "flex"
                    }}
                
                  >

                    <div style={{width: oneBlock/2, height: oneBlock/2, borderRadius: oneBlock/4, backgroundColor: 'grey'}}></div>

                  </div>
                );
              }
              return null;
            })}</div>) : <div></div>}
            
          </div>
        </div>
      );
    }
{/* {knights?.map((knight , index ) => {
                return <div key={index}><Pieces knight={knight} oneBlock={oneBlock}/></div>
            })} */}