<template>
    <div class="navigation">
        <nav class="nav">
            <a href="/" class="nav-item is-active" active-color="orange">Home</a>
            <a href="/about" class="nav-item" active-color="green">About Me</a>
            <a href="/blog" class="nav-item" active-color="blue">Blog</a>
            <a href="/contact" class="nav-item" active-color="red">Contact</a>
            <span class="nav-indicator"></span>
        </nav>
    </div>
</template>

<script>
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach((item) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});
</script>

<style scoped>
.navigation {
  box-sizing: border-box;
}

.nav {
  display: inline-flex;
  justify-content: space-evenly;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  max-height: 80%;
  border: 1px solid white;
  padding: 0 20px;
  border-radius: 20px;
}

.nav-item {
  color: white;
  padding: 20px;
  text-decoration: none;
  transition: .3s;
  z-index: 1;
  font-family: "Merriweather-Sans-Regular";  
    position: relative;
}

.nav-item:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #dfe2ea;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: .3s;
  }

.nav-item:not(.is-active):hover:before {
  opacity: 1;
  bottom: 0;
}

.nav-item:not(.is-active):hover { color: #333; }

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  transition: .4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px 8px 0 0;
}

@media (max-width: 580px) {
  .nav { overflow: auto; }
}
</style>