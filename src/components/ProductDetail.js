import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListingData } from '../actions/get-data';

class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log("Dataaaaaaaaaaaaaaaa", this.props.getListingData());        
    }
    render() {
        console.log(this.props);
        return (
            <div>
              <h1 className="page-heading">detail page</h1>
            </div>
          );
    }
}

function mapStateToProps(state){
    const {
        listingStore: {
            errorData,
            isListingFetching,
            isListingData
        }
    }=state;
    return {
        errorData,
        isListingFetching,
        isListingData
    };
}
export default connect(mapStateToProps, {
    getListingData
})(ProductDetail);
