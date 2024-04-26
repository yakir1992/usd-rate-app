const express = require('express');
const axios = require('axios');
const WebSocket = require('ws');

const app = express();
const port = 3000;

// WebSocket server
const wss = new WebSocket.Server({ port: 3000 });

// Function to fetch USD rate
const fetchUSDRate = async () => {
    try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        return response.data.rates;
    } catch (error) {
        console.error('Error fetching USD rate:', error);
        return null;
    }
};

// WebSocket connection handler
wss.on('connection', (ws) => {
    console.log('Client connected');

    // Fetch USD rate initially and send to the client
    fetchUSDRate()
        .then((rates) => {
            ws.send(JSON.stringify({ type: 'rates', data: rates }));
        })
        .catch((error) => {
            console.error('Error sending USD rate to client:', error);
        });

    // Fetch USD rate every 5 seconds and send updates to the client
    const interval = setInterval(async () => {
        const rates = await fetchUSDRate();
        if (rates) {
            ws.send(JSON.stringify({ type: 'rates', data: rates }));
        }
    }, 5000);

    // WebSocket close handler
    ws.on('close', () => {
        console.log('Client disconnected');
        clearInterval(interval); // Stop interval when client disconnects
    });
});

// Express route to serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start Express server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
