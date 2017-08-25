/**
 * Project: [treela-portal]
 * Created on: '6/6/2017'
 * License: 'MIT'
 * Author: Akshay Kr Singh <akshay.scythe@gmail.com>
 */
export function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

let staticImages = {};

staticImages['root'] = importAll(require.context('resources/img', false, /\.(png|jpe?g|svg)$/));
staticImages['profiles'] = importAll(require.context('resources/img/profiles', false, /\.(png|jpe?g|svg)$/));

export {staticImages};
