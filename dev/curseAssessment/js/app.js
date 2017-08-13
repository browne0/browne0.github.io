// declare variables for points and a max constant for our point total

var points = 0;
var totalPoints = 6;
var pathOneStepOne = {
	"pointGiven": false
};
var pathOneStepTwo = {
	"pointGiven": false
};
var pathOneStepThree = {
	"pointGiven": false
};
var pathOneStepFour = {
	"pointGiven": false
};
var pathTwoStepOne = {
	"pointGiven": false
};
var pathTwoStepTwo = {
	"pointGiven": false
};
var pathTwoStepThree = {
	"pointGiven": false
};
var pathTwoStepFour = {
	"pointGiven": false
};

$(document).ready(function() {
	// prevent context menu from showing up when using talent calculator.
	$('.paths').contextmenu(function() {
		return false;
	});

	$('.pathOneStepOne').mouseup(function(event) {
		switch (event.which) {
			case 1:
				if (pathOneStepOne.pointGiven === false) {
					points++;
					pathOneStepOne.pointGiven = true;
					$('.pathOneStepOne').animate({
						'background-position-y': '0px',
						borderTopColor: '#6faeef',
						borderLeftColor: '#6faeef',
						borderRightColor: '#6faeef',
						borderBottomColor: '#6faeef'
					}, 100, 'swing');
					$('.pathOneStepOneConnector').animate({
						backgroundColor: '#313234'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				} else {
					break;
				}
				break;
			case 2:
				break;
			case 3:
				if (pathOneStepOne.pointGiven === true && points !== 0 && pathOneStepFour.pointGiven !== true && pathOneStepThree.pointGiven !== true && pathOneStepTwo.pointGiven !== true) {
					pathOneStepOne.pointGiven = false;
					points--;
					$('.pathOneStepOne').animate({
						'background-position-y': '50px',
						borderTopColor: '#4c4c4c',
						borderLeftColor: '#4c4c4c',
						borderRightColor: '#4c4c4c',
						borderBottomColor: '#4c4c4c'
					}, 100, 'swing');
					$('.pathOneStepOneConnector').animate({
						backgroundColor: 'rgba(30,31,32, .75)'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				}
				else {
					break;
				}
		}
	});

	$('.pathOneStepTwo').mouseup(function(event) {
		switch (event.which) {
			case 1:
				if (pathOneStepOne.pointGiven === false) {
					break;
				} else {
					if (pathOneStepTwo.pointGiven === false) {
						points++;
						pathOneStepTwo.pointGiven = true;
						$('.pathOneStepTwo').animate({
							'background-position-y': '0px',
							borderTopColor: '#6faeef',
							borderLeftColor: '#6faeef',
							borderRightColor: '#6faeef',
							borderBottomColor: '#6faeef'
						}, 100, 'swing');
						$('.pathOneStepTwoConnector').animate({
							backgroundColor: '#313234'
						}, 100, 'swing');
						$('.score').html(points + " / " + totalPoints);
						break;
					} else {
						break;
					}
				}
				break;
			case 2:
				break;
			case 3:
				if (pathOneStepTwo.pointGiven === true && pathOneStepFour.pointGiven !== true && pathOneStepThree.pointGiven !== true) {
					pathOneStepTwo.pointGiven = false;
					points--;
					$('.pathOneStepTwo').animate({
						'background-position-y': '50px',
						borderTopColor: '#4c4c4c',
						borderLeftColor: '#4c4c4c',
						borderRightColor: '#4c4c4c',
						borderBottomColor: '#4c4c4c'
					}, 100, 'swing');
					$('.pathOneStepTwoConnector').animate({
						backgroundColor: 'rgba(30,31,32, .75)'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				}
				else {
					break;
				}
		}
	});

	$('.pathOneStepThree').mouseup(function(event) {
		switch (event.which) {
			case 1:
				if (pathOneStepTwo.pointGiven === false) {
					break;
				} else {
					if (pathOneStepThree.pointGiven === false && points < totalPoints) {
						points++;
						pathOneStepThree.pointGiven = true;
						$('.pathOneStepThree').animate({
							'background-position-y': '0px',
							borderTopColor: '#6faeef',
							borderLeftColor: '#6faeef',
							borderRightColor: '#6faeef',
							borderBottomColor: '#6faeef'
						}, 100, 'swing');
						$('.pathOneStepThreeConnector').animate({
							backgroundColor: '#313234'
						}, 100, 'swing');
						$('.score').html(points + " / " + totalPoints);
						break;
					} else {
						break;
					}
				}
				break;
			case 2:
				break;
			case 3:
				if (pathOneStepThree.pointGiven === true && pathOneStepFour.pointGiven !== true) {
					pathOneStepThree.pointGiven = false;
					points--;
					$('.pathOneStepThree').animate({
						'background-position-y': '50px',
						borderTopColor: '#4c4c4c',
						borderLeftColor: '#4c4c4c',
						borderRightColor: '#4c4c4c',
						borderBottomColor: '#4c4c4c'
					}, 100, 'swing');
					$('.pathOneStepThreeConnector').animate({
						backgroundColor: 'rgba(30,31,32, .75)'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				}
				else {
					break;
				}
		}
	});

	$('.pathOneStepFour').mouseup(function(event) {
		switch (event.which) {
			case 1:
				if (pathOneStepThree.pointGiven === false) {
					break;
				} else {
					if (pathOneStepFour.pointGiven === false && points < totalPoints) {
						points++;
						pathOneStepFour.pointGiven = true;
						$('.pathOneStepFour').animate({
							'background-position-y': '0px',
							borderTopColor: '#6faeef',
							borderLeftColor: '#6faeef',
							borderRightColor: '#6faeef',
							borderBottomColor: '#6faeef'
						}, 100, 'swing');
						$('.score').html(points + " / " + totalPoints);
						break;
					} else {
						break;
					}
				}
				break;
			case 2:
				break;
			case 3:
				if (pathOneStepFour.pointGiven === true) {
					pathOneStepFour.pointGiven = false;
					points--;
					$('.pathOneStepFour').animate({
						'background-position-y': '50px',
						borderTopColor: '#4c4c4c',
						borderLeftColor: '#4c4c4c',
						borderRightColor: '#4c4c4c',
						borderBottomColor: '#4c4c4c'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				}
				else {
					break;
				}
		}
	});

	$('.pathTwoStepOne').mouseup(function(event) {
		switch (event.which) {
			case 1:
				if (pathTwoStepOne.pointGiven === false) {
					points++;
					pathTwoStepOne.pointGiven = true;
					$('.pathTwoStepOne').animate({
						'background-position-y': '0px',
						borderTopColor: '#6faeef',
						borderLeftColor: '#6faeef',
						borderRightColor: '#6faeef',
						borderBottomColor: '#6faeef'
					}, 100, 'swing');
					$('.pathTwoStepOneConnector').animate({
						backgroundColor: '#313234'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				} else {
					break;
				}
				break;
			case 2:
				break;
			case 3:
				if (pathTwoStepOne.pointGiven === true && points !== 0 && pathTwoStepFour.pointGiven !== true && pathTwoStepThree.pointGiven !== true && pathTwoStepTwo.pointGiven !== true) {
					pathTwoStepOne.pointGiven = false;
					points--;
					$('.pathTwoStepOne').animate({
						'background-position-y': '50px',
						borderTopColor: '#4c4c4c',
						borderLeftColor: '#4c4c4c',
						borderRightColor: '#4c4c4c',
						borderBottomColor: '#4c4c4c'
					}, 100, 'swing');
					$('.pathTwoStepOneConnector').animate({
						backgroundColor: 'rgba(30,31,32, .75)'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				}
				else {
					break;
				}
		}
	});

	$('.pathTwoStepTwo').mouseup(function(event) {
		switch (event.which) {
			case 1:
				if (pathTwoStepOne.pointGiven === false) {
					break;
				} else {
					if (pathTwoStepTwo.pointGiven === false) {
						points++;
						pathTwoStepTwo.pointGiven = true;
						$('.pathTwoStepTwo').animate({
							'background-position-y': '0px',
							borderTopColor: '#6faeef',
							borderLeftColor: '#6faeef',
							borderRightColor: '#6faeef',
							borderBottomColor: '#6faeef'
						}, 100, 'swing');
						$('.pathTwoStepTwoConnector').animate({
							backgroundColor: '#313234'
						}, 100, 'swing');
						$('.score').html(points + " / " + totalPoints);
						break;
					} else {
						break;
					}
				}
				break;
			case 2:
				break;
			case 3:
				if (pathTwoStepTwo.pointGiven === true && pathTwoStepFour.pointGiven !== true && pathTwoStepThree.pointGiven !== true) {
					pathTwoStepTwo.pointGiven = false;
					points--;
					$('.pathTwoStepTwo').animate({
						'background-position-y': '50px',
						borderTopColor: '#4c4c4c',
						borderLeftColor: '#4c4c4c',
						borderRightColor: '#4c4c4c',
						borderBottomColor: '#4c4c4c'
					}, 100, 'swing');
					$('.pathTwoStepTwoConnector').animate({
						backgroundColor: 'rgba(30,31,32, .75)'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				}
				else {
					break;
				}
		}
	});

	$('.pathTwoStepThree').mouseup(function(event) {
		switch (event.which) {
			case 1:
				if (pathTwoStepTwo.pointGiven === false) {
					break;
				} else {
					if (pathTwoStepThree.pointGiven === false && points < totalPoints) {
						points++;
						pathTwoStepThree.pointGiven = true;
						$('.pathTwoStepThree').animate({
							'background-position-y': '0px',
							borderTopColor: '#6faeef',
							borderLeftColor: '#6faeef',
							borderRightColor: '#6faeef',
							borderBottomColor: '#6faeef'
						}, 100, 'swing');
						$('.pathTwoStepThreeConnector').animate({
							backgroundColor: '#313234'
						}, 100, 'swing');
						$('.score').html(points + " / " + totalPoints);
						break;
					} else {
						break;
					}
				}
				break;
			case 2:
				break;
			case 3:
				if (pathTwoStepThree.pointGiven === true && pathTwoStepFour.pointGiven !== true) {
					pathTwoStepThree.pointGiven = false;
					points--;
					$('.pathTwoStepThree').animate({
						'background-position-y': '50px',
						borderTopColor: '#4c4c4c',
						borderLeftColor: '#4c4c4c',
						borderRightColor: '#4c4c4c',
						borderBottomColor: '#4c4c4c'
					}, 100, 'swing');
					$('.pathTwoStepThreeConnector').animate({
						backgroundColor: 'rgba(30,31,32, .75)'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				}
				else {
					break;
				}
		}
	});

	$('.pathTwoStepFour').mouseup(function(event) {
		switch (event.which) {
			case 1:
				if (pathTwoStepThree.pointGiven === false) {
					break;
				} else {
					if (pathTwoStepFour.pointGiven === false && points < totalPoints) {
						points++;
						pathTwoStepFour.pointGiven = true;
						$('.pathTwoStepFour').animate({
							'background-position-y': '0px',
							borderTopColor: '#6faeef',
							borderLeftColor: '#6faeef',
							borderRightColor: '#6faeef',
							borderBottomColor: '#6faeef'
						}, 100, 'swing');
						$('.score').html(points + " / " + totalPoints);
						break;
					} else {
						break;
					}
				}
				break;
			case 2:
				break;
			case 3:
				if (pathTwoStepFour.pointGiven === true) {
					pathTwoStepFour.pointGiven = false;
					points--;
					$('.pathTwoStepFour').animate({
						'background-position-y': '50px',
						borderTopColor: '#4c4c4c',
						borderLeftColor: '#4c4c4c',
						borderRightColor: '#4c4c4c',
						borderBottomColor: '#4c4c4c'
					}, 100, 'swing');
					$('.score').html(points + " / " + totalPoints);
					break;
				}
				else {
					break;
				}
		}
	});
});

