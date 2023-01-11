import { component$ } from '@builder.io/qwik';
import Form from './form';

export default component$(() => {

    return (
        <section class="flex flex-col md:flex-row justify-around bg-first-bg bg-cover md:min-h-[100vh] bg-no-repeat">
            <div class="flex">
                <div class="left text-center">
                    <h1 class="font-extrabold md:text-5xl mt-[2em]">Consórcio Voltz</h1>
                    <h3 class="md:text-3xl font-medium">realize o sonho de ter uma moto elétrica</h3>
                </div>

                <div class="right min-w-[25vw]">
                    <Form/>
                </div>

            </div>
        </section>
    )
})