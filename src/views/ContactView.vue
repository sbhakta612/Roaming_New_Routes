<template>
  <div class="contact">
    <h1>Shivani Bhakta</h1>
    <h2>sdpatel0612@gmail.com</h2>
    <p>Gasstraße 4 <span> 22761 Hamburg </span></p>
    <p>+49 40 22863615</p>
    <p>
      This is a project from the Full-Stack Web Development course at
      <a href="https://hamburgcodingschool.com/contact/" target="_blank">Hamburg Coding School. </a>
    </p>
  </div>
</template>
<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 50px 60px;
}
p span {
  display: block;
}
.contact a {
  color: black;
}
.contact a:hover {
  color: gray;
}
</style>
