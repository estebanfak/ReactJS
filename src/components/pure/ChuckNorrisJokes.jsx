import { Button } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react'
import { getJoke } from '../../services/axiosService';

function ChuckNorrisJokes() {
    const [joke, setJoke] = useState([]);
    const [likedJokes, setLikedJokes] = useState([]);
    const [unlikedJokes, setUnlikedJokes] = useState([]);

    useEffect(() => {
        obtainJoke()
    }, []);

    const obtainJoke = () => {
        getJoke()
            .then((response)=>{
                setJoke(response.data)
            })
            .catch((error)=>{
                alert(error)
            })
    }

    const addLikedJokes = (joke) =>{
        let arr = unlikedJokes
        if(unlikedJokes.some((item)=> item.id === joke.id)){
            const index = unlikedJokes.findIndex((item)=> item.id === joke.id)
            if(index>-1){
                arr.splice(index, 1)
                setUnlikedJokes(arr)
            }
        }
        if(!likedJokes.some((item)=> item.id === joke.id)){
            setLikedJokes([...likedJokes, joke])
        }
    }
    const addUnlikedJokes = (joke) =>{
        let arr = likedJokes
        if(likedJokes.some((item)=> item.id === joke.id)){
            const index = likedJokes.findIndex((item)=> item.id === joke.id)
            if(index>-1){
                arr.splice(index, 1)
                setLikedJokes(arr)
            }
        }
        if(!unlikedJokes.some((item)=> item.id === joke.id)){
            setUnlikedJokes([...unlikedJokes, joke])
        }
    }
  return (
    <div>
        <h1>Joke:</h1>
        {joke != null ? (
            <div>
                <h2>{joke.value}</h2>
            </div>
        )
            :
            <p>Generate new joke</p>
        }
        <Button onClick={()=> obtainJoke()}>New Joke</Button>
        <Button onClick={()=> addLikedJokes(joke)}>Like joke</Button>
        <Button onClick={()=> addUnlikedJokes(joke)}>Don't like joke</Button>

        <div>
            <h2>Liked Jokes</h2>
            {likedJokes.length != 0 ? 
            (
                likedJokes.length
            ) :
            <p>No jokes liked yet</p>}
        </div>
        <div>
            <h2>Unliked Jokes</h2>
            {unlikedJokes.length != 0 ? 
            (
                unlikedJokes.length
            ) :
            <p>No jokes unliked yet</p>}
        </div>
    </div>
  )
}

export default ChuckNorrisJokes