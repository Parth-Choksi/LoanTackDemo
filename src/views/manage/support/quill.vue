<template>
    <div class="quill_main">
        <editor v-model="value" theme="snow" :options="options"></editor>
    </div>
</template>

<script>
export default {
        data() {
            return {
                value: '',
                options: {
                    modules: {

                        'toolbar': [
                            // [{ 'size': [] }],
                            // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            // [{ 'color': [] }, { 'background': [] }],
                            // [{ 'script': 'super' }, { 'script': 'sub' }],
                            // [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
                            // [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                            // [{ 'direction': 'rtl' }, { 'align': [] }],
                            // ['link', 'image', 'video', 'formula'],
                            // ['clean']
                        ],
                    },
                }
            }
        },

        methods: {
            // val() {
            //     this.value = "This's new value";
            // },

            // onChange(html, text) {
            //     console.log(html.length, text.length);
            // },


        },

    }
</script>

<style lang="scss">
.ql-container{
    height: 100px!important;
}
</style>