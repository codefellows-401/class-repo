'use strict';

// Read and require every file in the "models" directory
// This allows us to dynamically create and use models with ONE API.
import requireAll from 'require-directory';
const models = requireAll('../models', {recursive: false});
/*
  models: {
    'notes': {default: Function()...},
    'people': {default: Function() ...}
  }
 */

export default (req, res, next) => {
  try {
    let model = req && req.params && req.params.model;
    if ( model && models[model] ) {
      req.model = model;
      next();
    }
    else { 
      throw 'Model not found'; 
    }
  }
  catch(error) {
    throw error;
  }
};
