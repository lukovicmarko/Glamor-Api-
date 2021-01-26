import asyncHandler from 'express-async-handler'
import Favourite from '../models/favouriteModel.js'

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getFavourites = asyncHandler(async (req, res) => {
    const favourites = await Favourite.find({ user: req.user._id })
    res.json(favourites)
})

export {
    getFavourites
}
