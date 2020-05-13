<template>
    <div class="aboutme">
        <site-header></site-header>
        <b-container fluid id="wrapper">
        <b-col> 
          <b-row>
            <b-col xs="11" md="11" lg="7" xl="7">
              <div class="content-right">
                <h1 id="heading">Willkommen in meiner Welt.</h1>
                <p class="subline1">Die Kurzfassung:</p>
                <span id="first_impression">Mein Name ist <strong>Marie Krause</strong>, ich bin 20 Jahre alt und studiere im 4. Semester 
                <strong>Digitale Medien an der DHBW Mannheim</strong>. Und zwar Dual - das heißt, ich kenne mich nicht nur mit der Theorie aus, sondern sammle parallel 
                auch Erfahrungen im praktischen Unternehmensumfeld.
                </span>
                <p class="line">Mein Studium gibt mir eine Bandbreite an Wissensgebieten mit auf den Weg - <strong>Wirtschaft, Informatik und Gestaltung</strong>.
                Doch nichts kann meinen Willen ersetzen, ständig Neues zu lernen. Offenheit, grenzenlose Neugier und meine Begeisterung für
                neues Wissen machen mich aus.
                </p>
                <p class="line">In meiner Freizeit bin ich für mein Leben gern unterwegs - Deutschland, Europa, weltweit - am liebsten mit dem Zug. Alles über meine
                Abenteuer erfahrt Ihr <a href="https://www.instagram.com/maryftf" target=_blank>auf Instagram</a> oder <a href="/blog">auf meinem Blog</a>.
                </p>
                <p class="subline1">Willst du mehr erfahren? Dann kontaktiere mich doch <a href="/contact">hier</a>.</p>
              </div>
            </b-col>
            <b-col class="d-none d-lg-inline">
              <img id="keyvisual" src="../assets/avatar_skills.png" lg="4" xl="4">
            </b-col>
          </b-row>
          <b-row class="smallonly d-lg-none d-md-inline d-xs-inline">
            <img id="keyvisual2" src="../assets/avatar_skills.png">
          </b-row>
        </b-col>
        </b-container>
        <custom-footer id="bottom"></custom-footer>
    </div>
</template>

<script>
import SiteHeader from './SiteHeader'
import customFooter from './customFooter'
export default {
  name: 'aboutme',
  components: {
    SiteHeader,
    customFooter
    },
  data () {
    return {
    }
  },
  methods: {
    },
  created () {
  }
  }
</script>

<style scoped>
@media (max-width: 450px) {
  #heading {
      margin-top: 8% !important
  }
}
  a {
    text-decoration: none;
    color: #86a9d9;
  }
  a:hover { 
  color: #333;
  transition: .5s;
  }
  .line {
    margin-top: 0
  }
  #bottom {
    position: fixed;
    bottom: 0;
    width: 100%
  }
  #first_impression {
    padding-bottom: 2vh;
  }
  .subline1 {
    font-weight: bold;
    font-size: 20px;
    margin-top: 0
  }
  .content-right {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
  }
  #heading {
    font-family: 'Bebasneue-Regular';
    font-size: 50px;
    margin-top: 7vh;
    margin-bottom: 0
  }
  #keyvisual {
    width: 100%;
    height: auto;
    position: absolute;
    right: 1vw;
    bottom: 0
  }
  #keyvisual2 {
    width: 90vw;
    height: auto;
    position: inherit;
    margin-bottom: 10%
  }
  #wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    max-width: 1200px;
  }
  .smallonly {
    align-items: flex-start;
  }
</style>