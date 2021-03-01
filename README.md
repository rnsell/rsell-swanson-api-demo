# Ronswon Api Demo

This application makes a request to the [Ron Swanson Api](https://github.com/jamesseanwright/ron-swanson-quotes) and then displays the quotes on the page. It will randomize votes to simulate a page where people have actually voted on their favorite quotes. The data is serialized to session storage, so upon refresh the page contains the same results. The user can upvote or downvote quotes on a page, but similiar to reddit, they can only upvote or downvote once.

Architecturally, there are much simpler ways to build this application, but this project uses Redux to provide the ability to truly customize the application. The project uses styled components to agnostically not have to choose a css preprocessor and aims at using modern component design with React. Components use data-testid attributes with a BEM like approach for e2e qa testing. The application does not achieve 100% coverage yet but covers critical parts like the components. Cypress tests will come eventually.

As said previously, there are simpler methods, but Redux and Rxjs allow for a very deep customization. A companion [chrome extension](https://github.com/rnsell/rsell-swanson-demo-chrome-extension) exists that allows further customization of the application such as modifying how many quotes are fetched, permanently displaying the error message on the page which might otherwise be hard to test, and increasing the time it takes to get data to easily see the loading components. Since the application styles are stored in the Redux store, even display customizations and text on the page could be customized and will eventually come to the extension.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
