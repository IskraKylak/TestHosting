<template>
  <div class="wrapSite">
    <img src="./assets/fonHost.jpg" alt="img">
    <div class="contTable">
      <nav class="tabs is-toggle my-stile">
        <router-link class="has-background-light" to="/">Home</router-link> |
        <router-link class="has-background-light" to="/mytarifs">MyTarif</router-link>
      </nav>
      <router-view/>
    </div>
    
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    methods: {
      ...mapActions([
          'GET_TARIFS_FROM_API',
      ]),
    },
    mounted() {
      this.GET_TARIFS_FROM_API()
    }
  };
</script>
<style lang="scss">
.wrapSite {
  position: relative;
  padding: 30px 0 40px 0;
  min-height: 100vh;

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;
    top: 0;
  }
}

.contTable {
  position: relative;
  z-index: 2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.tabs {

  &.my-stile {
    display: flex;
    justify-content: center;
    
    & a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
// nav {
//   padding: 30px;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
// }

#message {
    padding: 20px;
    position: fixed;
    top: 40vh;
    right: 10vh;
    background: #e6d706;
    z-index: 100;
    color: #2c3e50;
    visibility: visible;
    opacity: 1;
    transition: all 0.3s ease;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;

    &.hidden-xs {
      visibility: hidden;
      opacity: 0;
    }
}
</style>
