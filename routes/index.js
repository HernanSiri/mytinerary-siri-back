import express from 'express';
//el enrutador principal va a llamar a todos los recursos y los va a ejecutar
import userRouter from "./users.js"
import citiesRouter from './cities.js'
import itinerariesRouter from "./itineraries.js"
import activitiesRouter from './activities.js'
import authRouter from './auth.js';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.use("/users",userRouter)
router.use('/cities',citiesRouter)
router.use("/itineraries",itinerariesRouter)
router.use('/activities',activitiesRouter)
router.use('/auth',authRouter)

export default router
