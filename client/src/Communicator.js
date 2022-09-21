const URL = "http://localhost:3001/"

const SignUpUserData = {
    name: "",
    email: "",
    password: ""
}
export const fetchAdd = async (state) => {
    console.log('inside fetchAdd')
    const newUser = new SignUpUserData();
    newUser.name = state.name;
    newUser.email = state.email;
    newUser.password = state.password;
    let response = await fetch(URL + "post", {
        method: 'POST',
        body: newUser,
    });
    let data = await response.json();
    console.log("The user added is " + data)
};

export const fetchfind = async (email, password) => {
    console.log('inside fetchfind, the email and password we are requesting are: ' + `${email} and ${password}`)

    let response = await fetch(URL + "getOne",
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            })
        }
    )
    const data = await response.json()
    console.log("the user fetched is " + data)
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
