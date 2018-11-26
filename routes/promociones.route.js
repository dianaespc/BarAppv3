const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const promo_controller = require('../controllers/promociones.controller');


// a simple test url to check that all of our files are communicating correctly.
//router.get('/test', estab_controller.test);

//router.post('/create', estab_controller.establecimiento_create);
router.get('/:id', promo_controller.promociones_details);
/*router.get('/', estab_controller.establecimiento_todos);
router.put('/:id/update', estab_controller.establecimiento_update);
router.delete('/:id/delete', estab_controller.establecimiento_delete);
*/
module.exports = router;
