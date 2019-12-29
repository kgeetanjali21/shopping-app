import React, { Component } from 'react';
import insuranceData from '../insurance.json';
import InsuranceCard from './InsuranceCard.js';
import '../assets/style/listing.scss';

class CardListing extends Component {
    render() {
        const { content } = insuranceData;
        console.log('content', content);
        return (
            <React.Fragment>
                <div className="card-listing">
                    {
                        content.map((item, index) => (
                            <InsuranceCard data={item} key={index} />
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default CardListing;