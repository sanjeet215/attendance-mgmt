<template>
  <CRow>
    <CCol col="6" sm="6">
      <CCard>
        <CCardHeader>
          Department List
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            :sorter='{ external: false, resetable: true }'
            :items="items"
            :fields="fields"
            :items-per-page="5"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                {{data.item.status ? "Active" : "Disabled"}}
                <!-- <CBadge :color="getBadge(data.item.status)"> -->
                  <!-- {{data.item.status}} -->
                  <!-- {{data.item.status ? "Active" : "Disabled"}} -->
                <!-- </CBadge> -->
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>

import DepartmentDataService from '../../service/DepartmentDataService'

export default {
  name: 'MyDepartment',
  data () {
    return {
      items: [],
      fields: [
        { key: 'deptName',label: 'Deptment Name', _classes: 'td-style' },
        { key: 'description' ,label: 'Description',_classes: 'td-style'},
        { key: 'status' ,label: 'Status',_classes: 'td-style'}
      ],
      activePage: 1
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    rowClicked (item, index) {
      console.log('Org Id read ---> '+ item.deptId);
      //this.$router.push({path: `users/${index + 1}`})
      this.$router.push({path: `users/${item.deptId}`})
    },

    pageChange (val) {
      this.$router.push({ query: { page: val }})
    },

    getallDepartment() {
       DepartmentDataService.getAll().then(response => {
         let serverData = response.data;
         this.items = serverData.data;
         console.log(this.items);
       }).catch(function error(){
         console.log(error);
       });
    }
  },

  mounted() {
    this.getallDepartment();
  },
}
</script>
