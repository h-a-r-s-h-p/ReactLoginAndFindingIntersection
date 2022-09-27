const URL = "http://localhost:3001/"

const SignUpUserData = {
    name: "",
    email: "",
    password: ""
}

export const fetchAdd = async (state) => {
    SignUpUserData.name = state.name;
    SignUpUserData.email = state.email;
    SignUpUserData.password = state.password;
    let response = await fetch(URL + "register", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(SignUpUserData),
    });
    let data = await response.json();
    console.log("The user added is ", data)
};

export const getData = async (email, password) => {

    let response = await fetch(URL + "verifyUser",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
    )
    const data = await response.json()
    return data
}

export const updatePassword = async(email,newPassword)=>{
    let response = await fetch(URL+"update/"+email ,
        {
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                password:newPassword
            })
        }
    )
    // console.log("check")
    const data = await response.json()
    console.log("response received about login status of user is ",data)
    
    return data;
}
