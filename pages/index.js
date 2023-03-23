import { Fragment } from "react";
import FeaturePosts from "../components/home-page/feature-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is a react framework for production",
    date: "2022-02-10",
  },
  // {
  //   slug: "getting-started-with-nextjs2",
  //   title: "Getting Started with NextJS",
  //   image: "getting-started-nextjs.png",
  //   excerpt: "NextJs is a react framework for production",
  //   date: "2022-02-10",
  // },
  // {
  //   slug: "getting-started-with-nextjs3",
  //   title: "Getting Started with NextJS",
  //   image: "getting-started-nextjs.png",
  //   excerpt: "NextJs is a react framework for production",
  //   date: "2022-02-10",
  // },
  // {
  //   slug: "getting-started-with-nextjs4",
  //   title: "Getting Started with NextJS",
  //   image: "getting-started-nextjs.png",
  //   excerpt: "NextJs is a react framework for production",
  //   date: "2022-02-10",
  // },
  // {
  //   slug: "getting-started-with-nextjs5",
  //   title: "Getting Started with NextJS",
  //   image: "getting-started-nextjs.png",
  //   excerpt: "NextJs is a react framework for production",
  //   date: "2022-02-10",
  // },
  // {
  //   slug: "getting-started-with-nextjs6",
  //   title: "Getting Started with NextJS",
  //   image: "getting-started-nextjs.png",
  //   excerpt: "NextJs is a react framework for production",
  //   date: "2022-02-10",
  // },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturePosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
