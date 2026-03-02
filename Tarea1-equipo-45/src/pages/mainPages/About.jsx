import { useState, useCallback } from 'react'
import Item from '../components/Item';

function About() {

    const [items, setItems] = useState([
        { id: 1, nombre: "Juan" },
        { id: 2, nombre: "Luis" },
        { id: 3, nombre: "Maria" },
        { id: 4, nombre: "Karla" }
    ]);

    function invertirLista() {
        setItems(prev => [...prev].reverse());
    }

    function addElement(e) {
        e.preventDefault();
        let length = items.length
        setItems(prev => [...prev, { id: prev[length - 1].id + 4, nombre: document.getElementById("nombre").value }])
    }

    function deleteUser(id) {
  setItems(prev => prev.filter(user => user.id !== id));
}

    return (
        <>
            <h1>About :/</h1>
            <p>Lista de elementos tipo redes sociales:</p>


            <div>


                <button onClick={invertirLista}>
                    Invertir lista
                </button>

                <ul>
                    {items.map((item, index) => (

                        <div className='flex' key={item.id}
                        >

                            <Item
                                nombre={item.nombre}
                            />

                            <button className='delete' onClick={() => {deleteUser(item.id)}}>Eliminar</button>
                        </div>





                    ))}
                </ul>
            </div>

            <form action="" onSubmit={addElement}>
                <p>Agregar Elemento:</p>
                <input type="text" id="nombre" required={true} placeholder='nombre' />
                <button type='submit'>Agregar</button>
            </form>

        </>
    )
}

export default About
