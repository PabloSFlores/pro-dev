<script setup>
</script>

<template>
  <b-row class="w-100">
    <b-col cols="12">
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">Inicio</b-nav-item>
            <b-nav-item-dropdown text="Cuenta" end>
              <b-dropdown-item href="#">Perfil</b-dropdown-item>
              <b-dropdown-item href="#" right>Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </b-col>
    <b-col cols="12">
      <b-row>
        <!-- Side bar -->
        <b-col cols="2">
          <b-card img-src="https://picsum.photos/400/400/?image=2" img-alt="Card image" class="mb-3" image-top>
            <b-list-group flush>
              <b-list-group-item href="#">Ropa</b-list-group-item>
              <b-list-group-item href="#">Tecnología</b-list-group-item>
              <b-list-group-item href="#">Accesorios</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <!-- Body -->
        <b-col cols="10">
          <b-row>
            <!-- Header -->
            <b-col cols="12">
              <div>
                <b-card overlay img-src="https://picsum.photos/1000/250/?image=26" img-alt="Card Image"
                  text-variant="white" title="Tu tienda en línea" sub-title="Lo mejor de tecnología">
                  <b-card-text>
                    Temporada de descuento en ropa y calzado aplicando códigos participantes.
                  </b-card-text>
                </b-card>
              </div>
            </b-col>
            <!-- Elements -->
            <b-col cols="12" md="6" lg="4" v-for="index in 12" :key="index" class="p-2">
              <div>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="https://picsum.photos/400/400/?image=1" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Producto">
                        <b-card-text>
                          $100
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<style scoped></style>
