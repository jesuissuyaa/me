import React from "react";
import estrella from "../assets/estrella.jpeg";

const Profile: React.FC = () => (
  <div id="profile">
    <h1>PROFILE</h1>
    <p>電気通信大学大学院の修士2年生です。バイクとガムランが好きです。</p>
    <img src={estrella} alt="愛車のエストレヤ" />
    <p>
      研究では、Graphic
      Organizerという視覚的に情報を整理する手法で文章を書く学習支援をテーマにしています。
    </p>

    <style jsx>{`
      p {
        justify-content: flex-start;
      }
      img {
        display: none;
      }
      @media screen and (max-width: 600px) {
        img {
          display: block;
          height: 30vw;
          margin: 0 auto;
        }
      }
    `}</style>
  </div>
);

export default Profile;
