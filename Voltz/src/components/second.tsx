import { component$ } from '@builder.io/qwik';

export default component$(() => {

    return (
        <section class="bg-black text-white min-h-[70vh]">
            <div class="flex flex-col md:flex-row justify-around items-center py-10">
                <div class="left gap-3 flex flex-col justify-center items-center text-center min-w-[50%] max-w-[50%]">
                    <picture>
                        <img src="./src/img/plug.png" loading='lazy' alt="100% elétrico" height=" 150px" width="140px" />
                    </picture>
                    <h3 class="font-extrabold text-voltz_blue text-3xl">
                        100% elétrica
                    </h3>
                    <picture>
                        <img src="./src/img/line.png" alt="separador" />
                    </picture>

                    <div class="flex justify-evenly flex-row min-w-[60%] max-w-[80%]">
                        <picture>
                            <img src="./src/img/110v.png" loading='lazy' alt="110 volts" height="120px" width="120px" />
                        </picture>
                        <picture>
                            <img src="./src/img/220v.png" loading="lazy" alt="220 volts" height="120px" width="120px" />
                        </picture>
                    </div>
                    <p class="text-medium text-lg md:text-xl text-center md:max-w-[600px]">
                        Nossas motos são elétricas e podem ser carregadas em tomadas comuns de 127V ou 220V.
                        <br/>
                        O usuário pode optar por remover as baterias para carregá-las ou conectar a própria moto à fonte de energia.
                    </p>
                </div>
                <div class="right flex flex-col justify-center items-center text-center min-w-[50%] max-w-[50%]">
                    <div class="flex flex-row justify-center items-start">
                        <div class="flex flex-col justify-start items-center min-w-[50%] max-w-[50%] h-full gap-3">
                            <picture>
                                <img src="./src/img/zero-emission.png" alt="Sem emissão de gases poluentes" loading='lazy' height=" 170px" width="140px" />
                            </picture>
                            <p class="font-medium text-xl text-center">Sem emissão de gases poluentes.</p>
                        </div>
                        <div class="flex flex-col justify-start items-center min-w-[50%] max-w-[50%] h-full gap-2">       
                            <picture>
                                <img src="./src/img/no-sound.png" alt="Motor silencioso" loading='lazy' height=" 180px" width="150px" />
                            </picture>
                            <p class="font-medium text-xl">Motor silencioso.</p>
                        </div>
                    </div>

                    <button class="outline-none bg-transparent py-3 px-20 font-medium text-xl border border-voltz_blue rounded-[10px] hover:outline-none hover:bg-voltz_blue transition-all mt-[4em]">
                        Saiba Mais
                    </button>
                </div>
            </div>
        </section>
    )
})
