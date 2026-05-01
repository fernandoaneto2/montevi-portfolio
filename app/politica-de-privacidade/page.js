import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Política de Privacidade | Montevi Engenharia',
  description:
    'Política de privacidade e proteção de dados da Montevi Engenharia (Metta Engenharia LTDA) conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).',
}

const ULTIMA_ATUALIZACAO = '30 de abril de 2026'
const CONTROLADOR = 'Metta Engenharia LTDA'
const NOME_FANTASIA = 'Montevi Engenharia'
const CNPJ = '54.308.461/0001-55'
const SEDE = 'João Pessoa — PB'
const EMAIL_CONTATO = 'contato@montevi.eng.br'

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="privacidade-page">
        <div className="privacidade-inner">
          <header className="privacidade-header">
            <h1>Política de Privacidade</h1>
            <p className="privacidade-data">
              Última atualização: {ULTIMA_ATUALIZACAO}
            </p>
          </header>

          <section className="privacidade-secao">
            <h2>1. Identificação do Controlador</h2>
            <p>
              Esta Política de Privacidade é aplicável ao site da{' '}
              <strong>{NOME_FANTASIA}</strong>, nome fantasia de{' '}
              <strong>{CONTROLADOR}</strong>, inscrita no CNPJ sob o nº{' '}
              <strong>{CNPJ}</strong>, com sede em <strong>{SEDE}</strong>.
            </p>
            <p>
              Para questões relacionadas a privacidade e proteção de dados,
              entre em contato pelo e-mail:{' '}
              <a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a>.
            </p>
          </section>

          <section className="privacidade-secao">
            <h2>2. Dados Coletados</h2>
            <p>
              Coletamos apenas os dados estritamente necessários para a
              prestação dos serviços e atendimento ao cliente:
            </p>
            <ul>
              <li>
                <strong>Formulário de contato:</strong> nome, e-mail, telefone e
                mensagem — para responder às suas solicitações de orçamento e
                informações.
              </li>
              <li>
                <strong>Navegação:</strong> dados técnicos coletados
                automaticamente (endereço IP, tipo de navegador, páginas
                visitadas, tempo de permanência) para análise de desempenho e
                melhoria do site.
              </li>
              <li>
                <strong>Cookies:</strong> pequenos arquivos armazenados no seu
                dispositivo para funcionamento correto do site e análise de
                acesso anônima.
              </li>
            </ul>
          </section>

          <section className="privacidade-secao">
            <h2>3. Finalidade do Tratamento</h2>
            <p>Os dados são tratados para as seguintes finalidades:</p>
            <ul>
              <li>Responder a solicitações de orçamento e contato;</li>
              <li>Prestar os serviços contratados;</li>
              <li>
                Cumprir obrigações legais e regulatórias (ex.: emissão de ART,
                contratos, notas fiscais);
              </li>
              <li>
                Analisar o uso do site para melhorar a experiência do usuário;
              </li>
              <li>
                Enviar comunicações sobre serviços, mediante consentimento
                expresso.
              </li>
            </ul>
          </section>

          <section className="privacidade-secao">
            <h2>4. Base Legal</h2>
            <p>
              O tratamento dos dados pessoais é realizado com base nas seguintes
              hipóteses legais previstas na LGPD (Lei nº 13.709/2018):
            </p>
            <ul>
              <li>
                <strong>Consentimento</strong> (Art. 7º, I): para cookies
                analíticos e comunicações de marketing;
              </li>
              <li>
                <strong>Execução de contrato</strong> (Art. 7º, V): para dados
                necessários à prestação dos serviços contratados;
              </li>
              <li>
                <strong>Legítimo interesse</strong> (Art. 7º, IX): para análise
                de uso do site e melhoria dos serviços, desde que não
                prevaleçam sobre os direitos do titular;
              </li>
              <li>
                <strong>Cumprimento de obrigação legal</strong> (Art. 7º, II):
                para dados exigidos por legislação fiscal, trabalhista ou
                regulatória.
              </li>
            </ul>
          </section>

          <section className="privacidade-secao">
            <h2>5. Compartilhamento de Dados</h2>
            <p>
              Não vendemos nem cedemos seus dados pessoais a terceiros para fins
              comerciais. Os dados poderão ser compartilhados apenas:
            </p>
            <ul>
              <li>
                Com prestadores de serviços tecnológicos (ex.: hospedagem,
                análise de dados) sob obrigação contratual de
                confidencialidade;
              </li>
              <li>
                Com autoridades públicas, em cumprimento de determinação legal
                ou judicial;
              </li>
              <li>
                Com o CREA-PB ou demais entidades reguladoras, quando exigido
                para emissão de ART ou licenciamento.
              </li>
            </ul>
          </section>

          <section className="privacidade-secao">
            <h2>6. Retenção dos Dados</h2>
            <p>
              Os dados são retidos pelo período necessário para a finalidade que
              motivou a coleta, respeitados os prazos legais aplicáveis:
            </p>
            <ul>
              <li>Dados de contato e orçamentos: até 5 anos após o contato;</li>
              <li>
                Dados de contratos e documentação técnica: até 10 anos (ABNT NBR
                e legislação fiscal);
              </li>
              <li>
                Dados de navegação e cookies analíticos: até 13 meses;
              </li>
              <li>
                Dados fornecidos por consentimento: até a revogação do
                consentimento.
              </li>
            </ul>
          </section>

          <section className="privacidade-secao">
            <h2>7. Seus Direitos (LGPD — Art. 18)</h2>
            <p>
              Como titular de dados pessoais, você tem direito a, a qualquer
              momento:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar os dados que temos sobre você;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>
                Solicitar a anonimização, bloqueio ou eliminação de dados
                desnecessários;
              </li>
              <li>
                Solicitar a portabilidade dos dados a outro fornecedor de
                serviço;
              </li>
              <li>
                Revogar o consentimento a qualquer momento, sem prejuízo do
                tratamento realizado anteriormente;
              </li>
              <li>
                Opor-se ao tratamento realizado com base em legítimo interesse;
              </li>
              <li>
                Peticionar à Autoridade Nacional de Proteção de Dados (ANPD).
              </li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail:{' '}
              <a href={`mailto:${EMAIL_CONTATO}`}>{EMAIL_CONTATO}</a>. Responderemos
              em até 15 dias úteis.
            </p>
          </section>

          <section className="privacidade-secao">
            <h2>8. Cookies</h2>
            <p>Utilizamos os seguintes tipos de cookies:</p>
            <ul>
              <li>
                <strong>Cookies essenciais:</strong> necessários para o
                funcionamento básico do site — não podem ser desativados;
              </li>
              <li>
                <strong>Cookies analíticos:</strong> coletam informações
                anônimas sobre como o site é utilizado para melhorar a
                experiência — requerem seu consentimento;
              </li>
            </ul>
            <p>
              Você pode retirar seu consentimento a qualquer momento, limpando
              os cookies do seu navegador ou por meio das configurações do
              banner de cookies.
            </p>
          </section>

          <section className="privacidade-secao">
            <h2>9. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para
              proteger seus dados contra acesso não autorizado, perda, alteração
              ou divulgação indevida, incluindo o uso de HTTPS, controle de
              acesso e avaliações periódicas de segurança.
            </p>
          </section>

          <section className="privacidade-secao">
            <h2>10. Alterações nesta Política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Alterações
              relevantes serão comunicadas por destaque no site. A data de
              última atualização sempre estará indicada no topo desta página.
            </p>
          </section>

          <div className="privacidade-voltar">
            <Link href="/" className="voltar-link">
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
