import React from 'react';
import estrella from "../assets/estrella.jpg"

const Sidebar: React.FC = () => (
  <aside>
    <div className="img-container">
     <img src={estrella} alt="愛車のエストレヤ" />
    </div>
    <ul>
      <li>PROFILE</li>
      <li>TIMELINE</li>
      {/* <li>SKILLS</li> */}
      <li>WORKS</li>
      <li>CREDITS</li>
    </ul>
    <style jsx>{`
      aside {
        align-items: center;
        background-color: #B5BD89;
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
        width: 10rem;
      }
      `}</style>
  </aside>
)

export default Sidebar;