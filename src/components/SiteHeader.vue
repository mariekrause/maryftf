<template>
    <div class="header">
        <div class="headerleft">
            <img id="logo_header" src="../assets/logo.png">
        </div>
        <div class="headerright">
            <navbar id="nav"></navbar>
            <img id="marker" d-none d-xl-inline src="../assets/marker.svg">
        </div>   
    </div>
</template>

<script>
    export default {
      name: 'SiteHeader'
    }
</script>

<style scoped>
@media (max-width: 450px) {
  #logo_header {
      height: 15vw !important
  }
}
/* lg abwärts */
@media (max-width: 1200px) {
    #marker {
        display: none;
    }
}
/* sm abwärts */
@media (max-width: 767px) {
    #logo_header {
        overflow: none;
    }
    .headerleft {
        width: 70vw;
        display: flex;
    }
}
@media (min-width: 1200px) { 
    #nav {
        margin-right: 0%
    }
}

#logo_header {
    height: 5em;
    padding-left: 0.5vw;
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
    width: 10%;
    filter: drop-shadow(3px 3px 7px rgba(0,0,0,0.2));
    position: absolute;
    right: 2vw;
    top: -5vw;
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
    overflow: none;
    width: 45vw;
}
.headerright {
    display: flex;
    width: 55vw;
    justify-content: center;
    align-content: center;
    position: relative
}
</style>