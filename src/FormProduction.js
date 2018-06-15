import React from 'react';
import { render } from 'react-dom'
import './App.css';
import { withFormik, Form, Field } from 'formik';
import* as Yup from 'yup';


// const App = ({
//   values,
//   errors,
//   touched,
//   isSubmitting
// }) => (
//   <Form>
//     <div>
//       { touched.email && errors.email && <p>{errors.email}</p> }
//     <Field type="email" name="email" placeholder= "Email" />
//     </div>
//     <div>
//       { touched.password && errors.password && <p>{errors.password}</p> }
//       </div>
//     <Field type="password" name="password" placeholder= "Password" />
//     <label>
//     <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
//     Join our newsletter
//     </label>
//     <Field component = "select" name="plan">
//     <option value="free">Free</option>
//     <option value="premium">Premium</option>

//     </Field>
//     <button disabled={isSubmitting}>Submit</button>
//     </Form>
// );

const FormProduction = props => (
    <div>
    <label>Email</label>
    <Field
      name="emaily"
      component="input"
      type="email"
      placeholder="Email"
    />
    {/* <Error name="emaily" /> */}
  </div>
  );
// render(<FormProduction />, document.getElementById('root'))

export default FormProduction;