import React from "react";

const HijoB = React.memo(function HijoB(){

    console.log("Renderizando el componente hijo B")

    return(
        <>
            <p>Soy el Hijo B</p>
        </>
    )
})


export default HijoB;