import { Link } from "react-router-dom";


export default function Root() {

  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/posts`}>Posts</Link>
            </li>
            <li>
              <Link to={`/login`}>login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
