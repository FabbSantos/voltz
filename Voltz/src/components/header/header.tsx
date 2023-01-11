import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import {PhoneIcon} from "heroicons-qwik/24/outline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li class="flex flex-row justify-evenly">
          <span class="h-3 w-3">
            <PhoneIcon className="h-6 w-6 text-blue-500"/>
          </span>
          <a class="text-left" href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            ATENDIMENTO<br /><b>(16) 2103-3535</b>
          </a>
        </li>
        <li >
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
