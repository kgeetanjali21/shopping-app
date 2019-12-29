import React from 'react';
import LogoImage from './LogoImage';
import { Link } from 'react-router-dom';

const InsuranceCard = (props) => {
    const {
        plan,
        sumInsured,
        totalAmount,
        insuranceProviderId
    } = props.data;
    return (
        <div className='card-group'>
            {
                <React.Fragment>
                    <div className='card-logo-wrap'>
                        <LogoImage insuranceId={insuranceProviderId} />
                    </div>
                    <div className='card-detail-wrap'>
                        <p className='plan-name'>
                            <span className='highlight-text'>Plan Name: </span>
                            {plan.planName}
                        </p>
                        <p className='provider-name'>
                            <span className='highlight-text'>Insurance Provider: </span>
                            {plan.insuranceProviderName}
                        </p>
                        <p className='sum-insured'>
                            <span className='highlight-text'>Sum Insured: </span>
                            {sumInsured}
                        </p>
                        <p className='total-amount'>
                            <span className='highlight-text'>Premium: </span>
                            {totalAmount.amount}
                        </p>
                    </div>
                    <Link className='detail-link' to={`/detail/${props.data.plan.id}`}>View Details</Link>
                </React.Fragment>
            }
        </div>
    )
}
export default InsuranceCard;