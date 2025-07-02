declare module "nodemailer" {
  export interface TransportOptions {
    host?: string
    port?: number
    secure?: boolean
    auth?: {
      user: string
      pass: string
    }
  }

  export interface SendMailOptions {
    from?: string
    to?: string
    subject?: string
    text?: string
  }

  export interface Transporter {
    sendMail(options: SendMailOptions): Promise<any>
  }

  export function createTransport(options: TransportOptions): Transporter

  const nodemailer: {
    createTransport: typeof createTransport
  }

  export default nodemailer
}
