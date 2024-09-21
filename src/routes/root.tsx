import { Button } from "@/components/ui/button";
import { getPosts } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";


export default function Root() {
  const { data, loading, error } = useQuery(getPosts(), {
    variables: {
      limit: 10,
      spaceIds: ["7lPbkoH9yfem", "1tcjA4iSM3ZW", "CcW7RN7LVLb5"],
      orderByString: "publishedAt",
      reverse: true,
      filterBy: [],
    },
  });
  console.log(data, loading, error);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <>
      <div id="sidebar">
        <div>
          <h1>SpaceX Launches</h1>
          <Button>Click me</Button>
          <ul>
            {data.posts.nodes.map((launch: any) => (
              <li key={launch.id}>{launch.title}</li>
            ))}
          </ul>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
