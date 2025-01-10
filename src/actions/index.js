let url = 'http://3.17.216.66:4000'// not working..
let url1 = 'http://localhost:3000/movieTable'

export async function latestMovieList() {
    try {
        const response = await fetch(`${url1}`, { method: 'GET' });
        const data = await response.json();
        return {
            type: 'LatestMovieList',
            payload: data
        };
    } catch (error) {
        console.error('Error fetching latest movie list:', error);
        return {
            type: 'LatestMovieList',
            payload: null,
            error: error.message
        };
    }
}


export function upcomingMovieList() {
    const output = fetch(`${url1}`, { method: 'GET' })
        .then((res) => res.json())
    return {
        type: 'UpcomingMovieList',
        payload: output
    }
}

export function eventsList() {
    const output = fetch(`${url1}`, { method: 'GET' })
        .then((res) => res.json())
    return {
        type: 'EventList',
        payload: output
    }
}

export async function bookingMovie() {
    try {

        const output = await fetch(`${url1}`, { method: 'GET' })
        const data = await output.json();
        return {
            type: 'BookingTime',
            payload: data
        }
    } catch (error) {
        console.error('Error fetching latest movie list:', error);
        return {
            type: 'BookingTime',
            payload: null,
            error: error.message
        };
    }
}

export function selectedMovieDetail(id) {
    const output = async () => {
        try {
            const response = await fetch(`${url1}`, { method: 'GET' });
            const data = await response.json();
            console.log('inside action', data);
            return data;
        } catch (error) {
            console.error('Error fetching movie:', error);
        }
    };

    return {
        type: 'SelectedMovie',
        payload: output()
    };
}


export function clearSlectedMovie() {
    return {
        type: 'ClearSlectedMovie',
        payload: []
    }
}

