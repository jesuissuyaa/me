import React from 'react';

const Credits: React.FC = () => (
  <div id="credits">
    <h1>CREDITS</h1>
    <div>Icons made by
      <ul>
        <li><a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></li>
        <li><a href="https://www.flaticon.com/authors/pixel-perfect">Pixel Perfect</a></li>
        <li><a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a></li>
      </ul>
      from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
    <style jsx>{`
      div:last-child {
        margin-bottom: 2rem;
      }
      li {
        margin: .3rem 0;
      }
    `}</style>
  </div>
)

export default Credits;