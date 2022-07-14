const jokeController = require("../controllers/joke_controller");

const router = require("express").Router()

router.post("/", jokeController.addJoke);
router.get("/", jokeController.getAllJoke);


module.exports = router;