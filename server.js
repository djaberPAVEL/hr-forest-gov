const express = require('express');
const pool = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const departmentRouter = require('./routes/department');
const employeeRouter = require('./routes/employee');

const jobRouter = require('./routes/job');
const qualificationRouter = require('./routes/qualification');
const employeeQualificationRouter = require('./routes/employeeQualification');

const attendanceRouter = require('./routes/attendance');
const leaveRouter = require('./routes/leave');
const contractRouter = require('./routes/contract');


const transferRouter = require('./routes/transfer');
const vacationRouter = require('./routes/vacation');
const retirementRouter = require('./routes/retirement');
const temporaryArrestRouter = require('./routes/temporaryArrest');
const mandateRouter = require('./routes/mandate');


const errorHandler = require('./middleware/errorHandler');



const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.send(`Database connected: ${result.rows[0].now}`);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.use(express.json());
app.use(bodyParser.json());
app.use('/api', departmentRouter);
app.use('/api', employeeRouter);
app.use('/api', jobRouter);
app.use('/api', qualificationRouter);
app.use('/api', employeeQualificationRouter);
app.use('/api', attendanceRouter);
app.use('/api', leaveRouter);
app.use('/api', contractRouter);

app.use('/api', transferRouter);
app.use('/api', vacationRouter);
app.use('/api', retirementRouter);
app.use('/api', temporaryArrestRouter);
app.use('/api', mandateRouter);



app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
