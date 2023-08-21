# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Link Deploy

This project was deploy here: [https://movie-client-4tj0.onrender.com](https://movie-client-4tj0.onrender.com)

### This project has following structures:

`public
├─ favicon.ico
├─ index.html
├─ logo192.png
├─ logo512.png
├─ manifest.json
└─ robots.txt
src
├─ components
│ │─ Browse
│ │   │─ Banner.js
│ │   │─ Banner.module.css
│ │   │─ MovieDetail.js
│ │   │─ MovieDetail.module.css
│ │   │─ MovieList.js
│ │   │─ MovieList.module.css
│ │   │─ OriginalList.js
│ │   └─ OriginalList.module.css
│ ├─ Layout
│ │   │─ NavBar.js
│ │   └─ NavBar.module.css
│ ├─ Search
│ │   │─ ResultList.js
│ │   │─ ResultList.module.css
│ │   │─ SearchForm.js
│ │   └─ SearchForm.module.css
│ └─ UI
│     │─ IsLoading.js
│     │─ IsLoading.module.css
│     │─ Modal.js
│     └─ Modal.module.css
├─ hooks
│   └─ use-http.js
│─ pages
│   │─ Browse.js
│   │─ Error.js
│   │─ Root.js
│   └─ Search.js
│─ App.js
│─ index.css
└─ index.js
.gitignore
package-lock.json
package.json`

- public: Folder contains root HTML for the Website.
- src: Folder contains main code for building the Website:
  - .css & .module.css: File CSS contains code for styling the Website.
  - Browse: Folder contains file to create structure for the Home page.
  - NavBar.js: File contains code to create navbar for the Website.
  - Search: Folder contains file to create structure for the Search page.
  - IsLoading.js: File contains code to create loading status before display a page.
  - Modal.js: File contains code to create an overlay container.
  - use-http.js: File contains code to fetch data with Hooks.
  - Browse.js: File contains code to display the Home page.
  - Error.js: File contains code to display the 404 page.
  - Root.js: File contains code to display the layout of the Website.
  - Search.js: File contains code to display the Search page.
- .gitignore: File contains code to ignore some folder when pushing project on Github.
- package.json & package-lock.json: File contains libraries code for building the Website.
