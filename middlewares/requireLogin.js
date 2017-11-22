/**
 * Created by charly on 11/20/17.
 */
module.exports = (req, res, next) => {
  if( !req.user ) {
    return res.status(401).send({error: 'You must log in!'});
  }

  next();
};