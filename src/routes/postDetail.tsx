import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp, MessageCircle } from "lucide-react";
// import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useMutation, useQuery } from "@apollo/client";
import { getPost, addReaction, removeReaction } from "@/lib/utils";
import { useParams } from "react-router-dom";

// Main Posts component
export default function Post() {
  const [liked, setLiked] = useState<boolean>();
  const [likes, setLikes] = useState<number>();

  const [
    liking,
    { data: likingData, loading: likingLoading, error: likingError },
  ] = useMutation(addReaction(), {
    variables: {
      postId: useParams().postId,
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
      postId: useParams().postId,
      reaction: "+1",
    },
  });

  const { data, loading, error } = useQuery(getPost(), {
    variables: {
      id: useParams().postId,
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
    setLiked(data?.post?.reactions[0]?.reacted);
    setLikes(data?.post?.reactionsCount || 0);
  }, [data]);

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
    <div className="container mx-auto px-4 py-8 h-dvh">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-left">{data.post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-left">
            {data.post.description}
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
              <span>{data.post.replies.nodes.length} Comments</span>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            {data.post.replies.nodes.map((comment: any) => {
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
        {/* <CardFooter>
          <form onSubmit={handleAddComment} className="w-full">
            <div className="flex space-x-2">
              <Input
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit">Post</Button>
            </div>
          </form>
        </CardFooter> */}
      </Card>
    </div>
  );
}
