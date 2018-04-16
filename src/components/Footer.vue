<template>
    <footer class="footer">
        <div class="container">
            <div class="content">
                <h3>William Blair</h3>
                <p>
                    <a href="https://bulma.io">
                        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                    </a>
                </p>
                <p v-text="lastModified"></p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        lastModified() {
            let lastMod = document.lastModified;
            return "Last Modified: " + lastMod;
        }
    }
}
</script>

<style lang="scss">
</style>
