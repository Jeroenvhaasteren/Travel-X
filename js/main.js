$(document).ready(function(){
	$('ul.tabs').tabs();
	$('.tooltipped').tooltip({delay: 50});
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
	
	$('.tripImageContainer img').height($('.tripImageContainer img').width());
	
	$('.chips').material_chip({
		data: [{
      tag: 'City',
    }, {
      tag: 'Sports',
    }, {
      tag: 'Shopping',
    }],
		placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
		autocompleteData: {
      'Outdoor': null,
      'Active': null,
      'Relax': null,
			'Beach': null,
			'Mountain': null,
			'Culture': null,
			'Food': null,
			'Musea': null,
			'New energy': null,
    }
	});	
	
	
});

function setImgDimensions(imgel) {
	_this = $(imgel);
	if(_this.height() > _this.width()) {
		_this.height(_this.width());
	} else {
		_this.width(_this.height());
	}
}