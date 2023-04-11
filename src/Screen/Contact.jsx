import React, { useState } from 'react'
import Form from "../components/Form"

const Contact = () =>  {

  const [values, setValues] = useState(null);
  const [show, setShow] = useState(false)

  const handleFetchValues = (userInfomation) => {
    setValues(userInfomation);
    setShow(true);
  };

  return (
    <>
    <Form handleFetchValues={handleFetchValues} />
    {show && <h3><center> ¡Gracias, {values.name} ! Nos contactaremos cuanto antes !</center></h3>}
    </>
  )
}

export default Contact