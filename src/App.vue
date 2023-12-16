<template>
  <header>
    <div class="topnav">
      <div class="topnav-left">
        <i class="fa-solid fa-earth-americas"></i> Roaming New Routes <span> |</span>
        <div class="authorinfo">
          <AuthorInfo />
        </div>
      </div>
      <div class="topnav-right">
        <div class="navbar">
          <div class="dropdown">
            <button class="dropbtn">Menu <i class="fa fa-caret-down"></i></button>
            <div class="dropdown-content">
              <RouterLink to="/"> Home</RouterLink>
              <RouterLink to="/contact">Contact </RouterLink>
              <a href="">Login </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img-container">
      <img alt="headerImg" src="../images/header.jpg" />

      <div class="title">
        <h1>life is short & the world is wide</h1>
      </div>
    </div>
  </header>

  <RouterView />
  <footer>
    <div class="footer-container">
      <a href=""> <i class="fa-brands fa-twitter"></i> </a>
      <a href=""> <i class="fa-brands fa-instagram"></i> </a>
      <a href=""> <i class="fa-brands fa-facebook"></i> </a>
    </div>
  </footer>
</template>
<script>
import AuthorInfo from './components/AuthorInfo.vue'
export default {
  components: {
    AuthorInfo
  }
}
</script>
<style scoped>
.title {
  color: #fff;
  font-family: monospace;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation:
    typing 3.5s steps(30, end),
    blink-caret 0.5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

span {
  font-size: 50px;
  margin-left: 15px;
}
.topnav {
  overflow: hidden;
  margin-left: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topnav-left {
  display: flex;
  align-items: center;
  font-size: 17px;
}

.topnav-right {
  display: flex;
  align-items: center;
}

.topnav-right a.active {
  background-color: black;
  color: white;
}
.topnav-right a:hover {
  color: #5c5a5a;
}

header img {
  width: 100%;
  height: 100%;
}
.img-container {
  position: relative;
}

.title h1 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 6vw;

  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  opacity: 0.5;
  text-align: center;
}

footer {
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: rgb(40, 39, 39);

  text-align: center;
}
footer a i {
  color: white;
  font-size: 20px;
  margin: 10px 10px;
}
footer a i:hover {
  color: #7a7777;
  font-size: 30px;
}

.authorinfo {
  display: flex;
  align-items: left;
}

.navbar {
  background-color: white;
}

.navbar a {
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: gray;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
