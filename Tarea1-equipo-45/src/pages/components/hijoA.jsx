import React from "react";

const HijoA = React.memo(function HijoA(){

    console.log("Renderizando el componente hijo A")

    return(
        <>
            <p>Soy el Hijo A</p>
        </>
    )
})


export default HijoA;