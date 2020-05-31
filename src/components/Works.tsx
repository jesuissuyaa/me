import * as React from "react";
import estrella from "../assets/estrella.jpeg";
import checklistLogo from "../assets/checklist_logo.png";
import timecardLogo from "../assets/timecard_logo.png";
import okirouLogo from "../assets/okirou_logo.png";
import mamazonLogo from "../assets/mamazon_logo.png";
import Github from "../assets/GitHub-Mark-64px.png";
import GooglePlay from "./svg/GooglePlay";
import Firebase from "./svg/Firebase";
import QiitaLogo from "../assets/qiita-favicon.png";
import VocabLogo from "../assets/vocab-logo.png";
import Website from "./svg/Website";
import Kashipedia from "../assets/kashipedia-cover.png";
import PSKCapture from "../assets/psk-capture.png";
import UELocal from "../assets/ue-local-logo.png";

interface CardProps {
  date?: string; // TODO: remove optional
  desc: string;
  kw: string[];
  logo: string;
  title: string;
  url: string;
  /*github?: boolean*/
  qiitaUrl?: string;
}
const Card: React.FC<CardProps> = (props) => (
  <div className="card">
    <div className="col-l">
      <a href={props.url}>
        <img src={props.logo} alt={props.title} />
      </a>
      <div className="kw">
        {props.kw.sort().map((item, i) => (
          <span key={i}>#{item} </span>
        ))}
      </div>
    </div>

    <div className="col-r">
      <div className="title">
        <a href={props.url}>{props.title}</a>
        <a href={props.url}>
          {props.url.includes("play.google.com") ? (
            <GooglePlay />
          ) : props.url.includes("firebase") ||
            props.url.includes("web.app") ? (
            <Firebase />
          ) : props.url.includes("github.com") ? (
            <img src={Github} alt="Github" />
          ) : (
            <Website />
          )}
        </a>
        {props.qiitaUrl && (
          <a href={props.qiitaUrl}>
            <img src={QiitaLogo} alt="Qiita" />
          </a>
        )}
      </div>
      <div className="date-container">{props.date}</div>
      <div className="desc-container">
        {props.desc.split("。").map((s, i) => (
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
    .card a, .card a:visited {
      color: #454545;
    }
    .col-l {
      align-items: flex-start;
      display: flex;
      flex-basis: 15%;
      flex-direction: column;
      margin-right: 1rem;
    }
    .col-l img {
      border-radius: 50%;
      height: 5rem;
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
      margin-top: 1rem;
    }
    
    .kw {
      font-size: 0.9rem;
      font-weight: bold;
    }
    .title {
      align-items: center;
      display: flex;
      font-size: 1.1rem;
      font-weight: bold;
    }
    .title a:not(:first-child) {
      margin-left: 1rem;
    }
    .title img {
      border-radius: 50%;
      height: 1.5rem;
    }
    @media screen and (max-width: 600px) {
      .card {
        flex-basis: 100%;
        margin-right: 0;    
      }
    `}</style>
  </div>
);
const Works: React.FC = () => (
  <div id="works">
    <h1>WORKS</h1>
    <h2>IN PROGRESS</h2>
    <div className="card-container">
      <Card
        logo={estrella}
        title="ポートフォリオ"
        date="2019/08 - 現在"
        desc="このサイトです"
        url="https://jesuissuyaa.github.io/me"
        kw={["React.js", "Typescript", "CSS"]}
      />
    </div>
    <hr />
    <div className="card-container">
      <Card
        logo={UELocal}
        title="Uber Eats対応の個人店まとめ"
        date="2020/05 - 現在"
        desc="Uber Eatsの個人店を紹介するサイトです。microCMSで作成したコンテンツをGatsbyJSで実装したフロントエンドにGraphQLでひっぱってきて、Vercelでデプロイしています。SEOを初めて気にしたプロジェクトでもあり、TwitterのbotなどもAWSであわせてつくりました。"
        url="https://ubereats-local.now.sh"
        kw={[
          "GatsbyJS",
          "React.js",
          "microCMS",
          "Twitter API",
          "Vercel",
          "AWS",
          "SEO",
        ]}
      />
      <Card
        logo={PSKCapture}
        title="サークルのサイト"
        date="2019/11"
        desc="サークルのメンバーを増やすために、サイトを作ることを提案してつくりました"
        url="https://jovial-davinci-f6241b.netlify.com/"
        kw={["GatsbyJS", "React.js"]}
      />
      <Card
        logo={Kashipedia}
        title="Kashipedia 2019"
        date="2019/10"
        desc="学園祭で配布する研究室の冊子です。配色やレイアウトなどすべて自分で決めました。初めての冊子作成でしたがとても楽しかったです"
        url="https://drive.google.com/open?id=1C34eWl448HPspx3TqeLnUsatYqQJMq_c"
        kw={["Illustrator", "Design"]}
      />
      <Card
        logo={VocabLogo}
        title="vocab with context"
        date="2019/07"
        desc="外国語の語彙を文章と一緒に勉強していくWebアプリです。画面にユーザが登録した文章が表示され、文章中の単語をクリックして、ハイライトや単語の意味を調べることができます"
        url="https://github.com/jesuissuyaa/tangochou"
        kw={[
          "React.js",
          "Typescript",
          "Next.js",
          "API",
          "Database",
          "scraping",
        ]}
        qiitaUrl="https://qiita.com/jesuissuyaa/items/1ab2729539f4d32cfe17"
      />
      <Card
        logo={okirouLogo}
        title="バーチャル自習室〜オキ朗〜"
        date="2018/02-2018/11"
        desc="卒業研究で開発しました。WebRTCとFirebaseで、オンラインで放送大学生が集まって勉強できる場をつくりました。"
        url="https://fireba-a8775.web.app/"
        kw={["WebRTC", "Firebase", "Database", "jQuery"]}
      />
      <Card
        logo={mamazonLogo}
        title="ママゾン（仮）"
        date="2018/03"
        desc="実家からの物資支援のストレスをなくすためのWebアプリです。「ほしいものリスト」には、自分が実家から送ってほしいものを入力し、「送れるものリスト」には、実家から送れるものを入力してもらいます"
        url="https://m-77740.web.app/"
        kw={["jQuery", "Firebase", "Database"]}
      />
      <Card
        logo={timecardLogo}
        title="タイムカード"
        date="2018/01"
        desc="シンプルな使い勝手を意識したタイムカードです。地味にダウンロードが多くてびっくりしました"
        url="https://play.google.com/store/apps/details?id=jp.gr.conf_java.oleeapps.timecard"
        kw={["Java", "Android"]}
      />
      <Card
        logo={checklistLogo}
        title="日めくりチェックリスト"
        date="2017/07"
        desc="時間指定が午前と午後しかないゆるめのTodoListです"
        url="https://play.google.com/store/apps/details?id=jp.gr.java_conf.oleeapps"
        kw={["Java", "Android"]}
      />
    </div>
    <style jsx>{`
      hr {
        border-top: 0.1rem dashed #454545;
        margin: 0 0 2rem 0;
        width: 90%;
      }
      .card-container {
        display: flex;
        flex-flow: row wrap;
      }
      @media screen and (max-width: 600px) {
        .card-container {
          flex-flow: column;
        }
      }
    `}</style>
  </div>
);

export default Works;
