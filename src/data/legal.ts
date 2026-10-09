export interface LegalSection { heading: string; body: string[] }
export interface LegalContent { title: string; intro: string; sections: LegalSection[] }

export const privacidade: LegalContent = {
  title: 'Política de Privacidade',
  intro: 'Versão técnica preliminar de 8 de outubro de 2026. Deve passar por revisão jurídica e receber os dados empresariais e o canal de privacidade definitivos antes da publicação comercial.',
  sections: [
    { heading: 'Dados tratados neste site', body: [
      'Para medir o interesse nas soluções, registramos de forma anônima páginas visitadas, tempo aproximado de permanência, origem do acesso e cliques em contato ou preço. Não usamos esses registros para identificar uma pessoa e não armazenamos endereço IP, user-agent ou impressão digital do dispositivo.',
      'Quando você envia o formulário de contato, tratamos nome, WhatsApp, e-mail opcional, produto de interesse, mensagem, página e origem do contato.',
    ]},
    { heading: 'Finalidades e bases legais', body: [
      'As métricas agregadas são usadas para compreender a procura pelos produtos e melhorar o site. Os dados enviados no formulário são usados exclusivamente para responder ao contato e realizar acompanhamento comercial solicitado por você, mediante o consentimento apresentado no formulário.',
    ]},
    { heading: 'Identificadores e armazenamento local', body: [
      'O navegador recebe identificadores aleatórios de visitante e sessão. No servidor, esses valores são transformados por função criptográfica antes do armazenamento. O site também registra localmente quando o convite foi dispensado ou enviado para não exibi-lo repetidamente.',
    ]},
    { heading: 'Compartilhamento e segurança', body: [
      'Os dados não são vendidos. O acesso aos relatórios e leads é restrito à operação autorizada da Rimivo e aos fornecedores de infraestrutura necessários, sujeitos às medidas contratuais e técnicas aplicáveis.',
    ]},
    { heading: 'Retenção e direitos do titular', body: [
      'A Rimivo deverá definir e publicar o prazo de retenção antes do uso comercial. O titular poderá solicitar confirmação, acesso, correção, revogação do consentimento, anonimização ou exclusão pelos canais oficiais de privacidade que serão indicados nesta página.',
    ]},
    { heading: 'Controlador e contato', body: [
      'Antes da publicação comercial, esta seção deverá receber razão social, CNPJ, endereço e canal específico para solicitações relacionadas à LGPD.',
    ]},
  ],
}

export const termos: LegalContent = {
  title: 'Termos de Uso',
  intro: 'Versão técnica preliminar. As condições comerciais, identificação empresarial, suporte, disponibilidade e responsabilidades ainda precisam de decisão da Rimivo e revisão jurídica antes da publicação oficial.',
  sections: [
    { heading: 'Uso do site', body: ['O site apresenta informações institucionais e permite solicitar contato sobre produtos Rimivo. O envio do formulário não constitui contratação, proposta vinculante ou garantia de disponibilidade.'] },
    { heading: 'Uso adequado', body: ['Não é permitido usar os formulários para conteúdo ilícito, fraude, spam, tentativa de acesso indevido ou interferência no funcionamento do serviço.'] },
    { heading: 'Produtos e contratação', body: ['Cada produto poderá possuir contrato, licença, política e níveis de serviço próprios. Preços, funcionalidades e condições definitivas serão apresentados durante a contratação.'] },
    { heading: 'Contato', body: ['Os canais jurídicos e comerciais definitivos serão incluídos após a validação cadastral e comercial da Rimivo.'] },
  ],
}
