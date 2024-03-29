import React from "react";

let year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="text-center mt-3">
      <p>
        <a
          href="mailto:t3rrygong@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope fa-lg"></i>
        </a>{" "}
        &nbsp;{" "}
        <a
          href="https://github.com/Terry0532"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fa-lg"></i>
        </a>{" "}
        &nbsp;{" "}
        <a
          href="https://www.linkedin.com/in/terry-gong-821184196/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin fa-lg"></i>
        </a>
      </p>
      <p>© {year} Terry Gong • all rights reserved</p>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        and{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
