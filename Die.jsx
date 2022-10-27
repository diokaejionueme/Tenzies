
import React from "react"




 export default function Die(props) {

   const styles = {
        background: props.isHeld ? "#59E391" : ""
    }

    return(
        <div 
            onClick={props.holdDice}
            className="dice-face" 
            style={styles}>
            <h2 className="die-num">
                {props.value}
            </h2>
        </div>
    )
}

