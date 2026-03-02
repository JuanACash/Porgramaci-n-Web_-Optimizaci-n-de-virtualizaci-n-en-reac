import { useState, memo } from "react";

function item({ nombre }) {
    const [likes, setLikes] = useState(0);

    console.log("Render:", nombre);

    return (
        <li className="lista">
        {nombre} ❤️ {likes}
        <button className="likes" onClick={() => setLikes(likes + 1)}>
            Like
        </button>




        </li>
    );
}

export default memo(item);
