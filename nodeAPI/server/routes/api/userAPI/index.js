"use strict";
const router = express.Router();
const userController = require("routes/api/userAPI/userController");

router.post("/user", userController.createUser);

router.get("/user", userController.getUsers);