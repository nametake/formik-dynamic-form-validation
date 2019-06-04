import * as React from 'react';
import { render } from 'react-dom';
import { Formik, Form, Field } from 'formik';

import './styles.css';

interface FormValues {
  selected: 'text' | 'color';
  text: string;
  color: 'red' | 'blue' | 'green';
}

const initialValues: FormValues = {
  selected: 'text',
  text: '',
  color: 'red'
};

function App() {
  return (
    <div className="App">
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
        render={({ values }) => {
          return (
            <Form>
              <Field name="selected" component="select">
                <option value="text">Input Form</option>
                <option value="color">Radio Button</option>
              </Field>
              {(values.selected === 'text' && (
                <Field name="text" component="input" />
              )) ||
                (values.selected === 'color' && (
                  <Field name="color" component="select">
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                  </Field>
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
