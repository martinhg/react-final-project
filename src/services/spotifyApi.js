const BASE_URL = 'https://api.spotify.com/v1';
const CLIENT_ID = '982cde03c5eb43778296afb6c1ec1787';
const REDIRECT_URI = 'http://localhost:3000/';

async function callApi(endpoint, options = {}) {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer BQCt5KJB8uXpbJqYS2HEvbGsPRzqYQZ3kEob6ymPIfCaFrnoXQ5nEyFB26sPGM8oKyAZEWMdexX_j_NbhrOX2bq4MZ6gtOZb5ufiU8Gg-qtKdrm_aPm6GOnZEcGGpuQVdjefT9g-7AO1ZGOaUD7zmPsH51cxt35POEygBGJsY9QqvZc17VDjM1bl4F6xvhh6sqXwuYdapWmu_5f_FPR1PxUGC5n01CSUk4UhiscpMza1iPiHEoUA0dcoXYk8G0IzKA3PBdZPUPO_x4k4mJWlrs3Zk_Ic0UbZjNsF'
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

async function auth(options = {}) {
    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer BQCt5KJB8uXpbJqYS2HEvbGsPRzqYQZ3kEob6ymPIfCaFrnoXQ5nEyFB26sPGM8oKyAZEWMdexX_j_NbhrOX2bq4MZ6gtOZb5ufiU8Gg-qtKdrm_aPm6GOnZEcGGpuQVdjefT9g-7AO1ZGOaUD7zmPsH51cxt35POEygBGJsY9QqvZc17VDjM1bl4F6xvhh6sqXwuYdapWmu_5f_FPR1PxUGC5n01CSUk4UhiscpMza1iPiHEoUA0dcoXYk8G0IzKA3PBdZPUPO_x4k4mJWlrs3Zk_Ic0UbZjNsF'
    };

    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-read-private%20user-read-email&state=34fFs29kd09`;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}


const api = {
    spotify: {
        list(artist) {
            return callApi(`/search?q=${artist}&type=artist`);
        },
        login() {
            return auth();
        }
    }
}

export default api;