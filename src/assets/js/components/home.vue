<template lang="html">
    <!-- header -->
    <header id="header" class="p-2 d-flex justify-content-center align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="fa-4x text-primary m-0"><strong>Thiago Silva</strong></h1>
                    <h2 class="text-white" >Desenvolvimento web</h2>
                </div>
            </div>
        </div>
    </header>
    <!-- header -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#header{
    // background-color: #282c34;
    background-image: url('/src/assets/img/header.png');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 80vh;
    h1{
        font-size: 8rem;
    }
}
</style>
