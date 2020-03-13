<template>
  <div class="index">
    <site-header></site-header>
    <content>
      <div class="top">
        <span class="top-left">
          <img id="hero_img" src="../assets/avatar.png">
        </span>
        <span class="top-right">
          <div class="texts">
            <h1 id="heading">Welcome to the colourful side</h1>
            <p class="subline1">Design, Web-Entwicklung, Videoproduktion</p>
            <!-- <p class="subline2">Visual Thinker, Creative Mind</p> -->
            <span id="first_impression">Hallo, mein Name ist Marie Krause und die Digitalen Medien sind meine Welt. Wenn ich nicht gerade Code schreibe,
            lebe ich mich am liebsten kreativ aus oder erkunde neue Orte - immer begleitet von meiner Kamera und endloser Neugier.
            </span>
            <span class="subline2">Wir sehen uns online!</span>
          </div>
          <div class="post-its">
            <div class="post-it">
              <a href="/about">
              <p class="postitheading">Über mich</p>
              <img class="aboutmeavatar" src="../assets/aboutme.png">
              </a>
            </div>
            <div class="post-it postit2">
              <a href="/portfolio">
              <p class="postitheading">Meine Arbeit</p>
              <img class="workavatar" src="../assets/computer.png">
              </a>
            </div>
            <div class="post-it postit3">
              <a href="/blog">
              <p class="postitheading">Mein Blog</p>
              <img class="rocket" src="../assets/rocket.png">
              </a>
            </div>
        </div>
        </span>
      </div>
    </content>
    <footer>
      <a href="https://www.linkedin.com/in/mariekr/" target="_blank">
        <i class="fab fa-linkedin footericon"></i>
      </a>
      <a href="https://www.instagram.com/maryftf" target="_blank">
        <i class="fab fa-instagram footericon"></i>
      </a>
      <a href="mailto:marie.krause48@web.de">
        <i class="far fa-envelope footericon"></i>
      </a>
      <a href="https://www.youtube.com/marytheidiot1" target="_blank">
        <i class="fab fa-youtube footericon"></i>
      </a>
      <p class="footertext">Marie Krause &copy; 2020</p>
    </footer>
  </div>
</template>

<script>
import SiteHeader from './SiteHeader'
export default {
  name: 'Index',
  components: {SiteHeader},
  props: {
    msg: String
  }
}
</script>

<style scoped>
  footer {
    background-color: #86a9d9;
    color: white;
    text-align: center;
    height: 8vh;
  }
  a {
      text-decoration: none;
      color: inherit
  } 
  .footericon {
    margin: 1vh 1vh 0;
  }
  .footertext {
    margin: 1vh 0;
    display: flex;
    align-content: baseline;
    justify-content: center;
  }
  .aboutmeavatar {
    max-height: 100%
  }
  .postit2 {
    position: relative;
  }
  .workavatar {
    max-height: 100%;
    position: absolute;
    right: 0
  }
  .rocket {
    max-height: 115%;
    position: absolute;
    top: 1vh;
    left: 4vw;
  }
  .postit3 {
    position: relative;
  }
  #hero_img {
    height: 40vw;

  }
  .texts {
    display: flex;
    flex-direction: column;
  }
  .index {
    display: flex;
    flex-direction: column;
  }
  .top {
    background-color: white;
    display: flex;
    flex-direction: row;
    height: 80vh;
  }
  .top-right {
    display: flex;
    flex-direction: column;
  }
  .post-its {
    display: flex;
    flex-direction: row;
    margin-left: 4vw;
    margin-top: 1vh;
    margin-right: 5vw;
  }
  .post-it {
    background-color: #86a9d9;
    margin: 1vw;
    flex-grow: 1;
    height: 35vh;
    width: 33%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .post-it:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    transition: .4s

  }
  #heading {
    margin-left: 5vw;
    margin-top: 5vh;
    margin-bottom: 0;
    font-family: 'Bebasneue-Regular';
    font-size: 50px;
  }
  .subline1 {
    margin-left: 5vw;
    margin-top: 1vh;
    font-weight: bold;
    font-size: 20px;

  }
  .subline2 {
    margin-left: 5vw;
    margin-top: 2vh;
    font-weight: bold;
    font-size: 20px;
  }
  #first_impression {
    margin: 0 5vw;
    line-height: 1.5;
  }
  .postitheading {
    writing-mode: vertical-lr;
    font-family: "Bebasneue-Regular";
    font-size: 40px;
    margin: 2vh 1vh;
    color: white;
    position: absolute;
  }
  .demo{
  width:400px;
  height:400px;
  font-size:5em;
  float:left;
  text-align:center;
}

.rainbow-bg{
		animation: rainbow-bg 2.5s linear;
		animation-iteration-count: infinite;
}

.rainbow{
		animation: rainbow 2.5s linear;
		animation-iteration-count: infinite;
}

@keyframes rainbow-bg{
		100%,0%{
			background-color: rgb(255,0,0);
		}
		8%{
			background-color: rgb(255,127,0);
		}
		16%{
			background-color: rgb(255,255,0);
		}
		25%{
			background-color: rgb(127,255,0);
		}
		33%{
			background-color: rgb(0,255,0);
		}
		41%{
			background-color: rgb(0,255,127);
		}
		50%{
			background-color: rgb(0,255,255);
		}
		58%{
			background-color: rgb(0,127,255);
		}
		66%{
			background-color: rgb(0,0,255);
		}
		75%{
			background-color: rgb(127,0,255);
		}
		83%{
			background-color: rgb(255,0,255);
		}
		91%{
			background-color: rgb(255,0,127);
		}
}

@keyframes rainbow{
		100%,0%{
			color: rgb(255,0,0);
		}
		8%{
			color: rgb(255,127,0);
		}
		16%{
			color: rgb(255,255,0);
		}
		25%{
			color: rgb(127,255,0);
		}
		33%{
			color: rgb(0,255,0);
		}
		41%{
			color: rgb(0,255,127);
		}
		50%{
			color: rgb(0,255,255);
		}
		58%{
			color: rgb(0,127,255);
		}
		66%{
			color: rgb(0,0,255);
		}
		75%{
			color: rgb(127,0,255);
		}
		83%{
			color: rgb(255,0,255);
		}
		91%{
			color: rgb(255,0,127);
		}
}
</style>
