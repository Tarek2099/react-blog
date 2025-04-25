import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingSpinner = ({ message = 'Loading...' }) => (
  <div className="loading">
    <Spinner color="secondary" />
    {message && <span className="loading-text">{message}</span>}
  </div>
);

export default LoadingSpinner;