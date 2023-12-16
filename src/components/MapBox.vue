<template>
  <div class="map-container">
    <div id="map" />
  </div>
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
      center: [1, 50],
      zoom: 1.5
    })
    map.on('load', () => {})

    const marker1 = new mapboxgl.Marker()
    marker1.setLngLat([13.405, 52.52])
    marker1.setPopup(
      new mapboxgl.Popup().setHTML('<a href="/Berlin">Berlin, Germany | Sept. 2023</a>')
    )

    marker1.addTo(map)

    const marker2 = new mapboxgl.Marker()
    marker2.setLngLat([7.44, 46.94])
    marker2.setPopup(
      new mapboxgl.Popup().setHTML('<a href="/Bern">Bern, Swizterland | Jan 2022</a>')
    )
    marker2.addTo(map)

    const marker3 = new mapboxgl.Marker()
    marker3.setLngLat([101.68, 3.13])
    marker3.setPopup(
      new mapboxgl.Popup().setHTML('<a href="/KualaLumpur">Kuala Lumpur, Malaysia | Aug 2019</a>')
    )
    marker3.addTo(map)

    const marker4 = new mapboxgl.Marker()
    marker4.setLngLat([12.49, 41.9])
    marker4.setPopup(new mapboxgl.Popup().setHTML('<a href="/Rome">Rome, Italy | Aug 2022</a>'))
    marker4.addTo(map)

    const marker5 = new mapboxgl.Marker()
    marker5.setLngLat([139.65, 35.67])
    marker5.setPopup(new mapboxgl.Popup().setHTML('<a href="/Tokyo">Tokyo, Japan | Sept 2019</a>'))
    marker5.addTo(map)

    const marker6 = new mapboxgl.Marker()
    marker6.setLngLat([-117.16, 32.71])
    marker6.setPopup(
      new mapboxgl.Popup().setHTML('<a href="/SanDiego">San Diego, USA | June 2017</a>')
    )
    marker6.addTo(map)
  }
}
</script>

<style scoped>
#map {
  margin-top: 20px;
  margin-bottom: 60px;
  width: 100%;
  height: 35vh;
}
</style>
