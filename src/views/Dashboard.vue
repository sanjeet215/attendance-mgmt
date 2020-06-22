<template>
  <div>
    <!-- <WidgetsDropdown /> -->
    <!-- <WidgetsBrand /> -->
    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>



    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="Organizations"
          :text="employeeCount"
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cil-people" width="16" />
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="Active Users"
          :text="employeeCount"
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cil-people" width="16" />
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="Maintenance"
          :text="employeeCount"
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cil-people" width="16" />
        </CWidgetIcon>
      </CCol>

      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon header="Tax" :text="employeeCount" color="primary" :icon-padding="false">
          <CIcon name="cil-people" width="16" />
        </CWidgetIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6">
        <CCard>
          <CCardBody>
            <CChartBarExample />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6">
        <CCard>
          <CCardBody>
            <CChartPieExample />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import WidgetsDropdown from "./dashboardwigets/WidgetsDropdown";
import WidgetsBrand from "./widgets/WidgetsBrand";
import * as Charts from "./dashboardwigets/charts/index.js";

export default {
  name: "Dashboard",
  components: {
    WidgetsDropdown,
    WidgetsBrand,
    ...Charts
  },
  data() {
    return {
      employeeCount: "1",
      departmentCount: "",
      isloggedin: false,
      statsCards: [
        {
          type: "warning",
          icon: "ti-server",
          title: "Capacity",
          value: "105GB",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "success",
          icon: "ti-wallet",
          title: "Revenue",
          value: "$1,345",
          footerText: "Last day",
          footerIcon: "ti-calendar"
        },
        {
          type: "danger",
          icon: "ti-pulse",
          title: "Errors",
          value: "23",
          footerText: "In the last hour",
          footerIcon: "ti-timer"
        },
        {
          type: "info",
          icon: "ti-twitter-alt",
          title: "Followers",
          value: "+45",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "info",
          icon: "ti-twitter-alt",
          title: "Followers",
          value: "+45",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ]
    };
  },

  computed: {
    userRole() {
      this.isloggedin = this.$store.state.auth.status.loggedIn;
      if (this.isloggedin) {
        this.$router.push("/login");
        console.log("Control came here");
      }
    }
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    }
  }
};
</script>
