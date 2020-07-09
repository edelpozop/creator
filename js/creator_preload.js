/*
 *  Copyright 2015-2020 Felix Garcia Carballeira, Alejandro Calderon Mateos, Diego Camarmas Alonso, Lucas Elvira Martín, Javier Prieto Cepeda, Saul Alonso Monsalve
 *
 *  This file is part of Creator.
 *
 *  Creator is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Creator is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with Creator.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


    //
    // Preload tasks
    //

    var creator_preload_tasks = [

	 // parameter: example_set
	 {
	    'name':   'example_set',
	    'action': function( app, hash )
		      {
                          var result = 'not loaded' ;

			  if (hash.example_set.trim() !== "")
		          {
			      app.load_examples_available(hash.example_set) ;
                              result = 'has been loaded' ;
		          }

			  return '<li>Examples set titled <strong>' +
			          hash.example_set +
			          '</strong> ' + result + '.</li> ' ;
		      }
	 },

	 // parameter: example
	 {
	    'name':   'example',
	    'action': function( app, hash )
		      {
                          var result = 'not loaded' ;
			  var example_index = parseInt(hash.example) ;
                          if (app._data.example_loaded == null) {
                              app._data.example_loaded = new Promise(function(resolve, reject) {
									resolve('unavailable') ;
                                                         }) ;
                          }

			  app._data.example_loaded.then(function() {
				  if (typeof example_available[example_index] !== "undefined") {
				      app.load_example_init(example_available[example_index].url) ;
				      result = 'has been loaded' ;
				  }
			  }) ;

			  return '<li>Example Id. <strong>' +
			         hash.example +
			         '</strong> ' + result + '.</li> ' ;
		      }
	 }

     ] ;


    //
    // Preload work
    //

    function creator_preload_get2hash ( window_location )
    {
	 var hash       = {} ;
         var hash_field = '' ;
	 var uri_obj    = null ;

	 // 1.- check params
	 if (typeof window_location === "undefined") {
	     return hash ;
	 }

	 // 2.- get parameters
         var parameters = new URL(window_location).searchParams ;
         for (i=0; i<creator_preload_tasks.length; i++)
         {
              hash_field = creator_preload_tasks[i].name ;
              hash[hash_field] = parameters.get(hash_field) ;

	      // overwrite null with default values
              if (hash[hash_field] === null) {
                  hash[hash_field] = '' ;
              }
         }
	
	 return hash ;
    }

    function creator_preload_fromHash ( app, hash )
    {
        var key = '' ;
        var act = function() {} ;

        // preload tasks in order
	var o = '' ;
        for (var i=0; i<creator_preload_tasks.length; i++)
        {
	    key = creator_preload_tasks[i].name ;
	    act = creator_preload_tasks[i].action ;

	    if (hash[key] !== '') {
	        o = o + act(app, hash) ;
            }
        }

	// return ok
	return 0 ;
    }
