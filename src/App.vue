<script setup>
</script>

<template>
  <b-container>
    <b-row>
      <b-col>
        <div>
          <b-navbar type="dark" variant="dark" fixed>
            <b-navbar-nav>
              <b-nav-item href="#">Home</b-nav-item>

              <!-- Navbar dropdowns -->
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="User" end>
                <b-dropdown-item href="#">Account</b-dropdown-item>
                <b-dropdown-item href="#">Settings</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-sidebar
            id="sidebar-1"
            title="Sidebar"
            shadow
            visible
            no-header-close
          >
            <div class="px-3 py-2">
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <b-img
                src="https://picsum.photos/500/500/?image=54"
                fluid
                thumbnail
              ></b-img>
            </div>
          </b-sidebar>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
</style>
