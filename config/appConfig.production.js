/**
 * Project: [treela-admin]
 * Created on: '6/23/2017'
 * License: 'MIT'
 * Author: Akshay Kr Singh <akshay.scythe@gmail.com>
 */

const CONFIG = {
  hostUrl: 'http://api.treela.in',
  domain: '.treela.in',
  routerBasePath: '/',
  storageContainer: 'treela-production'
};

CONFIG.apiUrl = () => `${CONFIG.hostUrl}/api`;
CONFIG.downloadUrl = (id) => `${CONFIG.apiUrl()}/resources/${CONFIG.storageContainer}/download/${id}`;

export default CONFIG;
