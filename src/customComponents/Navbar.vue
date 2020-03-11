<template>
    <div class="navigation">
        <nav class="nav">
            <a href="/" class="nav-item">Home</a>
            <a href="/about" class="nav-item">About Me</a>
            <a href="/blog" class="nav-item">Blog</a>
            <a href="/contact" class="nav-item">Contact</a>
            <span class="nav-indicator"></span>
        </nav>
    </div>
</template>

<script>
</script>

<style scoped>
.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100%;
  max-height: 80%;
  border: 1px solid white;
  border-radius: 5px;
}

.nav-item {
  color: white;
  padding: 15px;
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
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #FDC834;
    border-radius: 8px;
    opacity: 0;
    transition: .3s;
  }

.nav-item:hover:before {
  opacity: 1;
  bottom: 10px;
}

.nav-item:hover { color: #333; }

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

@media (max-width: 580px) {
  .nav { overflow: auto; }
}
</style>