<template>
    <div>
        <footer>
            <a href="https://www.linkedin.com/in/mariekr/" target="_blank">
                <i class="fab fa-linkedin footericon"></i>
            </a>
            <a href="https://www.instagram.com/maryftf" target="_blank">
                <i class="fab fa-instagram footericon"></i>
            </a>
            <a href="mailto:marie.krause48@web.de">
                <i class="far fa-envelope footericon"></i>
            </a>
            <a href="https://www.youtube.com/marytheidiot1" target="_blank">
                <i class="fab fa-youtube footericon"></i>
            </a>
            <p class="footertext">Marie Krause &copy; 2020</p>
    </footer>
    </div>
</template>

<script>
export default {
  name: 'customFooter'
}
</script>

<style scoped>
  a {
      text-decoration: none;
      color: inherit
  }
  footer {
    background-color: #86a9d9;
    color: white;
    text-align: center;
    height: 8vh;
  }
  .footericon {
    margin: 1vh 1vh 0;
  }
  .footertext {
    margin: 1vh 0;
    display: flex;
    align-content: baseline;
    justify-content: center;
  }
</style>