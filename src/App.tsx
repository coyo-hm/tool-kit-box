import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";
import HomePage from "@routes/home/page";
import PasswordGeneratorPage from "@routes/password-generator/page";
// import StarRatingPage from "@routes/star-rating/page";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/password-generator" element={<PasswordGeneratorPage />} />
          {/*<Route path="/star-rating" element={<StarRatingPage />} />*/}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
