const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});