import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    Id : '',
    UserGroupId: '',
    Token: '',
    UserName: '',
    Password: '',
    SortID: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      console.log(response.data); 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label>Id:</label>
          <input type='text' name='Id' value={formData.Id} onChange={handleChange} className='form-control'/>
          </div>
        <div className="form-group">
          <label>UserGroupId:</label>
          <input type="text" name="UserGroupId" value={formData.UserGroupId} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Token:</label>
          <input type="text" name="Token" value={formData.Token} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>UserName:</label>
          <input type="text" name="UserName" value={formData.UserName} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="Password" value={formData.Password} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>SortID:</label>
          <input type="text" name="SortID" value={formData.SortID} onChange={handleChange} className="form-control" />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
