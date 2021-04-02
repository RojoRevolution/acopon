const path = require('path');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('index', { title: 'Design, Illustration, Web Development | RojoRevolution' });
    });

    app.get('*', (req, res) => {
        res.render('index', { title: 'Design, Illustration, Web Development | RojoRevolution' });
    });

}