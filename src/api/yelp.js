import axios from "axios";
//baseURL:default url for apis   
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer Ta8BL9QEmnEzcBvII8knYtS9q-2CxDZqvHP507Jitp1wpsq6VFzMxqirRfx_R689OwG34P3LgQc37OcfC8OTBF0xcUfAoFoOfHoXD4-Z2EdIDkSRFSg0tCGLMKmMY3Yx'
    }
}); 
 