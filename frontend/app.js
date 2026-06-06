const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { result: null, error: null });
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/submit`, {
            name: req.body.name,
            email: req.body.email,
            course: req.body.course,
            message: req.body.message
        });

        res.render('index', { result: response.data, error: null });
    } catch (err) {
        res.status(500).render('index', {
            result: null,
            error: 'Unable to submit the form. Please check that the Flask backend is running.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});
