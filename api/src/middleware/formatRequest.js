export default (req, res, next) => {
  req.headers['content-type'] = 'application/json'
  next()
}
