import express from 'express'
const router = express.Router()
import {
    getFavourites
} from '../controllers/favouriteController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/getFavourites').get(protect, getFavourites)

export default router