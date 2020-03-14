<template>
    <div class="aboutme">
        <site-header></site-header>
        <div class="content">
          <img id="keyvisual" src="../assets/avatar_skills.png">
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
        </div>
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
  .aboutme {
    position: relative;
    height: 100vh;
  }
  #bottom {
    position: fixed;
    bottom: 0;
    width: 100%
  }
  .content {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 80vh
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
    margin-right: 50vw;
    margin-left: 5vw;
    line-height: 1.5;
  }
  #heading {
    font-family: 'Bebasneue-Regular';
    font-size: 50px;
    margin-top: 7vh;
    margin-bottom: 0
  }
  #keyvisual {
    max-height: 70vh;
    padding-left: 5vw;
    padding-top: 10vh;
    position: absolute;
    right: 1vw;
    bottom: 0
  }
</style>