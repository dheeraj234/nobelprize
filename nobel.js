const express = require("express");
const bodyParser = require("body-parser");
const configData = require('./prize.json');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/prize.html");
});

app.post("/", function(req, res) {
  const a = Number(req.body.winner);
  switch (a) {
    case 1:
      for (var i = 0; i < configData.prizes.length; i++) {
        for (var j = 0; j < (configData.prizes[i].laureates).length; j++) {
          if ((configData.prizes[i].laureates[j].firstname) === req.body.ans) {
            var ab = "match";
          }
        }
      }
      if (ab === "match") {
        res.render("win_name", {
          qwer: ab
        })
      } else {
        var ab = "no match";
        res.render("win_name", {
          qwer: ab
        })
      }
      break;
    case 2:
      i = 0;
      j = 0;
      var aws = []
      for (i = 0; i < configData.prizes.length; i++) {
        if (configData.prizes[i].year === req.body.Year) {
          for (var j = 0; j < (configData.prizes[i].laureates).length; j++) {
            aws.push(configData.prizes[i].laureates[j].firstname)

          }
        }

      }

      res.render("year_2", {
        aws: aws
      });

      break;

    case 3:
      var qsc = []
      i = 0;
      j = 0;
      for (var i = 0; i < configData.prizes.length; i++) {
        if (((configData.prizes[i].year) === req.body.year) && ((configData.prizes[i].category) === req.body.category)) {
          for (var j = 0; j < (configData.prizes[i].laureates).length; j++) {
            qsc.push(configData.prizes[i].laureates[j].firstname);
          }
        }

      }
      res.render("cate_", {
        qsc: qsc
      });
      break;
    case 4:
      i = 0;
      j = 0;
      var arr = [];

      for (var i = 0; i < configData.prizes.length; i++) {
        if (((configData.prizes[i].year) === req.body.year) && ((configData.prizes[i].category) === req.body.category)) {
          for (var j = 0; j < (configData.prizes[i].laureates).length; j++) {

            arr.push(configData.prizes[i].laureates[j].firstname);
          }

        }
      }
      res.render("Alpha", {
        arr: arr.sort()
      });
      break;
    default:
      res.send("Doesn't exists");
  }


});

app.listen(3000, () => {
  console.log("server started on 3000");
});
//(configData.prizes[0].laureates[0].firstname)
// console.log((configData.prizes[0].laureates[0].firstname));
// console.log((configData.prizes[0].laureates.firstname));
// console.log((configData.prizes[0].year));
// console.log((configData.prizes[0].category));
