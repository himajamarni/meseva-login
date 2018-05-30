1. Clone the source code with git
    eg: git clone <clone-url> <local-workspace-path>

2. Requirements for setting up the environment:

- Make sure the npm and node is installed.
    [Node.js](https://nodejs.org/en/) 6+

3. Install and fetch the node modules:
```shell
npm install
```
4. This app relies on MongoDB database, make sure you have local instance of MongoDB running.
For more instructions: https://treehouse.github.io/installation-guides/mac/mongo-mac.html

5. After you have the mongod running, make sure you override the db connection info in <workpace>/config/config.js

4. To compile and run the app:

Make sure to add a `config.js` file in the `config` folder. See the example there for more details.

Production mode:

```shell
npm start
```

Development (Webpack dev server) mode:

```shell
npm run start:dev
```
