<script setup>

import { onMounted } from 'vue'

const items = ref([])

const getData = async() => {
    const response = await fetch('/api/get_catalog')
    const data = await response.json();
    const items_ = []
    data.forEach(element => {
        items_.push({
            key: element.id, price: element.price,
            rate: element.rate, options: JSON.parse(element.options.slice(1, element.options.length - 1 ))})
    });
    items.value = items_
}
onMounted(() => {
    getData()

})


</script>


<template>
    <div v-for="item in items"
        class="flex lg:flex-row flex-col lg:justify-center items-center lg:p-8 p-4 font-sans bg-slate-100 min-h-screen">
        <ItemCatalog :price=item.price :rate=item.rate :options=item.options></ItemCatalog>
    </div>
</template>
