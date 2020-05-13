<template>
  <div class="index">
    <site-header></site-header>
    <b-container fluid id="wrapper">
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
    <img id="colouravatar" class="d-none d-sm-inline d-md-none" src="../assets/avatar_profile.png">

    <custom-footer id="footer"></custom-footer>
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
  .workavatar {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .post-it {
    background-color: #86a9d9;
    margin: 1vw;
    height: 35vh;
    width: 33%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  #first_impression {
    padding-right: 15%
  }
}
/* lg and up */
@media (min-width: 992px) {
  .post-its {
    padding-left: 6% !important
  }
  .aboutmeavatar {
   max-height: 100%;
   height: auto;
   width: 100%;
   position: absolute;
   bottom: 0;
   right: 0
  }
  .workavatar {
   max-height: 100%;
   height: auto;
   width: 90%;
   position: absolute;
   bottom: 0;
   right: 0
  }
  .rocket {
   max-height: 100%;
   height: auto;
   width: 65%;
   position: absolute;
   bottom: -5%;
   right: -5%
  } 
  .post-its {
    padding-left: 0 !important;
  }
  #heading {
    font-size: 3em !important;
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
/* md and up */
@media (min-width: 768px) {
  .post-its {
    padding-left: 4%;
  }
  #heading {
    font-size: 5vw;
  }
}
/* lg and down */
@media (max-width: 1200px) {
  .rocket {
    display: none
  }
}
/* md and down */
@media (max-width: 991px) {
  .aboutmeavatar {
    max-height: 100%;
    position: absolute;
    right: 0
  }
}
/* sm and down */
@media (max-width: 767px) {
  #hero_img {
    display: none
  }
  .post-its {
    padding-left: 4% !important;
  }
  .post-it {
    height: 10vh !important;
    width: 90% !important;
  }
  .post-its {
    padding-left: 5%;
    padding-top: 2%;
    padding-bottom: 5%
  }
  .postitheading {
    writing-mode: horizontal-tb !important;
    position: absolute;
    left: 5% !important;
    position: absolute;
    top: 20% !important;
  }
  #heading {
    margin-top: 2vh !important;
    font-size: 8vw !important
  }
}

  #wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    max-width: 1500px;
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
    max-height: 95%;
    padding-top: 1em
  }
  .texts {
    display: flex;
    flex-direction: column;
  }
  .top {
    background-color: white;
    
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
  .post-its {
    margin-left: -2vw
  }
  #heading {
    margin-left: 5vw;
    margin-top: 4%;
    margin-bottom: 0;
    font-family: 'Bebasneue-Regular';
    font-size: 3em;
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
    font-size: 2.5em;
    color: white;
    position: absolute;
    top: 8%;
    left: -3vw;
  }
  .aboutmeavatar {
    overflow: none;
    position: absolute;
    bottom: 0
  }
  #colouravatar {
    width: 45%;
    height: auto;
    position: absolute;
    bottom: 8%;
    right: 0;
    z-index: 49
  }
  #footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 50
  }
</style>
