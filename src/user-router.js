const Router = require("../framework/Router");

const router = new Router();

const users = [
    {id: 1, name: "user1"},
    {id: 2, name: "user2"}
];

router.get("/users", (req, res) => {
    res.send(users);
})

router.post("/users", (req, res) => {
    res.send(users);
})

module.exports = router;