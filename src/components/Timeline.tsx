import React from 'react';
import Books from './svg/Books';
import Briefcase from './svg/Briefcase';
import Star from './svg/Star';

interface BlockProp {
  date: string
  isLeft: boolean
  icon: 'school' | 'work' | 'skill'
  title: string
}
const Block: React.FC<BlockProp> = props => (
  <div className="block">
    <div className="text">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
    <div className="arrow"></div>
    <div className="point">
      {props.icon === 'school' ? <Books /> : props.icon === 'work' ? <Briefcase /> : <Star />}
    </div>
    <div className="date">{props.date}</div> 
    <style jsx>{`
    h2 {
      font-size: 1rem;
      margin: 0;
    }
    p {
      margin: 0.5rem 0 0 0;
    }
    p:empty {
      display: none;
    }
    .arrow {
      width: 0;
      height: 0;
      border-top: .5rem solid transparent;
      border-bottom: .5rem solid transparent;
      ${props.isLeft ? 'border-left' : 'border-right'}: .5rem solid #B5BD89;
      margin-top: 1rem;
    }
    .block {
      display: flex;
      flex-direction: ${props.isLeft ? 'row' : 'row-reverse'};
      width: 100%;
      margin-bottom: 2rem;
      position: relative;
    }
    
    .date {
      ${props.isLeft ? 'margin-left' : 'margin-right'} : 10%;
      padding-top: 1rem;
    }
    .point {
      background-color: ${props.icon === 'school' ? '#FE9C9B' : props.icon === 'work' ? '#5cc1d1' : '#fed766'};
      box-sizing: border-box;
      padding: .5rem;
      position: absolute; 
      left: 50%;
      margin-left: -1.5rem;
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      border: 1px solid #454545;
    }
    .text {
      background-color:#B5BD89;
      border-radius: 1rem;
      color: #fafdf6;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 2rem;
      padding: .5rem 1rem;
      width: 40%;
    }        
    `}</style>
    </div>
)
const Timeline: React.FC = () => (
  <div id="timeline">
    <h1>TIMELINE</h1>
    <div className="legend-container">
      <div className="legend-item">
        <div className="icon bg-red"><Books /></div>
        学歴
      </div>
      <div className="legend-item">
        <div className="icon bg-blue"><Briefcase /></div>
        職歴 (抜粋)
      </div>
      <div className="legend-item">
        <div className="icon bg-yellow"><Star /></div>
        資格・課外活動
      </div>
    </div>
    <div className="timeline">
      <Block icon = 'work' isLeft={false} title="株式会社 レッドインパルス" date="2019/08">
        React+Typescriptを使ったフロントエンド業務のインターンをしています。自分がチームで開発することが好きだと気づきました。
      </Block>

      <Block icon='school' isLeft={true} title="電気通信大学大学院 入学" date="2019/04">
        学校に通うことに慣れるまで、課題・進捗報告のタスク管理や、時間割を覚えることが大変でした。今では友達も増えて大学が楽しいです。
      </Block>
      
      <Block icon='school' isLeft={true} title="放送大学 卒業" date="2019/03">
        卒論では、「バーチャル自習室」というWebアプリケーションの開発研究をしました。放送大学生がオンラインで集まって勉強できるための場で、SkyWay WebRTC API と Firebaseを用いて実装しました。設計をもっとしっかりしておけば良かったと反省しました。
      </Block>

      <Block icon='skill' isLeft={false} title="TOEIC 990点" date="2018/05"></Block>

      <Block icon='skill' isLeft={false} title="PHP技術者認定初級試験" date="2017/12"></Block>

      <Block icon='skill' isLeft={false} title="IBMメインフレーム・コンテスト 2017 優秀賞" date="2017/9"></Block>

      <Block icon='skill' isLeft={false} title="Java Bronze SE 7/8" date="2017/3"></Block>

      <Block icon='work' isLeft={false} title="株式会社 栗原医療器械店" date="2016/05-2017/04">
        派遣社員として事務の仕事をフルタイムでしていました。放送大学の勉強との両立が大変でしたが、同僚や上司の方に恵まれていて充実した1年を過ごしました。<br />
        業務内容は、配送スケジュールの管理、お客様へのアポイント電話、書類作成、会議での業務改善発案でした。
      </Block>

      <Block icon='school' isLeft={true} title="放送大学 開始" date="2016/04">
        学籍自体は2014/10から置いていましたが、実際に放送大学で学び始めたのはこのときからです。
      </Block>

      <Block icon='school' isLeft={true} title="国立音楽大学" date="2015/04-2016/03">
        ピアノ科に入学しましたが、家庭の事情により1年で中退しました。ガムランはこの大学のサークルで知り、今でも自分の趣味として続けています。
      </Block>

      <Block icon='school' isLeft={true} title="東京工業大学 (科目等履修生)" date="2014/04-2014/09">
        勉強を続けたかったので、科目等履修生として東京工業大学に通いました。主に電気系の勉強をしていました。今も仲良くしているバイク友達とはここで出会いました。
      </Block>

      <Block icon='school' isLeft={true} title="Mount Allison University" date="2013/04-2014/4">
        カナダの大学に正規生として入学しましたが、気候が合わなかったため帰国しました。SAT(北米のセンター試験のようなもの)対策に苦労した記憶があります。
      </Block>

      <Block icon='school' isLeft={true} title="高等学校卒業程度認定試験" date="2013/08">
        高校は2年生のときに中退したため、高認をとりました。
      </Block>
      <div className="start"></div> 
    </div>
    <style jsx>{`
    .bg-blue {
      background-color: #5cc1d1;
    }
    .bg-red {
      background-color: #FE9C9B;
    }
    .bg-yellow {
      background-color: #fed766;
    }
    .legend-container {
      display: flex;
      margin-bottom: 2rem;
    }
    .legend-item {
      align-items: center;
      display: flex;
      margin-right: 2rem;
    }
    .icon {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      border: 1px solid #454545;
      box-sizing: border-box;
      margin-right: 1rem;
      padding: .3rem;
    }
    .timeline {
      position: relative;
    } 
    /* vertical line */
    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -.25rem;
      height: 100%;
      width: .5rem;
      background-color: #454545;
    }
    .start {
      background-color: #454545;
      border-radius: 50%;
      height: 1rem;
      left: 50%;
      margin-left: -.5rem;
      margin-top: -2.1rem; /* account for margin-bottom of last .block element */
      position: absolute;
      width: 1rem;
    }
    `}</style>
  </div>
)

export default Timeline;