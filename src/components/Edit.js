import React, {useState} from 'react'

const Edit = (props) => {
    // let emptyFood = {name:"", image:"", description:"", price:""}
    let [theFood, setTheFood]=useState({...props.theFood})



    const handleChange = (event) =>{
        setTheFood({...theFood, [event.target.name]:
        event.target.value })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        props.handleUpdate(theFood)
    }


    return(
        <>
            <details>
                <summary> Edit Person </summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' onChange={handleChange} value={theFood.name} />
                    <br />
                    <label htmlfFor='image'>Image: </label>
                    <input type='text' name='image' onChange={handleChange} value={theFood.image} />
                    <br />
                    <label htmlFor='description'>Description: </label>
                    <input type='text' name='description' onChange={handleChange} value={theFood.description} />
                    <br />
                    <label htmlFor='price'>Price: </label>
                    <input type='number' name='price' onChange={handleChange} value={theFood.price}/>
                    <br />
                    <input type='submit' />
                </form>
            </details>
        </>
    )


}


export default Edit
