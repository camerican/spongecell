(function() {
	var app = angular.module('Directory', []).controller('DirectoryController',function($scope,$http){
		$directoryCtrl = this;

		$http.get('./data.json').success(function(directory){
			$directoryCtrl.staff = directory;
		});

		$scope.locations = {"Greater New York City Area": false, "Austin, Texas Area": false, 
		"San Francisco Bay Area": false, "Greater Seattle Area": false, "Harrow, United Kingdom": false, 
		"Greater Denver Area": false, "London, United Kingdom": false, "Greater Los Angeles Area": false, 
		"Greater Philadelphia Area": false, "United Kingdom": false, "Greater Chicago Area": false, 
		"Greater Boston Area": false, "Toronto, Canada Area": false, "Washington D.C. Metro Area": false, 
		"Cincinnati Area": false, "Portland, Oregon Area": false, 
		"Raleigh-Durham, North Carolina Area": false, "Orange County, California Area": false, 
		"Croydon, United Kingdom": false, "Stockholm, Sweden": false};

		$scope.departments = {"executive": false, "investor": false, "sales": false, "hr": false, 
			"marketing": false, "operations": false, "engineering": false, "qa": false, "product":false,
			 "finance": false, "media": false, "intern": false, "solutions": false};

		$scope.staffCount = function() {
			if( !this.staff ) return
			return this.staff.length
		}

		$scope.allFalse = function(obj) {
			for( var i in obj ) {
				if( obj[i] ) return false; 
			}
			return true;
		}

		$scope.departmentFilter = function(person) {
			if( $scope.allFalse($scope.departments) ) return true;	//return all if no dept checkbox selected
			return $scope.departments[person.dept]
		}
		$scope.locationFilter = function(person) {
			if( $scope.allFalse($scope.locations) ) return true; //return all if no location checkbox selected
			return $scope.locations[person.location]
		}

	});

	app.filter('capitalizeFirst', function () {
	    return function (str) {
	        str = str || '';
	        if( str.length <= 3 )
	        	return str.toUpperCase();	//capitalize all for short strings, assumed acronym
	        return str.substring(0, 1).toUpperCase() + str.substring(1);
	    };
	});

})();