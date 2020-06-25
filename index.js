const express = require('express')
const app = express();
const multer = require('multer')
const path = require('path')
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/pagina.html')
 })

//config base 
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
        //nome original

        //cb(null, file.originalname);

    }
})

const upload = multer({storage})

//



app.post('/profile', upload.single('file'),function (req, res, next) {
    const file = req.file
    console.log(file)
  })


app.listen(3000,()=>console.log("Conexão no ar"))