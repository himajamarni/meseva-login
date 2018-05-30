const user = require('../../models/Login_Details');

module.exports = (app) => {
  app.post('/api/verify', (req, res, next) => {
    console.log(req.body);
    user.find({username: req.body.username,password:req.body.password})
      .exec()
      .then((data) => {
        res.json(data);
        console.log(data);
        // {success: true, admin: true}
      })
      .catch((err) => next(err));
  });



};
