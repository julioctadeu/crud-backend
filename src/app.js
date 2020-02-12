// import express
const express = require('express');
const app = express();

const employeeRouters = require('./routes/EmployeeRoute')

// rota de empregados
app.use('/employee', employeeRouters);

// setting port
app.set('port', process.env.POST||3000);

//middlewares
app.use(express.json());

app.use('/test', (req, res) => {
    res.send("Test route");
});

app.use('/', (req, res) => {
    res.send("Hello world form NodeJS Server");
});

app.listen(app.get('port'), () => {
    console.log("Starting server NodeJS");
});