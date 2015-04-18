//
//
// By Taylor Thompson
// Apr 17 2015
//
//

// Let's begin!

//app construction
var app = angular.module('dataBindTestApp', []);

//controller construction
app.controller('dataBindTestCtrl', ['$scope', function($scope){

	$scope.title = 'Data Binds Example'; //sets title

  $scope.checked = false; // sets #checkbox to false - ng-model on #checkbox

  $scope.userInput = ''; // sets the userInput to empty until the user types something in - ng-model on #user-input


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Below function checks $scope.userInput to make sure the user has typed checked or Checked, AND that the checkbox is checked, and if so, returns true
  // ng-show on #text-to-show

  $scope.userInputCheck = function() {

    if
    (
        $scope.userInput == 'checked' && $scope.checked == true ||
        $scope.userInput == 'Checked' && $scope.checked == true
    )
    {
      return true;
    }
  };
	//
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  $scope.consoleButton = function() {
    console.log($scope.userInput);   // shows the value for $scope.userInput - ng-click is on #console-log-button
  };
}]);