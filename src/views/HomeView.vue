<template>
  <main>
    <div class="acc-wrapper">
      <div class="accordion">
        <div class="item">
          <RouterLink to="/Berlin">
            <TravelCards
              location="Berlin, Germany"
              date="Septemer 2023"
              imageSrc="https://deih43ym53wif.cloudfront.net/berlin-germany-shutterstock_314149679_87b7a543ce.jpeg"
            />
          </RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/Bern">
            <TravelCards
              location="Bern, Swizterland"
              date="January 2022"
              imageSrc="https://www.railbookers.ca/sites/railbookers/files/styles/hero/public/media/images/shutterstock_1438073690.jpg?h=82f92a78&itok=4jjanHvF"
            />
          </RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/Rome">
            <TravelCards
              location="Rome, Italy"
              date="August 2022"
              imageSrc="https://www.thediaryofanomad.com/wp-content/uploads/2020/11/rome-for-3-days-in-rome-itinerary-vatican-dome-view.jpg"
          /></RouterLink>
        </div>
        <div clas="item">
          <RouterLink to="/KualaLumpur">
            <TravelCards
              location="Kuala Lumpur, Malaysia"
              date="August 2019"
              imageSrc="https://images.ctfassets.net/bth3mlrehms2/28u9gceQawOZDYkvxnwGVH/4efcf610efe90527d2411cebf517cdd2/Malaysia_Kuala_Lumpur_Petronas_Towers.jpg?w=3864&h=2173&fl=progressive&q=50&fm=jpg"
          /></RouterLink>
        </div>

        <div class="item">
          <RouterLink to="/Tokyo">
            <TravelCards
              location="Tokyo, Japan"
              date="September 2019"
              imageSrc="https://media.cntraveler.com/photos/63482b255e7943ad4006df0b/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg"
            />
          </RouterLink>
        </div>
        <div class="item">
          <RouterLink to="/SanDiego">
            <TravelCards
              location="San Diego, USA"
              date="June 2017"
              imageSrc="https://fox5sandiego.com/wp-content/uploads/sites/15/2023/04/AdobeStock_413086770-1.jpeg"
          /></RouterLink>
        </div>
      </div>
    </div>
  </main>
  <MapBox />
</template>
<script>
import TravelCards from '../components/TravelCards.vue'

import MapBox from '../components/MapBox.vue'

export default {
  components: {
    TravelCards,
    MapBox
  }
}
</script>

<style scoped>
.acc-wraper {
  margin: 40px auto;
  width: 70%;
}

.accordion {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  height: 350px;
}

.accordion > div {
  width: 35%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  transition: all 0.5s ease;

  position: relative;
}

.accordion > div:hover {
  flex-shrink: 0;
}

.accordion div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
