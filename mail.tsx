import React from "react";

type MailProps = {
  to: string;
  subject: string;
  template: string;
};

export default function Mail({ to, subject, template }: MailProps) {
  return (
    <aside aria-label="Módulo de notificación por correo">
      <h2>Confirmación de pedido</h2>
      <p><strong>Destino:</strong> {to}</p>
      <p><strong>Asunto:</strong> {subject}</p>
      <p>{template}</p>
      <small>
        Este componente puede conectarse a Resend, SendGrid o nodemailer para enviar
        confirmaciones automáticas después de cada pedido.
      </small>
    </aside>
  );
}
