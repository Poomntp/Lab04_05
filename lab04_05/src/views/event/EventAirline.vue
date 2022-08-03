<template>
  <h1>Airline ID: {{ airline.id }}</h1>
  <p>
    Name: {{ airline.AirlineName }} on {{ airline.email }} @ Address:
    {{ airline.address }}
  </p>
</template>

<script>
export default {
  props: ['airline']
}
</script>
