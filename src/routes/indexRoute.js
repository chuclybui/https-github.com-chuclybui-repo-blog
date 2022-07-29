const siteController = require('../app/controllers/SiteController')
const newsRouter = require('./newsRoute')
const siteRouter = require('./siteRoute')

function route(app) {
    app.use('/news', newsRouter)
    app.use('/', siteRouter)
    app.use('/search', siteRouter)
}

module.exports = route
