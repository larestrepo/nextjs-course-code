import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs5",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs6",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
