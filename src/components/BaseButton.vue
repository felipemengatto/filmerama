<template>
    <button :class="`btn ${classes} text-uppercase`"
        @click="onClick"
        type="button">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',
        props: {
            classes: {
                default: 'btn-primary',
                required: false,
                type: String
            },
            text: {
                required: true,
                type: String
            },
        },
        methods: {
            onClick(event) {
                this.$emit('click', event);
            }
        }
    }
</script>