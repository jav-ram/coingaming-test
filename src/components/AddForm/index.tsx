import React, {useContext} from 'react';

import { Field, Form } from 'react-final-form';
import Button from '../Button';
import InputText from '../InputText';

import styles from './addForm.module.css';
import { CryptoContext } from '../CryptoDisplay';


const AddForm = () => {
  const { executeFetch } = useContext(CryptoContext);
  const onSubmit = (values: any) => {
    const { crypto } = values;

    if (crypto && crypto.length >= 3) {
      executeFetch({
        variables: {
          name: crypto,
        }
      })
    }
  }
  return (
    <Form
      onSubmit={onSubmit} // here we should manage the submit
      render={
        ({ handleSubmit, form, submitting, values }) => (
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <Field
              name="crypto"
            >
              {
                ({ input }) => (
                  <InputText label="cryptocurrency code" {...input} />
                )
              }
            </Field>
            <Button> Add </Button>
          </form>
        )
      }
    />
  );
}
export default AddForm;
