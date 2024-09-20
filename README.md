###DENPAR854_PTO2306_GroupA_DenelleParsuramen_DWACapstone

###PodCastor - Podcast Streaming Platform
This project is built using Create React App and provides users with an interactive interface to browse, search, and favorite podcast shows and episodes. Users can filter by genre, search using fuzzy search, and manage their favorite shows and episodes.

###Available Scripts
In the project directory, you can run:

###npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

###npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

###npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

###npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

###Key Features
Browse Shows: Users can browse through a list of podcast shows, view show details, and explore episodes.
Search by Title: Use the search bar to search for shows by title.
Fuzzy Search: Users can perform fuzzy searches on show titles and descriptions using Fuse.js.
Sort Shows: Sort shows by title (A-Z or Z-A) or by last updated date (ascending or descending).
Filter by Genre: Users can filter shows by clicking on genre labels.
Favorites: Mark shows and episodes as favorites, and view a list of all your favorite shows and episodes.
Persistent Favorites: Favorites are stored locally and synced between sessions.
Playback: Each episode has a built-in audio player for listening to podcast episodes.

###Project Setup
-Clone the repository:
-bash
-Copy code
-git clone https://github.com/your-repository-url.git
-Navigate into the project directory:
-bash
-Copy code
-cd podcastor
-Install dependencies:
-Copy code
-npm install
-Run the app:
-npm start

###Project Structure
The project follows a modular component-based structure:

###components/: Contains all the React components for the app such as Home, ShowPreview, Favorites, etc.
###Styles/: Custom CSS styles for each component are stored here.
###CallingApi.js: This file contains API calls for fetching podcast shows and episodes from an external API.
###FavoriteHeart.js: Component for displaying and toggling the favorite heart icon for shows and episodes.

###Learn More
You can learn more in the Create React App documentation. To learn React, check out the React documentation.

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify