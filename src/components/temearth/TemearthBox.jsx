import '../../assets/css/TemearthBox.css'
import pix from '../../assets/img/pix-img.png'
import cartao from '../../assets/img/capa (2).png'
import Curva from '../../assets/img/curva-5.png'
import poupanca from '../../assets/img/poupanca.png'
import emprestimos from '../../assets/img/emprestimo.png'
import seguro from '../../assets/img/seguro.png'
import amigo from '../../assets/img/grupo-de-tres-homens-de-pe-lado-a-lado-abracando-se.png'
import watss from '../../assets/img/174879.png'


export const TemearthBox = () => {
    return (
        <div className="TemearthBox-div">
            <div className="TemearthBox-box">
                <div className="TemearthBox-componet-1">
                    <p id='Temearth-titulo'>Pix</p>
                    <span id='Temearth-contex'>O Pix é um sistema de pagamentos e transferências que veio pra mudar nossa forma de enviar e receber dinheiro.
                         Com ele, é possível fazer transações todos os dias, a qualquer horário, para qualquer banco. E o valor cai na conta em segundos.</span>
                    <p id='Temearth-titulo'>Como Funciona?</p>
                    <span id='Temearth-contex'>Com o Pix, você não precisa usar os dados de agência e conta. Basta cadastrar as chaves Pix (CPF, número de celular, e-mail e/ou chave aleatória*)
                         e informá-las pra quem vai te pagar. Outra forma de receber pagamentos com o Pix é por QR Code, é só criar o seu e enviar.</span>
                </div>
                <div className="TemearthBox-componet-2">
                    <img id='Temearth-img' src={pix} alt="" />
                </div>
            </div>
            <div id='Temearth-img-cust'><img id='Temearth-curva' src={Curva} alt="" /></div>
            {/* <div> Cort </div> */}
            <div className="TemearthBox-box">
                <div className="TemearthBox-componet-1">
                    <p id='Temearth-titulo'>Cartões earth</p>
                    <span id='Temearth-contex'>Ah, vale lembrar que, quando você abre a sua conta no earth, você já recebe o seu cartão de débito. Caso o crédito seja aprovado só depois, ele será ativado neste mesmo cartão.</span>
                    <p id='Temearth-titulo'>Como Funciona?</p>
                    <span id='Temearth-contex'>Ao abrir sua conta grátis, o earth automaticamente faz uma análise de crédito para verificar se você já pode ter o seu cartão.
                    Não se preocupe! Caso não consiga o seu cartão de crédito, novas análises serão feitas ao longo do ano ou você poderá solicitar uma análise na hora direto pelo app earth em:</span>
                </div>
                <div className="TemearthBox-componet-2">
                    <img id='Temearth-img' src={cartao} alt="" />
                </div>
            </div>
            <div id='Temearth-img-cust'><img id='Temearth-curva' src={Curva} alt="" /></div>
            {/* <div> Cort </div> */}
            <div className="TemearthBox-box">
                <div className="TemearthBox-componet-1">
                    <p id='Temearth-titulo'>Investimentos</p>
                    <span id='Temearth-contex'>Para quem quer começar a investir ou para quem já tem uma carteira de investimentos e quer diversificar, o earth tem investimentos para todos os perfis.</span>
                    <p id='Temearth-titulo'>Como Funciona?</p>
                    <span id='Temearth-contex'>Para quem quer começar a poupar ou separar o dinheiro da conta corrente e ao mesmo tempo fazê-lo render, a Poupança é a solução
                    Conte com toda a segurança do FGC (Fundo Garantidor de Crédito) e aproveite o rendimento a cada 30 dias.</span>
                </div>
                <div className="TemearthBox-componet-2">
                    <img id='Temearth-img' src={poupanca} alt="" />
                </div>
            </div>
            <div id='Temearth-img-cust'><img id='Temearth-curva' src={Curva} alt="" /></div>
            {/* <div> Cort </div> */}
            <div className="TemearthBox-box">
                <div className="TemearthBox-componet-1">
                    <p id='Temearth-titulo'>Empréstimos</p>
                    <span id='Temearth-contex'>Soluções para você tirar todos os seus planos do papel.No earth você encontra opções de empréstimos que se adaptam ao seu perfil e momento de vida.</span>
                    <p id='Temearth-titulo'>Como Funciona?</p>
                    <span id='Temearth-contex'>Nossas análises de crédito são feitas periodicamente e avisamos pelo app qualquer novidade sobre a aprovação. Enquanto espera, você pode seguir aproveitando todas as vantagens de ser earth.</span>
                </div>
                <div className="TemearthBox-componet-2">
                    <img id='Temearth-img' src={emprestimos} alt="" />
                </div>
            </div>
            <div id='Temearth-img-cust'><img id='Temearth-curva' src={Curva} alt="" /></div>
            {/* <div> Cort </div> */}
            <div className="TemearthBox-box">
                <div className="TemearthBox-componet-1">
                    <p id='Temearth-titulo'>Seguros</p>
                    <span id='Temearth-contex'>Seguros pra cuidar de você e de toda a família Seja para a sua casa, para seu cartão ou para sua saúde: aqui tem todas as opções de seguros para te deixar mais tranquilo!</span>
                    <p id='Temearth-titulo'>Como contratar?</p>
                    <span id='Temearth-contex'>De um jeito fácil de contratar Com apenas 3 cliques você faz tudo! Dá para ver todas as infos sobre os seguros, fazer uma simulação dos planos e contratar direto no app</span>
                </div>
                <div className="TemearthBox-componet-2">
                    <img id='Temearth-img' src={seguro} alt="" />
                </div>
            </div>
            <div id='Temearth-img-cust'><img id='Temearth-curva' src={Curva} alt="" /></div>
            {/* <div> Cort </div> */}
            <div className="TemearthBox-box">
                <div className="TemearthBox-componet-1">
                    <p id='Temearth-titulo'>Indique amigos</p>
                    <span id='Temearth-contex'>Você e seus amigos fazendo acontecer juntos</span>
                    <p id='Temearth-titulo'>Todos com facilidades</p>
                    <span id='Temearth-contex'>Indique amigos para o earth e deixe todo mundo aproveitar os benefícios de uma conta 100% digital gratuita.</span>
                </div>
                <div className="TemearthBox-componet-2">
                    <img id='Temearth-img' src={amigo} alt="" />
                </div>
            </div>
            <div id='Temearth-img-cust'><img id='Temearth-curva' src={Curva} alt="" /></div>
            {/* <div> Cort </div> */}
            <div className="TemearthBox-box">
                <div className="TemearthBox-componet-1">
                    <p id='Temearth-titulo'>Whatsapp</p>
                    <span id='Temearth-contex'>Transferências no WhatsApp com earth.</span>
                    <p id='Temearth-titulo'>Todos com facilidades</p>
                    <span id='Temearth-contex'>Simples, seguras, sem taxas sem tarifas pra você fazer acontecer.</span>
                </div>
                <div className="TemearthBox-componet-2">
                    <img id='Temearth-img' src={watss} alt="" />
                </div>
            </div>
            <div id='Temearth-img-cust'><img id='Temearth-curva' src={Curva} alt="" /></div>
            {/* <div> Cort </div> */}

            
        </div>
    )
}