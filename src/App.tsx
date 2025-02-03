import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@routes/home/page";
import PasswordGeneratorPage from "@routes/password-generator/page";
import Layout from "@components/Layout.tsx";
import StarRatingPage from "@routes/star-rating/page";
import AppProvider from "@src/providers/AppProvider.tsx";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/password-generator" element={<PasswordGeneratorPage />} />
            <Route path="/star-rating" element={<StarRatingPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
