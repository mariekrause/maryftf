<template>
  <div class="contact">
    <site-header></site-header>
    <div class="content">
      <h1 id="heading">Kontaktiere mich!</h1>
      <p class="subline1">Hier gibt es mehr von mir und über mich:</p>
      <div class="post-its">
        <div class="post-it postit1">
          <a href="https://www.instagram.com/maryftf" traget="_blank">
            <p class="postitheading">
              <i class="fab fa-instagram"></i>
              Instagram
            </p>
            <div class="posts">
              <img class="insta-post" src="../assets/instagram/9.png" />
              <img class="insta-post" src="../assets/instagram/8.png" />
              <img class="insta-post" src="../assets/instagram/7.png" />
              <img class="insta-post" src="../assets/instagram/6.png" />
              <img class="insta-post" src="../assets/instagram/3.png" />
              <img class="insta-post" src="../assets/instagram/1.png" />
            </div>
            <p class="caption">
              Auf Instagram findet Ihr die aktuellsten Updates aus meinem Leben. Alles, was mit
              Design, Fotografie oder meinen Reisen zu tun hat, findet den Weg auf meine Seite.
            </p>
          </a>
        </div>
        <div class="post-it postit2">
          <a href="https://www.youtube.com/channel/UCOjtuEkb__FaJWVuO7VnShQ?view_as=subscriber" target="_blank">
            <p class="postitheading_alt">
              <i class="fab fa-youtube"></i>
              YouTube
            </p>
            <iframe
              id="momentsapart"
              src="https://www.youtube.com/embed/Pe0PIMb_Jxo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p class="caption">
              Mein Video-Tagebuch. Ein Klick auf diese Karte bringt Euch zu
              meinem Kanal oder ihr schaut Euch direkt hier meinen Jahresrückblick an.
            </p>
          </a>
        </div>
        <div class="container">
        <div class="post-it postit3">
          <a href="https://www.linkedin.com/in/mariekr/">
            <p class="postitheading">
              <i class="fab fa-linkedin"></i>
              LinkedIn
            </p>
            <p class="caption linkedin">Für alles rund um Arbeit & Business:<br>
            Werde Teil meines Netzwerks!</p>
            <img class="profilebanner" src="../assets/avatar_profile_banner.jpg">
          </a>
        </div>
        <div class="post-it postit4">
            <a href="mailto:marie.krause48@web.de">
            <p class="postitheading">
              E-Mail
            </p>
            <p class="caption mail">
                Direkte Anfrage? Kein Problem!<br> Kontaktiere mich gern unter<br> mail@mariekrause.de.
                <br>Tipp: ein Klick auf dieses Kästchen genügt :)
            </p>
            </a>
        </div>
        </div>
      </div>
    </div>
    <custom-footer id="bottom"></custom-footer>
  </div>
</template>

<script>
import SiteHeader from "./SiteHeader";
import customFooter from "./customFooter";
export default {
  name: "contact",
  components: {
    SiteHeader,
    customFooter
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #86a9d9;
}
a:hover {
  color: #333;
  transition: 0.5s;
}
.content {
  height: 73vh;
  margin-left: 5vw;
}
#heading {
  font-family: "Bebasneue-Regular";
  font-size: 50px;
  margin-top: 7vh;
  margin-bottom: 0;
}
.post-its {
  display: flex;
  flex-direction: row;
  margin-left: -1vw;
  margin-top: 1vh;
  margin-right: 5vw;
}
.post-it {
  background-color: #86a9d9;
  margin: 1vw;
  height: 35vh;
  width: 33%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.container {
    display: flex;
    flex-direction: column;

}
.post-it:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.4s;
}
.postit1 {
  width: 40%;
  height: 50vh;
}
.postit2 {
  height: 50vh;
  width: 50%
}
.postit3 {
  height: 27vh;
  width: 30vw;
  position: relative;
}
.postit4 {
  height: 19vh;
  width: 30vw;
  position: relative;
}
.linkedin {
    margin-left: 3.3vw;
}
.postitheading {
  writing-mode: vertical-lr;
  font-family: "Bebasneue-Regular";
  font-size: 40px;
  margin: 2vh 1vh;
  color: white;
  position: absolute;
}
.postitheading_alt {
  font-family: "Bebasneue-Regular";
  font-size: 40px;
  margin: 2vh 2vh;
  color: white;
  position: absolute;
}
.posts {
  margin-left: 4vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
}
.insta-post {
  width: 30%;
  padding: 2px;
}
.caption {
  color: white;
  line-height: 1.5;
  padding-left: 1vw;
  padding-right: 1vw;
}
.mail {
  margin-left: 4vw;
}
#momentsapart {
  width: 90%;
  height: 52%;
  padding-top: 10vh;
  padding-left: 5%;
}
.profilebanner {
    width: 82%;
    position: absolute;
    right: 1vw;
    bottom: 1vw
}
</style>