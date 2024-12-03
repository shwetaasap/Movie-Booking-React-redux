export default function (state = {}, action) {
    switch (action.type) {
        case 'EventList':
            return {...state,nearbyEvent:action.payload }  
        default:
            return state
    }
}