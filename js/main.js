$(document).ready(function(){
	$('ul.tabs').tabs();
	$('.tooltipped').tooltip({delay: 50});
    $('.modal').modal();
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
	
//	$('.tripImageContainer img').height($('.tripImageContainer img').width());
	
	// $('.chips').material_chip({
	// 	data: [{
     //  tag: 'City',
    // }, {
     //  tag: 'Sports',
    // }, {
     //  tag: 'Shopping',
    // }],
	// 	placeholder: 'Enter a tag',
    // secondaryPlaceholder: '+Tag',
	// 	autocompleteData: {
     //  'Outdoor': null,
     //  'Active': null,
     //  'Relax': null,
	// 		'Beach': null,
	// 		'Mountain': null,
	// 		'Culture': null,
	// 		'Food': null,
	// 		'Musea': null,
	// 		'New energy': null,
    // }
	// });
	
	// $('.item').click(function() {
	// 	var id = $(this).attr('itemid');
	// 	$('#editModal').toggleClass('show');
	// 	$('.overlay').toggleClass('show');
	// 	//editItem(id);
	// });

});

//function hideEditModal() {
//	$('#editModal').removeClass('show');
//	$('.overlay').removeClass('show');
//}

// function setImgDimensions(imgel) {
// 	_this = $(imgel);
// 	if(_this.height() > _this.width()) {
// 		_this.height(_this.width());
// 	} else {
// 		_this.width(_this.height());
// 	}
// }

//function getNewItemFromUrl(url) {
//  var urlEncoded = encodeURIComponent(url);
//  var apiKey = '58aac6d3dd95e6b920d36457';
//  var requestUrl = 'https://opengraph.io/api/1.0/site/' + urlEncoded + '?app_id=' + apiKey;
//  var tempItemObj = {};
//  
//  $.getJSON(requestUrl, function( json ) {
//
//      tempItemObj = {
//          'itemId': 0,
//          'itemCategory': 0,
//          'itemName': json.hybridGraph.title,
//          'itemDesc': json.hybridGraph.description,
//          'itemImg': json.hybridGraph.image,
//          'itemRating': 0,
//          'itemComments': false,
//          'itemTasks': false,
//          'itemFinancials': false,
//          'itemAttachement': false};
//  });
//  console.log(tempItemObj);
//  return tempItemObj;
//  
//}

 
// $('#loadOpenGraphData').click(function(){
//   $.getJSON(requestUrl, function( json ) {
//
//     // Throw the object in the console to see what it looks like!
//     console.log('json', json);
//
//     // Update the HTML elements!
//     $('#title').text(json.hybridGraph.title);
//     $('#description').text(json.hybridGraph.description);
//     $('#icon').attr('src', json.hybridGraph.image);
//
//   });
// });




