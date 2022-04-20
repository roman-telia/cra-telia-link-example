import { TeliaTextSpacing, TeliaHeading, TeliaLink } from "@teliads/components/react";
import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <section>
      <TeliaTextSpacing>
        <TeliaHeading tag="h1" variant="title-500">
          About us
        </TeliaHeading>
        <Link to="/">
          <TeliaLink>Home page</TeliaLink>
        </Link>
      </TeliaTextSpacing>
      <div>About</div>
    </section>
  );
};

export default About;
