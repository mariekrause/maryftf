<template>
    <div class="header">
        <div class="headerleft">
            <img id="logo_header" src="../assets/logo.png">
        </div>
        <div class="headerright">
            <navbar></navbar>
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
/* a:hover:after {
    content: url(../assets/pulse.svg)
} */
#logo_header {
    height: 45%;
    width: 45%;
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
}
.header {
    display: flex;
    flex-direction: row;
    background-color: #86a9d9;
    align-items: center;
    height: 12vh;
    filter: drop-shadow(2px 2px 7px rgba(0,0,0,0.2));
}
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