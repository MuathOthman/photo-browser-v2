import {Route, Routes} from "react-router-dom";
import PhotoListPage from "./features/photos/pages/PhotoListPage.jsx";
import PhotoDetailPage from "./features/photos/pages/PhotoDetailPage.jsx";
import AlbumPage from "./features/albums/pages/AlbumPage.jsx";
import AlbumsPage from "./features/albums/pages/AlbumsPage.jsx";
import UserPage from "./features/users/pages/UserPage.jsx";
import MainLayout from "./components/MainLayout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<PhotoListPage/>} />
                    <Route path="/albums" element={<AlbumsPage/>} />
                    <Route path="/albums/:id" element={<AlbumPage/>} />
                    <Route path="/users/:id" element={<UserPage/>} />
                    <Route path="*" element={<NotFoundPage/>} />
                </Route>
                <Route path="/photos/:id" element={<PhotoDetailPage/>} />
            </Routes>
        </>
    );
};

export default App;