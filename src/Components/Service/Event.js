import axios from "axios";

export const getEvent = async() =>{
    let event = [];
    await axios.get('event/list')
    .then(response => {
        event = response.data.event
    })

    return event
    
}