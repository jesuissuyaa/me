import React from 'react';
import estrella from '../assets/estrella.jpeg';

const Profile:React.FC = () => (
  <div id="profile">
    <h1>PROFILE</h1>
    <p>電気通信大学大学院の修士1年生です。バイクとガムランが好きです。</p>
    <img src={estrella} alt="愛車のエストレヤ" />
    <p>研究では、教科書を効果的に読むために、目次情報から質問を生成するシステムを開発する予定です。
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
)

export default Profile;