import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SecretToken() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setToken(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save token to localStorage
    localStorage.setItem('token', token);

    console.log('Token submitted:', token); // Debugging token value
    console.log('Token in localStorage:', localStorage.getItem('token')); // Debugging localStorage value

    // Navigate based on token
    console.log('Navigating to:', `/admin${token}`); // Debugging navigate call
    switch (token) {
      case '1':
        navigate('/form'); // Updated route for token '1'
        break;
      case '2':
        navigate('/form'); // Updated route for token '2'
        break;
      case '3':
        navigate('/admin3');
        break;
      case '4':
        navigate('/admin4');
        break;
      case '5':
        navigate('/admin5');
        break;
      case '6':
        navigate('/admin6');
        break;
      case '7':
        navigate('/admin7');
        break;
      default:
        alert('Invalid token!');
        break;
    }
  };

  return (
    <div className="container py-4">
      <p><strong>NOTE:</strong> Do not share your token with anyone</p>
      <form onSubmit={handleSubmit} className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="token" className="form-label text-muted">Token</label>
          <input
            id="token"
            name="token"
            type="text"
            value={token}
            onChange={handleChange}
            className="form-control text-muted"
            placeholder="Enter your Secret token"
          />
        </div>
        <div className="w-100 text-center mt-4">
          <button
            type="submit"
            style={{ width: '20%', fontSize: '1.2rem', margin: 'auto' }}
          >
            Submit &amp; Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecretToken;
