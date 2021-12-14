import React, { useEffect, useState } from 'react';

const Buscador = ({ setlistProduct }) => {

    const [searchWord, setSearchWord] = useState('remera')

    function handleClick(e){
        e.preventDefault()

        //console.log(getItem(searchWord))

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchWord}`)
        .then(response => {
            return response.json()
        })
        .then(res =>{
            setlistProduct(res.results)
            console.log(res.results)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    function handleChange(e){
        setSearchWord(e.target.value) 
    }

    useEffect(() => {

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchWord}`)
        .then(response => {
            return response.json()
        })
        .then(res =>{
            setlistProduct(res.results)
            //console.log(res.results)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [])
    
    return ( 
        <form style={{ margin:'2rem'}}>
            <input placeholder="Realiza tu busqueda" onChange={handleChange}></input>
            <button name="Realiza tu busqueda"  value='Buscar' tpye='button' onClick={handleClick}>Buscar</button>
        </form>
    );
}
 
export default Buscador;