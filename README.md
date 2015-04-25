# express-template

Template app using express.js, angular and semantic-ui. It is based in api consumed + templates app.

## Installation

```bash
git clone git@github.com:daniel-g/express-template.git myApp
cd myApp
brew install npm
npm install
npm start
```

## Configuration

1. Configure your server in config/server.js
2. Add controllers to controllers/
3. Configure your routes in config/routes.js
4. Load templates in http://localhost:3030/templates/nested/folder/my-template, which looks for a file in views/templates/nested/folder/my-template. The only rule is never to use ```..```



