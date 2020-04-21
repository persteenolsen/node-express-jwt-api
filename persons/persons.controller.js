const express = require('express');
const router = express.Router();

const Service = require('./person.service');

var mysql = require('mysql');
   
// Route GET ALL
router.get('/', getAll);

module.exports = router;


function getDBConnection(){
     
var con = mysql.createConnection({
    host: "yourdbhost",
    user: "yourdbusername",
    password: "yourdbpassword",
    database: "yourdbname"
    });

    return con;
  }


function getAll(req, res, next) {

    var connectionString = getDBConnection();
    var s = new Service();
    
    s.doGetAllPersons(res, connectionString);

}


router.post('/', function (req, res, next) {
  
   console.log('Creating a new Person...');
     
   var connectionString = getDBConnection();
   var s = new Service();
  
   s.doCreatePerson(req, res, connectionString);
 
});


router.delete('/:id', function (req, res, next) {
  
    //res.end('DELETE: ' + req.params.id)
    console.log('Deleting the Person width ID: ' + req.params.id);
    
    var connectionString = getDBConnection();
    var s = new Service();

    s.doDeletePerson(res, connectionString, req.params.id);
})


router.get('/:id', function (req, res, next) {
  
    // res.end('GET: ' + req.params.id)
    console.log('Getting the Person width ID: ' + req.params.id);

    var connectionString = getDBConnection();
    var s = new Service();

    s.doGetPerson(req, res, connectionString, req.params.id);
      
})


router.put('/:id', function (req, res, next) {
  
    //res.end('PUT: ' + req.params.id)
    console.log('Editing the Person width ID: ' + req.params.id);

    var connectionString = getDBConnection();
    var s = new Service();

    s.doEditPerson(req, res, connectionString, req.params.id);

})


