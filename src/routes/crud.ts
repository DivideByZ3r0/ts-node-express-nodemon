import express, { Express, Request, Response } from "express";

const {
    createItem,
    getAllItems,
    getItemById,
    updateItemById,
    deleteItemById,
} = require('../controllers/itemController');

const router = express.Router();

// CRUD routes
router.post('/', createItem);
router.get('/', getAllItems);
router.get('/:id', getItemById);
router.put('/:id', updateItemById);
router.delete('/:id', deleteItemById);

export default router;
