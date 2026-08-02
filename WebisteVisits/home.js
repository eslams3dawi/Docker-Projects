const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
    host: 'redis', // name of the service in docker-compose.yml
    port: 6379 // default Redis port
});
client.set('visitsCounter', 0);
app.get('/', (req, res) => {
    client.get('visitsCounter', (err, visitsCounter) => {
        res.send('Visits Counter = ' + visitsCounter);
        client.set('visitsCounter', parseInt(visitsCounter) + 1);
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})