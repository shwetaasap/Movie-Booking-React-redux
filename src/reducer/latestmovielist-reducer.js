export default function (state = {}, action) {
    switch (action.type) {
        case 'LatestMovieList':
            return {...state,latestMovie:action.payload } 
        case 'SelectedMovie':
            return {...state,selectedMovie:action.payload } 
        case 'ClearSlectedMovie':
            return {...state,selectedMovie:action.payload } 
        default:
            return state
    }
}