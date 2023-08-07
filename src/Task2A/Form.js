import React, { useState } from 'react';
// import './Form.css';

const ContactForm = () => {
  const [contactType, setContactType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleContactTypeChange = (event) => {
    setContactType(event.target.value);
  };

  return (
      <div className="container  mt-5  bg-light">
        <div className='card'>
        <div className='card-body'>
        <div className="row mt-4">
            <div className="form-group col-sm-6 ">
                              <label for="inputFirstName">First Name</label>
                              <input type="FirstName"
                               class="form-control" 
                               id="inputFirstName"
                                value={firstName}
                               onChange={(event) => setFirstName(event.target.value)}
                                />
            </div>
            <div className="form-group col-sm-6 ">
                              <label for="inputLastName">Last Name</label>
                              <input type="FirstName"
                               class="form-control" 
                               id="inputLastName"
                                value={lastName}
                               onChange={(event) => setLastName(event.target.value)}
                                />
            </div>
        </div>
        <div className="row mt-4">
        <div className="form-group col-sm-6">
            <label For="inputType">How should we contact you?</label><br></br>
            <select  id="inputType" className="form-control"
              value={contactType}
              onChange={handleContactTypeChange}
            >
              <option value="">Choose option</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div className="form-group col-sm-6">
          {contactType === 'phone' && (
            <div className="form-group1">
              <label For="inputType">Phone Number</label><br></br>
              <input className='form-control'
                type="text"
                id="inputType"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          )}
          {contactType === 'email' && (
            <div className="">
              <label For="inputemail">Email Address</label><br></br>
              <input className='form-control'
                type="email"
                id="Inputemail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          )}
        </div>
        </div>
        </div>
        </div>
      </div>
  );
};

export default ContactForm;