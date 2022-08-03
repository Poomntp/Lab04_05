<template>
  <h1>Name: {{ passenger.first_name }} {{ passenger.last_name }}</h1>
  <h1>Sex: {{ passenger.gender }}</h1>
  <p>
    Address: {{ passenger.ip_address }} on {{ passenger.Source }} @
    {{ passenger.Destination }}
  </p>
  <p>Date: {{ passenger.travelDate }}</p>
</template>
<script>
export default {
  props: ['passenger']
}
</script>
