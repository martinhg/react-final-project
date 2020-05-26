const BASE_URL = 'https://api.spotify.com/v1';

const callApi = (endpoint, options = {}) => {
    options.headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQD4XlJ2FFVAETR-pup4-WW57bHjXB8wQbqTTkatUWDPH-HP9MWn5R7w30mC1t86Yeny4z53u8fGRiWG_XHkgh15S4h87CSjk5366h2zV3jeIg02RFQTF1fSrFr99eSojuLuFGTgVwDk0FcEPJJoGJ83fLZgELbRzjqqFCSKm6uSor8CXSXsW-E-fR133oqk_8A-YpQ9cZh2Y0zDgMEA6N5hKRhuCD9AcmSsoQDT-uuL6p8ip6Z0NuStgs8VhxbQXTEczPtUxZw1XvI7Dg-9MTZyMySYpXDA1389'
    };
    const url = BASE_URL + endpoint;
    return fetch(url, options)
            .then(resp => resp.json())
            .then(data => data)
            .catch(err => err)
}

const api = {
    spotify: {
        getArtists(artist) {
            return callApi(`/search?q=${artist}&type=artist&limit=6`);
        },
        getArtist(artistId) {
            return callApi(`/artists/${artistId}`);
        },
        getArtistAlbums(artistId) {
            return callApi(`/artists/${artistId}/albums?include_groups=album&limit=6`);
        },
        getAlbum(albumId) {
            return callApi(`/albums/${albumId}`);
        },
        getAlbumTracks(albumId) {
            return callApi(`/albums/${albumId}/tracks`);
        }
    }
}

export default api;