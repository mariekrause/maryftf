<template>
    <div class="notfound">
        <site-header></site-header>
        <div class="content">
          <img id="keyvisual" src="../assets/avatar_404.png">
          <div class="content-right">
          <h1 id="heading">Ups! Da ist etwas schiefgegangen</h1>
            <p class="subline1">Error 404</p>
            <span id="first_impression">Für alle Nicht-Nerds: Das bedeutet, Du hast in eine Schublade geschaut,
              in der leider nichts drin war. Probier es doch einfach noch einmal!
            </span>
            <p>Aber damit Du den ganzen Weg hierher nicht umsonst gesucht hast - hier ist ein zufälliger Fakt über Katzen:</p>
            <p id="kittyfact">{{kittyfact}}</p>
            <img id="kittycat" src="../assets/cat.png">
            <p id="credit">powered by catfact.ninja - a divine API for all my cat needs</p>
          </div>
        </div>
        <custom-footer id="bottom"></custom-footer>
    </div>
</template>

<script>
import SiteHeader from './SiteHeader'
import customFooter from './customFooter'
import axios from 'axios'
export default {
  name: 'notfound',
  components: {
    SiteHeader,
    customFooter
    },
  data () {
    return {
      kittyfact: ''
    }
  },
  methods: {
    getTheCat () {
      axios
        .get('https://catfact.ninja/fact')
        .then((response) => {
          this.kittyfact= response.data.fact
        })
        .catch()
    }
    },
  created () {
    this.getTheCat()
  }
  }
</script>

<style scoped>
  #bottom {
    position: fixed;
    bottom: 0;
    width: 100%
  }
  #kittycat {
    width: 10%;
    position: absolute;
    right: 8vw;
    bottom: 17vh;
  }
  #credit {
    font-size: 10px;
    margin: 0;
    padding-left: 0.7vw;
  }
  .content {
    display: flex;
    flex-direction: row;
  }
  #first_impression {
    padding-bottom: 2vh;
  }
  .subline1 {
    font-weight: bold;
  }
  .content-right {
    display: flex;
    flex-direction: column;
    margin-right: 20vw;
    line-height: 1.5;
  }
  #heading {
    font-family: 'Bebasneue-Regular';
    margin-top: 12vh;
    margin-bottom: 0
  }
  #kittyfact {
    background-color: #86a9d9;
    padding: 2vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    color: white
  }
  #keyvisual {
    max-height: 70vh;
    padding-left: 5vw;
    padding-top: 10vh;
  }
</style>