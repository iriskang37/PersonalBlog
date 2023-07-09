import LoginPage from "./LoginPage"
import MainPage from "./MainPage"
import LearnMorePage from "./LearnMorePage"
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />}/>
        <Route path="/learnmorepage" element={<LearnMorePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

