import {
    FETCH_LISTING_SUCCESS
} from '../actions/action-types';

const initialData = {
    'listingData': null
}

export default function listingStore(state=initialData, action) {
    switch (action.type) {
        case FETCH_LISTING_SUCCESS:
            return Object.assign({}, state, {
                'listingData': action.listingData
            });
    
        default:
            return state;
    }
}