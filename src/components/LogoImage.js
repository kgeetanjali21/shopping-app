import React from 'react';
import Hdfc_logo from '../assets/images/HDFCErgo.png';
import RelianceGeneral from '../assets/images/RelianceGeneral.png';
import Religare from '../assets/images/Religare.png';

const InsuranceCard = (props) => {
    switch(props.insuranceId) {
        case 'HDFC_ERGO':
            return <img className='image-logo' src={Hdfc_logo} alt='HDFC_ERGO' />;
        case 'RELIANCE_GENERAL':
            return <img className='image-logo' src={RelianceGeneral} alt='RELIANCE_GENERAL' />;
        case 'RELIGARE_HEALTH':
            return <img className='image-logo' src={Religare} alt='RELIGARE_HEALTH' />;
        default:
            return null;
    }
}
export default InsuranceCard;