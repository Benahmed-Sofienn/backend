// require express
const { response } = require("express");
const express = require("express");

//require Router
const router = express.Router();

//require model
const Contact = require("../model/Contact");

//require controllers
 const controllers = require('../controllers/contact.controllers')

/**
 * @desc : add new contact
 * @method: POST
 * @path : 'http://localhost:7000/api/contacts/'
 * @data : req.body
 */
router.post("/", controllers.addContact);

  /**
   * @desc : get all contacts
   * @method: GET
   * @path : 'http://localhost:7000/api/contacts/'
   * @data : no
   */
  router.get("/", controllers.getAll );

  /**
   * @desc : get one contact by id
   * @method: GET
   * @path : 'http://localhost:7000/api/contacts/:id'
   * @data : req.params.id
   */
  router.get("/:_id", controllers.getOne);

  /**
   * @desc : delete one contact
   * @method: DELETE
   * @path : 'http://localhost:7000/api/contacts/:id'
   * @data : req.params.id
   */
  router.delete("/:id", controllers.deleteOne);

  /**
   * @desc : update contact by id
   * @method: PUT
   * @path : 'http://localhost:7000/api/contacts/:id'
   * @data : req.params and req.body
   */
  router.put("/:_id", controllers.updateOne);


module.exports = router;
