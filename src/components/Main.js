import React from "react";
import memesData from "../memeData.js"

export default function Main(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: ""
    })

    const [allMemeImage, setAllMemeImage] = React.useState(memesData)

    function getMemeImage(){
        const memesArray =  allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        })); 
    }

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
                <button type="button" className="form--button" onClick={getMemeImage}>
                Get a new meme image 🖼
                </button>
            </form>
            <img src={meme.randomImg} className="meme--image" />
        </main>
    )
}