import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage';
import MyBookListPage from '../BookListPage/BookListPage';
import ChatPage from '../ChatPage/ChatPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route exact path="/" element={<HomePage />} />
              <Route path="/search-books" element={<SearchBooksPage />} />
              <Route path="/my-booklist" element={<MyBookListPage />} />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
