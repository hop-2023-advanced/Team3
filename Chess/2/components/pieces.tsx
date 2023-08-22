


export default function Pieces ({knight , oneBlock}) {
    return (
    <div style={{width : oneBlock , height : oneBlock , marginTop : (knight.position.top - 1) * oneBlock , marginLeft : (knight.position.left - 1) * oneBlock, position : "absolute"}}>
        <img src={knight.URl}/>
    </div>
)}