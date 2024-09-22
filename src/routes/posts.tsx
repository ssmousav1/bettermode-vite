import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, MessageCircle } from "lucide-react";
import { useMutation, useQuery } from "@apollo/client";
import { addReaction, getPosts, removeReaction } from "@/lib/utils";
import { Link } from "react-router-dom";

const Post = ({ post }: { post: any }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  const [
    liking,
    { data: likingData, loading: likingLoading, error: likingError },
  ] = useMutation(addReaction(), {
    variables: {
      postId: post.id,
      input: {
        reaction: "+1",
        overrideSingleChoiceReactions: true,
      },
    },
  });

  const [
    disliking,
    { data: dislikingData, loading: dislikingLoading, error: dislikingError },
  ] = useMutation(removeReaction(), {
    variables: {
      postId: post.id,
      reaction: "+1",
    },
  });
  const handleLike = () => {
    setLiked((prevState) => !prevState);
    if (liked) {
      disliking();
      setLikes((prevState) => prevState - 1);
    } else {
      setLikes((prevState) => prevState + 1);
      liking();
    }
  };

  useEffect(() => {
    setLiked(post?.reactions[0]?.reacted);
    setLikes(post?.reactionsCount || 0);
  }, [post]);

  return (
    <Card className="mb-6">
      <Link to={post.id}>
        <CardHeader>
          <CardTitle className="text-left text-black	">{post.title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-left">
          {post.description}
        </p>
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="outline" size="sm" onClick={handleLike}>
            <ThumbsUp
              className={`mr-2 h-4 w-4 ${
                liked ? "fill-current text-black-500" : ""
              }`}
            />{" "}
            {likes} Likes
          </Button>
          <div className="flex items-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            <span>{post.replies?.nodes?.length} Comments</span>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          {post?.replies?.nodes.map((comment: any) => {
            return (
              <div key={comment.id} className="flex items-start space-x-4">
                <img
                  className="shrink-0 rounded-avatar h-[3rem] w-[3rem] object-cover object-center rounded-full"
                  src={comment.owner?.member?.profilePicture?.url}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-left">
                    {comment.owner.member.name}
                  </p>
                  <p className="text-sm text-muted-foreground text-left">
                    {comment.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

// Main Posts component
export default function Posts() {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(getPosts(), {
    variables: {
      limit: 50 * page,
      postTypeIds: [
        "vLrOvQ20J61YIgx",
        "L3Wt0PM4KIkzZlE",
        "JL7C2DDhErvQPTz",
        "bFScuuQzcQJlQvZ",
        "at3PgXfPVdzurWL",
        "12HF7mD8Ph0kGpi",
      ],
      orderByString: "publishedAt",
      reverse: true,
      filterBy: [],
    },
  });

  const handleLike = useCallback((postId: any) => {}, []);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading)
    return (
      <img
        width="170"
        height="32"
        src="https://tribe-s3-production.imgix.net/GV7xVRrfDEXMuc8p8y2O3?fit=max&w=1000&auto=compress,format"
      />
    );
  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {data.posts.nodes.map((post: any) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
      <div className="flex justify-center mt-6">
        <Button onClick={loadMorePosts} disabled={loading}>
          {loading ? "Loading..." : "Show More"}
        </Button>
      </div>
    </div>
  );
}
