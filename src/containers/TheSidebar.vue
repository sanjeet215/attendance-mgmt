<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon
        class="c-sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        class="c-sidebar-brand-minimized"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <!-- <CRenderFunction flat :content-to-render="$options.nav"/> -->

    <!-- <CRenderFunction flat :contentToRender="$options.nav" /> -->

    <CRenderFunction flat :contentToRender="renderFunction" />

    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from "./_nav";

export default {
  name: "TheSidebar",
  //nav,
  data() {
    //console.log(nav);
    return {
      nav: nav
    };
  },
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
    renderFunction() {
      console.log(
        "trying to read nav--------------------------->" + this.nav.item1
      );

      console.log(this.nav);

      // for(i in this.nav){
      //   console.log(this.nav[i]);
      // }
      //return this.nav.filter((item) => item.name !== 'Dashboard');
      //return this.nav.filter((item) => item._children.name !== 'Dashboard');
      //return this.nav.filter((event) => event._children.name !== 'Dashboard');

      console.log("Begining of code");
      this.nav.forEach(item => console.log(item._name));
      this.nav.forEach(item =>
        console.log(
          item._children.forEach(inneritem => {
            console.log(inneritem.authentication !== "ROLE_USER");
            console.log(inneritem.name);
          })
        )
      );
      //console.log("End of code");
      // return this.nav.filter( function(item) {
      //              item = item._children.filter(function(innerItem){
      //                 if(innerItem._authentication === 'ROLE_MODERATOR'){
      //                   console.log('this is evaluated');
      //                   console.log('Check auth value ---->'+ innerItem._authentication);
      //                   return innerItem;
      //                 }
      //             });
      //      return item;
      // });

      let menu = this.nav;
      let child_array;

      menu = nav.filter(function(item) {
        console.log("value Read -->" + item._children);
        child_array = item._children;
        if (item._name === "CSidebarNav") {
          child_array = child_array.filter(function(item) {
            if (item._authentication === "ROLE_USER") {
              return item;
            }
          });
          item._children = child_array;
          return item;
        }
      });

      // console.log("Child Array before filter -->");

      // child_array.forEach(item => {
      //   console.log(item._name);
      //   console.log(item._authentication);
      // });

      child_array = child_array.filter(function(item) {
        if (item._authentication === "ROLE_USER") {
          return item;
        }
      });

 //     console.log("Child Array after filter -->");

      // child_array.forEach(item => {
      //   console.log(item._name);
      //   console.log(item._authentication);
      // });

      return menu;
    }
  }
};
</script>
