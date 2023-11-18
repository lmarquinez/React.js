import { useState } from 'react';
const Rectangle = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);
    return <div>
        <h2>Ejercicio calcular el área de un rectángulo</h2>
        <input type="text" onChange={e => setWidth(e.target.value)} />
        <input type="text" onChange={e => setHeight(e.target.value)} />
        <button onClick={() => setArea(width * height)} >Enviar</button>
        <p>{area}</p>
    </div >;
};

export default Rectangle;