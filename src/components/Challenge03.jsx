// // Create a form with input fields (e.g., name, email, password) and implement client-side form validation. Display error messages if the user enters invalid data.

// import React, { useState } from "react";

// const Challenge03 = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validationForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     //name
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required!";
//       isValid = false;
//     }

//     //email
//     const emailRegularExp =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!formData.email.trim() || !emailRegularExp.test(formData.email)) {
//       newErrors.email = " Email is not valid!";
//       isValid = false;
//     }

//     //password
//     if (!formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters!";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validationForm()) {
//       console.log(formData);
//     } else {
//       console.log("failed to submit");
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="name"
//           id="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {errors.name && <span className="error">{errors.name}</span>}
//         <input
//           type="text"
//           name="email"
//           placeholder="email"
//           id="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span className="error">{errors.email}</span>}
//         <input
//           type="text"
//           name="password"
//           placeholder="password"
//           id="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <span className="error">{errors.password}</span>}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Challenge03;

import React, {useState, useRef} from 'react';

function Challenge06() {
    
 
    // const handleEmailChange = (e)=>{
    //     setEmail(e.target.value)
    // }
    // const handlePasswordChange = (e)=>{
    //     setPassword(e.target.value)
    // }

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);

    }

    return (
        <section className='landing-section'>
            <div className="row container">
                <form className='form' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input ref={passwordRef} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </section>
    );
}

export default Challenge06
