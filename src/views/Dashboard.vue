<template>
  <div>
    <!-- <WidgetsDropdown /> -->
    <!-- <WidgetsBrand /> -->
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon header="Organizations" 
                     :text="employeeCount" 
                     color="primary" 
                     :icon-padding="false">
          <CIcon name="cil-people" width="16" />
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon header="Active Users" 
                     :text="employeeCount" 
                     color="primary" 
                     :icon-padding="false">
          <CIcon name="cil-people" width="16" />
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon header="Maintenance" 
                     :text="employeeCount" 
                     color="primary" 
                     :icon-padding="false">
          <CIcon name="cil-people" width="16" />
        </CWidgetIcon>
      </CCol>

      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon header="Tax" 
                     :text="employeeCount" 
                     color="primary" 
                     :icon-padding="false">
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
      departmentCount: ""
    };
  },
  // data() {
  //   return {
  //     selected: "Month",
  //     tableItems: [
  //       {
  //         avatar: { url: "img/avatars/1.jpg", status: "success" },
  //         user: {
  //           name: "Yiorgos Avraamu",
  //           new: true,
  //           registered: "Jan 1, 2015"
  //         },
  //         country: { name: "USA", flag: "cif-us" },
  //         usage: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" },
  //         payment: { name: "Mastercard", icon: "cib-cc-mastercard" },
  //         activity: "10 sec ago"
  //       }
  //     ],
  //     tableFields: [
  //       { key: "avatar", label: "", _classes: "text-center" },
  //       { key: "user" },
  //       { key: "country", _classes: "text-center" },
  //       { key: "usage" },
  //       { key: "payment", label: "Payment method", _classes: "text-center" },
  //       { key: "activity" }
  //     ]
  //   };
  // },
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
