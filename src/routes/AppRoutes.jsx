import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Palindrome from "../containers/strings/problems/Palindrome";
import ReverseContainer from "../containers/strings/problems/ReverseContainer";
import Max from "../containers/arrays/problems/Max";
import StringsPage from "../containers/strings/problems/StringsPage";
import About from "../pages/About";
import ClosureContainer from "../containers/ClosureContainer";
import RecursionContainer from "../containers/RecursionContainer";
import SidebarContainer from "../containers/SidebarContainer";
import CallbackContainer from "../containers/CallbackContainer";
import HOFContainer from "../containers/HOFContainer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="closure" element={<ClosureContainer />} />
          <Route path="recursion" element={<RecursionContainer />} />
          <Route path="sidebar" element={<SidebarContainer />} />
          <Route path="callback" element={<CallbackContainer />} />
          <Route path="hoc" element={<HOFContainer />} />

          <Route path="strings">
            <Route path="palindrome" element={<Palindrome />} />
            <Route path="reverse" element={<ReverseContainer />} />
          </Route>
          <Route path="arrays">
            <Route path="max" element={<Max />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
