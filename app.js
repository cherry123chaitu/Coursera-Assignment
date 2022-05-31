(function(){
angular.module('Assignme',[])
.controller('AssignmentViewModel',AssignmentModel);
AssignmentModel.$inject=['$scope'];
function AssignmentModel($scope){
$scope.name;
$scope.taketext=function ()
{
    var count=0;
 var str =$scope.name;
 if(str==undefined||str==""){
     $scope.message = "Please enter data first";
 }
 else
 {
     var words=str.split(',');
     
     var i=0;
    while(1){
    try{
        if(words[i]!=undefined)
        {
        count++;
        i++;
        
        }
        else{
           
            throw("error");
            break;
        }
    }
    catch(err){
        break;
    }

    }
if(count<= 3)
{
    $scope.message="Enjoy!";
}
if(count>3)
{
    $scope.message="Too Much!";
}
}
};
}

})();