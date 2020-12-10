# CSS Grid Layout Starter
Starter kit for page layout using CSS grid. Build from "[node-project-starter](https://github.com/newsproutsmedia/node-project-starter)" repository.

### Express Setup
This starter exposes the index.html page in a public directory. No express endpoints have been set up yet.

### SCSS
Also, this project uses node-sass to compile CSS. It is currently set to build a "main.css" file in the public/css folder.
To build your CSS from the terminal:
```
npm run scss
```
To build CSS, set a watch folder, and run the dev server:
```
npm run watch
```

## Dev Server Instructions
To run the dev server (on port 3000) WITHOUT first compiling CSS:
```
npm run dev
```

### Jest Testing
The project is set up to use the Jest testing framework.
Run Jest tests:
```
npm test
```

### Included Dependencies:

"dotenv": "^8.2.0",
"express": "^4.17.1",
"helmet": "^4.1.1",
"node-sass": "^5.0.0",
"os": "^0.1.1",
"winston": "^3.3.3"

### Dev Dependencies:
"jest": "^26.4.2",
"nodemon": "^2.0.4"
