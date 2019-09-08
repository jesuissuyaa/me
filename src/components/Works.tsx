import * as React from 'react';
import estrella from '../assets/estrella.jpeg'
import checklistLogo from '../assets/checklist_logo.png'
import timecardLogo from '../assets/timecard_logo.png'
import okirouLogo from '../assets/okirou_logo.png'
import mamazonLogo from '../assets/mamazon_logo.png'
import GooglePlay from './svg/GooglePlay';
import Firebase from './svg/Firebase';
import Website from './svg/Website';


interface CardProps {
  desc: string
  kw: string[]
  logo: string
  title: string
  url: string
}
const Card: React.FC<CardProps> = props => (
  <div className="card">
    <div className="col-l">
      <img src={props.logo} alt={props.title} />
      <div className="kw">
      {props.kw.sort().map((item, i) => (
        <span key={i}>#{item} </span>
      ))}
      </div>
    </div>

    <div className="col-r">
      <div className="title">
        {props.title}
        <a href={props.url}>
          {props.url.includes('play.google.com') ? <GooglePlay /> :
            props.url.includes('firebase') || props.url.includes('web.app') ? 
            <Firebase /> :
            <Website />
          }
        </a>
      </div> 
      <div className="desc-container">
        {props.desc.split('。').map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>
    </div>
    <style jsx global>{`
      .card svg {
        height: 1.5rem;
      }  
      .card a:hover {
        border-bottom: none; /* clear border styles for text */
      }
    `}</style>
    <style jsx>{`
    img {
      border-radius: 50%;
      height: 5rem;
    }
    .card {
      align-items: flex-start;
      background-color: #EF8DAB;
      border-radius: .3rem;
      color: #454545;
      display: flex;
      flex-basis: 40%;
      margin-bottom: 2rem;
      margin-right: 2rem;
      padding: .7rem;
    }
    .col-l {
      align-items: flex-start;
      display: flex;
      flex-basis: 15%;
      flex-direction: column;
      margin-right: 1rem;
    }
    .col-l > *:not(:last-child) {
      margin-bottom: .5rem;
    }
    .col-r {
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    .desc-container p {
      margin-bottom: 0;
      margin-top: .5rem;
    }
    
    .kw {
      font-size: 0.8rem;
      font-weight: bold;
    }
    .title {
      align-items: center;
      display: flex;
      font-size: 1.1rem;
      font-weight: bold;
    }
    .title a {
      margin-left: 1rem;
    }
    `}</style>
  </div>
)
const Works: React.FC = () => (
  <div id="works">
    <h1>WORKS</h1>
    <h2>IN PROGRESS</h2>
    <div className="card-container">
      <Card logo={estrella}
        title="ポートフォリオ"
        desc="このサイトです"
        url="https://jesuissuyaa.github.io/me"
        kw={['React', 'Typescript', 'CSS']}
      />
    </div>
    <hr></hr>
    <div className="card-container">
      <Card logo={checklistLogo}
        title="日めくりチェックリスト"
        desc="時間指定が午前と午後しかないゆるめのTodoListです"
        url="https://play.google.com/store/apps/details?id=jp.gr.java_conf.oleeapps"
        kw={['Java', 'Android']}
      />
      
      <Card logo={timecardLogo}
        title="タイムカード"
        desc="シンプルな使い勝手を意識したタイムカードです。地味にダウンロードが多くてびっくりしました"
        url="https://play.google.com/store/apps/details?id=jp.gr.conf_java.oleeapps.timecard"
        kw={['Java', 'Android']}
      />
      <Card logo={mamazonLogo}
        title="ママゾン（仮）"
        desc="実家からの物資支援のストレスをなくすためのWebアプリです。「ほしいものリスト」には、自分が実家から送ってほしいものを入力し、「送れるものリスト」には、実家から送れるものを入力してもらいます"
        url="https://m-77740.web.app/"
        kw={['jQuery', 'Firebase', 'Database']}
      />
      <Card logo={okirouLogo} 
        title="バーチャル自習室〜オキ朗〜"
        desc="卒業研究で開発しました。WebRTCとFirebaseで、オンラインで放送大学生が集まって勉強できる場をつくりました。"
        url="https://fireba-a8775.web.app/"
        kw={['WebRTC', 'Firebase', 'Database', 'jQuery']}
      />
    </div>
    <style jsx>{`
    hr {
      border-top: .1rem dashed #454545;
      margin: 0 0 2rem 0;
      width: 90%;
    }
    .card-container {
      display: flex;
      flex-flow: row wrap;
    }  
    
    `}</style>

  </div>
)



export default Works;