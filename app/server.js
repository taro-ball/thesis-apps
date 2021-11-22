const express =  require('express');
const bodyParser =  require('body-parser');
const routes =  require('./routes/index');

// Instantiate express
const app = express();
// Set our port
const port = process.env.PORT || 8080;
// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Register our routes in app
app.use('/', routes);
// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
// Export our app for testing purposes
// export default app;
module.exports = app;
