import { component$ } from '@builder.io/qwik';
import plug from "./src/img/plug.png";
import line from "./src/img/line.png";
import voltz1 from "./src/img/110v.png";
import voltz2 from "./src/img/220v.png";
import emission from "./src/img/zero-emission.png"
import sound from "./src/img/no-sound.png"

export default component$(() => {

    return (
        <section class="bg-black text-white min-h-[70vh]">
            <div class="flex px-8 md:px-0 flex-col md:flex-row justify-around items-center py-10">
                <div class="left gap-3 flex flex-col justify-center items-center text-center min-w-[50%] md:max-w-[50%]">
                    <picture>
                        <img src={plug} loading='lazy' alt="100% elétrico" height=" 150px" width="140px" />
                    </picture>
                    <h3 class="font-extrabold text-voltz_blue text-3xl">
                        100% elétrica
                    </h3>
                    <picture>
                        <img src={line} alt="separador" loading='lazy' width="310px" height="30px" />
                    </picture>

                    <div class="flex justify-evenly gap-5 flex-row min-w-[60%] max-w-[80%]">
                        <picture>
                            <img src={voltz1} loading='lazy' alt="110 volts" height="120px" width="120px" />
                        </picture>
                        <picture>
                            <img src={voltz2} loading="lazy" alt="220 volts" height="120px" width="120px" />
                        </picture>
                    </div>
                    <p class="text-medium text-lg md:text-xl text-center md:max-w-[600px]">
                        Nossas motos são elétricas e podem ser carregadas em tomadas comuns de 127V ou 220V.
                        <br/>
                        O usuário pode optar por remover as baterias para carregá-las ou conectar a própria moto à fonte de energia.
                    </p>
                </div>
                <div class="right flex flex-col justify-center items-center text-center min-w-[50%] mt-10 md:mt-0 md:max-w-[50%]">
                    <div class="flex gap-2 md:gap-0 flex-row justify-center items-start">
                        <div class="flex flex-col justify-start items-center min-w-[50%] max-w-[50%] h-full gap-3">
                            <picture>
                                <img src={emission} alt="Sem emissão de gases poluentes" loading='lazy' height=" 170px" width="140px" />
                            </picture>
                            <p class="font-medium text-xl text-center">Sem emissão de gases poluentes.</p>
                        </div>
                        <div class="flex flex-col justify-start items-center min-w-[50%] max-w-[50%] h-full gap-2">       
                            <picture>
                                <img src={sound} alt="Motor silencioso" loading='lazy' height=" 180px" width="150px" />
                            </picture>
                            <p class="font-medium text-xl">Motor silencioso.</p>
                        </div>
                    </div>

                    <button class="outline-none bg-transparent py-3 px-20 font-medium text-xl border hover:text-black border-voltz_blue rounded-[10px] hover:outline-none hover:bg-voltz_blue transition-all mt-[4em]" 
                        onClick$={() => { window.scrollTo(0, 0); }}
                    >
                        Saiba Mais
                    </button>
                </div>
            </div>
        </section>
    )
})
