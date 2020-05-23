<template>
  <CChartPie
    :datasets="defaultDatasets"
    :labels="['VLSI', 'IT', 'HR', 'Analytics']"
  />
</template>

<script>
import { CChartPie } from '@coreui/vue-chartjs'

export default {
  name: 'CChartPieExample',
  components: { CChartPie },
  computed: {
    defaultDatasets () {
      return [
        {
          backgroundColor: [
            '#0077B6',
            '#00B4D8',
            '#90E0EF',
            '#03045E'
          ],
          data: [40, 20, 80, 10]
        }
      ]
    }
  }
}
</script>
