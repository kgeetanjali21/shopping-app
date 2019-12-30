import listingJson from '../insurance.json';

import {
    FETCH_LISTING_SUCCESS
} from './action-types';

// Action generators
function recievedListingDataSuccess(listingJson){
    return {
        'type': FETCH_LISTING_SUCCESS,
        listingJson
    };
}

// API call
export function getListingData() {
    return dispatch => {
        dispatch(recievedListingDataSuccess(listingJson));
    }
}