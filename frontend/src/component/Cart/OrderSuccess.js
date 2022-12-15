import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './orderSuccess.css';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className='orderSuccess'>
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to='/orders'>View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
