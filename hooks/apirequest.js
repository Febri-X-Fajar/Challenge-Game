import axios from "axios"
const baseUrl = "http://localhost:3000/"

export function AddEvent(payload) {
    console.log(payload);
    return axios({
        method: "POST",

        URL: "http://localhost:3000/homepage",
        data: payload
    })
}

export function GetEvent() {
    return(dispatch, setState) => {
        axios({
            method: "GET",
            URL: baseUrl
        })

            .then(data => {
                dispatch({
                    type: "get_data",
                    payload: data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}