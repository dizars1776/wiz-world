import express from 'express'
import { getAllHouses } from '../controllers/housesController.js'

const router = express.Router()

router.get('/', getAllHouses)
// router.get('/:name', getOneHouseByName)

export default router

