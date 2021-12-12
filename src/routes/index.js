const siteRouter = require('./site')
const newProRouter = require('./newPro')
const adminRouter = require('./admin')
const cartRouter = require('./cart')
const userRouter = require('./user')

const authMiddleware = require('../app/middleware/auth.middleware')

const isAuth = authMiddleware.isAuth


function route(app) {

    app.use('/', siteRouter)   
    
    app.use('/newPro', newProRouter)

    app.use('/admin/', isAuth ,adminRouter)
    
    app.use('/cart', cartRouter)

    app.use('/user', userRouter)
}

module.exports = route