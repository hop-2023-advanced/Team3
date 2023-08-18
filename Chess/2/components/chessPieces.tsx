





export default function ChessPieces () {
    const knights = [
        {knight1 : {
            color : "white" , 
            position : {bottom : 1 ,right : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
        }} , 
        {knight2 : {
            color : "white",
            position : {bottom : 1 , right : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
        }},
        {knight3 : {
            color : "black" , 
            position : {bottom : 8 , right : 2},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
        }},
        {knight4 : {
            color : "black" , 
            position : {bottom : 8 , right : 6},
            URl : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
        }}
    ]

    return (

        <div>
            <img src={knights[0].knight1?.URl}/>
        </div>
    )
}
