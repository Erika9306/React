import React from 'react'

export default async function Api() {
 
    const response = await fetch(` 'https://thronesapi.com/api/v2/Characters'`);
    const res = await response.json();
    console.log(res);
 
 
    return (
    <div className='game'>
        <h3>Soy imagen del Game of Thrones</h3>
        <ul>
            {res.results.map(img =>{
                <li>
                    <img src={img.image}/>
                </li>
             })}
        </ul>

    </div>
  )
}
