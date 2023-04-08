import React, {useState} from "react";
import Input from "./actButton/input";


const Form = () => {
  const name = Input('text')
  const email = Input('text')
  const [validation,setValidation] = useState()

  const handleContact = (e) => {
    e.preventDefault();
    if(name.value.length > 5 && email.value.includes('@')) {
      setValidation(true)
    }else{
      setValidation(false)
    }
  }

  const validationWithSwitch = (boolean) => {
    switch(boolean){
      case true:
        return <h2>Gracias {name.value}, te contactaremos cuanto antes. </h2>
      case false: 
        return <p>Por favor verifique su información nuevamente</p>
      default:
        return null;        
    }
  }

  return (
    <div>
      <form onSubmit={handleContact}>  
        <input {...name}/>
        <input {...email} />
        <button>Send</button>
      </form>
      {validationWithSwitch(validation)}
    </div>
  )
}

export default Form
