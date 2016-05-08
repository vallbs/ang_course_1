console.log("angular inside")
var app = angular.module("confusionApp", []);
app.controller("menuController", function() {

	this.tab = 1;
	// this.filtText = "06.05.2016";
	this.filtText = "cucumber";

    var foodItems = [
	    {
	    	name: 'cucumber', portion: '100g', calories: 18, date: '06.05.2016'
	    }, 
	    {
	    	name: 'tomato', portion: '100g', calories: 18, date: '07.05.2016'
	    }, 
	    {
	    	name: 'corn', portion: '100g', calories: 18, date: '08.05.2016'
	    }
	    ];
	// var foodItems = [
	//     {
	//     	name: 'cucumber'
	//     }, 
	//     {
	//     	name: 'tomato'
	//     }, 
	//     {
	//     	name: 'corn'
	//     }
	//     ];

    this.foodItems = foodItems;

    this.select = function(tabNav) {

    	this.tab = tabNav;
    	// console.log(this.tab);
    	switch(tabNav) {
    		// case 1:
    		// 	this.filtText = "06.05.2016";
    		// 	break;
    		// case 2:
    		// 	this.filtText = "07.05.2016";
    		// 	break;
    		// case 3:
    		// 	this.filtText = "08.05.2016";
    		// 	break;
    		// default:
    		// 	this.filtText = "06.05.2016";

    		case 1:
    			this.filtText = "cucumber";
    			break;
    		case 2:
    			this.filtText = "tomato";
    			break;
    		case 3:
    			this.filtText = "corn";
    			break;
    		default:
    			this.filtText = "cucumber";
    	}

    	console.log(this.filtText);
    }

    this.isSelected = function(tabNav) {

    	var isSelected =  (this.tab === tabNav);
    	// console.log(isSelected);
    	return isSelected;
    }
});