import React from "react";

export default function Main(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url,
        })); 
    }

    function handleChange(event){
        const {name, value, src} = event.target
        if(src === ""){
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value,
            }))
        } else{
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImg: src
        }))
    }
    }


    const memeList = allMemes.map(meme =>{
        return(
            <img 
                key={meme.id}
                src={meme.url}
                alt={`Meme: ${meme.name}`}
                onClick={handleChange}
            />
        )
    }) 

    return(
        <main>
            <form className="form">
                <div className="form--container-inputs">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        />
                </div>
                <button type="button" className="form--button" onClick={getMemeImage}>
                Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.randomImg} className="meme--image" alt="randomly generated meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <div className="meme--list">
                <h1>Select other meme</h1>
                <div className="meme--list-elements">
                    {memeList}
                </div>
            </div>
        </main>
    )
}