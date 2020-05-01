import Flickr from 'flickr-sdk';

const httpClient = new Flickr(process.env.VUE_APP_CLIENT_KEY);

export default httpClient;
