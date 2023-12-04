import express from 'express';
import path from 'path';
import multer from 'multer';
import ImagesService from '../services/images';

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images'))
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
})

const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } })
const uploadImage = upload.single('image')

const imagesService = new ImagesService();

router.get('/', imagesService.getAll);
router.post('/upload', uploadImage, imagesService.upload);

export default router;
