import { component$ } from '@builder.io/qwik';

export default component$(() => {

    return (
        <div class="flex flex-col justify-center items-center gap-[5em] py-[5em] border-t-2 border-l-0 border-r-0 border-b-0 border border-white">
            <div class="flex flex-col md:flex-row justify-center items-center gap-[3em]">
                <picture>
                    <img src="./src/img/voltz_white.webp" alt="Voltz" loading="lazy" height="50px" width="250px" />
                </picture>
                <picture>
                    <img src="./src/img/association.webp" alt="Associação Brasileira de Administradora de Consórcios" loading="lazy" height="70px" width="290px" />
                </picture>
                <picture>
                    <img src="./src/img/banco_central.webp" alt="Banco Central do Brasil" loading="lazy" height="50px" width="290px" />
                </picture>
                <picture>
                    <img src="./src/img/reclame_aqui.webp" alt="Reclame Aqui" loading="lazy" height="70px" width="220px" />
                </picture>
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center gap-[3em]">
                <p class="text-white text-sm font-normal text-center shrink-1 max-w-[calc(100%/3)]">
                    Há 33 anos, somos uma administradora que busca acessibilizar crédito para aumentar o patrimônio de seus consorciados, de forma acolhedora, altruísta, prestativa e educadora.
                </p>
                <picture class="shrink-1 max-w-[calc(100%/3)]">
                    <img src="./src/img/ancora.webp" alt="Âncora Consórcios" loading='lazy' height="70px" width="250px" />
                </picture>
                <p class="text-white text-sm font-normal text-center shrink-1 max-w-[calc(100%/3)]">
                    O nosso objetivo é buscar novas oportunidades para aquisição de bens e realização de sonhos com o endosso de grandes marcas do mercado, sempre sob uma ótica humanizada, com transparência, honestidade e justiça para a prosperidade de seus clientes e colaboradores.
                </p>
            </div>
        </div>
    )

})
