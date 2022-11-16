import React, { useState } from 'react';
import '../../assets/css/Duvidas_client.css'
import '../../assets/css/Ajuda_duvida_client.css'
import duvidas_img from '../../assets/img/cover-duvidas.png'
import earth_divulga from '../../assets/img/CartaoCelular.png'

export const Duvidas_client = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    const [toggle5, setToggle5] = useState(false)
    const [toggle6, setToggle6] = useState(false)
    const [toggle7, setToggle7] = useState(false)
    const [toggle8, setToggle8] = useState(false)
    const [toggle9, setToggle9] = useState(false)
    const [toggle10, setToggle10] = useState(false)
    const [toggle11, setToggle11] = useState(false)
    const [toggle12, setToggle12] = useState(false)
    const [toggle13, setToggl13] = useState(false)
    const [toggle14, setToggle14] = useState(false)
    const [toggle15, setToggle15] = useState(false)
    const [toggle16, setToggle16] = useState(false)
    const [toggle17, setToggle17] = useState(false)
    const [toggle18, setToggle18] = useState(false)
    const [toggle19, setToggle19] = useState(false)
    const [toggle20, setToggle20] = useState(false)
    const [toggle21, setToggle21] = useState(false)
    const [toggle22, setToggle22] = useState(false)

    return (
        <div className='Duvidas_client-div'>
            <div className='Duvidas_client-div-info'>
                <div className='Duvidas_client-div-info-1'>
                    <p id='duvidas-p'>
                    Tá com alguma dúvida?
                    </p>
                    <span id='duvidas-span'>
                    Reunimos em categorias as respostas para as suas principais dúvidas. É só clicar no assunto que procura para filtrar as perguntas já respondidas.
                    </span>
                </div>
                <div className='Duvidas_client-div-info-2'>
                    <img id='duvidas-img' src={duvidas_img} alt="" />
                </div>
            </div>
            <div className='Duvidas_client-div-respostas'>
                <div  className='Duvidas_client-div-categorias'>
                    <div className='Duvidas_client-div-img-circulo'></div>
                    <img id='duvidas-earth-divulga' src={earth_divulga} alt="" />
                    <div className='Duvidas_client-div-img-circulo-2'></div>
                </div>

                <div  className='Duvidas_client-div-respostas-duvidas'>
                    <div className='Duvidas_client-Ajuda'>
                        <div className='Duvidas_client-duvidas'>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle(!toggle)}}><span id='Duvidas_client-span-duvidas'>Como faço para ter o cartão de crédito no earth?
                                    {toggle && (<div  className='Duvidas_client-accordionItem_dentro' >
                                        <p>A gente pode te dar algumas dicas, que são:</p>
                                        <p>Todos esses fatores são usados para analisar o seu perfil e atribuição de limites.</p>
                                        <p>As análises e reanálises de crédito são feitas de forma automática e nelas consideramos informações do mercado financeiro, 
                                            comportamentais de consumo e regras internas de concessão de crédito.</p>
                                        <p>Se você quiser fazer uma análise na hora, dá pra pedir pelo app em dias úteis, das 08h00 às 17h00, clicando no Menu "Cartão" = 
                                            "Pedir cartão de crédito".</p>
                                    </div>)}
                                </span></button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle1(!toggle1)}}> <span id='Duvidas_client-span-duvidas'> É necessário ter uma renda mínima para abrir uma conta earth?   
                                    {toggle1 &&(<div  className='Duvidas_client-accordionItem_dentro' >
                                        <p>Não é necessário ter uma renda mínima para abrir a sua conta.</p>
                                    </div> ) }   
                                </span></button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle2(!toggle2)}}> <span id='Duvidas_client-span-duvidas'> O earth é do Clowns Black Company?
                                    {toggle2 &&(<div  className='Duvidas_client-accordionItem_dentro' >
                                        <p>
                                        Sim. O earth é do Clowns Black Company. Unimos toda a 
                                        comodidade de um Banco 100% digital com a solidez e segurança da Organização Clowns Black Company.
                                        </p>
                                        <p>Estamos sempre evoluindo para proporcionar uma experiência cada vez melhor aos nossos clientes.</p>
                                    </div>)}   
                                </span></button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > 
                                    <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle4(!toggle4)}} >
                                     <span id='Duvidas_client-span-duvidas'>Como cadastrar o PIN para realizar pagamentos no WhatsApp?
                                    {toggle4 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>Durante o processo de cadastro do cartão next no WhatsApp, será necessário criar um</p>
                                        <p>PIN (senha) de pagamento de 6 dígitos. É necessário digitar esse PIN a cada pagamento que for realizado.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle5(!toggle5)}} > 
                                    <span id='Duvidas_client-span-duvidas'>Como cancelar o cartão em casos de perda ou roubo?
                                    {toggle5 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>Você pode cancelar e já pedir um novo cartão no app do next em Menu "Cartão" - "2ª</p>
                                        <p>via e cancelamento" - "Escolher o motivo Perda ou Roubo" - seguir o passo a passo das telas.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle6(!toggle6)}} > 
                                    <span id='Duvidas_client-span-duvidas'>Como faço para ligar/desligar a função de aproximação do meu cartão?
                                    {toggle6 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>Para ligar / desligar a função de aproximação do seu cartão, é só entrar no app earth em</p>
                                        <p>menu "Cartão" - "Configurações do Cartão" - "Comprar por aproximação" - depois é só</p>
                                        <p>clicar na chave para ativar e desativar a função sempre que desejar.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle7(!toggle7)}} > 
                                    <span id='Duvidas_client-span-duvidas'>Fazer compras por aproximação é seguro?
                                    {toggle7 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>Sim. Os pagamentos de compras por aproximação utilizam uma tecnologia mundialmente utilizada e segura.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle8(!toggle8)}} > 
                                    <span id='Duvidas_client-span-duvidas'>Posso usar o cartão earth no exterior?
                                    {toggle8 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>Sim. Só precisa fazer o "Aviso Viagem" no app do next ou central de atendimento.</p>
                                        <p>Você pode usar para fazer compras no crédito, se possuir crédito contratado no cartão. Caso seu cartão seja só de débito, você consegue utilizar para realizar saques.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle9(!toggle9)}} > <span id='Duvidas_client-span-duvidas'>Como peço aumento do limite do meu cartão de crédito?
                                    {toggle9 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <span>Para pedir o aumento do limite de cartão de crédito é só acessar o app next em Menu "Cartão" - "Ver Limite" - "Pedir mais limite" e solicitar uma análise na hora.
                                             O pedido pode ser feito em dias úteis das 08h00 às 17h00 e, se for aprovado e aceito, estará disponível no próximo dia útil.</span>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle10(!toggle10)}} > 
                                    <span id='Duvidas_client-span-duvidas'>Qual o limite para transferência de valores nos pagamentos via WhatsApp?
                                    {toggle10 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <span>Você pode enviar até R$1.000,00 por transação e receber até vinte transações por dia, ou R$ 5.000,00 por mês. Ao atingir o limite, você não poderá enviar nem receber pagamentos.
                                             Tente efetuar a transação novamente mais tarde.</span>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle11(!toggle11)}} > 
                                    <span id='Duvidas_client-span-duvidas'>Comecei o cadastro da abertura da conta, mas quero terminar em outro momento. Consigo fazer isso?
                                    {toggle11 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>É só fechar o app do next ou selecionar a opção "Terminar mais tarde".</p>
                                        <span>Depois é só acessar o aplicativo novamente, inserir seu CPF e senha cadastrada, e continuar de onde parou.</span>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle12(!toggle12)}} > 
                                    <span id='Duvidas_client-span-duvidas'>Como alterar a cesta de serviços?
                                    {toggle12 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <span>Para alterar a cesta de serviços, você precisa acessar sua conta no app next e ir em Menu - "Clicar no seu perfil" - "Troca de Cesta de Serviços".</span>
                                        <span>Esse serviço só pode ser realizado em dias úteis das 08h00 às 17h00. O cartão já deve estar desbloqueado ou o cliente deve falar com a gente via chat.</span>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle13(!toggle13)}} > 
                                    <span id='Duvidas_client-span-duvidas'>É necessário fazer algum depósito para abrir uma conta earth?
                                    {toggle13 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <span>Não é necessário nenhum tipo de depósito. Depois que sua conta for aprovada, já pode usar à vontade.</span>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle14(!toggle14)}} > 
                                    <span id='Duvidas_client-span-duvidas'>É necessário ter uma renda mínima para abrir uma conta earth?
                                    {toggle14 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                    <span>Você precisa informar uma renda de, no mínimo R$ 0,01 para abrir a sua conta next.</span>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle15(!toggle15)}} > 
                                    <span id='Duvidas_client-span-duvidas'>Qual é o prazo de resposta para abertura de conta earth?
                                    {toggle15 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>A gente te responde via e-mail entre 03 e 05 dias úteis.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle16(!toggle16)}} > 
                                <span id='Duvidas_client-span-duvidas'>Como solicitar o extrato da conta?
                                    {toggle16 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <span>É possível visualizar o extrato de duas formas: Menu - "Comprovantes" - "Extrato" ou Menu - "Saldo e Extrato". Você tem a opção de escolher entre conta-corrente ou conta-poupança.</span>
                                        <span>Depois, escolha o período, selecione em "Visualizar" e o extrato será gerado. A consulta ficará disponível pelo período de 12 meses.</span>
                                    </div>)}</span>
                                </button>
                            </div>
                            {/* <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div>
                            <div className='Duvidas_client-accordionBox'>
                                <button className='Duvidas_client-accordionItem' type='button' onClick={() => {setToggle3(!toggle3)}} > <span id='Duvidas_client-span-duvidas'>O earth tem agência?
                                    {toggle3 &&(<div className='Duvidas_client-accordionItem_dentro' >
                                        <p>O earth não possui agência própria, mas se precisar, pode ir em qualquer agência do Bradesco.</p>
                                    </div>)}</span>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
