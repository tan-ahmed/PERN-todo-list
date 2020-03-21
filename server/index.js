const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
// get data from client - access to req.body and get JSON data
app.use(express.json()); //req.body


// ROUTES // 

// ****** CREATE A TO DO  ****** //
// async - create/get data takes time  &  await - waits for the function to complete before it continues
app.post("/todos", async (req, res) => {
    try {
        // console.log(req.body)
        // de-structure  this field from the body
        const {description } = req.body;
        // add data - description is $1
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        // RETURNING *  = > is used when insert/update data, and return it back
        res.json(newTodo.rows[0])
    } catch (err){
        console.error(err.message);
    }
})

// ****** GET ALL TO DO'S  ****** //
app.get("/todos", async(req,res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (err){
        console.error(err.message)
    }
})


// ****** GET A TO DO  ****** //



// ****** UPDATE A TO DO  ****** //


// ****** DELETE A TO DO  ****** //



app.listen(5000, () => {
    console.log("server has start on 5000");
})


