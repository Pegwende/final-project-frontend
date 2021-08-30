import React, {useState} from 'react'

const Add = (props) => {


    let emptyFood = {name:"", image:"", description:"", price:""}
    let [theFood, setTheFood]=useState(emptyFood)



    const handleChange = (event) =>{
        setTheFood({...theFood, [event.target.name]:
        event.target.value })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleCreate(theFood)
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' onChange={handleChange} />
                <br />
                <label htmlfFor='image'>Image: </label>
                <input type='text' name='image' onChange={handleChange} />
                <br />
                <label htmlFor='description'>Description: </label>
                <input type='text' name='description' onChange={handleChange} />
                <br />
                <label htmlFor='price'>Price: </label>
                <input type='number' name='price' onChange={handleChange} />
                <br />
                <input type='submit' />
            </form>
        </>
    )


}


export default Add
