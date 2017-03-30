import axios from 'axios';


const registerUSerURL = 'http://interspace.dev/offertool/userRegistration.php';

// Register user
export const registerNewUser = (userData) => {

    axios({
        method: 'post',
        url: registerUSerURL,
        data: userData,
        headers: {
            'content-Type': 'application/json'
        }
    })
        .then((response) => {
            console.log(response);
        })
        .catch((err)=>{
            console.log(err)
        })


};

