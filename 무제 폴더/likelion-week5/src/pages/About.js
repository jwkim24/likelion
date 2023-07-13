import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>소개 페이지로 이동했습니다.</p>
      <p>Success 페이지로 이동할 수 있는 방법을 찾아 코드를 작성해 주세요!</p>
      <Link to="/likelion">Success</Link>
    </div>
  
  );
};

export default About;
