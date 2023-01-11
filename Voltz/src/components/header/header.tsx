import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
// import {PhoneIcon} from "heroicons-qwik/24/outline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="flex flex-row justify-evenly max-w-[1300px] mx-auto">
      <div class="logo md:m-5">
          <QwikLogo />
      </div>

      <ul>
        <li class="flex flex-row justify-evenly">
          <a class="text-left text-black" href="tel:(16) 2103-3535" target="_blank" >
            ATENDIMENTO<br /><b>(16) 2103-3535</b>
          </a>
        </li>
        <li class="flex flex-row justify-evenly">
          <a class="text-left text-black" href="https://api.whatsapp.com/send?phone=551621033535&text=Ol%C3%A1%2C%20gostaria%20de%20atendimento%20sobre%20a%20Voltz%20Cons%C3%B3rcio%20Nacional" target="_blank">
            WHATSAPP ATENDIMENTO<br /><b>(16) 2103-3535</b>
          </a>
        </li>
        <li class="flex flex-row justify-evenly">
          <a class="text-left text-black" href="https://api.whatsapp.com/send?phone=551640420703&text=Ol%C3%A1%2C%20gostaria%20de%20atendimento%20sobre%20a%20Voltz%20Cons%C3%B3rcio%20Nacional" target="_blank">
            WHATSAPP VENDAS<br /><b>(16) 4042-0703</b>
          </a>
        </li>
      </ul>
    </header>
  );
});
