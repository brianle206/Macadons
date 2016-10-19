angular.module("myApp");
myModule.controller("productController", function($scope, userFactory, Upload, $window, productFactory){


	$scope.user = userFactory.getUser()

    productFactory.getProducts(function(data){
        $scope.products = data
    })


	$scope.submit = function(product){ //function to call on form submit
        if (product.file) { //check if from is valid
            $scope.upload(product.file); //call upload function

            product.saveLocation = "/images/uploads/" + product.file.name

            productFactory.addProduct(product, function(data){
                console.log('AFTER ADDING ', data)
                // $scope.products = data;
                $scope.product = {}
                $window.location.reload()

            })


        }
    }
    $scope.upload = function (file) {
    	console.log("IN upload")
        Upload.upload({

            url: 'http://localhost:8000/upload', //webAPI exposed to upload the file
            data:{file:file} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
        	console.log("RESP", resp)
            if(resp.data.error_code === 0){ //validate success
                $window.alert('Success, your file: ' + resp.config.data.file.name + ' had been uploaded.');
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) { //catch error
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            // console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };

})