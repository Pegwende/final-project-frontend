import React, {useState} from 'react'

const Add = (props) => {


    let emptyFood = {name:"", image:"", description:"", price:"", category:"", number:""}
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
            <div className='box has-text-centered'>
                <h1 className="title is-1 mb-0 mt-6">Add New Food</h1>
                <form  className="card m-6 mr-6 p-6" onSubmit={handleSubmit}>
                    <label className= 'title' htmlFor='name'>Name: </label>
                    <input className="input is-focused " type='text' name='name' onChange={handleChange} />
                    <label className= 'title' htmlfFor='image'>Image: </label>
                    <input className="input is-focused" type='text' name='image' onChange={handleChange} />
                    <label className= 'title' htmlFor='description'>Description: </label>
                    <input className="input is-focused" type='text' name='description' onChange={handleChange} />
                    <label className= 'title is-focused' htmlFor='price'>Price: </label>
                    <input className="input is-focused" type='number' name='price' onChange={handleChange} />
                    <label className= 'title is-focused' htmlFor='number'>Phone number: </label>
                    <input className="input is-focused" type='text' name='number' onChange={handleChange} />
                    <label className= 'title is-focused' htmlFor='category'>Category: </label>
                    <input className="input is-focused" type='text' name='category' onChange={handleChange} />
                    <input className="button is-success mt-1 mb-5" type='submit' />
                </form>
            </div>
        </>
    )


}


export default Add
