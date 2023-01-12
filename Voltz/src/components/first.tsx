import { component$ } from '@builder.io/qwik';
import Form from './form';

export default component$(() => {

    return (
        <section class="flex flex-col md:flex-row justify-around bg-first-bg bg-cover md:min-h-[100vh] bg-no-repeat">
            <div class="flex flex-col md:flex-row md:pt-16 px-5 justify-around min-w-full">
                <div class="left text-center">
                    <h1 class="font-extrabold text-5xl mt-[1em]">Consórcio Voltz</h1>
                    <h3 class="mb-6 md:mb-0 text-3xl font-medium">realize o sonho de ter uma moto elétrica</h3>
                </div>

                <div class="right mb-6 md:mb-0 min-w-[25vw]">
                    <Form/>
                </div>

            </div>
        </section>
    )
})