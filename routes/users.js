import express from "express";
import { createUser, deleteUser, getUsers, getUserWithId, updateUser } from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserWithId);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router; 