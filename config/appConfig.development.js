/**
 * Project: [treela-admin]
 * Created on: '6/23/2017'
 * License: 'MIT'
 * Author: Akshay Kr Singh <akshay.scythe@gmail.com>
 */

const CONFIG = {
  hostUrl: 'http://localhost:3000',
  domain: 'localhost',
  routerBasePath: '/',
  storageContainer: 'treela-development'
};

CONFIG.apiUrl = () => `${CONFIG.hostUrl}/api`;
CONFIG.downloadUrl = (id) => `${CONFIG.apiUrl()}/resources/${CONFIG.storageContainer}/download/${id}`;

export default CONFIG;
