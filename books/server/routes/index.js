const router = require('express').Router();
const apiRouter = require('express').Router();

const authRoutes = require('./auth.routes');
const bookRoutes = require('./book.routes');
const catchAll = require('./catch-all.route');

router.use('/books', bookRoutes).use('/auth', authRoutes);

module.exports = apiRouter.use('/api', router).use(catchAll);
