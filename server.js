// server.js or app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes); // Ensure this is correctly set up
app.use('/api/forms', formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
