import React from 'react';
import estrella from "../assets/estrella.jpeg"

const Sidebar: React.FC = () => (
  <aside>
    <div className="img-container">
     <img src={estrella} alt="愛車のエストレヤ" />
    </div>
    <ul>
      <li><a href="#profile">PROFILE</a></li>
      <li><a href="#timeline">TIMELINE</a></li>
      {/* <li>SKILLS</li> */}
      <li><a href="#works">WORKS</a></li>
      <li><a href="#credits">CREDITS</a></li>
    </ul>
    <style jsx>{`
      a, a:visited {
        color: #fafdf6;
        text-decoration: none;
      }
      a:hover {
        border-bottom: 1px solid #fafdf6;
      }
      aside {
        align-items: center;
        background-color: #745C97;
        color: #fafdf6;
        display: flex;
        flex-direction: column;
        height: 100vh;
        flex-basis: 30rem;
      }
      img {
        border: .2rem solid #FAFDF6;
        border-radius: 50%;
        box-sizing: border-box;
        max-width: 100%;
      }
      ul {
        align-items: center;
        display: flex;
        flex-direction: column;
        list-style-type: none;
        padding: 0;
      }
      li {
        margin: 1rem 0;
      }
      .img-container {
        box-sizing: border-box;
        margin-top: 3rem;
        padding: 1rem;
        width: 10rem;
      }
      `}</style>
  </aside>
)

export default Sidebar;