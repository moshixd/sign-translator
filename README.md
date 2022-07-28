# Sign Language Translator

A project during talent upskilling from Noroff, using REACT to make an application to translate english letters or words to sign language.

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

Set REACT_APP_API_KEY, you can find a random api key generator onlie.

Set NODE_ENV to production.

in .env set the values API_KEY and NODE_ENV.

# Install
npm instal

# Usage
Appliction for translating modern english with 26 letters to signlanguage.

To navigate to the translating page and profile page to see recent translations, you need to be logged in first by either typing username and it creates an user or just type in a name recently used to log in.

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
