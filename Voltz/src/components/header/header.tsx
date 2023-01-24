import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { VoltzLogo } from '../icons/qwik';
import styles from './header.css?inline';
// import {PhoneIcon} from "heroicons-qwik/24/outline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="flex  flex-row justify-evenly max-w-[1300px] mx-auto">
      <div class="logo md:m-5 p-4">
        <VoltzLogo />
      </div>
    </header>
  );
});
