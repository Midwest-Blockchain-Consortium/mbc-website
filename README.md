# Midwest Blockchain Consortium Website 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Author: [Zachary Thielemann](https://github.com/zachdt)

To get started, type `yarn install` or `npm install` in the root directory after cloning.
<br />

# Project Structure


## /src

### /assets

Contains all static assests (favicons mostly).  Never drop images in here, always reference an external CDN link.

### /routes

Contains active `react-router-dom` route list and respective components.  Passes BrowserRouter to child components.

### /styles

Contains all style files.  This project uses `react-jss`.  Need to write styles for a component? Create a folder with that component's title,then create a .js that exports an `react-jss` object.  Pass that object to your component and bam you got styles.

### /views

Contains all UI related custom react components, broken into layout components and router destinations.

Current Views:
* footer
  * footer component, persists on the bottom of every page
* landing
  * router destination `/`
* navigation
  * navigation header component, persists on the top of every page

## Grid System

Material-UI includes a built-in breakpoint system for adjusting pages for different screen sizes.  The Grid component container/item system is utilized in all views.  These breakpoints are not expressed in css/jss, but at the compontent level.  Read `/src/views/landing/Landing.js` for a good example of integration.

## Code Styling 

This project was built using the Prettier and ESLint plugin for VSCode.  If you are not using VSCode (you should lol), Prettier and ESLint will install as a dev dependancy from `yarn install`.

### Code Rules

* tabWidth
  * 2 spaces
* semi
  * false - don't use semicolons at the end of statements!
* singleQuote
  * use a single quote ('example') not a double ("example")
* jsxSingleQuote
  * applies singleQuote to .jsx files


## Available Scripts

In the project directory, you can run:

### `yarn local`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn start`

Initiates a static server on port 8080.  Used in serverless deployment environment (GCP App Engine in our case).

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

