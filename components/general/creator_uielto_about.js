/*
 *  Copyright 2018-2022 Felix Garcia Carballeira, Diego Camarmas Alonso, Alejandro Calderon Mateos
 *
 *  This file is part of CREATOR.
 *
 *  CREATOR is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  CREATOR is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with CREATOR.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


  /* jshint esversion: 6 */

  var uielto_about = {

    props:      {
                  id:                   { type: String,  required: true }
                },

    template:   ' <b-modal  :id ="id" ' +
                '           title="About us" ' +
                '           scrollable' +
                '           hide-footer>' +
                ' ' +
                '   <b-card-group>' +
                '     <card-author ' +
                '       author_img="/creator/images/author_fgarcia.png" ' +
                '       author_alt="author_fgarcia" ' +
                '       author_full_name="Félix García Carballeira" ' +
                '       author_href_linked="https://es.linkedin.com/in/f%C3%A9lix-garc%C3%ADa-carballeira-4ab48a14" ' +
                '       author_href_rgate="https://www.researchgate.net/profile/Felix_Garcia-Carballeira" ' +
                '       author_href_github="" ' +
                '     ></card-author>' +
                '' +
                '     <card-author ' +
                '       author_img="/creator/images/author_acaldero.png" ' +
                '       author_alt="author_acaldero" ' +
                '       author_full_name="Alejandro Calderón Mateos" ' +
                '       author_href_linked="https://www.linkedin.com/in/alejandro-calderon-mateos/" ' +
                '       author_href_rgate="https://www.researchgate.net/profile/Alejandro_Calderon2" ' +
                '       author_href_github="https://github.com/acaldero/wepsim" ' +
                '     ></card-author>' +
                '' +
                '     <card-author ' +
                '       author_img="/creator/images/author_dcamarmas.png" ' +
                '       author_alt="author_dcamarmas" ' +
                '       author_full_name="Diego Camarmas Alonso" ' +
                '       author_href_linked="https://www.linkedin.com/in/dcamarmas" ' +
                '       author_href_rgate="https://www.researchgate.net/profile/Diego-Camarmas-Alonso" ' +
                '       author_href_github="https://github.com/dcamarmas" ' +
                '     ></card-author>' +
                '   </b-card-group>' +
                ' ' +
                ' </b-modal>'
  }

  Vue.component('uielto-about', uielto_about) ;


