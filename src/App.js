import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div id='container'>
      <head>
        <title>Little Lemon</title>
        <meta
          name="description"
          content="Little Lemon offers traditional cuisine in a lemon. That's right, if you're reading this, you know what I just said made no sense."
        />
      </head>
      <Header />
      <Main />
    </div>
  );
}

export default App;
