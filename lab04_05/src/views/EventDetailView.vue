<template>
  <div v-if="passenger">
    <h1>{{ passenger.gender }}</h1>
    <p>
      {{ passenger.ip_address }} on {{ passenger.Source }} @
      {{ passenger.Destination }}
    </p>
    <p>{{ passenger.travelDate }}</p>
  </div>
</template>

<script>
import EventService from '../service/EventService'
export default {
  props: ['id'],
  data() {
    return {
      passenger: null
    }
  },
  created() {
    EventService.getPassenger(this.id)
      .then((response) => {
        this.passenger = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
