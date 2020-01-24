import * as React from "react";

const Videos: React.FC = () => {
  return (
    <div id="videos">
      <h1>Videos</h1>
      <h2>ダンボールロボットシリーズ</h2>
      <span>#RaspberryPi #React.js #DoraScript</span>
      <section>
        <p>
          学校の授業で使ったダンボールロボット関連のアプリケーションです。
          <br />
          ダンボールロボットの詳細:{" "}
          <a href="https://github.com/yamagame/dora">
            https://github.com/yamagame/dora
          </a>
          <br />
        </p>
        <h3>音楽おすすめロボット</h3>
        <p>
          ロボットがユーザに今の気分や好きな絵を聞きます。ユーザの回答に応じて、ロボットがおすすめの音楽を流しくれます。
        </p>
        <iframe
          className="video"
          title="music-with-mood-bot"
          src="https://drive.google.com/file/d/1Cif3RMpgC5gPJ6UbYHoNV28U1Q7fPTHt/preview"
        />
        <h3>面接ロボット</h3>
        <p>
          就活が嫌になってつくりました。一緒に面接の練習をしてくれるロボットは、どんな回答をしても内定をくれます。
        </p>
        <iframe
          className="video"
          title="interview-bot"
          src="https://drive.google.com/file/d/1autrzfHY0YnOW4LI1AJ3UOD5PGS1jMSu/preview"
        />
        <h3>挨拶ロボット</h3>
        <p>
          職場や研究室での挨拶をうながすロボットです。ロボットの「はわーゆー？」という質問に答えると、答えを音声認識してSlackの特定のワークスペースに投げてくれます。
        </p>
        <iframe
          className="video"
          title="hello-bot"
          src="https://drive.google.com/file/d/1DLRtubwhSvtgBFbkRpvFE8RJ_DPZsgEq/preview"
        />
      </section>
      <h2>music visualizer</h2>
      <span>#SpotifyAPI #React.js</span>
      <section>
        <p>
          曲の色と構造を可視化する試みです。Spotify
          APIから取得したデータを用いてビジュアライザーをつくりました。曲の雰囲気にあわせた色づかいにしました。
        </p>
        <h3>
          <a href="https://open.spotify.com/track/1YCXVdUCVqbwr6DSrX01vr?si=Csf3ioxcRQWBIF6s9zt7Mw">
            Pixel Party - Vexento
          </a>
        </h3>
        <iframe
          className="video"
          title="pixel-party"
          src="https://drive.google.com/file/d/1k0JZyZkWEoq9rMz363uWN6mfsCN3iTCe/preview"
        />
        <h3>
          <a href="https://open.spotify.com/track/1TWfkGrhF7ob0nwB2M6knb?si=ZuFHQyVJRyyXxQnjB3rCQg">
            Animals - Martin Garrix
          </a>
        </h3>
        <iframe
          className="video"
          title="animals"
          src="https://drive.google.com/file/d/14sdH-knVWKzASw04gMXO2TsnA0fpcRAX/preview"
        />
        <h3>
          <a href="https://open.spotify.com/track/74zLQouoZ0wIj9Yr1x9Ayi?si=dsQJn2FwSHGuZPRTV265QQ">
            Suite Bergamasque I: Prélude - Claude Debussy
          </a>
        </h3>
        <iframe
          className="video"
          title="bergamasque-prelude"
          src="https://drive.google.com/file/d/1dV_A171-0QdfKGYssdRweUtDzcFhtUd9/preview"
        />
      </section>
      <style jsx>{`
        h3 {
          margin-top: 3rem;
          margin-bottom: 0;
        }
        span {
          font-weight: bold;
        }
        .videos {
          line-height: 1;
        }
        .video {
          width: 40vw;
          height: calc(40vw / 1920 * 1080);
        }
        @media screen and (max-width: 600px) {
          .video {
            width: 80vw;
            height: calc(80vw / 1920 * 1080);
          }
        }
      `}</style>
    </div>
  );
};

export default Videos;
