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
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import SiteHeader from './SiteHeader'
import customFooter from './customFooter'
export default {
  name: 'Index',
  components: {
    SiteHeader, 
    customFooter
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
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
</style>
