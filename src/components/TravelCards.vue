<template>
  <div class="travel-card">
    <img :src="imageSrc" alt="Travel Image" width="400" height="250" />
    <div class="fadedbox">
      <div class="titletext">
        <h1>{{ location }}</h1>
        <h2>{{ date }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: String,
    date: String,
    imageSrc: String
  }
}
</script>

<style scoped>
.travel-card {
  cursor: pointer;
  min-height: 250px;
  position: relative;
  overflow: hidden;
  min-width: 400px;
  text-align: center;
  margin: 50px 5px;
}

.fadedbox {
  background-color: #938f8f;
  position: absolute;
  top: 68%;
  left: 0;
  color: #fff;
  opacity: 0;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 300ms ease-out;
}

.travel-card:hover .fadedbox {
  opacity: 0.8;
}

.travel-card:hover .titletext {
  opacity: 1;
  transform: translateY(0);
}

.titletext {
  opacity: 0;
  transform: translateY(5px);
  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out;
  text-align: center;
  font-size: 14px;
  line-height: 1;
}

.travel-card img {
  max-width: 100%;
}

@media screen and (max-width: 1000px) {
  .titletext {
    opacity: 0;
    transform: translateY(5px);
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    text-align: left;
    font-size: 10px;
    line-height: 1;
  }
  .fadedbox {
    background-color: #938f8f;
    position: absolute;
    top: 68%;
    left: 0;
    color: #fff;
    opacity: 0;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    transition: opacity 300ms ease-out;
  }
}
@media screen and (max-width: 600px) {
  .titletext {
    opacity: 0;
    transform: translateY(5px);
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    text-align: left;
    font-size: 6px;
    line-height: 1;
  }
  .fadedbox {
    background-color: #938f8f;
    position: absolute;
    top: 68%;
    left: 0;
    color: #fff;
    opacity: 0;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: left;
    transition: opacity 300ms ease-out;
  }
}
</style>
