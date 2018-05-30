const Customer = require('../../models/Customer');

module.exports = (app) => {
  app.get('/api/customers', (req, res, next) => {
    Customer.find({})
      .exec()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => next(err));
  });

  app.post('/api/customers', function (req, res, next) {
    const customer = new Customer({
      name: req.body.name,
      last_name:req.body.last_name,
      ph_no: req.body.ph_no,
      address: req.body.address,
      City:req.body.City,
      district:req.body.district,
      state:req.body.state,
      zip:req.body.zip
    });
    customer.save()
      .then(() => res.json(customer))
      .catch((err) => next(err));
  });

};
