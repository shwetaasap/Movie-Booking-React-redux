export default function (state = {}, action) {
    switch (action.type) {
        case 'UpcomingMovieList':
            return {...state,upcomingMovie:action.payload }  
        default:
            return state
    }
}