import express from 'express';
import { index, support, news, login, register, getAll, getDetail, create, remove, update, admin, adminusers, books, adminborrow } from '../controllers/product.js';
import { checkPermission } from '../middlewares/checkPermission.js';
const router = express.Router()


router.get('/index', index);

router.get('/books', books);

router.get('/news', news);

router.get('/support', support);

router.get('/login', login);

router.get('/register', register);

router.get('/admin', admin);

router.get('/admin-users', adminusers);

router.get('/admin-borrow', adminborrow);

router.get('/', getAll);

router.get('/:id', getDetail);
  
router.post('/', create); 

router.put('/:id', update);

router.delete('/:id', remove);

export default router;