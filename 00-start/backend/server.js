const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const   filiereRouter = require('./routes/filiere');
const   formationRouter = require('./routes/formation');
const registrationRoutes = require('./routes/login');

/*const profRouter = require('./routes/prof');
const matRouter = require('./routes/mat');


*/
const etudiantsRouter = require('./routes/etudiant');

app.use('/filiere', filiereRouter);
app.use('/formation', formationRouter);
app.use('/login', registrationRoutes);
app.use('/etudiant',etudiantsRouter );
/*app.use('/prof', profRouter);
app.use('/mat', matRouter);
app.use('/inscription.etudiant.route',etudiantsRouter );*/

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});