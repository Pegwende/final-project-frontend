const Modal =(props)=>{





  const closeModal = () =>{
      document.querySelector('.modal').classList.remove('is-active')
  }



  return(
      <>
          <div class='modal $family-monospace $weight-bold'>
              <div  onClick={closeModal} className="modal-background"> </div>
              <div className='modal-content has-background-white'>
                  <div className='has-text-centered m-6 p-6'>
                  <p className="title is-1 has-text-primary-dark">!!!Description!!!</p>
                  <p className="title "> {props.thatFood.description}</p>
                  <input onClick={closeModal} className="has-text-centered button is-success mt-1 mb-5" type='submit' value='Close' />
                  </div>

              </div>
          </div>
      </>
  )



}



export default Modal
