const express = require('express')
const app = express()
const port = 3000

// This is a stubbed function that returns the same static
// data each time. In a real server environment, this would
// query the database with the given zip parameter.
get_weather_data = (zip) => {
    return {
        'location': 'San Francisco',
        'image': '/examples/common/partly_cloudy.png',
        'temp': 78,
        'desc': 'Partly Cloudy'
    }
}

// This is the server-side implementation of the weathernerby.com widget
// from Chapter 1
app.get('/widget.js', (req, res) => {
    const data = get_weather_data(req.params.zip);

    res.set('Content-Type', 'application/javascript')

    res.send(`
        document.write(
            '<div>' +
            '    <p>${data.location}</p>' +
            '    <img src="${data.image}"/> ' +
            '    <p><strong>${data.temp} &deg;F</strong> &mdash; ${data.desc}</p>' +
            '</div>'
        )
    `);


});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
