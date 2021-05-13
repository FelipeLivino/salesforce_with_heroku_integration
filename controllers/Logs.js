const Log = require("../database/models/log");

module.exports = {
  all(req, res, next) {
    Log.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const { dataextensionname,
        bufield,
        isrecall,
        subject,
        body,
        htmltext,
        contactidentifier,
        parameters,
        response,
        responsecode } = req.body;

    Log.create({
        dataextensionname,
        bufield,
        isrecall,
        subject,
        body,
        htmltext,
        contactidentifier,
        parameters,
        response,
        responsecode,
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
};

exports.create = function(logObject){
  const { dataextensionname,
    bufield,
    isrecall,
    subject,
    body,
    htmltext,
    contactidentifier,
    parameters,
    response,
    responsecode } = logObject;

    Log.create({
      dataextensionname,
      bufield,
      isrecall,
      subject,
      body,
      htmltext,
      contactidentifier,
      parameters,
      response,
      responsecode,
  }).then((result) => {
     //{"exitoso":true}
    res.status(201).json(result); //return with ID -> 201 (CREATED)
  });
} 