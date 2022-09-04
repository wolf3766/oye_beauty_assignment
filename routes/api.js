const express=require('express');
const router=express.Router();
const routercontroller=require('../controllers/routecontrollers');

router.post("/add-movie",routercontroller.addMovie);
router.get("/get-all",routercontroller.getAll);
router.get('/get-single',routercontroller.getSingle);
router.get('/get-paginated',routercontroller.getPaginated);

module.exports = router;