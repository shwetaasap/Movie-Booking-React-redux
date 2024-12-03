import { combineReducers } from 'redux';
import articles from './latestmovielist-reducer';
import upcomingmovies from './upcomingmovielist-reducer';
import nearbyevent from './nearbyevent-reducer';
import movieBookingTimeTable from './bookingtimeTable.-reducer';


const rootReducer = combineReducers({
    articles,upcomingmovies,nearbyevent,movieBookingTimeTable
   
})

export default rootReducer