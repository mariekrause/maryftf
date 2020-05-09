<template>
  <div class="index">
    <site-header></site-header>
    <b-container fluid>
      <b-row>
        <b-col class="top d-none d-lg-inline" xl="4" lg="5">
            <img id="hero_img" class="img-fluid" src="../assets/avatar.png">
        </b-col>
        <b-col class="right" xl="8" lg="7">
          <b-row>
              <div class="texts">
                <h1 id="heading">Welcome to the colourful side</h1>
                <p class="subline1">Design, Web-Entwicklung, Videoproduktion</p>
                <span id="first_impression">Hallo, mein Name ist Marie Krause und die Digitalen Medien sind meine Welt. Wenn ich nicht gerade Code schreibe,
                lebe ich mich am liebsten kreativ aus oder erkunde neue Orte - immer begleitet von meiner Kamera und endloser Neugier.
                </span>
                <span class="subline2">Wir sehen uns online!</span>
              </div>
          </b-row>
          <b-row class="post-its">
              <b-col xl="3" lg="3" md="4" sm="11" xs="11" class="post-it">
                <a href="/about">
                <p class="postitheading">Über mich</p>
                <img class="aboutmeavatar d-none d-lg-inline d-md-inline" src="../assets/aboutme.png">
                </a>
              </b-col>
              <b-col xl="3" lg="3" md="3" sm="11" xs="11" class="post-it postit2">
                <a href="/portfolio">
                <p class="postitheading">Meine Arbeit</p>
                <img class="workavatar d-none d-lg-inline" src="../assets/computer.png">
                </a>
              </b-col>
              <b-col xl="3" lg="3" md="3" sm="11" xs="11" class="post-it postit3">
                <a href="/blog">
                <p class="postitheading">Mein Blog</p>
                <img class="rocket d-none d-lg-inline" src="../assets/rocket.png">
                </a>
              </b-col>  
            </b-row>
        </b-col>  
      </b-row>  
    </b-container>
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
/* xl: */
@media (min-width: 1200px) {
  .post-its {
    padding-left: 6%;
  }
  .aboutmeavatar {
    height: auto;
    position: absolute;
    bottom: 0
  }
  .workavatar {
    max-height: 100% !important;
    position: absolute;
    right: 0;
    bottom: 0
  }
  .rocket {
    max-height: 115% !important;
    position: absolute;
    top: 1vh;
    left: 4vw;
  }
  .post-it {
    background-color: #86a9d9;
    margin: 1vw;
    height: 35vh;
    width: 33%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
}
/* lg: */
@media (min-width: 992px) {
  .post-its {
    padding-left: 6% !important
  }
  .aboutmeavatar {
   max-height: 100%;
   position: absolute;
   bottom: 0;
   right: 0
  }
  .workavatar {
    max-height: 70%;
    position: absolute;
    right: 0;
    bottom: 0
  }
  .rocket {
    max-height: 85%;
    position: absolute;
    bottom: -2vw;
    left: 4vw;
  } 
  .post-it {
    height: 30vh !important;
  }
  .post-its {
    padding-left: 0 !important;
  }
  #heading {
    font-size: 5vw !important;
    margin-left: 0 !important
  }

  .subline1 {
    margin-left: 0 !important
  }
  .subline2 {
    margin-left: 0 !important
  }
  #first_impression {
    margin-left: 0 !important
  }
}
/* md: */
@media (min-width: 768px) {
  .post-its {
    padding-left: 4%;
  }
  #heading {
    font-size: 5vw;
  }
}

@media (max-width: 1200px) {
  .rocket {
    display: none
  }
}

@media (max-width: 768px) {
  #hero_img {
    display: none
  }
  .post-it {
    height: 10vh !important;
    width: 90% !important;
  }
  .post-its {
    padding-left: 5%;
    padding-bottom: 5%
  }
  .postitheading {
    writing-mode: horizontal-tb !important;
    position: absolute;
    left: 20px !important;
    position: absolute;
    top: 20% !important;
  }
  #heading {
    margin-top: 2vh !important
  }
}

  .index {
    overflow-y: hidden;
  } 
  .postit2 {
    position: relative;
  }
  .postit3 {
    position: relative;
  }
  #hero_img {
    height: auto;

  }
  .texts {
    display: flex;
    flex-direction: column;
  }
  .top {
    background-color: white;
    height: 80vh;
  }
  .post-it {
    background-color: #86a9d9;
    margin: 1vw;
    height: 35vh;
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
    font-size: 8vw;
    white-space: nowrap;
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
    margin: 0 8vw 0 5vw;
    line-height: 1.5;
  }
  .postitheading {
    writing-mode: vertical-lr;
    font-family: "Bebasneue-Regular";
    font-size: 40px;
    color: white;
    position: absolute;
    top: 3vh;
    left: -5vh;
  }
  .aboutmeavatar {
    width: 80%;
    overflow: none;
    position: absolute;
    bottom: 0
  }
</style>
