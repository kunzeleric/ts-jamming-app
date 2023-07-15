import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Home } from "./views/Home";
import { Playlist } from "./views/Playlist";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
      </Route>
    </Routes>
  )
}