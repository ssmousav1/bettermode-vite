import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, MessageCircle } from "lucide-react";

// Mock data for initial and additional posts
const initialPosts = [
  {
    id: 1,
    title: "My First Post",
    description:
      "This is the content of my first post. It's not very long, but it's a start!",
    likes: 5,
    comments: [
      { id: 1, author: "Alice", content: "Great first post!" },
      { id: 2, author: "Bob", content: "Looking forward to more!" },
    ],
  },
  {
    id: 2,
    title: "Another Day, Another Post",
    description:
      "Here's my second post. I'm getting the hang of this blogging thing!",
    likes: 10,
    comments: [
      { id: 3, author: "Charlie", content: "Nice work!" },
      { id: 4, author: "David", content: "Interesting thoughts." },
    ],
  },
];

const additionalPosts = [
  {
    id: 3,
    title: "Third Time's the Charm",
    description: "They say third time's the charm, so here's my third post!",
    likes: 7,
    comments: [
      { id: 5, author: "Eve", content: "You're on a roll!" },
      { id: 6, author: "Frank", content: "Keep them coming!" },
    ],
  },
  {
    id: 4,
    title: "Four Score and Seven Posts Ago",
    description:
      "I'm running out of clever titles, but here's post number four!",
    likes: 15,
    comments: [
      {
        id: 7,
        author: "Grace",
        content: "I see what you did there with the title.",
      },
      { id: 8, author: "Henry", content: "History buff, are we?" },
    ],
  },  {
    id: 5,
    title: "Third Time's the Charm",
    description: "They say third time's the charm, so here's my third post!",
    likes: 7,
    comments: [
      { id: 5, author: "Eve", content: "You're on a roll!" },
      { id: 6, author: "Frank", content: "Keep them coming!" },
    ],
  },
  {
    id: 6,
    title: "Four Score and Seven Posts Ago",
    description:
      "I'm running out of clever titles, but here's post number four!",
    likes: 15,
    comments: [
      {
        id: 7,
        author: "Grace",
        content: "I see what you did there with the title.",
      },
      { id: 8, author: "Henry", content: "History buff, are we?" },
    ],
  },  {
    id: 7,
    title: "Third Time's the Charm",
    description: "They say third time's the charm, so here's my third post!",
    likes: 7,
    comments: [
      { id: 5, author: "Eve", content: "You're on a roll!" },
      { id: 6, author: "Frank", content: "Keep them coming!" },
    ],
  },
  {
    id: 8,
    title: "Four Score and Seven Posts Ago",
    description:
      "I'm running out of clever titles, but here's post number four!",
    likes: 15,
    comments: [
      {
        id: 7,
        author: "Grace",
        content: "I see what you did there with the title.",
      },
      { id: 8, author: "Henry", content: "History buff, are we?" },
    ],
  },
];

// Post component
const Post = ({
  post,
  onLike,
  onAddComment,
}: {
  post: any;
  onLike: any;
  onAddComment: any;
}) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e: any) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(post.id, newComment);
      setNewComment("");
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{post.description}</p>
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="outline" size="sm" onClick={() => onLike(post.id)}>
            <ThumbsUp className="mr-2 h-4 w-4" /> {post.likes} Likes
          </Button>
          <div className="flex items-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            <span>{post.comments.length} Comments</span>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="space-y-4">
          {post.comments.map((comment: any) => (
            <div key={comment.id} className="flex items-start space-x-4">
              <Avatar>
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium">{comment.author}</p>
                <p className="text-sm text-muted-foreground">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
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
      </CardFooter>
    </Card>
  );
};

// Main Posts component
export default function Posts() {
  const [posts, setPosts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleLike = useCallback((postId: any) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }, []);

  const handleAddComment = useCallback((postId: any, content: any) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { id: Date.now(), author: "You", content },
              ],
            }
          : post
      )
    );
  }, []);

  const loadMorePosts = () => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setPosts((prevPosts) => [...prevPosts, ...additionalPosts]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={handleLike}
          onAddComment={handleAddComment}
        />
      ))}
      {page < 2 && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMorePosts} disabled={loading}>
            {loading ? "Loading..." : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
}
