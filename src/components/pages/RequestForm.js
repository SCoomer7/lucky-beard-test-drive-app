import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmail, selectEmailState } from '../../features/Email/EmailSlice';
import './styles/RequestForm.css';

// This is the Array for the role feild dropdown.
const roles = ['Developer', 'QA Analyst', 'Business Analyst'];

const RequestForm = () => {
  const dispatch = useDispatch();
// Destructuring values from the Redux state using the useSelector hook
// 'status', 'message', and 'error' are extracted from the 'selectEmailState' slice of the Redux store
  const { status, message, error } = useSelector(selectEmailState);

// This is teh form state.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    role: '',
  });

  // Creating a ref to hold a reference to the form element
  const form = useRef();

// Event handler for sending an email
// Dispatches the 'sendEmail' action with the current form reference, triggering the email sending process
  const sendEmailHandler = (e) => {
    e.preventDefault();
    dispatch(sendEmail(form.current));
  };

// handleChange function is responsible for updating the form data
// It takes an event (e) as a parameter, extracts the 'name' and 'value' from the event target
// It then uses the setFormData function to update the previous data with the new [name]: value pair
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

// Updates the state to empty string when the for status is successfully submitted
  useEffect(() => {
    if (status === 'succeeded') {
      setFormData({
        name: '',
        email: '',
        mobile: '',
        company: '',
        role: '',
      });
    }
  }, [status]);

  return (
    <div className="email-form">
      <div className="email-container">
        <h1 className="form-header">Please fill your application</h1>
        <form ref={form} onSubmit={sendEmailHandler}>
                    <div className="mb-4">
            <input
              type="text"
              className="form-field"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name'
              required
              maxLength={50}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-field"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Your email'
              required
              maxLength={50}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="form-field"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder='Mobile number'
              required
              maxLength={13}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-field"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder='Company'
              required
              maxLength={13}
            />
          </div>
          <div className="mb-4">
            <select
              className="form-field"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option className='option-field' value="">Role in the company</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="form-button-submit" value="Send" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Request'}
          </button>
        </form>
         {message && (
          <div className="alert alert-success mt-3" role="alert">
            Your Request was successfully sent! 
          </div>
        )}
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestForm;