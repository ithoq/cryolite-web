/**
 * Project: [treela-admin]
 * Created on: '6/30/2017'
 * License: 'MIT'
 * Author: Akshay Kr Singh <akshay.scythe@gmail.com>
 */

import cookie from 'react-cookies';
import _ from 'lodash';
import config from 'appConfig';

export function getCookie(key, opts) {
  let extract = cookie.load(key);
  opts = _.isObject(opts) ? opts : {unSign: opts};
  
  if (_.isEmpty(extract)) {return opts.isArray ? [] : extract;}
  
  if (opts.unSign) {
    extract = extract.split(':')[1].split('.')[0];
  }
  
  if (opts.isArray) {
    try {
      extract = JSON.parse(extract);
    } catch (error) {
      extract = [extract];
    }
  }
  
  return extract;
}

export function setCookie(key, value) {
  if (!_.isEmpty(cookie.load(key))) {
    deleteCookie(key);
  }
  
  cookie.save(key, `s:${value}.`, { path: '/', domain: config.domain });
}

export function deleteCookie(key) {
  cookie.remove(key, {domain: config.domain});
}
