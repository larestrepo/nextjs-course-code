import PostsGrid from "../posts/posts-grid";
import classes from "./feature-posts.module.css";

function FeaturePosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturePosts;
