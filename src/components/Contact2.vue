<template>
    <div class="index">
        <site-header></site-header>
        <b-container fluid>
            <b-row class="top">
                <b-col>
                    <h1 id="heading">Kontaktiere mich!</h1>
                    <p class="subline1">Hier gibt es mehr von mir und über mich:</p>
                </b-col>
            </b-row>
            <b-row class="bottom">
                <b-col class="box" id="box1" lg="3" xl="3">
                    <a href="https://www.instagram.com/maryftf" traget="_blank">
                        <p class="postitheading">
                        <i class="fab fa-instagram"></i>
                            Instagram
                        </p>
                        <p class="caption">
                            Auf Instagram findet Ihr die aktuellsten Updates aus meinem Leben. Alles, was mit
                             Design, Fotografie oder meinen Reisen zu tun hat, findet den Weg auf meine Seite.
                        </p>
                    </a>
                </b-col>
                 <b-col class="box" id="box2" lg="4" xl="4">
                    <a href="https://www.youtube.com/channel/UCOjtuEkb__FaJWVuO7VnShQ?view_as=subscriber" target="_blank">
                    <p class="postitheading_alt">
                        <i class="fab fa-youtube"></i>
                            YouTube
                    </p>
                    <iframe
                        id="momentsapart"
                        class="sm_hide"
                        src="https://www.youtube.com/embed/Pe0PIMb_Jxo"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <p class="caption">
                        Mein Video-Tagebuch. Ein Klick auf diese Karte bringt Euch zu
                        meinem Kanal auf YouTube
                        <span class="sm_hide"> oder ihr schaut Euch direkt hier meinen letzten Jahresrückblick an
                        </span>
                    </p>
                </a>
                </b-col>
                <b-col id="bottom_right" sm="12" lg="4" xl="4">
                 <b-row class="box" id="box3">
                    <a href="https://www.linkedin.com/in/mariekr/">
                    <p class="postitheading_alt">
                        <i class="fab fa-linkedin"></i>
                            LinkedIn
                    </p>
                    <p class="caption linkedin">Für alles rund um Arbeit & Business:<br>
                        Werde Teil meines Netzwerks!</p>
                    <!-- <img class="profilebanner" src="../assets/avatar_profile_banner.jpg"> -->
                    </a>
                </b-row>
                <b-row class="box" id="box4">
                    <a href="mailto:marie.krause48@web.de">
                        <p class="postitheading_alt">
                         E-Mail
                        </p>
                        <p class="caption mail">
                            Direkte Anfrage? Kein Problem!<br> Kontaktiere mich gern unter<br> mail@mariekrause.de.
                            <br>Tipp: ein Klick auf dieses Kästchen genügt :)
                        </p>
                    </a>
                </b-row>
                </b-col>
            </b-row>
        </b-container>
        <custom-footer id="footer"></custom-footer>
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
    /* sm abwärts */
    @media (max-width: 991px) {
        #bottom_right {
            padding: 0
        }
        .postitheading {
            writing-mode: horizontal-tb !important;
            margin: 0 1vw !important
        }
        .sm_hide {
            display: none
        }
        #heading {
            margin-top: 5% !important
        }
    }

    #heading {
        font-family: "Bebasneue-Regular";
        font-size: 50px;
        margin-top: 7vh;
        margin-bottom: 0;
        margin-left: 5vw;

    }
    .subline1 {
        margin-left: 5vw;
        margin-top: 1vh;
        font-weight: bold;
        font-size: 20px;
    }
    .bottom {
        margin: 0 4vw
    }
    .box {
        border: 2px solid #86a9d9;
        margin: 1vw;
        padding-left: 1vw;
    }
    a {
        text-decoration: none;
        color: #86a9d9;
    }
    a:hover {
        color: #333;
        transition: 0.5s;
    }
    .postitheading {
        writing-mode: vertical-lr;
        font-family: "Bebasneue-Regular";
        font-size: 40px;
        margin: 2vh 0;
        color: #86a9d9;
    }
    .postitheading_alt {
        font-family: "Bebasneue-Regular";
        font-size: 40px;
        margin: 0 2vh;
        color: #86a9d9;        
}
    .caption {
        color: black;
        line-height: 1.5;
        padding-left: 1vw;
        padding-right: 1vw;
    }
    .profilebanner {
        width: 82%;
        position: absolute;
        right: 1vw;
        bottom: 1vw
    }
    #momentsapart {
        width: 90%;
        height: auto;
        padding-left: 5%;
    }
    #box3  {
        margin-bottom: 2vh
    }
    #box4 {
        margin-bottom: 12vh
    }
</style>