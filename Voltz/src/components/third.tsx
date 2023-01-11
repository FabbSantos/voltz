import { component$ } from '@builder.io/qwik';

export default component$(() => {

    return (
        <section class="border-t-2 border-b-2 border-white bg-black">
            <div class="flex flex-col md:flex-row items-center text-center justify-evenly md:max-w-[1400px] mx-auto py-[1em] gap-[6em]">
                <p class="font-extrabold text-4xl text-white"><span class="outlined text-6xl">Sem</span><br/>
                Entrada
                </p>
                <p class="font-extrabold text-4xl text-white"><span class="outlined text-6xl">0%</span><br />
                    Juros
                </p>
                <p class="font-extrabold text-4xl text-white">Até <span class="outlined text-6xl">90</span> meses<br />
                    para pagar
                </p>
            </div>

        </section>
    )

})