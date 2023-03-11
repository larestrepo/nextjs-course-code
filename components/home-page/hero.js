import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I am Moxie</h1>
      <p>Just a blog to put ideas together</p>
    </section>
  );
}

export default Hero;
