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
    let response = await fetch(URL + "post", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(SignUpUserData),
    });
    let data = await response.json();
    console.log("The user added is ", data)
};

export const fetchfind = async (email, password) => {

    let response = await fetch(URL + "getOne",
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

// GET with fetch API
    // useEffect(() => {
    //     fetchAll();
    // }, []);

    // const fetchAll = async () => {
    //     console.log(URL + "getAll")
    //     const response = await fetch(URL + "getAll");
    //     const data = await response.json();
    //     console.log(data);
    //     setPosts(data);
    // };
    // Delete with fetchAPI
    // const deletePost = async (id) => {
    //   let response = await fetch(
    //     URL+`${id}`,
    //     {
    //       method: 'DELETE',
    //     }
    //   );
    //   if (response.status === 200) {
    //     setPosts(
    //       posts.filter((post) => {
    //         return post.id !== id;
    //       })
    //     );
    //   } else {
    //     return;
    //   }
    // };
