import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page_1 from "./page_1"
import Page_2 from "./page_2";
import Page_3 from "./page_3";
import Page_4 from "./page_4";
function App() {


  return (
  <BrowserRouter>
    <Routes>

    <Route index element={<Page_1 />} />
    <Route path="aa" element={<Page_2 />} />
    <Route path="contact" element={<Page_3 />} />
    <Route path="q" element={<Page_4 />} />

    </Routes>
  </BrowserRouter>


  )
}

export default App
