# Title
Sign Language Translator

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Connect project to Git.

## .env configuration
This must be done in the root of your project directory.
The same place you find the package.json file.
Create a .env in the root of your project.

Add:

REACT_APP_API_URL= XXXX(your url).

REACT_APP_API_KEY= XXXX (your API key).

Then in .gitignore file under #misc write .env to hide environment variables when publishing to git.

## Follow the steps to deploy your react app to Heroku.
Install heroku cli and create an heroku account.

This must be done in the root of your project directory(
heroku login
heroku create --buildpack mars/create-react-app

git add .

git commit -m "DEPLOY: Heroku buildpack"

git push heroku master # Could also be main depending on your setup.
)

Create an API from https://github.com/dewald-els/noroff-assignment-api change it's name. Open the api, navigate to setting.

Open upp Reveal Config Vars.

Create variables API_KEY and NODE_ENV.

Set API_KEY, you can find a random api key generator onlie.

Set NODE_ENV to production.

in .env set the values API_KEY and NODE_ENV.

# Install
npm instal

# Usage
Appliction for translating modern english with 26 letters to signlanguage.

This will open a new Webpage in your browser at localhost:xxxx. Remember to use your React and Redux browser extentions.

Contributers:

PH (@moshixd)

SA (@salahabdinor)

NP (@nicolaspalaciosdiaz)

## Contributing
No one allowed

# API
https://sign-language-translation-asl.herokuapp.com/translations

# Figma & DrawIO
https://www.figma.com/file/TtKCkc4T9vskDgmDZAzscs/Untitled?node-id=0%3A1

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
