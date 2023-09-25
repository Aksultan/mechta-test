<template>
    <div>
        <div>
            <div v-for="delivery in delivery_types" :key="delivery.name">
                <h6>
                    {{delivery.name}}
                </h6>
                <img :src="delivery.image" :alt="delivery.name">
            </div>
        </div>
    </div>
</template>

<script setup>
const delivery_types = [
    {
        name: "Pick up",
        image: "@/assets/pickup-delivery.svg"
    },
    {
        name: "Courier",
        image: "@/assets/courier-delivery.svg"
    },
    {
        name: "Post",
        image: "@/assets/post-delivry.svg"
    }
]
</script>