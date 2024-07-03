import React from 'react';
import { Link } from 'react-router-dom';

export function Both() {
  return (
    <div>
      <h1>Login Page</h1>
      <div className="container">
        <Link to="/login1">
          <button className="button student">Student</button>
        </Link>
        <Link to="/login2">
          <button className="button admin">Admin</button>
        </Link>
      </div>
    </div>
  );
}

export default Both;
