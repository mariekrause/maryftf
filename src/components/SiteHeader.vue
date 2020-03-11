<template>
    <div class="header">
        <div class="headerleft">
            <img id="logo_header" src="../assets/logo.png">
        </div>
        <div class="headerright">
            <navbar></navbar>
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
    height: 40%;
    width: 40%
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
.header {
    display: flex;
    flex-direction: row;
    background-color: #86a9d9;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.headerleft {
    display: inline;
    overflow: none;
    width: 70vw;
}
.headerright {
    display: inline-flex;
    width: 50vw;
    justify-content: space-evenly;
    align-content: center;
}
</style>