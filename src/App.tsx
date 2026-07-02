import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spinner } from './components/Spinner';

const Landing = lazy(() => import('./pages/Landing').then(m => ({ default: m.Landing })));
const Signup = lazy(() => import('./pages/Signup').then(m => ({ default: m.Signup })));
const Signin = lazy(() => import('./pages/Signin').then(m => ({ default: m.Signin })));
const Blogs = lazy(() => import('./pages/Blogs').then(m => ({ default: m.Blogs })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const Publish = lazy(() => import('./pages/Publish').then(m => ({ default: m.Publish })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Spinner />
        </div>
      }>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
