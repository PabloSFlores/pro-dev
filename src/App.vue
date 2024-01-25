<script setup>
</script>

<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">Inicio</b-nav-item>
            <b-nav-item-dropdown text="Cuenta" end>
              <b-dropdown-item href="#">Perfil</b-dropdown-item>
              <b-dropdown-item href="#" right>Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
      <b-col cols="12">
        <b-row>
          <!-- Side bar -->
          <b-col cols="2">
            <b-sidebar
              id="sidebar"
              z-index="-1"
              shadow
              visible
              no-header-close
              no-close-on-route-change
            >
              <b-nav vertical class="pt-5 mt-1">
                <b-nav-item>
                  <b-button block :to="{ name: 'home' }"> Inicio </b-button>
                </b-nav-item>
                <b-nav-item>
                  <b-button block :to="{ name: 'main' }"> Opción 2</b-button>
                </b-nav-item>
                <b-nav-item>
                  <b-button block :to="{ name: 'about' }"> Opción 3 </b-button>
                </b-nav-item>
                <b-nav-item>
                  <b-button block :to="{ name: 'form' }"> Formulario </b-button>
                </b-nav-item>
              </b-nav>
            </b-sidebar>
          </b-col>
          <!-- Body -->
          <b-col cols="10">
            <b-container fluid>
              <router-view></router-view>
            </b-container>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped></style>
