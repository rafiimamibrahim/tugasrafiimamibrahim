import React, { useState } from "react";

const Button = () => {
    const[hitung, setHitung] = useState(0);

    const handleClick = () => {
        setHitung(hitung + 1)
    }

    return <div>
    <>
    <button onClick={handleClick}>klik saya</button>
    <p>sudah di klick sebanyak {hitung}kali </p>
    </>

    </div>
    

};

export default Button

