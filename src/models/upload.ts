import multer from 'multer';

const upload = (req, res) => {
    const mult = multer({dest: 'uploads /src/uploads'});

    mult.single('profile');

    try{
        res.send(req.file);
    }catch(error){
        res.send(400);
        console.log(error);
    }
};


export default upload;