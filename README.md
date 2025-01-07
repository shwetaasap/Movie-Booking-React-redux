# Getting Started with Create React App

This React/Redux project is bootstrapped/CSS styled. This is a movie booking app, its a test application to try hands on for advanced REAct features.

This application first goes Authentication page which after authorization lands to Homepage from where is routed to different pages where it shows different information about -"Latest Movie"/"upcoming Movie"/"new events nearby" and once user decided to book ticket lands to Booking ticket page and gets confirmation reflected on page and QR Code generated for same

## Available Scripts

In the project directory, you can run:

### 'npx json-server movie-table.json' in another terminal to run DB.json (localhost:3000/movieTable) db will run on this host
### authentication is enabled too which restricts any user to process further
### after authentication is successful with username: "user1",password: "1234" page is landed to homepage
### `npm start`

** Abut this App**
In this movie booking ticket app, have integrated several advanced features and architectural patterns. Authentication is managed through middleware, ensuring secure user access. State management is centralized using Redux, which simplifies the handling of application state. Routing is implemented to navigate between different pages seamlessly. Custom hooks encapsulate reusable logic, enhancing code maintainability. Lifecycle management is handled with React’s hooks, ensuring efficient data fetching and cleanup. Event handling is set up to manage user interactions, and conditional rendering ensures the UI responds appropriately to different states. The app follows a layered architecture, separating concerns into distinct layers, making the codebase more modular and easier to maintain. This combination of techniques results in a robust, scalable, and user-friendly application. 
Have to accept another host to run app e.g. localhost:3001


