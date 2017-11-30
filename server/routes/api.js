
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get inventory
router.get('/inventory', (req, res) => {
    connection((db) => {
        db.collection('inventory')
            .find()
            .toArray()
            .then((inventory) => {
                response.data = inventory;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get employees
router.get('/employees', (req, res) => {
    connection((db) => {
        db.collection('employees')        
            .find()
            .toArray()
            .then((employees) => {
                response.data = employees;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

    router.post('/employees', (req, res) => {

            const employees = { name: req.body.name, age: req.body.age , wage: req.body.wage , email: req.body.email };
            connection((db) => {
            db.collection('employees').insert(employees, (err, result) => {
              if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
              } else {
                res.send(result.ops[0]);
              }
            });
        });
          });

        //PUT

          router.put('/employees/:id', (req, res) => {
            const id = req.params.id;
            const details = { '_id': new ObjectID(id) };
            const employee = { name: req.body.name, age: req.body.age , wage: req.body.wage , email: req.body.email };
            connection((db) => {
            db.collection('employees').update(details, employee, (err, result) => {
              if (err) {
                  res.send({'error':'An error has occurred'});
              } else {
                  res.send(employee);
              } 
            });
    });
          });
/*
router.post('/employees', (req, res) => {
    connection((db) => {
    const employees = { name: req.body.name, age: req.body.age , wage: req.body.wage , place: req.body.place };
    db.collection('employees').find()
            .toArray().insert(employees, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
    });
    
  });

  router.put('/employees/:id', (req, res) => {
      connection((db) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const employee = { name: req.body.name, age: req.body.age , wage: req.body.wage , place: req.body.place };
    db.collection('employees').update(details, employee, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(employee);
      } 
        });
      });
  });

*/
/*
// Update Employee
router.put('/employees/:id', function(req, res, next){
      connection((db) => {
    var employees = db.collection('employees').find().toArray();
    var updEmpl = {};
    
    
    if(req.name){
        updEmpl.name = req.name;
        updEmpl.age = req.age;
        updEmpl.wage = req.wage;
        updEmpl.email = req.email;
    }
    
    if(!updEmpl){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.collection('employees').insert(updEmpl , (err, results) => {        
        if(err){
            res.send(err);
        }
        res.json(employees);
    });
}
});
});
*/




/*
//Save Employee
router.post('/employees', function(req, res, next){
    var employees = db.collection('employees');
    if(!employees.name ){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.employees.save(employees, function(err, employees){
            if(err){
                res.send(err);
            }
            res.json(employees);
        });
    }
});
*/


module.exports = router;