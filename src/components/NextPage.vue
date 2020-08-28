<template>
    <div>
        <h1>
            こんにちは!!
        </h1>
        <div class="Container">
            <!-- example
            <h2>item: {{ item.name }}</h2>
            <h2>price: {{ item.price }}</h2>
            -->
            <!--リストを以下に作成する-->
            <!--参考サイト:http://www.tohoho-web.com/bootstrap/index.html-->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item: {
                name: "",
                price: 0,
            },
        };
    },
    created() {},
};
</script>
