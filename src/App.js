import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, []);
  
  const fetchPosts = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      const json = await response.json();
      console.log('posts', json)
      setPosts(json);
    } catch (error) {
      console.log('error', error);
    }
  } 
  const postMap = posts.map((post) => {
    const {title, body} = post;
    return (
      <div>
              <h3>{title}</h3>
              <h4>{body}</h4>
      </div>
    )
  })

const dataMap = data.map((user) => {
  const { name, id } = user;
  return (
        <div>
          <h2 onClick={() => fetchPosts(id)}>{name}</h2>
        </div>
  )
}) 


  return (
    <div>
      <div>
      {dataMap}
      </div>
      <div>
        {postMap}
      </div>
    </div>
  )
}

export default App;
