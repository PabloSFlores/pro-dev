<script setup>
</script>

<template>
  <div w-100>
    <b-row>
      <b-col cosl="12">
        <div>
          <b-navbar type="dark" variant="dark" sticky>
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
    </b-row>
    <b-row>
      <b-col cols="2">
        <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" class="mb-3" image-top>
          <b-list-group flush>
            <b-list-group-item href="#">Ropa para Hombres</b-list-group-item>
            <b-list-group-item href="#">Ropa para Mujeres</b-list-group-item>
            <b-list-group-item href="#">Accesorios</b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
      <b-col cols="10">
        <b-row>
          <b-col cols="12">
            <div>
              <b-card overlay img-src="https://picsum.photos/900/250/?image=3" img-alt="Card Image" text-variant="white"
                title="Image Overlay" sub-title="Subtitle">
                <b-card-text>
                  Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
              </b-card>
            </div>
          </b-col>
        </b-row>
        <b-row>
            <b-col cols="4" v-for="index in 6" :key="index" class="p-2">
              <div>
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                  <b-row no-gutters>
                    <b-col md="6">
                      <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image"
                        class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Horizontal Card">
                        <b-card-text>
                          This is a wider card with supporting text as a natural lead-in to additional content.
                          This content is a little bit longer.
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
  </div>
</template>

<style scoped></style>
