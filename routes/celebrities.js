const Celebrity = require('../models/celebrity');

app.get('/celebrities'),
  (req, res, next) => {
    Celebrity.find()
      .then((celebrities) => {
        res.render('celebrities', { celebrities });
      })
      .catch((error) => {
        console.log('Failed to list celebrities', error);
        next(error);
      });
  };

//   app.get('/celebrities/:id'),
//   (req, res, next) => {
//     Celebrity.findOne()
//     .then((_id) => {
//         res.render('celebrities', { celebrities });
//       })
//     .catch((error) => {
//         console.log('Failed to list celebrities', error);
//         next(error);
//       });
