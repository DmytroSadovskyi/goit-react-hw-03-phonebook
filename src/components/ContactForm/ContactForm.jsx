import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Form,
  FormField,
  Wrapper,
  Input,
  FormLabel,
  ErrorMessage,
  FormButton,
} from './ContactForm.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiSmartphone } from 'react-icons/gi';
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required!')
    .matches(nameRegExp, 'Name is not valid'),
  number: Yup.string()
    .required('Phone number is required!')
    .matches(phoneRegExp, 'Phone number is not valid'),
});
export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          <FormLabel>Name</FormLabel>
          <Wrapper>
            <Field name="name">
              {({ field }) => {
                return <Input {...field} />;
              }}
            </Field>

            <BsFillPersonFill
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </Wrapper>
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          <FormLabel>Number</FormLabel>
          <Wrapper>
            <Field name="number">
              {({ field }) => {
                return <Input {...field} />;
              }}
            </Field>
            <GiSmartphone
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </Wrapper>
          <ErrorMessage name="number" component="div" />
        </FormField>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
