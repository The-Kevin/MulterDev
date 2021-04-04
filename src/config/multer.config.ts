import multer from 'multer';

export default {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './src/uploads');
        },
        filename: (req, file, cb) => {
            cb(null, file.filename + '-' + Date.now());
        }
    }),

    limits: {
        // limites para o upload
        //fileSize: 10 * 1024 + 1024
    }
};