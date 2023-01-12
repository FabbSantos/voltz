import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
// import {PhoneIcon} from "heroicons-qwik/24/outline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="flex  flex-row justify-evenly max-w-[1300px] mx-auto">
      <div class="logo md:m-5 p-4">
        <QwikLogo />
      </div>
      <div class="menu block md:hidden absolute h-[23px] w-[35px] top-[15px] right-[20px] z-[2]">
        <input class="block md:hidden  absolute h-[32px] w-[30px] top-[20px] right-[20px] z-[10] opacity-0" type="checkbox" ></input>
        <div class="lines">
          <div class="bg-black w-10 h-[3px] mb-3 rounded-sm"></div>
          <div class="bg-black w-10 h-[3px] mb-3 rounded-sm"></div>
          <div class="bg-black w-10 h-[3px] mb-3 rounded-sm"></div>
        </div>
        <ul class="menu-items  md:block">
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
      </div>

      <ul class=" hidden md:block">
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
