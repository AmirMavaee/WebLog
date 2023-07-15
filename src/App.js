import React from 'react';
//react-routet-dom
import { Route, Routes } from 'react-router-dom';
// components
import Layout from './components/layout/Layout';
import Homepage from './components/Home/Homepage';
import AuthorPage from './components/author/AuthorPage';
import BlogPage from './components/Blog/BlogPage';
import ScrollToTop from './components/shared/ScrollToTop';





function App() {
  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/blogs/:slug' element={<BlogPage/>}/>
        <Route path='/authors/:slug' element={<AuthorPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
