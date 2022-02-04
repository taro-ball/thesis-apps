const express =  require('express');
const bodyParser =  require('body-parser');
const routes =  require('./routes/index');

// Instantiate express
const app = express();

// logging

// const { createLogger, format, transports } = require('winston');
// const { combine, timestamp, label, printf } = format;

// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level}: ${message}`;
// });

// const logger = createLogger({
//   format: combine(
//     label({ label: '' }), //empty label for now
//     timestamp(),
//     myFormat
//   ),
//   transports: [new transports.Console()]
// });

// function logRequest(req, res, next) {
//     logger.info(`${req.method} ${req.url} ${res.statusCode} ${req.ip}`)
//     next()
// }
// app.use(logRequest);

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
