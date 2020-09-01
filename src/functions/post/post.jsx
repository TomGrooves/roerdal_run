
function dateToTimestamp(unixdate) {
    let date = new Date(unixdate);
    let converted = date.getTime() / 1000
    return converted
}


export async function postData (data, loginData) {

    let formData = new FormData()
    let convertedDate = dateToTimestamp(data.date)

    formData.append("run_id", data.program)
    formData.append("firstname", data.firstname)
    formData.append("lastname", data.lastname)
    formData.append("address", data.address)
    formData.append("zipcode", data.area)
    formData.append("city", data.city)
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    formData.append("birthdate", convertedDate)
    formData.append("gender", data.gender)
    formData.append("comment", data.comment)

    console.log(convertedDate)

    let options = {
        method: "POST",
        body: formData,
        headers: {
            'Authorization' : `Bearer ${loginData.access_token}`
        }
    }

    let url = "https://api.mediehuset.net/rordal/registrations"
   
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
    
}
