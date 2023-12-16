<template>
  <div class="back-arrow">
    <RouterLink to="/"> <i class="fa-solid fa-arrow-left"></i> </RouterLink>
  </div>
  <div class="title">
    <h1>San Diego</h1>
    <h2>June 2017</h2>
  </div>

  <section>
    <div class="container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere est eveniet natus dicta
        incidunt nam, nobis nesciunt nisi iure vero dolores repellendus. Exercitationem ullam sit ut
        molestiae est quaerat quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatum, debitis aperiam perspiciatis nisi explicabo magni unde, doloremque omnis error
        aut eaque corrupti odit officia magnam similique fugiat. Porro, iure. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Magnam amet, sed itaque accusamus molestiae cum atque
        quam asperiores dolore, quidem minus, eveniet nesciunt! Quod excepturi corrupti amet earum
      </p>
      <div id="slider">
        <input type="radio" name="slider" id="slide1" checked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />
        <input type="radio" name="slider" id="slide4" />
        <div id="slides">
          <div id="overflow">
            <div class="inner">
              <div class="slide slide_1">
                <div class="slide-content">
                  <img alt="SDImg" src="../../images/SD1.jpg" />
                </div>
              </div>
              <div class="slide slide_2">
                <div class="slide-content">
                  <img alt="SDImg" src="../../images/sdslide2.jpg" />
                </div>
              </div>
              <div class="slide slide_3">
                <div class="slide-content">
                  <img alt="SDImg" src="../../images/sdslide4.jpg" />
                </div>
              </div>
              <div class="slide slide_4">
                <div class="slide-content">
                  <img alt="SDImg" src="../../images/sdslide6.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="controls">
          <label for="slide1"></label>
          <label for="slide2"></label>
          <label for="slide3"></label>
          <label for="slide4"></label>
        </div>
        <div id="bullets">
          <label for="slide1"></label>
          <label for="slide2"></label>
          <label for="slide3"></label>
          <label for="slide4"></label>
        </div>
      </div>
    </div>

    <div class="container">
      <img alt="SDImg" src="../../images/SD2.jpg" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nihil rem nobis delectus
        numquam, vel odio esse, obcaecati reiciendis reprehenderit accusantium magni. Eveniet
        aperiam, explicabo architecto sequi dolores nostrum quas! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Facere maiores corrupti eveniet saepe. Veritatis eius fuga
        recusandae expedita numquam explicabo ab mollitia delectus? Quasi accusantium culpa
        recusandae architecto voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Labore aliquid, neque tempora laudantium placeat quos impedit incidunt? Amet, voluptatibus,
      </p>
    </div>
    <div class="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ratione ipsum cupiditate
        veniam impedit saepe similique, at, distinctio laudantium unde tenetur voluptate quod nulla
        quasi, temporibus nemo dolore in! >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ad aliquid cupiditate voluptatem dolorem dolore accusantium sint placeat nisi, distinctio
        ipsam at quis aut fuga, nobis cum, corrupti voluptatum vero repudiandae? Lorem ipsum dolor
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta aperiam impedit aut odit,
        officiis nisi itaque quaerat odio magni sed cupiditate vitae, mollitia vel sapiente nemo in
        quod expedita temporibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
        cum praesentium expedita eos blanditiis obcaecati voluptates. Optio eligendi corrupti
        perferendis reiciendis, assumenda ipsa doloremque commodi, voluptatibus dolorem ratione
        placeat repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam
        quaerat nesciunt nam ab quo exercitationem, illum accusamus, quia, voluptatem magni quisquam
        laboriosam nemo? Fugiat quod beatae adipisci sit! Sit. Lorem ipsum dolor sit amet,
      </p>
      <img class="SD3" alt="SDImg" src="../../images/SD3.jpg" />
    </div>
  </section>

  <div id="map"></div>
