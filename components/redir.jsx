import { useState } from "react";
const Quot = ["hi,i am hamayoon","hello,i am abid","hi,i am bilal"]

function Re(){
    const [Quotes,setcounter] = useState(Quot[0])


    function iAmClicked(){
        setcounter(Quot[ Math.floor(Math.random()*Quot.length)])
    }
    return <div>
        <h1>{Quotes}</h1>
        <button onClick={iAmClicked}>changeQuotes</button>
    </div>
}

export default Re