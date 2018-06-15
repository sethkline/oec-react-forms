import React from 'react';
import { withFormik, Form, Field } from 'formik';
// import* as Yup from 'yup';

const Error = ({ name }) => (
    <Field
      name={name}
      render={({ form: { touched, errors } }) =>
        touched[name] && errors[name] ? <span>{errors[name]}</span> : null
      }
    />
  );

const BasicContactInfo = props => (
    <div>
    <div>
      <label>Client</label>
      <Field
        name="clientName"
        component="input"
        type="text"
        placeholder="Company Name"
        // validate={required}
      />
      <Error name="clientName" />
    </div>
    <div>
      <label>Contact Name</label>
      <Field
        name="contactName"
        component="input"
        type="text"
        placeholder="John Doe"
        // validate={required}
      />
      {/* <Error name="contactName" /> */}
    </div>
    <div>
      <label>Title</label>
      <Field
        name="contactTitle"
        component="input"
        type="text"
        placeholder="CEO"
        // validate={required}
      />
      <Error name="contactTitle" />
    </div>
    <div>
      <label>Phone</label>
      <Field
        name="contactPhone"
        component="input"
        type="text"
        placeholder="1-(800)-123-4567"
        // validate={required}
      />
      {/* <Error name="contactPhone" /> */}
    </div>
    <div>
      <label>Email</label>
      <Field
        name="contactEmail"
        component="input"
        type="email"
        placeholder="Email"
        // validate={required}
      />
      {/* <Error name="contactEmail" /> */}
    </div>
    </div>
  );


export default BasicContactInfo;