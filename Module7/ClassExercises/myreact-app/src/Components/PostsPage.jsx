import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import { useData } from "../Hooks/useData";

// save as pages/PostsPage.jsx
export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {

  const [searchParams, setSearchParams] = useSearchParams();

  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;

  const postsData = useData(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul>{postList}</ul>
      <Link to="/posts?limit=05">Load 5 Posts</Link>
      <Link to="/posts?limit=10">Load 10 Posts</Link>
      <Link to="/posts?limit=20">Load 20 Posts</Link>
    </>
  );
}


// add to PostsPage.jsx
export function Post() {
  const { id } = useParams(); // custom hook to access dynamic params;
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}
