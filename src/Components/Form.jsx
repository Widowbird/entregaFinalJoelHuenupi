// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Message from './Message'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

 //   const [nombre, setNombre] = useState("");
  //   const [direccion, setDireccion] = useState("");

  const [contact,setContact] = useState({
    nombreCompleto:"",
    correo:""
  })

  const [card,setcard]=useState(false);
  const [error,setError] = useState(false);

  const handleSubmit=(e)=>{
      e.preventDefault()
      const regexNum = /[0-9]/;
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if(contact.nombreCompleto.length>=3 && !regexNum.test(contact.nombreCompleto) && regexEmail.test(contact.correo)){
          setcard(true);
      }else{
          setError(true)
      }
  }

  return (
  <div>
      {card?(<Message nombre = {contact.nombreCompleto} correo = {contact.correo}/> ):(
          <form onSubmit={handleSubmit}>
            <label >Nombre Completo</label>
            <input type="text" onChange={(e) => setContact({ ...contact, nombreCompleto: e.target.value })} />
            <label htmlFor="">Correo electronico</label>
            <input type="text" onChange={(e) => setContact({ ...contact, correo: e.target.value })} />
            <button>Enviar</button>
            {error ? (<h4 style={{ color: "red" }}>Coloque la información correcta</h4>) : null}
          </form>
        )
      }
  </div>
  )
};

export default Form;
