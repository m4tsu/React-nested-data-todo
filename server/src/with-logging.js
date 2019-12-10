const withLogging = (req, res, next) => {
  const method = req.method.toUpperCase();
  console.log(`--- ${method}:${req.originalUrl} start ---`);
  if (method === 'GET') {
    if (Object.keys(req.query).length > 0) console.log('query:', req.query);
  } else if (method === 'POST' || method === 'PUT') {
    console.log('body:', req.body);
  }
  next();
  console.log(`--- ${method}:${req.originalUrl} end -----`);
};

module.exports = withLogging;
