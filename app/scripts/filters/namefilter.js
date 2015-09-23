'use strict';

angular.module('skApp')
	.filter('namesFilter',['$filter',function($filter) {

	function nameFilter(contacts, search) {
		
		if (!search.name && !search.phone){
			// Return everyone
			return contacts;
		}

		return $filter('filter')(contacts,function(contact){

			// #RES TODO, get the name search to work as the phone search does.

			var result = true;
			// Probably wouldn't use this syntax ordinarily
			var search0 = !search.name ? '' : search.name[0].toLowerCase();
			var name0 = contact.name[0].toLowerCase();

			var searchPhone = !search.phone ? '' : search.phone.replace(/[^0-9]/g,'');
			var phone = !contact.phone ? '' : contact.phone.replace(/[^0-9]/g,'');

			if(search0 && (search0 !== name0)){
				result = false;
			}

			if(searchPhone){

				var regX = new RegExp(searchPhone);

				result = result && regX.test(phone);

			}

			return result;
		});

	}

	return nameFilter;

}]);	