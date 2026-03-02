import React from "react";

const HijoC = React.memo(function HijoC(){

    console.log("Renderizando el componente hijo C")

    return(
        <>
            <p>Soy el Hijo C</p>
        </>
    )
})


export default HijoC;