
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from './components/chats/chats';
import Gallery from './components/gallery/gallery';
import Header from './components/header/header';
import Landing from './components/landing/landing';
import Posts from './components/posts/posts';
import Profile from './components/profile/profile';
import Sidebar from './components/sidebar/sidebar';
import Todo from './components/todo/todo';
import ComingSoon from './components/coming-soon/coming-soon';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
