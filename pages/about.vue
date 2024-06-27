<script>

export default {
    // name: 'about',
    data() { 
        return {
            age: 26,
            name: 'Peter',
            surname: 'I',
            attr: '/css.jpg'
        }
    }   
}

</script>

<template>
    <h1 class=" text-4xl"> {{ age }} </h1>
    <img :src="attr">
    
    <span>{{ name }}</span>
    <span>{{ surname }}</span>
    <!-- <ul>
        <li v-for="item in data">
            <p>Название: {{item.name}}</p>
            <p>Цена: {{item.price}}</p>
        </li>
    </ul> -->
</template>