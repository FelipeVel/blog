import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:postId" element={<Post />} />
      </ Routes>
    </Router>
    </>
  );
}

export default App;
