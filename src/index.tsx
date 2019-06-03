import * as React from 'react';
import { render } from 'react-dom';
import { Formik, Form, Field } from 'formik';

import './styles.css';

interface FormValues {
  selected: string;
}

const initialValues: FormValues = {
  selected: 'input'
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
                <option value="input">Input Form</option>
                <option value="radio">Radio Button</option>
              </Field>
              {(values.selected === 'input' && <div>foo</div>) ||
                (values.selected === 'radio' && <div>bar</div>)}
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
