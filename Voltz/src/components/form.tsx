import { component$, useStyles$, useStore } from '@builder.io/qwik';


export function handleName(e: Event, data: any) {
    if ((e.target as HTMLInputElement).value.length > 60) {
        (e.target as HTMLInputElement).value = data.name
    } else {
        data.name = (e.target as HTMLInputElement).value
    }
    // console.log (name, data)
}


export default component$(() => {

    const data = useStore({
        name: '',
        lastname:'',
        email: '',
        tel: '',
        estado:'',
    })

    useStyles$(form)


    return (
        <form action="/contact" method="POST" >

            <h3 class="font-extrabold text-white text-2xl pb-6"> Quer saber mais? </h3 >

            <div class="flex flex-row gap-2">
                <fieldset>
                    <input required id="name" type="text" placeholder='Nome' maxLength={20} onInput$={(e) => (data.name = (e.target as HTMLInputElement).value)} />
                </fieldset>
                <fieldset>
                    <input required id="lastname" type="text" placeholder='Sobrenome' maxLength={30} onInput$={(e) => (data.lastname = (e.target as HTMLInputElement).value)} />
                </fieldset>
            </div>

            <fieldset>
                <input required id="tel" type="tel" placeholder='Telefone de contato Whatsapp' maxLength={20} onInput$={(e) => (data.tel = (e.target as HTMLInputElement).value)} />
            </fieldset>

            <fieldset>
                <input required id="email" type="email" placeholder='E-mail' maxLength={100} onInput$={(e) => (data.email = (e.target as HTMLInputElement).value)} />
            </fieldset>

            <div class="flex flex-row gap-2">
                <fieldset>
                    <select required id="estado"  placeholder='Estado' onInput$={(e) => (data.estado = (e.target as HTMLInputElement).value)} 
                    >
                        <option value="Acre (AC)">add</option>
                        <option value="Alagoas (AL)"></option>
                        <option value="Amapá (AP)"></option>
                        <option value="Amazonas (AM)"></option>
                        <option value="Bahia (BA)"></option>
                        <option value="Ceará (CE)"></option>
                        <option value="Distrito Federal (DF)"></option>
                        <option value="Espírito Santos (ES)"></option>
                        <option value="Goias (GO)"></option>
                        <option value="Maranhão (MA)"></option>
                        <option value="Mato Grosso (MT)"></option>
                        <option value="Mato Grosso do Sul (MS)"></option>
                        <option value="Minas Gerais (MG)"></option>
                        <option value="Pará (PA)"></option>
                        <option value="Paraíba (PB)"></option>
                        <option value="Paraná (PR)"></option>
                        <option value="Pernambuco (PE)"></option>
                        <option value="Piauí (PI)"></option>
                        <option value="Rio de Janeiro (RJ)"></option>
                        <option value="Rio Grande do Norte (RN)"></option>
                        <option value="Rio Grande do Sul (RS)"></option>
                        <option value="Rondônia (RO)"></option>
                        <option value="Roraima (RR)"></option>
                        <option value="Santa Catarina (SC)"></option>
                        <option value="São Paulo (SP)"></option>
                        <option value="Sergipe (SE)"></option>
                        <option value="Tocantins (TO)"></option>
                    </select>
                </fieldset>
            </div>

            <fieldset class="hover:border-transparent transition">
                <button id="submit" type="submit" value="submit">Get in touch</button>
            </fieldset>

        </form>
    )
})

export const form = `
  form {
    background-color: black;
    padding: 2em;
    border-radius: 10px; 
    text-align: center;
  }
  form h1 {
    font-size: 1.7em;
  }
  fieldset {
    border: 1px solid white;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  form button {
    padding: 10px 0px;
    width: 100%;
    border-radius: 5px;
    
    transition: background-color .2s ease-in-out;
    color: white;
    
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 1em;

    cursor: pointer;

  }

  form button:hover,  {
    outline:none;
  }
  select {
    width: 100%;
  }

  input {
    font-family: "Montserrat", sans-serif;
    font-size: .8em;
    color: white;
    
    background-color: transparent;
    border-radius: 5px;
    
    padding: 10px 0px 10px 10px; 
    width: 95%;
  }
  input:invalid {
    border-color: #900;
  }

  input:focus:invalid {
    outline: none;
  }
`