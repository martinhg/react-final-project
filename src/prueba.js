import React, { useEffect, useState } from 'react';

import api from './services/spotifyApi';

class Prueba extends React.Component {

    state = {
        loading:false,
        error: null,
        data: undefined
    }

    componentDidMount() {
        // this.login();
        this.fetchData();
        console.log(this.state.data);
    }

    login = async () => {
        try {
            const data = await api.spotify.login();
        }
        catch {
            console.log('error');
        }
    }

    fetchData = async () => {
        this.setState( { loading: true, error: null } );

        try {
            const data = await api.spotify.list('michael');
            this.setState( { loading: false, data: data } )
        }
        catch(error) {
            this.setState( { loading: false, error: error } )
        }
    }

    render () {
        return('prueba');
    }
}

// const Prueba = () => {
//     const [userId, setUserId] = useState(null)
//   const myHeaders = {
//     'Authorization': 'Bearer BQAAvn28ns10c0cayydLBypJilkcdRW7M2C64rUjw3qn-urF-3mlaH7AuoXm1WvgkZlo6bkUB8Gb0xRMpyUn2dkY_o1wWaUd2infHlZXuk-QEm6_LBzXPWomo1hhxj8L-3SeQoDuftuZvdVat9LOvlT1yHMSQmb2pT0eety-rapP5_s2rxRJSy9382sGZyKfiDIheFA-AP51Em9xYkZnYKfr-M7EF3DpIkMRoju2qxQMEG2N_imnxQ8sZLtfHKud8tEshxbjr7agYJYfURtd4_stRUu4FxNrKDx6',
//     'Content-Type': 'application/json'
//   }
//   useEffect(() => {
//     fetch('https://api.spotify.com/v1/me', {
//       headers: myHeaders
//     })
//     .then(res => res.json())
//     .then(({id}) => setUserId(id))
//     .catch(err => console.log(err))
//   }, [])
//   const getPlayList = () => {
//     fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
//       headers: myHeaders
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//   }
//   // const getMyTopArtists = () => {
//   //   fetch(`https://api.spotify.com/v1/me/top/artists?limit=5`, {
//   //     method: 'GET',
//   //     headers: myHeaders
//   //   })
//   //   .then(res =>res.json())
//   //   .then(data => console.log(data))
//   //   .catch(err => console.log(err))
//   // }
//   return (
//     <div className="App">
//       <p>{userId && userId}</p>
//       <button onClick={getPlayList}>Get PlayList</button>
//       {/* <button onClick={getMyTopArtists}>Get My Top Artists</button> */}
//     </div>
//   );
// }

export default Prueba;