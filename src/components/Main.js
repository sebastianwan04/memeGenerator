import React from "react";

export default function Main(){
    return(
        <main>
            <form action="" className="form">
                <div className="form--container-inputs">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        />
                </div>
                <button className="form--button">
                Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}