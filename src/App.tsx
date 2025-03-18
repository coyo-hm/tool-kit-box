import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/components/common/Layout";
import HomePage from "@routes/home";
import PasswordGeneratorPage from "@routes/password-generator";
import StarRatingPage from "@routes/star-rating";

function App() {
  return (
    <BrowserRouter basename={"/tool-kit-box"}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/password-generator" element={<PasswordGeneratorPage />} />
          <Route path="/star-rating" element={<StarRatingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
