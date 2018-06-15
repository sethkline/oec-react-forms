import React from 'react';
import { render } from 'react-dom'
import './App.css';
import { withFormik, Form, Field } from 'formik';
import* as Yup from 'yup';
import App from './MultistepWizard1';



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

// const FormikApp = withFormik({
//   mapPropsToValues({
//     email,
//     password,
//     newsletter,
//     plan
//   }) {
//     return {
//       email: email || '',
//       password: password || '',
//       newsletter: newsletter || false,
//       plan: plan || 'premium'
//     }
//     },
//     validationSchema: Yup.object().shape({
//       email: Yup.string().email('Email not Valid').required('Email is required'),
//       password: Yup.string().min(9,'Password must be 9 charcters or longer').required('Password is required')
//     }),
//     handleSubmit(values, { resetForm, setErrors, setSubmitting }) {// Where ASync call would go
//       setTimeout(() => {
//           if(values.email === 'andrew@test.io'){
//             setErrors({ email: 'That email is already taken' })
//           } else {
//             resetForm()
//           }
//           setSubmitting(false)
//       }, 2000)
//         console.log(values)
//   }
// })(App)

// render(<FormikApp />, document.getElementById('root'))

// export default FormikApp;
export default App;