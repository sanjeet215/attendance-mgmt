<template>
  <div>
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon header="Employees" :text="employeeCount" color="primary" :icon-padding="false">
          <CIcon name="cil-people" width="24" />
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="Departments"
          :text="departmentCount"
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cilGrid" width="24" />
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon header="Average Salary" text="120 K" color="primary" :icon-padding="false">
          <CIcon name="cilEuro" width="24" />
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon header="Avg Hour" text="No Data Yet" color="primary" :icon-padding="false">
          <CIcon name="cil-bell" width="24" />
        </CWidgetIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6">
        <CCard>
          <CCardBody>
            <CChartLineExample />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6">
        <CCard>
          <CCardBody>
            <CChartLineExample />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6">
        <CCard>
          <CCardBody>
            <CChartDoughnutExample />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol sm="6">
        <CCard>
          <CCardBody>
            <CChartDoughnutExample />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>

import * as Charts from "./charts/index.js";
import AnalyticsService from '../../service/AnalyticsService'

export default {
  name: "MyOrganization",
  // data: {
  //       counter: "0100210"
  // },

  data() {
    return {
      employeeCount: "",
      departmentCount: ""
    };
  },

  methods: {
    getDepartmentcount() {
      AnalyticsService.getDeprtmentCount()
        .then(response => {
          let serverData = response.data;
          this.departmentCount = serverData.data;
          console.log(serverData.data);
        })
        .catch(function error() {
          console.log(error);
        });
    },

    getEmployeeCount() {
      console.log('Employee executed');
      AnalyticsService.getEmployeeCount()
        .then(response => {
          let serverData = response.data;
          this.employeeCount = serverData.data;
          console.log(serverData.data);
        })
        .catch(function error() {
          console.log(error);
        });
    }
  },

  mounted() {
    this.getDepartmentcount();
    this.getEmployeeCount();
  },

  components: {
    ...Charts
  }
};
</script>