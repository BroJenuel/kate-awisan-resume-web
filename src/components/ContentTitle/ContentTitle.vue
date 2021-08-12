<template>
    <div class="about-page-title-head text-center text-size-34px font-medium text-dark-50 relative mb-20px">
        <div class="pb-20px">{{title}}</div>
        <div class="absolute block w-[120px] h-1px bg-[#ddd] bottom-1px left-[calc(50%-60px)] translate-y-20px"></div>
        <div class="absolute block w-40px h-3px bg-[#0563bb] bottom-1px left-[calc(50%-20px)] translate-y-20px"></div>
    </div>
</template>
<script>
export default {
    name: "ContentTitle",
    props: ['title']
}
</script>