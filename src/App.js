import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div id='container'>
      <head>
        <title>Little Lemon</title>
        <meta
          name="description"
          content="Little Lemon offers traditional cuisine in a lemon. That's right, if you're reading this, you know what I just said made no sense."
        />
        <meta name="og:title" content="Little Lemon"/>
        <meta name="og:description" content="Little Lemon offers traditional cuisine in a lemon. That's right, if you're reading this, you know what I just said made no sense."/>
        <meta name="og:image" content="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"/>
      </head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
