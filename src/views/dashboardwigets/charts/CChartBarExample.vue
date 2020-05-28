<template>
  <CChartBar
    :datasets="defaultDatasets"
    labels="months"
  />
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'

export default {
  name: 'CChartBarExample',
  components: { CChartBar },
  computed: {
    defaultDatasets () {
      return [
        {
          label: 'Orgnization On-boarding',
          backgroundColor: '#00B4D4',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },
        {
          label: 'Orgnization Off-boarding',
          backgroundColor: '#0077B6',
          data: [4, 2, 12, 9, 7, 4, 9, 8, 4, 2, 1, 11]
        }

      ]
    }
  }
}
</script>
