const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");

router.get("/test", (req, res) => res.send("book route testing!"));
// router.get('/test', (req, res) => res.send('book route testing!'));

// Defined get data(index or listing) route
router.get("/getData", (req, res) => {
  User.find(function(err, businesses) {
    if (err) {
      console.log(err);
    } else {
      res.json(businesses);
    }
  });
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  let newUser = new User({ username });
  newUser
    .save()
    .then(() => {
      res.status(200).json({ User: "User in added successfully" });
    })
    .catch(err => {
      res.status(400).send(`unable to save to database ${err}`);
    });
});

module.exports = router;

// fetch('/posts/postsData', {
// method: 'POST',
// headers: {
//  'Content-Type': 'application/json'
// },
//  body: JSON.stringify({
//      name: "Adnan"
// })
// })
// .then(res => res.json()).then(data => console.log(data))
