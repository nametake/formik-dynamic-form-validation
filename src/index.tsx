import * as React from 'react';
import { render } from 'react-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './styles.css';

interface FormValues {
  selected: string;
  text: string;
  color: string;
}

const initialValues: FormValues = {
  selected: 'text',
  text: '',
  color: ''
};

const validationSchema = Yup.lazy<FormValues>(values => {
  switch (values.selected) {
    case 'text':
      return Yup.object().shape({
        selected: Yup.string(),
        text: Yup.string().required('REQUIRED!!!'),
        color: Yup.string()
      });
    case 'color':
      return Yup.object().shape({
        selected: Yup.string(),
        text: Yup.string(),
        color: Yup.string().required('REQUIRED!!!')
      });
    default:
      return Yup.object().shape({
        selected: Yup.string(),
        text: Yup.string(),
        color: Yup.string()
      });
  }
});

function App() {
  return (
    <div className="App">
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
        render={({ values, errors }) => {
          return (
            <Form>
              <div>
                <Field name="selected" component="select">
                  <option value="text">Input Form</option>
                  <option value="color">Select Color</option>
                </Field>
              </div>
              {(values.selected === 'text' && (
                <div>
                  <Field name="text" component="input" />
                  {errors && errors.text}
                </div>
              )) ||
                (values.selected === 'color' && (
                  <div>
                    <Field name="color" component="select">
                      <option value="red">red</option>
                      <option value="blue">blue</option>
                      <option value="green">green</option>
                    </Field>
                    {errors && errors.color}
                  </div>
                ))}
              <button type="submit">submit</button>
            </Form>
          );
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
