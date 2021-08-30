import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Add from './components/Add'


const App = () => {

    let [foods, setFoods] = useState([])


    const getFoods = () => {
        axios
            .get('https://pegfinalprojectbackend.herokuapp.com/api/foods')
            .then(
                (response)=>setFoods(response.data),
                (error)=>console.error(error)
            )
            .catch((error)=>console.error(error))
    }

    const handleCreate = (addFood) => {
        axios
            .post('https://pegfinalprojectbackend.herokuapp.com/api/foods', addFood)
            .then((response)=>{
              console.log(response);
              getFoods()
            })
    }

    useEffect(()=>{
        getFoods()
    },[])



    return (
        <>
            <Add handleCreate={handleCreate}/>
            <h1> Welcome! </h1>
            <h2> What do you want to eat Today? </h2>
            <div className='foods'>
            {
                foods.map((food)=>{
                    return(
                        <div className='food'>
                            <h3>Name: {food.name}</h3>
                            <img src={food.image}/>
                            <p>Description: {food.description}</p>
                            <p>Price: {food.price}</p>
                        </div>

                    )
                })
            }
            </div>

        </>
    )
}

export default App;
