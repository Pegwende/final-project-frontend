import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Modal from './components/Modal'
import './App.css'


const App = () => {

    let [foods, setFoods] = useState([])
    let [thatFood, setThatFood] = useState({name:"", image:"", description:"", price:"", number:"", category:""})
    let [select, setSelect] = useState('all')



    const getSelect = (event)=>{
        setSelect(event.target.value)
    }

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
    const handleDelete=(event)=>{
        axios
            .delete('https://pegfinalprojectbackend.herokuapp.com/api/foods/' + event.target.value)
            .then((response)=>{
              getFoods()
            })
    }
    const handleUpdate =(editFood)=>{
      console.log(editFood);
          axios
              .put('https://pegfinalprojectbackend.herokuapp.com/api/foods/' + editFood.id, editFood)
              .then((response)=>{
                getFoods()
              })
    }


    const handleModal = (event, food) =>{
         document.querySelector('.modal').classList.add('is-active')
         setThatFood(food)
          console.log(food);
        }

    useEffect(()=>{
        getFoods()
    },[])




    return (
        <>
        <Modal thatFood={thatFood}/>

        <section className="hero is-primary is-medium mb-4" >
            <div class='hero-head'>
                <p className="title is-1"> Foods Website</p>
                <p className="subtitle is-5">List your best foods to attract customers.</p>
            </div>
            <div class='hero-body'>
                <div className="container has-text-centered">
                    <h1 className="title is-1">Welcome</h1>
                    <p class='subtitle'> Best foods in town</p>
                </div>
            </div>
            <div className="hero-footer has-text-centered mb-5">
                <label className="title is-5" for='categories'>Category: </label>
                <select value={select} name="categories" onChange={getSelect}>
                    <option value='all' >ALL</option>
                    <option value='american' >AMERICAN</option>
                    <option value='africa' >AFRICA</option>
                    <option value='chinese' >CHINESE</option>
                    <option value='italian' >ITALIAN</option>
                    <option value='japanese' >JAPANESE</option>
                    <option value='mexican' >MEXICAN</option>
                    <option value='colombian' >COLOMBIAN</option>
                    <option value='india' >INDIA</option>
                </select>
            </div>
        </section>
            <Add handleCreate={handleCreate}/>

            <div className="block columns is-flex-direction-row is-justify-content-space-around is-flex-wrap-wrap is-narrow has-background-light">
                {
                    foods.filter((element)=>{
                        if(select === "all"){
                             return element
                        } else if(select===element.category.toLowerCase())
                        {
                             return element
                        }
                    }).map((food)=>{
                        return(
                            <div  className='column is-3 card has-text-centered m-3 is-justify-content-space-around is-narrow' key={food.id}>
                                <div onClick={(event)=>handleModal(event, food)} className='card-image is-narrow'>
                                    <h3 className="title is-3 has-text-centered"> {food.name}</h3>
                                    <p className="subtitle mb-1">{food.category}</p>
                                    <figure className='image is-2by1'>
                                    <img id="theImage" src={food.image} alt=''/>
                                    </figure>
                                </div>
                                <div className='column card-content is-narrow'>
                                    <div className='content'>
                                        <p onClick={(event)=>handleModal(event, food)} className="title is-5 has-text-primary-dark">Click for Description</p>
                                        <p onClick={(event)=>handleModal(event, food)} className="title is-4 mb-1">${food.price}</p>
                                        <p className=" mb-1"> Call: {food.number}</p>
                                          <Edit className="" handleUpdate={handleUpdate} theFood={food} />
                                          <button className="button is-danger mt-1" type='button' value={food.id} onClick={handleDelete}> Delete </button>
                                    </div>
                                </div>
                                </div>
                        )
                    })
                }
                </div>

                <section className="hero is-primary is-large p-6" >
                    <div className="hero-footer has-text-centered">
                        <form className="mb-5">
                        <label className="title is-5" for='categories'>Cuisine: </label>
                        <select name="categories" id='categories'>
                            <option value='american'>AMERICAN</option>
                            <option value='africans'>AFRICA</option>
                            <option value='chinese'>CHINESE</option>
                            <option value='italian'>ITALIAN</option>
                            <option value='japanese'>JAPANESE</option>
                            <option value='mexican'>MEXICAN</option>
                            <option value='colombian'>COLOMBIAN</option>
                            <option value='india'>INDIA</option>
                            <input type='submit' value='submit'/>
                        </select>
                        </form>
                    </div>
                </section>
        </>
    )
}



export default App;
