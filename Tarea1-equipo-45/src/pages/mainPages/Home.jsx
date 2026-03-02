import { useState } from 'react'
import HijoA from '../components/hijoA';
import HijoB from '../components/hijoB';
import HijoC from '../components/hijoC';

function Home() {

    const [contador, setContador] = useState(0);



    return (
        <>
            <h1>Home :D </h1>
            <h2>Representación de un contador sin renderizar componentes hijos</h2>
            <p>Contador actual: {contador}</p>
            <button onClick={() => { setContador(contador + 1) }}>Incrementar contador</button>

            <div className="hijos_container">
                <HijoA />
                <HijoB />
                <HijoC />
            </div>

            <h3>Explicación:</h3>
            <p>
                Los componentes importados dentro de otro componente se consideran como componentes "hijos", por lo cual, y como visto en clase, cada que haya un cambio en el
                componente padre, sin importar si no hubo cambios en los hijos, se vuelve a renderizar todo el contenido de nuevo, React memo nos permite
                memorizar el valor de ese componente y no volver a renderizarlo a menos que haya un cambio dentro del mismo
                
            </p>
        </>

    )
}

export default Home
