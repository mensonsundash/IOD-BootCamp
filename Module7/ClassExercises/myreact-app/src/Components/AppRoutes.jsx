import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFount";
import PostsPage, { Post, PostList } from "./PostsPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage></Homepage> }> </Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>

            <Route path="/posts" element={<PostsPage></PostsPage>}>
                <Route index element={<PostList></PostList>}></Route>
                <Route path=":id" element={<Post></Post>}></Route>
            </Route>

            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    )
}

export default AppRoutes;