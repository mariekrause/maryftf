<template>
    <div class="navigation">
        <nav class="nav">
            <a href="/" class="nav-item"><i class="fas fa-home navicon"></i>Home</a>
            <a href="/about" class="nav-item"><i class="far fa-user navicon"></i>Über mich</a>
            <a href="/portfolio" class="nav-item"><i class="far fa-map navicon"></i>Portfolio</a>
            <a href="/blog" class="nav-item"><i class="far fa-comment-dots navicon"></i>Blog</a>
            <a href="/contact" class="nav-item"><i class="far fa-paper-plane navicon"></i>Kontakt</a>
            <span class="nav-indicator"></span>
        </nav>
    </div>
</template>

<script>
</script>

<style scoped>
@media (max-width: 1111px) {
  .navicon {
    display: none
  }
}

@media (max-width: 580px) {
  .nav { overflow: auto; }
}
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: none;
  width: 48vw;
  white-space: nowrap; 
}
.nav {
  display: flex;
  height: 90%;
  border: 1px solid white;
  border-radius: 5px;
}

.nav-item {
  color: white;
  padding: 10px 0.8vw 17px;
  text-decoration: none;
  transition: .3s;
  z-index: 1;
  font-family: "Merriweather-Sans-Regular";  
  position: relative;
}

.nav-item:before {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 75%;
    text-align: center;
    height: 5px;
    background-color: #FDC834;
    border-radius: 8px;
    opacity: 0;
    transition: .3s;
  }

.nav-item:hover:before {
  opacity: 1;
  bottom: 7px;
}

.nav-item:hover { 
  color: #333;
  }

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  transition: .4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px;
}

.navicon {
  padding-right: 0.5vw;
}
</style>