import React from "react";

import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="mx-4" onSubmit={formik.handleSubmit}>
      <div>
        <h1 className="underline ">Personal Details:</h1>
        <div className="flex justify-between">
          <div>
            <label htmlFor="firstName">Name</label>
            <input
              className="input mx-2 input-bordered input-accent  max-w-xs"
              id="name"
              name="name"
              type="text"
              required
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

          <div >
            <label htmlFor="lastName">Date of Birth or Age</label>
            <input
              className="input mx-2 input-bordered input-accent  max-w-xs"
              id="age"
              name="age"
              type="text"
              required
              onChange={formik.handleChange}
              value={formik.values.age}
            />
          </div>
          <div>
            <label htmlFor="email">Sex</label>
            <select
              className="input mx-2 input-bordered input-accent  max-w-xs"
              id="sex"
              onChange={formik.handleChange}
              value={formik.values.city}
            >
              <option>Select One</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="underline ">Personal Details:</h1>
        <div className="flex justify-between">
          <div>
            <label htmlFor="firstName">Mobile</label>
            <input
              className="input mx-2 input-bordered input-accent  max-w-xs"
              id="mobile"
              name="mobile"
              type="number"
              required
              onChange={formik.handleChange}
              value={formik.values.mobile}
            />
          </div>

          <div>
            <label htmlFor="lastName">Govt Issued ID</label>
            
            <select
              className="input mx-2 input-bordered input-accent  max-w-xs"
              id="idType"
              onChange={formik.handleChange}
              value={formik.values.idType}
            >
              <option>Select One</option>
              <option>National ID</option>
              <option>Birth ID</option>
              <option>Other</option>
            </select>
            <input
              className="input mx-2 input-bordered input-accent  max-w-xs"
              id="idNumber"
              name="idNumber"
              type="number"
              required
              onChange={formik.handleChange}
              value={formik.values.idNumber}
            />
          </div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
