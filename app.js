var createError = require('http-errors');
var express = require('express');
var path = require('path');
var port = 3000;
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var menu01Router = require('./routes/menu01');
var menu02Router = require('./routes/menu02');
var menu03Router = require('./routes/menu03');
var productDetailRouter = require('./routes/productDetail');
var reservation01Router = require('./routes/reservation01');
var reservation02Router = require('./routes/reservation02');
var reservation03Router = require('./routes/reservation03');
var aboutUsRouter = require('./routes/aboutUs')
var shopPageRouter = require('./routes/shopPage')
var shoppingCartRouter = require('./routes/shoppingCart')
var checkOutRouter = require('./routes/checkOut')
var blogListSidebar01Router = require('./routes/blogListSideBar01')
var blogListSidebar02Router = require('./routes/blogListSideBar02')
var blogMansoryRouter = require('./routes/blogMansory')
var blogDetailRouter = require('./routes/blogDetail')
var contactUsRouter = require('./routes/contactUs')
var dashboardRouter = require('./routes/dashboard')
/* Connecting server to mongodb */
var mongo = require('mongodb');
var assert = require('assert');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

app.use('/', indexRouter);
app.use('/menu01', menu01Router);
app.use('/menu02', menu02Router);
app.use('/menu03', menu03Router);
app.use('/users', usersRouter);
app.use('/product-detail', productDetailRouter);
app.use('/reservation01', reservation01Router);
app.use('/reservation02', reservation02Router);
app.use('/reservation03', reservation03Router);
app.use('/aboutUs', aboutUsRouter);
app.use('/shopPage', shopPageRouter);
app.use('/shoppingCart', shoppingCartRouter);
app.use('/checkOut', checkOutRouter);
app.use('/blogListSideBar01', blogListSidebar01Router);
app.use('/blogListSideBar02', blogListSidebar02Router);
app.use('/blogMansory', blogMansoryRouter)
app.use('/blogDetail', blogDetailRouter)
app.use('/contactUs', contactUsRouter)
app.use('/dashboard', dashboardRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
