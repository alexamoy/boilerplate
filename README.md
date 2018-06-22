# Boilerplate Setup

Step by step setup guide for the NERDS stack
  Node.js
  Express.js
  React.js
  Databases using SQL

## Steps

1. `mkdir boilerplate` then `cd boilerplate`
2. Create package.json with `npm init`
3. `git init` and make a .gitignore:

    ```
    node_modules
    bundle.js
    bundle.js.map
    ```
4. dependencies (npm install): => this will create node_modules and package-lock.json
    - express
    - sequelize
    - body-parser
    - morgan
    - path
    - react
    - react-dom
    - react-redux
    - react-router-dom
    - redux
    - pg
5. devDependencies (npm install --save-dev):
    - webpack
    - webpack-cli
    - babel-core
    - babel-loader
    - babel-preset-react
    - babel-preset-env
    - babel-preset-stage-2
6. Create `webpack.config.js` (see file)
7. Create `.babelrc` for the babel-presets that were installed
8. Set start script `npm start` command to build your client javascript and run server (see package.json)
9. Set build script `npm run build` command to build your bundle.js
9. Create file structure:

    ```
    /server
      /api => your back-end routes should go here
      /db
        /models => separate models into different files
    /public
      /index.html
      /style.css
      /bundle.js
    /client
      /components => React components go here
      /store => store and redux reducers should go here
    ```