</template>
<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
export default {
  mounted() {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-117.16, 32.71],
      zoom: 5
    })
    map.on('load', () => {})

    const marker6 = new mapboxgl.Marker()
    marker6.setLngLat([-117.16, 32.71])
    marker6.setPopup(new mapboxgl.Popup().setHTML('Hello! &iexcl;Hola!'))
    marker6.addTo(map)
  }
}
</script>
<style scoped>
#slider {
  margin: 0 auto;
  width: 450px;
  max-width: 100%;
}
#slider input[type='radio'] {
  display: none;
}
#slider label {
  cursor: pointer;
  text-decoration: none;
}
#slides {
  padding: 10px;
  border: 3px solid #ccc;
  background: #fff;
  position: relative;
  z-index: 1;
}
#overflow {
  width: 100%;
  overflow: hidden;
}
#slide1:checked ~ #slides .inner {
  margin-left: 0;
}
#slide2:checked ~ #slides .inner {
  margin-left: -100%;
}
#slide3:checked ~ #slides .inner {
  margin-left: -200%;
}
#slide4:checked ~ #slides .inner {
  margin-left: -300%;
}
#slides .inner {
  transition: margin-left 800ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 400%;
  line-height: 0;
  height: 300px;
}
#slides .slide {
  width: 25%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
}

#controls {
  margin: -180px 0 0 0;
  width: 100%;
  height: 50px;
  z-index: 3;
  position: relative;
}
#controls label {
  transition: opacity 0.2s ease-out;
  display: none;
  width: 50px;
  height: 50px;
  opacity: 0.4;
}
#controls label:hover {
  opacity: 1;
}
#slide1:checked ~ #controls label:nth-child(2),
#slide2:checked ~ #controls label:nth-child(3),
#slide3:checked ~ #controls label:nth-child(4),
#slide1:checked ~ #controls label:nth-last-child(2),
#slide2:checked ~ #controls label:nth-last-child(3),
#slide3:checked ~ #controls label:nth-last-child(4),
#slide4:checked ~ #controls label:nth-last-child(1) {
  background: url(https://image.flaticon.com/icons/svg/130/130882.svg) no-repeat;
  float: left;
  margin: 0 0 0 -50px;
  display: block;
}
#bullets {
  margin: 150px 0 0;
  text-align: center;
}
#bullets label {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #ccc;
  margin: 0 10px;
}
#slide1:checked ~ #bullets label:nth-child(1),
#slide2:checked ~ #bullets label:nth-child(2),
#slide3:checked ~ #bullets label:nth-child(3),
#slide4:checked ~ #bullets label:nth-child(4) {
  background: #444;
}
@media screen and (max-width: 900px) {
  #slide1:checked ~ #controls label:nth-child(2),
  #slide2:checked ~ #controls label:nth-child(3),
  #slide3:checked ~ #controls label:nth-child(4),
  #slide4:checked ~ #controls label:nth-child(1),
  #slide1:checked ~ #controls label:nth-last-child(2),
  #slide2:checked ~ #controls label:nth-last-child(3),
  #slide3:checked ~ #controls label:nth-last-child(4),
  #slide4:checked ~ #controls label:nth-last-child(1) {
    margin: 0;
  }
  #slides {
    max-width: calc(100% - 140px);
    margin: 0 auto;
  }
}

#map {
  width: 500px;
  height: 40vh;

  margin: 60px auto;
}

.back-arrow {
  width: 25px;
  margin: 10px 20px;
  background-color: #7c7a7a;
  text-align: center;
}

.back-arrow a {
  color: white;
  font-size: 15px;
}

.back-arrow a:hover {
  color: gray;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 40px;
  margin-bottom: 5px;
}
h2 {
  font-size: 20px;
  margin-top: 5px;
}

img {
  width: 400px;
  height: 350px;
}
.container {
  display: flex;

  margin: 80px 70px;
  gap: 6em;
}
.SD3 {
  width: 650px;
  height: 550px;
}

@media screen and (max-width: 900px) {
  .SD3 {
    width: 400px;
    height: 450px;
  }
  div.container:nth-child(1) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    gap: 2em;
  }
  div.container:nth-child(3) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    gap: 2em;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 15px;
    gap: 2em;
  }

  #slider {
    margin: 0 auto;
    width: 560px;
    max-width: 100%;
  }
}
</style>
