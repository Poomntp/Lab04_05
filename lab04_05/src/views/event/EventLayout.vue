<template>
  <div v-if="passenger">
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'airlines' }">Airlines</router-link>
    </div>
    <router-view :passenger="passenger" :airline="airline" />
  </div>
</template>
<script>
import EventService from '@/service/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      passenger: null,
      airline: null
    }
  },
  created() {
    EventService.getPassenger(this.id)
      .then((response) => {
        this.passenger = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'passenger' }
          })
        }
      }),
      EventService.getAirline(this.id)
        .then((response) => {
          this.airline = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            this.$router.push({
              name: '404Resource',
              params: { resource: 'airline' }
            })
          }
        })
  }
}
</script>
