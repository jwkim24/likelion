import React from "react";
import {Link,useNavigate} from 'react-router-dom'


const Main = () => {
  return (
    <div>
      <Link to='/login'><button>click!</button></Link>
    </div>
  );
};

export default Main;
