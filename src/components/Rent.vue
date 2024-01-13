<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-button :to="{ name: 'space-info' }" class="me-2"> Información del espacio </b-button>
    <b-button :to="{ name: 'space-catalogue' }" class="me-2"> Catálogo de espacios </b-button>
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