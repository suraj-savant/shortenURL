
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import MainPage from './pages/mainPage';
import RedirectPage  from './pages/redirectPage';


function App() {
  return(

  <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:key" element={<RedirectPage />} />               
                {/* <Route path="*" element={<NotFoundComponent />} /> */}
            </Routes>
        </BrowserRouter>
  );
}

export default App
