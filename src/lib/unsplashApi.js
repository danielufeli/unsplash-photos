import Unsplash, { toJson } from 'unsplash-js';
let unsplash = new Unsplash({
  accessKey: '7384912590e52b7b65e8c0cab0502621f208ac9823288514112fe7c5eae9cca8',
  secret: '72f4c8730933f19923891f8158ecb8ccf97deb51de1c44c5ed631e9826f115b9',
  callbackUrl: ''
});

unsplash.photos
  .listPhotos(1, 100, 'latest')
  .then(toJson)
  .then(json => {
    console.log(json);
  });
