<template>
  <div>
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50B"
          text="Revenue"
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cilDollar" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$18 K"
          text="Employees"
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cil-people" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cil-moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cil-bell" width="24"/>
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

export default {
  name: "MyOrganization",
  components: {
    ...Charts
  }
};
</script>