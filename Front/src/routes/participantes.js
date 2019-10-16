const express = require('express');
const router = express.Router();

const mySqlConnection = require('../database');

// getAll
router.get('/', (req, res)=>{
    mySqlConnection.query('SELECT * FROM participantes', (err, rows, fields) =>{
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//getId
router.get('/:idParticipante', (req, res)=>{
    const { idParticipante } = req.params;
    mySqlConnection.query('SELECT * FROM participantes WHERE idParticipante = ?', [idParticipante], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 
});

//insert participantes 
router.post('/', (req , res) =>{
    const {nombre, apellido, idEdad, nroDoc, fechaNac, nroCel, mail, nroCelEmergencia, nombreTutor } = req.body;
    const query = `
    SET @nombre = ?; 
    SET @apellido = ?; 
    SET @idEdad = ?; 
    SET @nroDoc = ?; 
    SET @fechaNac = ?; 
    SET @nroCel = ?;
    SET @mail = ?;
    SET @nroCelEmergencia = ?;
    SET @nombreTutor = ?;     
    INSERT INTO participantes ( nombre, apellido, idEdad, nroDoc, fechaNac, nroCel, mail, nroCelEmergencia,nombreTutor) VALUES ( @nombre, @apellido, @idEdad, @nroDoc, @fechaNac, @nroCel, @mail,@nroCelEmergencia,@nombreTutor)`;
    mySqlConnection.query(query, [nombre,apellido,idEdad,nroDoc,fechaNac,nroCel,mail,nroCelEmergencia,nombreTutor], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 

}) ;

// Update Participantes
router.put('/:idParticipante', (req, res) =>{
    const { idParticipante } = req.params;
    const { nombre, apellido, idEdad, nroDoc, fechaNac, nroCel, mail, nroCelEmergencia, nombreTutor } = req.body;
    const query = `
    SET @idParticipante = ?; 
    SET @nombre = ?; 
    SET @apellido = ?; 
    SET @idEdad = ?; 
    SET @nroDoc = ?; 
    SET @fechaNac = ?; 
    SET @nroCel = ?;
    SET @mail = ?;
    SET @nroCelEmergencia = ?;
    SET @nombreTutor = ?;  
    UPDATE participantes SET idParticipante = @idParticipante, nombre = @nombre, apellido = @apellido, idEdad = @idEdad, nroDoc = @nroDoc, fechaNac =  @fechaNac, nroCel = @nroCel, mail = @mail, nroCelEmergencia = @nroCelEmergencia, nombreTutor = @nombreTutor WHERE idParticipante = @idParticipante` 
    mySqlConnection.query(query, [idParticipante,nombre, apellido, idEdad, nroDoc, fechaNac, nroCel, mail, nroCelEmergencia, nombreTutor], (err, rows, fields) =>{
        if(!err){ 
            res.json(rows); 
        }else{
            console.log(err);
        }
    });
});

//delete
router.delete('/:idParticipante', (req, res) =>{
    const { idParticipante } = req.params;
    mySqlConnection.query('DELETE FROM participantes WHERE idParticipante = ?', [idParticipante], (err, rows, fields) => {
        if(!err){ 
            res.json(rows);
        }else{
            console.log(err);
        }
    }); 

});

module.exports = router;