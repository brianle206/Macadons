var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// multer
// app.use(function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", "http://localhost");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
//     });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./node_modules")));

app.use(express.static(path.join(__dirname, "./client")));

// Multer
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './client/images/uploads/')
        },
        filename: function (req, file, cb) {
            // var datetimestamp = Date.now();
            console.log("IN STORAGE FILENAME", file)
            cb(null, file.originalname)
        }
    });
    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');
    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
            console.log("IN POST METHod, req and res", req.body, res.body)
             res.json({error_code:0,err_desc:null});
        })
    });


require("./server/config/mongoose.js");

require("./server/config/routes.js")(app);



app.listen(8000, function(){
	console.log("Working on port 8000");
})

