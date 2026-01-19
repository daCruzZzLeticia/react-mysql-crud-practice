import axios from 'axios'
import React from "react"
import {useState} from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Update = () => {
    const[book, setBook] = useState({
        title: "",
        description: "",
        price: null,
        cover: ""
    })

    const navigate = useNavigate()
    const location = useLocation()

    const bookID = location.pathname.split("/")[2]

    console.log(location)

    const handleChange = (e) =>{
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/books/" + bookID, book)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
    console.log(book)
    return (
        <div className="form">
            <h1>Atualizar Livro</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="description" onChange={handleChange} name="description"/>
            <input type="number" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text" placeholder="cover" onChange={handleChange} name="cover"/>
            <button className="formButton" onClick={handleClick}>Atualizar</button>
        </div>
    )
}

export default Update