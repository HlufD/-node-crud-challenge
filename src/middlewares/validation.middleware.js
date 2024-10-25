const Joi = require('joi'); 

const validationMiddleware = (schema) => { 
  return (req, res, next) => { 
  const  {_,error} = schema.validate(req.body); 

  const valid = error == null; 
  
  if (valid) { 
    next(); 
  } else { 
    const { details } = error; 

    const message = details.map(field => field.message).join(',');

   res.status(422).json({ error: message }) } 
  } 
} 

module.exports = validationMiddleware;
