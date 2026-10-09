/**
 * Canais de contato oficiais da Rimivo.
 *
 * Ainda não há dados reais definidos. Preencha os campos abaixo assim que
 * os canais oficiais (e-mail, telefone/WhatsApp e endereço) forem definidos —
 * a página /contato reflete automaticamente o que estiver preenchido aqui.
 */
export interface ContactInfo {
  email: string
  phone: string
  whatsapp: string
  address: string
}

export const contact: ContactInfo = {
  email: '',
  phone: '',
  whatsapp: '',
  address: '',
}

export const hasAnyContactInfo = Object.values(contact).some((value) => value.trim() !== '')
