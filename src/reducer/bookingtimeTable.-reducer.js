export default function (state = {}, action) {
    switch (action.type) {
        case 'BookingTime':
            return {...state,bookingTimetable:action.payload }  
        default:
            return state
    }
}