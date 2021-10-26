import Post from "./Post";
const posts = [
  {
    id: "123",
    username: "sssa",
    userImg: "/pic.png",
    img: "/pic.png",
    caption: "cool",
  },
  {
    id: "123",
    username: "sssa",
    userImg: "/pic.png",
    img: "/pic.png",
    caption: "nice",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
