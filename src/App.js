import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<HomePage />} />
           <Route path="/privacypolicy" element={<PrivacyPolicy />} />
           <Route path="/termsandconditions" element={<TermsCondition />} />
          {/*<Route path="*" element={<NoPage />} /> */} 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
