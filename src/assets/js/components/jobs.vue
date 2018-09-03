<template lang="html">
    <!-- sobre mim -->
    <section id="jobs" class='py-5'>

        <div class="row px-5 py-4">
            <div class="col-12 mb-3">
                <h2 class="text-primary"><i class="fas fa-laptop mr-2"></i> Alguns dos meus trabalhos</h2>
            </div>

            <div data-aos="fade-down" data-aos-delay="50" class="col-12 col-md-6 col-lg-4 d-flex stuff-item">
                <div class="card mb-3 z-depth-1">
                    <a href="https://bestberry.com.br" target="_blank">
                        <img src="/src/assets/img/jobs/bestberry.png" class='card-img-top img-fluid' alt="">
                    </a>
                    <div class="card-body">
                        <p class="lead text-center rounded">
                            <a href="https://bestberry.com.br" target="_blank" class="btn-secondary btn-block">
                                <strong>Bestberry box</strong>
                            </a>
                        </p>
                        <p>
                            <span class="text-primary"><strong>Tecnologias:</strong></span> php, mysql, javascript, jenkins <br>
                            <span class="text-primary"><strong>Frameworks:</strong></span> Laravel, Vuejs<br>
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-down" data-aos-delay="100" class="col-12 col-md-6 col-lg-4 d-flex stuff-item">
                <div class="card mb-3 z-depth-1">
                    <a href="https://vip.bestberry.com.br" target="_blank">
                        <img src="/src/assets/img/jobs/vip.png" class='card-img-top img-fluid' alt="">
                    </a>
                    <div class="card-body">
                        <p class="lead text-center text-secondary">
                            <a href="https://vip.bestberry.com.br" target="_blank" class="btn-secondary btn-block">
                                <strong>Clube vip Bestberry</strong>
                            </a>
                        </p>
                        <p>
                            <span class="text-primary"><strong>Tecnologias:</strong></span> php, mysql, javascript, jenkins <br>
                            <span class="text-primary"><strong>Frameworks:</strong></span> Laravel, Vuejs<br>
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-down" data-aos-delay="150" class="col-12 col-md-6 col-lg-4 d-flex stuff-item">
                <div class="card mb-3 z-depth-1">
                    <a href="https://mleve.com.br" target="_blank">
                        <img src="/src/assets/img/jobs/mleve.png" class='card-img-top img-fluid' alt="">
                    </a>
                    <div class="card-body">
                        <p class="lead text-center text-secondary">
                            <a href="https://mleve.com.br" target="_blank" class="btn-secondary btn-block">
                                <strong>Mleve</strong>
                            </a>
                        </p>
                        <p>
                            <span class="text-primary"><strong>Tecnologias:</strong></span> php, mysql, javascript, jenkins <br>
                            <span class="text-primary"><strong>Frameworks:</strong></span> Laravel, Vuejs<br>
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-down" data-aos-delay="200" class="col-12 col-md-6 col-lg-4 d-flex stuff-item">
                <div class="card mb-3 z-depth-1">
                    <a href="https://aquieseguro.com.br" target="_blank">
                        <img src="/src/assets/img/jobs/aquieseguro.png" class='card-img-top img-fluid' alt="">
                    </a>
                    <div class="card-body">
                        <p class="lead text-center text-secondary">
                            <a href="https://aquieseguro.com.br" target="_blank" class="btn-secondary btn-block">
                                <strong>Aqui é seguro</strong>
                            </a>
                        </p>
                        <p>
                            <span class="text-primary"><strong>Tecnologias:</strong></span> php, mysql, javascript <br>
                            <span class="text-primary"><strong>Frameworks:</strong></span> Laravel, angularjs<br>
                        </p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-down" data-aos-delay="250" class="col-12 col-md-6 col-lg-4 d-flex stuff-item">
                <div class="card mb-3 z-depth-1">
                    <a href="http://laser-caf-hpv.com.br" target="_blank">
                        <img src="/src/assets/img/jobs/lasercaf.png" class='card-img-top img-fluid' alt="">
                    </a>
                    <div class="card-body">
                        <p class="lead text-center text-secondary">
                            <a href="http://laser-caf-hpv.com.br" target="_blank" class="btn-secondary btn-block">
                                <strong>Centro Médico TGI</strong>
                            </a>
                        </p>
                        <p>
                            <span class="text-primary"><strong>Tecnologias:</strong></span> php, javascript <br>
                            <span class="text-primary"><strong>Frameworks:</strong></span> Codeigniter<br>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!-- sobre mim -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.stuff-item{
    position:relative;
    transform: translateY(0);
    transition: .2s all;
    .icon{
        max-width:100px
    }
    &.up{
        transform: translateY(-10px);
        transition: .2s all;
    }
}
</style>
