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

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required!'),
  number: Yup.string()
    .nullable()
    .optional()
    .min(7, 'Phone number must be more than 7 characters long')
    .max(20, 'Phone number must be less than 20 characters long')
    .required('Phone number is required!'),
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
