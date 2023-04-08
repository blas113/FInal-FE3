import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'


const Contact = () => {
  const {theme} = useContextGlobal()
  return (
    <article>
      
      <h2>Queres mas informacion?</h2>
      <p>Mandanos tus preguntas y te contactaremos.</p>
      <Form/>
    </article>
  )
}

export default Contact