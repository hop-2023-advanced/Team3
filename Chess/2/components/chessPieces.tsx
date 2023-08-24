import { useState } from "react"
import Pieces from "./pieces"





export default function ChessPieces ({}) {
    const oneBlock = 80
    const knights = [
        {
            id : "wp",
            color : "white",
            position : {top : 7 ,left : 1},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {
            id : "wp",
            color : "white",
            position : {top : 7 ,left : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {
            id : "wp",
            color : "white",
            position : {top : 7 ,left : 3},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp",
            color : "white",
            position : {top : 7 ,left : 4},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp",
            color : "white",
            position : {top : 7 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp",
            color : "white",
            position : {top : 7 ,left : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp",
            color : "white",
            position : {top : 7 ,left : 7},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {   
            id : "wp",
            color : "white",
            position : {top : 7 ,left : 8},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 1},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 3},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 4},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 7},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {
            color : "black",
            position : {top : 2 ,left : 8},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
        },
        {   
            id : "w",
            color : "white",
            position : {top : 8 ,left : 3},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png"
        },
        {   
            id : "w",
            color : "white",
            position : {top : 8 ,left : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png"
        },
        {
            color : "black",
            position : {top : 1 ,left : 3},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png"
        },
        {
            color : "black",
            position : {top : 1 ,left : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png"
        },
        
        {   
            id : "w",
            color : "white" , 
            position : {top : 8 ,left : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
        } , 
        {   
            id : "w",
            color : "white",
            position : {top : 8 , left : 7},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
        },
        {
            color : "black" , 
            position : {top : 1 , left : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
        },
        {
            color : "black" , 
            position : {top : 1 , left : 7},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
        },
        {   
            id : "w",
            color : "white",
            position : {top : 8 ,left : 1},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png"
        },
        {   
            id : "w",
            color : "white",
            position : {top : 8 ,left : 8},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png"
        },
        {
            color : "black",
            position : {top : 1 ,left : 1},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
        },
        {
            color : "black",
            position : {top : 1 ,left : 8},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
        },
        {   
            id : "w",
            color : "white",
            position : {top : 8 ,left : 4},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png"
        },
        {
            color : "black",
            position : {top : 1 ,left : 4},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png"
        },
        {   
            id : "w",
            color : "white",
            position : {top : 8 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png"
        },
        {   
            id : "w",
            color : "white",
            position : {top : 1 ,left : 5},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png"
        },
    ]
    
    
    // const [ Top, setTop] = useState((knights[0].knight1?.position.top - 1) * oneBlock )
    // const [ Left , setLeft] = useState((knights[0].knight1?.position.left - 1) * oneBlock)

        return (
        <div>
            {knights?.map((knight , index ) => {
                return <div key={index}><Pieces knight={knight}/></div>
            })}
            {/* <img src={knights[3].knight4?.URl} style={{width : oneBlock , height : oneBlock , position : "absolute" , marginTop : Top , marginLeft : Left }}/> */}
        </div>
    )
}
