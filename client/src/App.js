
import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Verify from './Verify/Verify';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const URL = "http://localhost:3001/"
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  // GET with fetch API
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    console.log(URL+"getAll")
    const response = await fetch(URL+"getAll");
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };
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

  // // Post with fetchAPI
  // const addPosts = async (title, body) => {
  //   let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       title: title,
  //       body: body,
  //       userId: Math.random().toString(36).slice(2),
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   });
  //   let data = await response.json();
  //   setPosts((posts) => [data, ...posts]);
  //   setTitle('');
  //   setBody('');
  // };

  return (
    <BrowserRouter>
      <div>
        <pre>{JSON.stringify(posts,null,2)}</pre>
        <Routes>                                            {/* Routes is wrapped because everything outside routes will be present in every component */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/verify" element={<Verify />} />
        </Routes>
      </div>
      <footer> @author Harsh Parihar</footer>
    </BrowserRouter>
  );
}

export default App;
