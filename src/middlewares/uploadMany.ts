import multer from 'multer';
import multerConfig from '../config/multer.config';

export default 
    multer(multerConfig).array('many', 12);