import React from 'react';
import { Link } from 'react-router-dom';

const InsuranceCard = (props) =>
  <div className='card-group'>
    {
        <React.Fragment>
            <p className='plan-name'><span className='highlight-text'>Plan Name:</span> {props.data.plan.planName}</p>
            <p className='provider-name'><span className='highlight-text'>Insurance Provider:</span> {props.data.plan.insuranceProviderName}</p>
            <p className='sum-insured'><span className='highlight-text'>Sum Insured:</span> {props.data.sumInsured}</p>
            <p className='total-amount'><span className='highlight-text'>Premium:</span> {props.data.totalAmount.amount}</p>
            <Link to={`/detail/${props.data.plan.id}`}>View Details</Link>
        </React.Fragment>
    }
  </div>

export default InsuranceCard;