import React from 'react';

const Profile:React.FC = () => (
  <div id="profile">
    <h1>PROFILE</h1>
    <p>電気通信大学大学院の修士1年生です。バイクとガムランが好きです。</p>
    <p>研究では、教科書を効果的に読むために、目次情報から質問を生成するシステムを開発する予定です。
    </p>
    <style jsx>{`
      p {
        justify-content: flex-start;
      }
    `}</style>
  </div>
)

export default Profile;