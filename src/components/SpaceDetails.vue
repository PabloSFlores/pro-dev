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
          text: "Renta tu espacio",
          to: { name: "space-info" },
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