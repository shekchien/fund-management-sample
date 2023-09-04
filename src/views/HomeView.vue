<template>
  <main>
    <div class="w-full p-3">
      <div class="card flex shadow-1 justify-content-center">
        <ProgressSpinner v-if="loading" />
        <DataTable :value="fundData" v-if="!loading" removableSort>
          <Column field="id" sortable header="ID"></Column>
          <Column field="title" sortable header="Name"></Column>
          <Column field="category" sortable header="Category" bodyClass="capitalize"></Column>
          <Column field="level" sortable header="Level">
            <template #body="slotProps">
              <span>{{ getLevelName(slotProps.data.level) }}</span>
            </template>
          </Column>
          <Column field="nav" header="NAV (MYR)">
            <template #body="slotProps">
              <span
                >{{ slotProps.data.nav.price }} ({{
                  convertDateTime(slotProps.data.nav.date)
                }})</span
              >
            </template>
          </Column>
          <Column field="performance" header="Ytd %">
            <template #body="slotProps">
              <span>{{ slotProps.data.performance.ytd }}</span>
            </template>
          </Column>
          <Column field="performance" header="1Y %">
            <template #body="slotProps">
              <span>{{ slotProps.data.performance.one_year }}</span>
            </template>
          </Column>
          <Column field="performance" header="3Y %">
            <template #body="slotProps">
              <span>{{ slotProps.data.performance.three_year }}</span>
            </template>
          </Column>
          <Column field="performance" header="5Y %">
            <template #body="slotProps">
              <span>{{ slotProps.data.performance.five_year }}</span>
            </template>
          </Column>
          <Column field="performance" header="Since launch %">
            <template #body="slotProps">
              <span>{{ slotProps.data.performance.since }}</span>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { LEVEL, convertDateTime } from '../utils'
const loading = ref(false)
const fundData = ref([])

const fetchTableData = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/todos')
    const tableData = response.json()
    tableData.then((data) => (fundData.value = data))
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

const getLevelName = (id) => {
  return LEVEL.find((data) => {
    return data.id === +id
  }).value
}

onMounted(() => {
  fetchTableData()
})
</script>

<style>
.capitalize {
  text-transform: capitalize;
}
</style>
