import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import BlogForm from './components/BlogForm';


function App() {
  //parte html da ritornare
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <MainComponent />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App