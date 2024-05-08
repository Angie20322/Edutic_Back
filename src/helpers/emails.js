import "dotenv/config";
import nodemailer from "nodemailer";
const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  FRONT_URL,
  EMAIL_ADMIN,
} = process.env;

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const { nombre, email, colegio, token, enlace } = datos;

  // Enviar el email
  await transport.sendMail({
    from: "Edutic",
    to: email,
    subject: "Ya casi estás en Edutic",
    text: "Ya casi estás en Edutic",
    html: `
      <p>Hola ${nombre},</p>
      <p>Haz enviado una solicitud para ingresar a Edutic con la entidad ${colegio} bajo la solicitud "${token}". Es de nuestro agrado informarle que la solicitud ha sido aprobada. Ingresa al siguiente enlace para terminar el proceso</p>
      <p><a href="${FRONT_URL}/usuario/confirmar/${enlace}">Confirmar cuenta</a></p>
      <p>Si tu solicitaste este servicio, puedes ignorar este mensaje</p>
      `,
  });
};

const emailOlvidoPass = async (datos) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const { nombre, email, enlace } = datos;

  // Enviar el email
  await transport.sendMail({
    from: "Edutic",
    to: email,
    subject: "Restablecer contraseña en Edutic",
    text: "Restablecer contraseña en Edutic",
    html: `
      <p>Hola ${nombre},</p>
      <p>Haz solicitado restablecer tu contraseña en EDUTIC. Para restablecer tu contraseña solo es necesario ingresar al siguiente enlace:</p>
      <p><a href="${FRONT_URL}/usuario/restpass/${enlace}">Restablecer contraseña</a></p>
      <p>Si tu solicitaste este servicio, puedes ignorar este mensaje</p>
      `,
  });
};

const emailAdmin = async (datos) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const { nombre, email, enlace } = datos;

  // Enviar el email
  await transport.sendMail({
    from: "Edutic",
    to: email,
    subject: "Eres admin en Edutic",
    text: "Eres admin en Edutic",
    html: `
      <p>Hola ${nombre},</p>
      <p>Haz sido registrado como un administrador en la plataforma de edutic. Para finalizar el proceso, por favor ingresa al siguiente enlace</p>
      <p><a href="${FRONT_URL}/usuario/confirmar/${enlace}">Confirmar cuenta</a></p>
      `,
  });
};

const emailSolicitud = async (datos) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const { nombre, email, colegio, token } = datos;

  // Enviar el email
  await transport.sendMail({
    from: "Edutic",
    to: email,
    subject: "Solicitud de ingreso en Edutic",
    text: "Solicitud de ingreso en Edutic",
    html: `
      <p>Hola ${nombre},</p>
      <p>Haz enviado una solicitud para ingresar a Edutic con la entidad ${colegio} bajo el token "${token}". En estos días su solicitud será estudiada y se le dará una respuesta</p>
      <p>Si tu no solicitaste este servicio, puedes ignorar este mensaje</p>
      `,
  });
};
const emailRechazo = async (datos) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const { nombre, email, colegio, token } = datos;

  // Enviar el email
  await transport.sendMail({
    from: "Edutic",
    to: email,
    subject: "Solicitud de ingreso en Edutic",
    text: "Solicitud de ingreso en Edutic",
    html: `
      <p>Hola ${nombre},</p>
      <p>Haz enviado una solicitud para ingresar a Edutic con la entidad ${colegio} bajo el token "${token}". Su solicitud fue estudiada y desafortunadamente no fue aceptada</p>
      <p>Si considera que fue un error, puede enviar otra solicitud o puede escribirnos para analizar su caso</p>
      `,
  });
};

const emailEliminado = async (datos) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const { nombre, email } = datos;

  // Enviar el email
  await transport.sendMail({
    from: "Edutic",
    to: email,
    subject: "Eliminación de cuenta en Edutic",
    text: "Eliminación de cuenta en Edutic",
    html: `
      <p>Hola ${nombre},</p>
      <p>Queríamos informarle que su cuenta en Edutic ha sido eliminada. Solo queríamos asegurarnos de que estuviera al tanto de esta situación.</p>
      <p>Si tiene alguna pregunta o necesita más detalles, no dude en comunicarse con el administrador para obtener ayuda.</p>
      `,
  });
};

const emailSolicitudDatos = async (datos) => {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const { nombre, apellido, email, contenido } = datos;

  // Enviar el email
  await transport.sendMail({
    from: "Edutic",
    to: EMAIL_ADMIN,
    subject: "Solicitud cambio de datos",
    text: "Solicitud cambio de datos",
    html: `
      <p>El usuario ${nombre} ${apellido} con email ${email} ha solicitado los siguientes cambios.</p>
      <p>${contenido}</p>
      `,
  });
};

export {
  emailRegistro,
  emailSolicitud,
  emailAdmin,
  emailRechazo,
  emailEliminado,
  emailSolicitudDatos,
  emailOlvidoPass,
};
