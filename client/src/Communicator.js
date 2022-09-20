
const URL = "http://localhost:3001/"
const SignUpUserData = {
    name: "",
    email: "",
    password: ""
}
const fetchAdd = async (state) => {
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
    console.log("The user added is "+data)
};

const fetchfind= async(email) => {
    console.log('inside fetchfind')
    let response = await fetch(URL+"getOne/"+`${email}`)
    const data = await response.json()
    console.log("the user fetched is "+ data)
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
