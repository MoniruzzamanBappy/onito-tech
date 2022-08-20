import React, { useState } from "react";

import { useFormik } from "formik";
import UserList from "./UserList";

const Register = () => {
  var items = [];
  const [users, setUsers] = useState([]);
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      setUsers(values);
    },
  });
  if (users) {
    items = [...items, users];
  }
  return (
    <>
      <form className="mx-10 mt-5" onSubmit={formik.handleSubmit}>
        <div>
          <h1 className="underline ">Personal Details:</h1>
          <div className="flex justify-between">
            <div>
              <label htmlFor="firstName">
                Name<span className="text-red-600">*</span>
              </label>
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

            <div>
              <label htmlFor="lastName">
                Date of Birth or Age<span className="text-red-600">*</span>
              </label>
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
              <label htmlFor="email">
                Sex<span className="text-red-600">*</span>
              </label>
              <select
                className="input mx-2 input-bordered input-accent  max-w-xs"
                id="sex"
                required
                onChange={formik.handleChange}
                value={formik.values.sex}
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
                className="input mx-2 input-bordered input-accent   max-w-xs"
                id="idNumber"
                name="idNumber"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.idNumber}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="underline ">Address Details:</h1>
          <div className="flex justify-between">
            <div>
              <label htmlFor="firstName">Address</label>
              <input
                className="input mx-2 input-bordered input-accent  max-w-xs"
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>

            <div>
              <label htmlFor="lastName">State</label>
              <select
                className="input mx-2 input-bordered input-accent  max-w-xs"
                id="sex"
                onChange={formik.handleChange}
                value={formik.values.state}
              >
                <option>Select One</option>
                <option>Dhaka</option>
                <option>Comolla</option>
                <option>Rangpur</option>
                <option>Chitagong</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
                <option>Barishal</option>
                <option>Khulna</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">City</label>
              <select
                className="input mx-2 input-bordered input-accent  max-w-xs"
                id="city"
                onChange={formik.handleChange}
                value={formik.values.city}
              >
                <option>Select One</option>
                <option>Dhaka</option>
                <option>Comolla</option>
                <option>Rangpur</option>
                <option>Chitagong</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
                <option>Barishal</option>
                <option>Khulna</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <div>
                <label htmlFor="firstName">Country</label>
                <input
                  className="input mx-2 input-bordered input-accent  max-w-xs"
                  id="country"
                  name="country"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
              </div>

              <div>
                <label htmlFor="lastName">Pincode</label>
                <input
                  className="input mx-2 input-bordered input-accent  max-w-xs"
                  id="pincode"
                  name="pincode"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.pincode}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="underline ">Other Details:</h1>
          <div className="flex justify-between">
            <div>
              <label htmlFor="firstName">Occupation</label>
              <input
                className="input mx-2 input-bordered input-accent  max-w-xs"
                id="occupation"
                name="occupation"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.occupation}
              />
            </div>

            <div>
              <label htmlFor="lastName">Religion</label>
              <select
                className="input mx-2 input-bordered input-accent  max-w-xs"
                id="religion"
                onChange={formik.handleChange}
                value={formik.values.religion}
              >
                <option>Select One</option>
                <option>Islam</option>
                <option>Hindu</option>
                <option>Christian</option>
                <option>Buddha</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">Marital Status</label>
              <select
                className="input mx-2 input-bordered input-accent  max-w-xs"
                id="maritalStatus"
                onChange={formik.handleChange}
                value={formik.values.maritalStatus}
              >
                <option>Select One</option>
                <option>Married</option>
                <option>Unmarried</option>
                <option>Widow</option>
                <option>Complicated</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">Blood Group</label>
              <select
                className="input mx-2 input-bordered input-accent  max-w-xs"
                id="bloodGroup"
                onChange={formik.handleChange}
                value={formik.values.bloodGroup}
              >
                <option>Select One</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <div>
                <label htmlFor="firstName">Nationality</label>
                <input
                  className="input mx-2 input-bordered input-accent  max-w-xs"
                  id="nationality"
                  name="nationality"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.nationality}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="flex justify-end mt-5 ml-auto btn btn-info"
          type="submit"
        >
          Submit
        </button>
      </form>

      <hr className="mx-10 mt-5" />

      {users ? (
        <div class=" mx-10 border rounded-xl my-10 overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age/Birth Day</th>
                <th>Sex</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item, index) => (
                <UserList key={index} index={index} item={item}></UserList>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Register;
