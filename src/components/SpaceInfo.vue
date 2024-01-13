<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button :to="{ name: 'space-offer' }"> Ofertar espacio </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          to: { name: "home" },
        },
        {
          text: "Renta tu espacio",
          to: { name: "rent-space" },
        },
        {
          text: "Información del espacio",
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>