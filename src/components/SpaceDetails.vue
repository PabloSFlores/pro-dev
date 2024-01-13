<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
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
          text: "Catálogo de espacios",
          to: { name: "space-catalogue" },
        },
        {
          text: "Detalles del espacio",
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>