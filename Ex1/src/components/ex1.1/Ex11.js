import { useEffect, useState } from "react";

function fetchUser() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id:1,name:"Adam"});
        },1000);
    });
}

function Ex11() {
    const [id,setId] = useState("loading...");
    const [name, setName] = useState("loading...");
    useEffect(()=>{
        fetchUser().then((user)=>{
            setId(user.id);
            setName(user.name);
        })
    })
    return ( 
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </div>
     );
}

export default Ex11;