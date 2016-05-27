/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 import React from 'react';
 import { Form } from '../../components';

 export default {

   path: '/form',

   action() {
     return {
       title: 'Are you HIPAA compliant?',
       component: Form,
     };
   },

 };
