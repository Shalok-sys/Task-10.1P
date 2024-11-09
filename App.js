import { useState } from 'react';
import React from "react";
import axios from 'axios';
import './App.css';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: 'React Basics',
    description: 'An introduction to React.js',
    author: 'John Doe',
    rating: 4.2,
    img_url: "https://picsum.photos/460/160?random=1",
  },
  {
    id: 2,
    title: 'Advanced React',
    description: 'Diving deeper into React hooks and lifecycle methods',
    author: 'Jane Smith',
    rating: 3.5,
    img_url: "https://picsum.photos/460/160?random=2",
  },
  {
    id: 3,
    title: 'React with Redux',
    description: 'Managing global state in React using Redux',
    author: 'Alex Johnson',
    rating: 4.9,
    img_url: "https://picsum.photos/460/160?random=3",
  },
];

const tutorials = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    description: 'Learn the basics of JavaScript.',
    username: 'coder123',
    rating: 4.8,
    img_url: "https://picsum.photos/460/160?random=4",
  },
  {
    id: 2,
    title: 'React Fundamentals',
    description: 'Master the basics of React.js.',
    username: 'devguru',
    rating: 5.0,
    img_url: "https://picsum.photos/460/160?random=5",
  },
  {
    id: 3,
    title: 'CSS Flexbox Tutorial',
    description: 'Get hands-on experience with Flexbox layout.',
    username: 'frontendqueen',
    rating: 4.7,
    img_url: "https://picsum.photos/460/160?random=6",
  },
];


const Header = () => {
  return (
    <header class="header">
      <div class="logo">
        <h1>DEV@Deakin</h1>
      </div>
      <div class="ui-search">
            <input class="prompt" type="text" placeholder="Search 🔍"/>
        </div>
      <nav>
        <ul>
          <li>Post</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

const FeaturedArticles = () => {
  return (
    <section class="featured-articles">
      <h2>Featured Articles</h2>
      <div class="articles">
        {articles.map((index) => (
          <div class="article" key={index}>
            <div class="article-image"><img src= {index.img_url} alt="image-des"></img></div>
            <h3>{index.title}</h3>
            <p>{index.description}</p>
            <p><span>&#11088;</span> {index.rating} {index.author}</p>
          </div>
        ))}
      </div><br></br>
      <center><button>See all articles</button></center>
      <br></br>
    </section>
  );
};

const FeaturedTutorials = () => {
  return (
    <section class="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div class="tutorials">
      {tutorials.map((index) => (
          <div class="article" key={index}>
            <div class="article-image"><img src= {index.img_url} alt="image-des"></img></div>
            <h3>{index.title}</h3>
            <p>{index.description}</p>
            <p><span>&#11088;</span> {index.rating} {index.username}</p>
          </div>
        ))}
      </div><br></br>
      <center><button>See all tutorials</button></center>
      <br></br>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setMessage('Subscription failed. Please try again later.');
    }
    alert(message);
    console.log(message);
  };

  return(
    <div class="newsletter">
    <label for="email">SIGN UP FOR OUR DAILY INSIDER  </label>
    <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
  </div>
  );
};

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-obj">
        <div class="explore">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div class="support">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div class="social">
          <h4>Stay Connected</h4>
          <ul>
            <li><FaFacebook style={{width:40, height:40}}/> </li>
            <li><FaTwitter style={{width:40, height:40}}/> </li>
            <li><FaInstagram style={{width:40, height:40}}/></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>DEV@Deakin 2024</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </footer>
  );
};


function App() {
  return (
    <div class="App">
      <Header/>
        <FeaturedArticles />
        <FeaturedTutorials />
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
