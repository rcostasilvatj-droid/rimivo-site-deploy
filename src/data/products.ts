import anilhaLogo from '../assets/products/anilha/anilha-logo-horizontal.webp'
import anilhaLogoCard from '../assets/products/anilha/anilha-logo-horizontal-card.webp'
import entregaManagerLogo from '../assets/products/entregamanager/entregamanager-logo.webp'
import entregaManagerLogoCard from '../assets/products/entregamanager/entregamanager-logo-card.webp'
import trampoFacilLogo from '../assets/products/trampo-facil/trampo-facil-logo.webp'
import eMassaDeliveryLogo from '../assets/products/e-massa-delivery/e-massa-delivery-logo.webp'

export type ProductSlug = 'anilha' | 'entregamanager' | 'trampo-facil' | 'e-massa-delivery'

export interface ProductImage {
  src: string
  width: number
  height: number
}

export interface Product {
  slug: ProductSlug
  path: string
  name: string
  brandLine: string
  tagline: string
  description: string
  longDescription: string
  audience: string
  platform: string
  /** Selo curto e factual (ex.: "Em produção"). Omitir quando não houver informação confirmada. */
  statusLabel?: string
  statusTone?: 'production' | 'development'
  features: string[]
  /** Logo oficial para a página do produto. Dimensões intrínsecas evitam layout shift. */
  logo: ProductImage
  /** Versão menor da mesma logo para os cards, quando a original for grande demais para o uso. */
  logoCard?: ProductImage
  /** Altura (px, desktop) da logo no card e na página: equaliza o peso visual entre proporções diferentes. */
  logoHeight: { card: number; page: number }
  /** true quando o arquivo da logo já traz "by Rimivo" desenhado — evita endosso duplicado no card. */
  endorsedInLogo: boolean
  /**
   * Site institucional do produto (marketing). Quando definido, a página do produto na Rimivo
   * mostra o CTA "Acessar site do <produto>". Deixe indefinido até existir o endereço oficial —
   * hoje as páginas /anilha, /entregamanager etc. da própria Rimivo cumprem esse papel.
   * Para migrar um produto para domínio próprio, altere somente este campo.
   */
  websiteUrl?: string
  /**
   * Aplicação/sistema do produto (login, painel). É distinto do site institucional e não é
   * exibido no portal Rimivo: o acesso à aplicação parte do site institucional do produto.
   */
  appUrl?: string
}

export const products: Product[] = [
  {
    slug: 'anilha',
    path: '/anilha',
    name: 'Anilha',
    brandLine: 'Anilha — by Rimivo',
    tagline: 'Treino, execução e evolução em um só lugar.',
    description:
      'Aplicativo para academias, professores, personal trainers e alunos, com foco em ficha de treino, execução dos exercícios, evolução e avaliações físicas.',
    longDescription:
      'O Anilha organiza a rotina de treino de academias, professores, personal trainers e alunos. A proposta é simples: centralizar a ficha de treino, acompanhar a execução dos exercícios, registrar avaliações físicas e acompanhar a evolução e as metas de cada aluno ao longo do tempo.',
    audience: 'Academias, professores, personal trainers e alunos',
    platform: 'Aplicativo mobile',
    features: [
      'Ficha de treino',
      'Execução dos exercícios',
      'Avaliações físicas',
      'Acompanhamento de evolução',
      'Definição e acompanhamento de metas',
    ],
    logo: { src: anilhaLogo, width: 843, height: 310 },
    logoCard: { src: anilhaLogoCard, width: 480, height: 177 },
    logoHeight: { card: 104, page: 150 },
    endorsedInLogo: true,
  },
  {
    slug: 'entregamanager',
    path: '/entregamanager',
    name: 'EntregaManager',
    brandLine: 'EntregaManager — by Rimivo',
    tagline: 'Gestão de entregas e operação logística.',
    description:
      'Sistema para gestão de entregas e operação logística, com painel administrativo/web e interface dedicada para motoristas.',
    longDescription:
      'O EntregaManager apoia a gestão de entregas e a operação logística do dia a dia. Conta com um painel administrativo/web para a gestão da operação e uma interface dedicada para motoristas em campo. É um produto já em produção, com domínio e aplicação próprios.',
    audience: 'Operações de entrega e logística',
    platform: 'Painel web e aplicativo para motoristas',
    statusLabel: 'Em produção',
    statusTone: 'production',
    features: [
      'Painel administrativo/web',
      'Interface dedicada para motoristas',
      'Gestão da operação logística',
    ],
    logo: { src: entregaManagerLogo, width: 800, height: 464 },
    logoCard: { src: entregaManagerLogoCard, width: 480, height: 278 },
    logoHeight: { card: 142, page: 230 },
    appUrl: 'https://app.entregamanager.com.br',
    endorsedInLogo: false,
  },
  {
    slug: 'trampo-facil',
    path: '/trampo-facil',
    name: 'Trampo Fácil',
    brandLine: 'Trampo Fácil — by Rimivo',
    tagline: 'Organização completa para o prestador de serviço.',
    description:
      'Aplicativo mobile para prestadores de serviço organizarem agenda, clientes, orçamentos, serviços, recebimentos, materiais, fornecedores, pedidos e cotações.',
    longDescription:
      'O Trampo Fácil foi criado para prestadores de serviço que precisam organizar o próprio negócio sem complicação. Em um único aplicativo mobile, é possível gerenciar agenda, clientes, orçamentos, serviços prestados, recebimentos, materiais, fornecedores, pedidos e cotações.',
    audience: 'Prestadores de serviço',
    platform: 'Exclusivamente mobile',
    features: [
      'Agenda',
      'Clientes',
      'Orçamentos',
      'Serviços',
      'Recebimentos',
      'Materiais e fornecedores',
      'Pedidos e cotações',
    ],
    logo: { src: trampoFacilLogo, width: 555, height: 320 },
    logoHeight: { card: 132, page: 210 },
    endorsedInLogo: true,
  },
  {
    slug: 'e-massa-delivery',
    path: '/e-massa-delivery',
    name: 'É Massa Delivery',
    brandLine: 'É Massa Delivery — by Rimivo',
    tagline: 'Cardápio digital e gestão para food service.',
    description:
      'Produto em desenvolvimento para restaurantes, lanchonetes e pizzarias, com cardápio digital, pedidos e gestão da operação.',
    longDescription:
      'O É Massa Delivery está em desenvolvimento para atender restaurantes, lanchonetes e pizzarias. A proposta reúne cardápio digital, gestão de pedidos e apoio à operação do estabelecimento em um único produto.',
    audience: 'Restaurantes, lanchonetes e pizzarias',
    platform: 'Cardápio digital e gestão da operação',
    statusLabel: 'Em desenvolvimento',
    statusTone: 'development',
    features: ['Cardápio digital', 'Gestão de pedidos', 'Apoio à operação do estabelecimento'],
    logo: { src: eMassaDeliveryLogo, width: 572, height: 246 },
    logoHeight: { card: 116, page: 170 },
    endorsedInLogo: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
