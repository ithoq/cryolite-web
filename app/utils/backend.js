/**
 * Project: [treela-portal]
 * Created on: '8/23/2017'
 * License: 'MIT'
 * Author: Akshay Kr Singh <akshay.scythe@gmail.com>
 */
import 'whatwg-fetch';
import axios from 'axios';
import config from 'appConfig';

axios.defaults.baseURL = config.apiUrl();

export {axios};
