/**
 * Project: [treela-portal]
 * Created on: '8/23/2017'
 * License: 'MIT'
 * Author: Akshay Kr Singh <akshay.scythe@gmail.com>
 */
import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';
import config from 'appConfig';

export default function() {
  return restful(config.apiUrl(), fetchBackend(fetch));
}
