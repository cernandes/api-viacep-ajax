document.querySelector('.input-cep').addEventListener('blur', event => {/*capturar o evento no formulário*/

    let myCep = document.querySelector('.input-cep').value.replace('-', '') /*obter o valor do formulário no momento do evento e guardar em uma variável, usar o replace() para subtrair o (-) caso seja digitado nesse formato*/
    let ajax = new XMLHttpRequest()/*instânciar o método nativo para requisições ajax XMLHttpRequest()*/

    ajax.open('GET', 'https://viacep.com.br/ws/' + myCep + '/json/', true)/*fazer a requisição da API do viaCEP com o método open(), o método espera por três parâmetros, primeiro o verbo HTTP, segundo a URL da requisição, terceiro o tipo de requisição assíncrona(true) ou síncrona(false), padrão (true). Concatenar a variável com o valor atual do cep no corpo da URL */

    ajax.send()/*enviar a requisição ajax*/

    ajax.onreadystatechange = () => { /*verificar o retorno da requisição com o método onreadystatechange()*/

        if (ajax.readyState == 4 && ajax.status == 200) { /*se o estado for finalizado(4) e o status ok(200), retornar o response da requisição com o valor em formato de string, usar o JSON.parse para converte string para um objeto json*/

            let data = JSON.parse(ajax.responseText)/*guardar a reposta da consulta a API em uma variável para facilitar o uso*/
           
            /* distribui o valor do retorno da consulta nos respectivos campos do formulario */
            document.querySelector(".rua").value = data.logradouro
            document.querySelector(".bairro").value = data.bairro
            document.querySelector(".cidade").value = data.localidade
            document.querySelector(".estado").value = data.uf
        }
    }
})

