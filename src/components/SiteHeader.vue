<template>
    <div class="header">
        <div class="headerleft">
            <img id="logo_header" src="../assets/logo.png">
        </div>
        <div class="headerright">
            <navbar id="nav"></navbar>
            <img id="marker" src="../assets/marker.svg">
        </div>   
    </div>
</template>

<script>
    export default {
      name: 'SiteHeader'
    }
</script>

<style scoped>
@media (max-width: 1200px) {
    #marker {
        display: none;
    }
}
@media (max-width: 830px) {
    #nav {
        display: none;
    }
}
@media (max-width: 768px) {
    #logo_header {
        overflow: none;
    }
    .headerleft {
        width: 90% !important;
        display: flex;
    }
    .headerright {
        display: none !important;
    }
}

#logo_header {
    height: 10vh;
    padding-left: 0.5vw;
}
h1 {
    font-family: Taviraj-Italic;
    display: inline;
}
a {
    text-decoration: none;
    border: 1px solid white;
    padding: 1.5%;
    color: white;
    display: flex;
    flex-direction: column;
    font-family: "Merriweather-Sans-Regular";
    }
#marker {
    width: 12%;
    filter: drop-shadow(3px 3px 7px rgba(0,0,0,0.2));
    position: absolute;
    right: 1vw;
    top: -5vw;
    display: none 
    /*MARKER AUSBLENDEN */
}
.header {
    display: flex;
    flex-direction: row;
    background-color: #86a9d9;
    align-items: center;
    height: 12vh;
/*     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 */    }
.headerleft {
    display: inline;
    overflow: none;
    width: 70vw;
}
.headerright {
    display: flex;
    width: 44vw;
    justify-content: space-evenly;
    align-content: center;
    position: relative
}
</style>