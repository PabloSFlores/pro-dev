<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button :to="{ name: 'space-info' }"> Información del espacio </b-button>
    <b-button :to="{ name: 'space-catalogue' }"> Cátalogo de espacios </b-button>
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
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>