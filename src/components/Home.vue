<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button :to="{ name: 'rent-space' }"> Renta tu espacio </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>