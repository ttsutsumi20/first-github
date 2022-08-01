// import { ActionButton } from "./components/ActionButton";

// const App = () => {
//   return (
//     <>
//       <h1>react app</h1>
//       <ActionButton text="おみくじをひく" />
//       <ActionButton text="じゃんけんをする" />
//     </>
//   );
// };
// export default App;


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { API, Izakaya } from "./pages/Izakaya";

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/izakaya">お店を探す</Link>
        </li>
        <li>
          <Link to="/omikuji">挑戦者決定</Link>
        </li>
        <li>
          <Link to="/janken">男気じゃんけん COMとの対戦舞台</Link>
        </li>
      </ul>
      <hr />
      <Routes>
       <Route path="/izakaya" element={<Izakaya />} />
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
       </Routes>
    </BrowserRouter>
  );
};
export default App;