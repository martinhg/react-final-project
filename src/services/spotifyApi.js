const BASE_URL = 'https://api.spotify.com/v1';
const CLIENT_ID = '982cde03c5eb43778296afb6c1ec1787';
const REDIRECT_URI = 'http://localhost:3000/';

const callApi = (endpoint, options = {}) => {
    options.headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQBGPGhVoBv_VPYiHuXHMhSKT9owkg_GTtmRXw4ZnqVDnMJUXoORkuSW2S5LmY07Azu7SvpwkhngAbjDXyy_7QHyQsOpt3_d4_qyGQRCO1fQJRueC2weTdRlrWOgfxCakWnJaKlHOX1ui2wykLR_jCxF9F7QvExPKW8XLqOl6SaSCwabj1M4HR5fNhh_eXgwZGJxBIN3A9se5IF318i9096u3M6KGoZ4RrJddNwVsSPGNz-cXLBCxOzdqdmSo9XXEdAsXfklYI-u8N7aJPk0MXgmgUivYkYypwHc'
    };
    const url = BASE_URL + endpoint;
    return fetch(url, options)
            .then(resp => resp.json())
            .then(data => data)
            .catch(err => err)
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
        getArtists(artist) {
            return callApi(`/search?q=${artist}&type=artist&limit=5`);
        },
        getArtist(artistId) {
            return callApi(`/artists/${artistId}`);
        },
        getArtistAlbums(artistId) {
            return callApi(`/artists/${artistId}/albums?include_groups=album&limit=5`);
        },
        getAlbum(albumId) {
            return callApi(`/albums/${albumId}`);
        },
        getAlbumTracks(albumId) {
            return callApi(`/albums/${albumId}/tracks`);
        },
        login() {
            return auth();
        }
    }
}

export default api;