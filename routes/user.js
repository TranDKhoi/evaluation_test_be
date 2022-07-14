const userController = require("../controllers/user_controller");

const router = require("express").Router();

router.get("/",userController.getUserData)
router.post("/",userController.userVoteJoke)
router.delete("/",userController.clearUserData)
router.post("/create",userController.createUser)


module.exports = router