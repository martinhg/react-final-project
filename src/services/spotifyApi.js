const BASE_URL = 'https://api.spotify.com/v1';

const callApi = (endpoint, options = {}) => {
    options.headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQA-7Wjs2NhQ8CbZGXZk8s9bgavyfhcVnuYeux8Ttd83kHHq5-m_2A7PXNyFPkiDcl5fudHSB4AnTsMt4dkO35k0vbuRtQrTkNVWi7BOD-tVC5Pq10HeOcz0p-6xVvimd9sCUfvumDG3CwyqLQTwbb4EkrjxBsBcL0mopD_4nV6VtOJGx_mAPJGtFr4orAtdKXuMNwzXAN7mNNPwrjpXrd3P32R50l4XTSoum9ngfuu142Bua9wKtduNN7llQ1ueJHXylT9ruOJrb9yHB7gR4r4WThbTqyaCkj98'
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