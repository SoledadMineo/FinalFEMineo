import { useFormik } from 'formik';
import * as Yup from "yup";
import { FormContainer, Container, Input} from '../style/StyledComponents';

const inputs = [
    { id: 1, label: "Nombre", placeholder: "Ingresa tu nombre: ", name: "name" },
    { id: 2, label: "Email", placeholder: "Ingresa tu email: ", name: "email" }
]

const Form = ({ handleFetchValues }) => {

    const getInitialValues = () => ({
      name: "",
      email: ""
    });
  
    const getValidationSchema = () => (
      Yup.lazy(() =>
        Yup.object().shape({
          name: Yup.string()
            .min(5, 'Al menos debe ingresar cinco caracteres')
            .max(20, 'Ha superado el maximo de 20 caracteres')
            .trim("No debe tener espacios en blanco").strict()
            .required("Por favor, completa."),
          email: Yup.string().email("Por favor, el email debe ser valido.")
            .required("Por favor, completa."),
        })
      )
    )

    const onSubmit = (values) => {
        handleFetchValues(values);
      };
    
      const { values, setFieldValue, errors, handleSubmit } = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit
      })
    
    return (
        <>
            <h2><center>Contacto</center></h2>
            <FormContainer from="contact">
                <form id="contact-form" onSubmit={handleSubmit}>
                {
                  inputs.map(field => (
                    <Container key={field.id}>
                      <label>{field.label}</label>
                      <Input
                        name={field.name}
                        placeholder={field.placeholder}
                        value={values[field.name]}
                        onChange={(e) => setFieldValue(field.name, e.target.value)}
                      />
                      {
                        errors[field.name] && (
                          <Error>{errors[field.name]}</Error>
                        )
                      }
                    </Container>
                  ))
                }
                </form>
                <Container content="row">
                    <button className='buttonContact' name='sbmt' form="contact-form" btn="submit" type="submit">Enviar</button>
                </Container>
            </FormContainer>
        </>
    )
}

export default Form