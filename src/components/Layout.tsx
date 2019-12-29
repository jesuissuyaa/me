import React from 'react';
import Sidebar from './Sidebar';

const Layout: React.FC = props => (
  <div className="container">
    <Sidebar />
    <main>
      {props.children}
    </main>
    <style jsx global>{`
    main a, main a:visited {
      color: #89023E;
      text-decoration: none;
    }
    main a:hover {
      border-bottom: 1px solid #89023e;
    }
    `}</style>
    <style jsx>{`
      div {
        background-color: #FAFDF6;
        color: #454545;
        display: flex;
      }
      main {
        height: 100vh;
        overflow-y: scroll;
        padding: 0 2rem;
      }
     
    `}</style>
  </div>
)

export default Layout;