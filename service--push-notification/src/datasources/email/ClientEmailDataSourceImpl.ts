import { createTransport, Transporter } from "nodemailer";
import { ClientEmailDataSource } from "./ClientEmailDataSource";
import { EmailModelDatasource } from "./models/EmailModelDatasource";
import { config } from "../../configs/configs";

export class ClientEmailDataSourceImpl implements ClientEmailDataSource {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: config.EMAIL_HOST,
      port: 1025,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: config.EMAIL_USER,
        pass: config.EMAIL_PASS,
      },
    });
  }

  async sendEmail(email: EmailModelDatasource): Promise<void> {
    let mailOptions = {
      from: config.EMAIL_USER,
      to: email.emailDestination,
      subject: email.subject,
      text: email.emailMessage,
    };

    console.log(mailOptions);

    this.transporter.sendMail(mailOptions, function (error, info) {
      console.log("error", error);
      console.log("info", info);
      if (error) {
        return error;
      } else {
        return "E-mail enviado com sucesso!";
      }
    });
  }
}