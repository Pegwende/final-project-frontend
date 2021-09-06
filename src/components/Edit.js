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
                <summary  className= 'title is-4 mb-0'> Edit</summary>
                <form className="card-content mt-0" onSubmit={handleSubmit}>
                    <label className= 'title is-4' htmlFor='name'>Name: </label>
                    <input className="input is-focused is-small " type='text' name='name' onChange={handleChange} value={theFood.name} />
                    <label className= 'title is-4' htmlfFor='image'>Image: </label>
                    <input className="input is-focused is-small" type='text' name='image' onChange={handleChange} value={theFood.image} />
                    <label className= 'title is-4' htmlFor='description'>Description: </label>
                    <input className="input is-focused is-small" type='text' name='description' onChange={handleChange} value={theFood.description} />
                    <label className= 'title is-4' htmlFor='price'>Price: </label>
                    <input className="input is-focused is-small" type='number' name='price' onChange={handleChange} value={theFood.price}/>
                    <label className= 'title is-4' htmlFor='number'>Phone number: </label>
                    <input className="input is-focused is-small " type='text' name='number' onChange={handleChange} value={theFood.number} />
                    <label className= 'title is-4' htmlFor='name'>Category: </label>
                    <input className="input is-focused is-small " type='text' name='category' onChange={handleChange} value={theFood.category} />
                    <input className="button is-success mt-1 mb-5" type='submit' />
                </form>
            </details>
        </>
    )


}


export default Edit
