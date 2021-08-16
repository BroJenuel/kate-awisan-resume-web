<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :width="size"
        :height="size"
        :style="`fill: ${color}; transform: ; msfilter: `"
        v-html="getIcon"
    ></svg>
</template>
<script>
import { getIcon } from './icons';
export default {
    name: 'Icon',
    props: {
        size: { type: [String, Number], default: '24' },
        color: { type: String, default: 'rgba(0, 0, 0, 1)' },
        name: { type: String, default: 'home' },
    },
    setup(props) {
        return {
            getIcon: getIcon(props.name),
        };
    },
};
</script>