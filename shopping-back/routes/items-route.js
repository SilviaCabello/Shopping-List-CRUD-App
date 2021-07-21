const express = require("express");
const router = express.Router();
const connection = require("../db/config");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM item", (err, results) => {
    if (err) {
      res.send("Error retrieving items from the database");
    } else {
      res.send(results);
    }
  });
});

router.post("/", (req, res) => {
  const { name, quantity } = req.body;
  connection.query(
    "INSERT INTO item (name, quantity) VALUES (?, ?)",
    [name, quantity],
    (err, results) => {
      if (err) {
        res.send("Error adding the new item to the list");
      } else {
        res.send("Item added correctly to the list");
      }
    }
  );
});

router.put("/:id", (req, res) => {
  connection.query(
    "UPDATE item SET name=? WHERE id=?",
    [req.body.name, req.params.id],
    (err, results) => {
      if (err) {
        res.send("Error trying to edit the item");
      } else {
        res.send("Item edited correctly");
      }
    }
  );
});

module.exports = router;
