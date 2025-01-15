<template>
  <footer>
    <div>
      <div class="text">
        <h1>Download Airsoft App</h1>
        <p>Give it a try, you will like it.</p>
      </div>

      <div class="links">
        <a href="https://play.google.com/store/games?device=windows">
          <img src="/images/gglplay.jpg" alt="Google Play Icon" class="store-image">
        </a>
        <a href="https://www.apple.com/app-store/">
          <img src="/images/appstr.jpg" alt="App Store Icon" class="store-image">
        </a>
      </div>

      <div class="socials">
        <p>AirsoftApp 2025 ©</p>
        <ul>
          <li><a href="https://discord.com/"><img src="/images/discord.png" alt="Discord Icon"></a></li>
          <li><a href="https://www.facebook.com/"><img src="/images/fb.png" alt="Facebook Icon"></a></li>
          <li><a href="https://www.reddit.com/"><img src="/images/reddit.png" alt="Reddit Icon"></a></li>
          <li><a href="https://www.instagram.com/"><img src="/images/insta.png" alt="Instagram Icon"></a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
footer {
  margin-top: 30px;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
}

.text {
  text-align: center; /* Center the text inside the div */
  padding: 10px;
}

.links {
  display: flex;
  justify-content: center; /* Center the icons horizontally */
  gap: 20px; /* Add some spacing between the icons */
  padding: 10px;
}

.socials {
  margin-top: 20px;
  text-align: center; /* Center the social media links */
}

.socials ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center; /* Center the social icons */
  gap: 15px; /* Space between the social icons */
}

.socials li {
  display: inline-block;
}

.socials img {
  width: 30px; /* Adjust the size of the social icons */
  height: auto;
}

.store-image {
  max-width: 200px;
  max-height: 100px;
}
</style>