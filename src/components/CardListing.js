import React, { Component } from 'react';
import { content } from '../insurance.json';
import InsuranceCard from './InsuranceCard.js';
import '../assets/style/listing.scss';

class CardListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuranceData: content
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const getValArr = event.target.value ? event.target.value.split(" ") : '';

        // sort data based on premium amount and created at
        if(getValArr) {
            if(getValArr[1] === 'Premium') {
                content.map(item => (
                    content.sort((a, b) => a.totalAmount.amount - b.totalAmount.amount)
                ));
            } else if(getValArr[1] === 'Created') {
                content.map(item => (
                    content.sort((a, b) => a.plan.createdAt - b.plan.createdAt)
                ));
            }

            // Reverse the array data from highest to lowest
            if(getValArr[0] === 'Highest') {
                content.reverse();
            }

            this.setState({
                insuranceData: content
            });
        }
    }

    render() {
        console.log('content', content);
        return (
            <React.Fragment>
                <div className='sort-filter-tab'>
                    <label>
                        Sort By: 
                        <select onChange={this.handleChange}>
                            <option value='' defaultValue>Please select--</option>
                            <option>Highest Premium</option>
                            <option>Lowest Premium</option>
                            <option>Highest Created</option>
                            <option>Lowest Created</option>
                        </select>
                    </label>
                </div>

                {/* Product listing */}
                <div className="card-listing">
                    {
                        this.state.insuranceData.map((item, index) => (
                            <InsuranceCard data={item} key={index} />
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default CardListing;