import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { toggleMenuState } from '../actions';

const TermsConditions = (props) => {
  props.toggleMenuState(false);
  return (
    <div className="internal-page terms-conditions">
      <div className="content">
        <h1>Términos y condiciones generales de los usuarios de Club de Préstamos</h1>
        <div className="main-content">
          <p>
            Estos Términos y Condiciones Generales de <b>CLUB DE PRÉSTAMOS</b> explican
            el funcionamiento y utilización de la Aplicación, y los requisitos
            para inscribirse como usuario en calidad de prestamista y prestatario.
          </p>
          <ol>
            <li>
              El titular del sitio web www.clubdeprestamos.cr (en adelante
              “la Aplicación”) es Club de Préstamos Web S.A. (en adelante
              “CLUB DE PRÉSTAMOS”), sociedad con cédula jurídica número
              3-101-713922 y con domicilio en San José, Costa Rica.
            </li>
            <li>
              El usuario debe leer, aceptar y cumplir los Términos y
              Condiciones Generales para convertirse en usuario de CLUB
              DE PRÉSTAMOS, debiendo aceptar además la Política de Privacidad.
            </li>
            <li>
              Mediante el uso de la Aplicación y de los servicios prestados,
              el usuario asegura y confirma haber leído, entendido y está de
              acuerdo con estos Términos y Condiciones Generales y con la
              Política de Privacidad. Si el usuario no está de acuerdo con
              estos Términos y Condiciones Generales y con la Política de
              Privacidad deberá abandonar y no hacer uso de la Aplicación.
            </li>
            <li>
              La Aplicación de CLUB DE PRÉSTAMOS tiene por objeto conectar
              a prestamistas y a prestatarios y en particular:
              <ol type="a">
                <li>
                  Facilitar la publicación de ofertas de préstamos y de
                  necesidades de financiamiento;
                </li>
                <li>
                  Ser el punto de encuentro entre personas que deseen
                  colocar dinero y personas que requieran fondos.
                </li>
                <li>
                  Ser el canal de comunicación entre un prestamista y un
                  prestatario, y el vehículo por medio del cual acuerdan y
                  formalizan contratos de préstamo.
                </li>
              </ol>
            </li>
            <li>
              CLUB DE PRÉSTAMOS no realiza funciones de asesoramiento al
              prestamista ni al prestatario ni a través de su Aplicación se
              recibe o se transfiere dinero. El prestamista decide por sí
              mismo sobre si concede o no un préstamo, a quién se lo concede
              y en qué condiciones; así mismo el prestatario decide por sí
              mismo sobre si obtiene o no un crédito, de quién lo obtiene y
              en qué condiciones.
            </li>
            <li>
              Cada acuerdo de préstamo entre cada prestamista y prestatario
              es un contrato independiente.
            </li>
            <li>
              CLUB DE PRÉSTAMOS y la Aplicación no realiza ni ha sido diseñada
              con la finalidad de asesorar o recomendar suscribir un contrato
              de préstamo en particular.
            </li>
            <li>
              Si el usuario está actuando en nombre y por cuenta de una persona
              jurídica declara que está debidamente autorizado para actuar en
              su representación y que tiene capacidad suficiente de la persona
              que representa.
            </li>
            <li>
              Registro y Acceso a Servicios de CLUB DE PRÉSTAMOS
              <ol type="a">
                <li>
                  Proceso de registro
                  <ol type="i">
                    <li>
                      Requisitos para ser usuario en CLUB DE PRÉSTAMOS
                      <ol>
                        <li>
                          debe ser una persona física o una persona jurídica:
                          <ol type="a">
                            <li>
                              si es una persona física, debe ser mayor de
                              18 años de edad;
                            </li>
                            <li>
                              si es una persona jurídica, debe estar
                              correctamente constituida y registrada ante el
                              Registro Público de Costa Rica;
                            </li>
                            <li>
                              debe tener a su nombre una cuenta bancaria válida
                              en algún banco del sistema bancario de Costa Rica;
                            </li>
                            <li>
                              debe tener firma digital certificada de conformidad
                              con la Ley de Certificados, Firmas Digitales y
                              Documentos Electrónicos;
                            </li>
                            <li>
                              debe registrar sus datos en la Aplicación;
                            </li>
                            <li>
                              debe registrarse en CLUB DE PRÉSTAMOS por medio
                              de la Aplicación.
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      Para poder acceder a los servicios ofrecidos por CLUB
                      DE PRÉSTAMOS es necesario registrarse en la Aplicación.
                      Algunos de los datos solicitados son:
                      <ol type="a">
                        <li>
                          Correo electrónico
                        </li>
                        <li>
                          Nombre y apellidos, según consta en la cédula de
                          identidad. Estos deberán coincidir con el del titular
                          de la cuenta bancaria que el usuario utilizará para
                          realizar sus pagos o recibir fondos.
                        </li>
                        <li>
                          Nombre de usuario: Será el nombre que se utilizará en
                          la Aplicación para identificarse.
                        </li>
                        <li>
                          Contraseña: Permitirá el acceso del usuario a su
                          cuenta de usuario.
                        </li>
                        <li>
                          Teléfono: Permitirá la comunicación con el usuario.
                        </li>
                        <li>
                          Cuenta bancaria: Se utilizará para que los usuarios,
                          prestamista y prestatario, transfieran y reciban fondos.
                        </li>
                        <li>
                          Número de cédula de identidad y copia del documento
                          de identidad.
                        </li>
                        <li>
                          Otros documentos serán solicitados.
                        </li>
                      </ol>
                    </li>
                    <li>
                      El detalle completo de los datos personales se encuentra
                      en la Aplicación, y el manejo que CLUB DE PRÉSTAMOS haga
                      de ellos así como sus derechos como usuario se detallan
                      en la Política de Privacidad.
                    </li>
                    <li>
                      El usuario garantiza a CLUB DE PRÉSTAMOS que toda la
                      información que proporcione en el proceso de registro de
                      usuario y formalización de préstamos es verdadera y exacta
                      en todos los aspectos y se compromete a actualizarla si
                      ésta ha cambiado.
                    </li>
                  </ol>
                </li>
                <li>
                  Acceso a la cuenta de usuario
                  <ol type="i">
                    <li>
                      Los datos solicitados en el proceso de registro son utilizados
                      para acceder a la Aplicación una vez la cuenta haya sido
                      activada. Cada vez que acceda a su cuenta en CLUB DE PRÉSTAMOS
                      el usuario tendrá que introducir su dirección de correo electrónico
                      y contraseña. Su nombre de usuario y la contraseña para el acceso
                      a su cuenta en CLUB DE PRÉSTAMOS son personales e intransferibles.
                    </li>
                    <li>
                      Uso adecuado del usuario y contraseña
                      <ol>
                        <li>
                          El nombre de usuario y contraseña son los medios utilizados
                          para identificar a los usuarios, por lo que deben mantenerse
                          seguros. El usuario es responsable de la actividad realizada
                          en la Aplicación, por lo que cualquier violación de
                          seguridad, extravío, robo o uso no autorizado de
                          información de usuario ocontraseña debe ser notificado
                          inmediatamente. CLUB DE PRÉSTAMOS
                          podrá bloquear su acceso el acceso en caso que se produzcan
                          varios intentos erróneos de acceso a su cuenta de usuario.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Uso adecuado de la Aplicación
                      <ol>
                        <li>
                          El usuario se compromete a no adaptar o esquivar los
                          sistemas establecidos en relación con la Aplicación, ni
                          a acceder a la misma para un uso distinto al normal.
                          CLUB DE PRÉSTAMOS tiene el derecho a no actuar según
                          instrucciones del usuario en los casos en los que sospeche
                          que la persona que ha accedido a una cuenta no es el
                          titular, o bien esté realizando alguna actividad ilegal,
                          fraudulenta o no autorizada.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              El Contrato de Préstamo
              <ol type="a">
                <li>
                  Una vez que exista acuerdo entre prestamista y prestatario
                  para un préstamo, el prestamista pasará a ser parte en un
                  contrato de préstamo con el prestatario por el monto, plazo
                  y tasa de interés acordada, y se transferirá el dinero
                  directamente de la cuenta cliente del prestamista a la
                  cuenta cliente del prestatario.
                </li>
                <li>
                  El prestamista y el prestatario pueden visualizar y descargar
                  en todo momento el formato del contrato de préstamo y el
                  contrato debidamente formalizado.
                </li>
                <li>
                  El contrato de préstamo completado, acordado y formalizado
                  por medio de la Aplicación deberá ser firmado, tanto por el
                  prestamista como por el prestatario, utilizando firma digital
                  certificada, o en persona.
                </li>
              </ol>
            </li>
            <li>
              Las Tarifas de CLUB DE PRÉSTAMO
              <ol type="a">
                <li>
                  CLUB DE PRÉSTAMO devengará un porcentaje de la transacción
                  que surgió y se acordó entre el prestamista y el prestatario,
                  por medio de su Aplicación, de acuerdo con las siguientes tarifas.
                  <ol type="i">
                    <li>
                      Tarifa por comisión para el prestamista: 5% del préstamo otorgado.
                    </li>
                    <li>
                      Tarifa para el prestatario: 5% del préstamo recibido.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Desafiliación como usuario en CLUB DE PRÉSTAMO: Si un usuario no formalizado
              ninguna operación y no quiere seguir siendo parte de CLUB DE PRÉSTAMO puede
              efectuar el trámite de desafiliación enviando un email a info@clubdeprestamos.cr
            </li>
            <li>
              CLUB DE PRÉSTAMO puede dar por terminada la membresía de cualquier usuario,
              en cualquier momento y por cualquier motivo, incluido, pero no limitado:
              <ol type="a">
                <li>
                  si se ha utilizado la Aplicación de CLUB DE PRÉSTAMO de manera que haya
                  causado o pueda causar daños en su funcionamiento o acceso,
                </li>
                <li>
                  se haya hecho con fines fraudulentos o en conexión con un delito,
                </li>
                <li>
                  se haya hecho para enviar, usar o reutilizar cualquier material que sea
                  ilegal, ofensivo o difamatorio, o en violación de los derechos de autor,
                  marca registrada, confidencialidad, privacidad o cualquier otro derecho,
                </li>
                <li>
                  el usuario haya incumplido los Términos y Condiciones Generales, y
                </li>
                <li>
                  se haya hecho para enviar o usar cualquier material que sea ilegal o
                  difamatorio.
                </li>
              </ol>
            </li>
            <li>
              Exoneración de responsabilidad
              <ol type="a">
                <li>
                  La información de usuarios que muestra la Aplicación acerca
                  de tipos de interés, niveles de solvencia u otros elementos
                  relacionados con el retorno de los usuarios y de los préstamos,
                  lo son a modo de guía y no representan ningún tipo de garantía.
                </li>
                <li>
                  La información proporcionada en la Aplicación o a través de
                  otros medios de comunicación no constituyen consejos,
                  recomendaciones o aprobaciones de préstamos. La información
                  proporcionada no está destinada a ser considerada por:
                  <ol type="i">
                    <li>
                      el prestamista como la única base para decidir si le
                      presta o no a una persona.
                    </li>
                    <li>
                      el prestatario como la única base para decidir si accede
                      o no a un préstamo de una persona.
                    </li>
                  </ol>
                </li>
                <li>
                  CLUB DE PRÉSTAMO no da ninguna garantía en cuanto a la exactitud
                  de los datos que se muestran en la Aplicación, ni se asumen
                  responsabilidades por el contenido descargado o subido por los
                  prestamistas o los prestatarios en la Aplicación.
                </li>
                <li>
                  CLUB DE PRÉSTAMO no garantiza que habrá suficientes prestatarios
                  ni prestamistas, ni solicitudes de préstamo ni ofertas de fondos.
                </li>
                <li>
                  CLUB DE PRÉSTAMO no garantiza la disponibilidad continua y
                  permanente de los servicios y de la Aplicación, quedando de
                  este modo exonerado de cualquier responsabilidad por posibles
                  daños y perjuicios causados como consecuencia de la falta de
                  disponibilidad de éstos por motivos de fuerza mayor o errores
                  en las redes de telecomunicaciones.
                </li>
                <li>
                  CLUB DE PRÉSTAMO no se hace responsable de los posibles errores
                  u omisiones en la información facilitada al usuario, ni de
                  los posibles perjuicios que se puedan derivar del uso de la
                  información por parte del usuario.
                </li>
                <li>
                  El usuario se compromete a utilizar la Aplicación sólo para
                  fines legales y de una manera que no infrinja los derechos
                  de las otras personas o restrinja o inhiba a cualquier otra
                  persona el uso y disfrute de la misma.
                </li>
                <li>
                  CLUB DE PRÉSTAMO no se hace responsable si las comunicaciones
                  enviadas a través de la Aplicación son interceptadas por
                  terceros, mal entregadas o no entregadas en virtud de que la
                  información transmitida a través de la Aplicación pasará a
                  través de redes públicas de telecomunicaciones.
                </li>
              </ol>
            </li>
            <li>
              Derechos de propiedad intelectual y confidencialidad
              <ol type="a">
                <li>
                  CLUB DE PRÉSTAMO posee todos los derechos de autor, marcas
                  registradas y no registradas, derechos de diseño, diseños
                  no registrados, derechos de base de datos y todos los demás
                  derechos de propiedad intelectual en relación con la Aplicación.
                </li>
                <li>
                  Se permite acceder a la Aplicación únicamente para uso
                  personal y para utilizar los servicios ofrecidos.
                </li>
                <li>
                  El usuario se compromete a no difundir la información que
                  obtenga a través de la Aplicación referente a los demás usuarios.
                </li>
              </ol>
            </li>
            <li>
              Protección de Datos de Carácter Personal
              <ol type="a">
                <li>
                  CLUB DE PRÉSTAMO solicitará los datos pertinentes que se
                  detallan en la Aplicación y en la Política de Privacidad de la Aplicación.
                </li>
                <li>
                  Si el usuario lo autoriza a través de la Aplicación, estos
                  datos también se utilizarán para mantener informado al usuario
                  sobre las novedades de la Aplicación o sobre nuevos servicios o
                  novedades relacionadas con la actividad de CLUB DE PRÉSTAMO.
                </li>
                <li>
                  CLUB DE PRÉSTAMOS obtiene datos personales por medio del
                  formulario para suscribirse como usuario que consiste en una
                  plantilla de recolección de datos. Estos datos solo serán accesible
                  para los otros usuarios de la aplicación y sitio web, cuando
                  así lo autorizó el usuario.
                </li>
                <li>
                  CLUB DE PRÉSTAMOS recolectará los datos personales junto con
                  el consentimiento informado del titular de los mismos, para sus
                  respectivas bases de datos, únicamente para la finalidad
                  indicada en el formulario.
                </li>
                <li>
                  Los usuarios pueden ejercer sus derechos de acceso, rectificación,
                  cancelación y oposición en relación con el tratamiento de sus datos
                  personales contactando a CLUB DE PRÉSTAMOS a info@clubdeprestamos.cr
                </li>
                <li>
                  Los usuarios se obligan a cumplir con la Política de Privacidad,
                  así como con las medidas de seguridad implementas por CLUB DE PRÉSTAMOS
                  para salvaguardar los datos personales que posee en sus bases de datos y
                  su tratamiento.
                </li>
                <li>
                  CLUB DE PRÉSTAMOS tiene medidas físicas y lógicas que garantizan
                  la seguridad de la información contenida en sus bases de datos,
                  asegurando la privacidad, confidencialidad e integridad de la
                  información. CLUB DE PRÉSTAMOS no garantiza que dichas medidas
                  prevengan todo tipo de accesos no autorizados a la información
                  confidencial almacenada.
                </li>
                <li>
                  CLUB DE PRÉSTAMOS puede modificar la Política de Privacidad en
                  cualquier momento. La nueva versión entra en vigencia apenas sea
                  publicada, quedando los titulares de los datos personales
                  notificados por ese medio, pudiendo el titular podrá revocar el
                  consentimiento informado otorgado.
                </li>
              </ol>
            </li>
            <li>
              Modificaciones a estos Términos y Condiciones Generales
              <ol type="a">
                <li>
                  Si cualquier cláusula incluida en los Términos y Condiciones
                  Generales resultara declarada, total o parcialmente, nula o
                  ineficaz, tal nulidad o ineficacia tan sólo afectará a dicha
                  disposición o a la parte de la misma que resulte nula o ineficaz,
                  subsistiendo todo lo demás, considerándose tal disposición total
                  o parcialmente por no incluida.
                </li>
              </ol>
            </li>
            <li>
              Nulidad e ineficacia de las cláusulas
              <ol type="a">
                <li>
                  Si cualquier cláusula incluida en los Términos y Condiciones
                  Generales resultara declarada, total o parcialmente, nula o
                  ineficaz, tal nulidad o ineficacia tan sólo afectará a dicha
                  disposición o a la parte de la misma que resulte nula o ineficaz,
                  subsistiendo todo lo demás, considerándose tal disposición total o
                  parcialmente por no incluida.
                </li>
              </ol>
            </li>
            <li>
              Legislación aplicable y Jurisdicción competente
              <ol type="a">
                <li>
                  Los Términos y Condiciones Generales se rigen por la ley de
                  la República de Costa Rica y las partes, con renuncia al
                  fuero propio o a cualquier otro que pudiera corresponderles,
                  se someten a la jurisdicción de los Juzgados y Tribunales de
                  la República de Costa Rica, para cuantas acciones y
                  reclamaciones pudieran derivarse de la presente relación.
                </li>
              </ol>
            </li>
            <li>
              Omisión en el ejercicio de derechos
              <ol type="a">
                <li>
                  El hecho de que CLUB DE PRÉSTAMOS omita ejercer cualquiera
                  de sus derechos, no significará su renuncia a tal derecho, a
                  menos que notifique tal renuncia por escrito. Asimismo, si
                  CLUB DE PRÉSTAMOS renuncia a alguno de sus derechos, ello no
                  significará su renuncia a cualquier derecho de naturaleza
                  similar, posiblemente nacido con posterioridad. Por su parte,
                  el hecho de que CLUB DE PRÉSTAMOS permita (una o varias veces)
                  que un usuario incumpla sus obligaciones, o que las cumpla
                  imperfectamente o en forma distinta, o que no insista en el
                  cumplimiento exacto de tales obligaciones, o no ejerza
                  oportunamente los derechos legales que le correspondan, ello
                  no se reputará ni equivaldrá a modificación alguna de estos
                  Términos y Condiciones Generales, ni obstará en ningún caso
                  para que en el futuro insista en el cumplimiento fiel y
                  específico de las obligaciones que corren a cargo del usuario,
                  y para que ejerza los derechos convencionales o legales de
                  los cuales sea titular.
                </li>
              </ol>
            </li>
            <li>
              Cobro de Membresía a los miembros prestatarios del club.
              <ol>
                <li type="a">
                  El CLUB DE PRÉSTAMOS establece un cobro de US$5.00 mensuales
                  a sus miembros prestatarios. Este monto se cobrará por cargo
                  a tarjeta de crédito, transferencia, pago en efectivo u otro
                  medio. El CLUB DE PRÉSTAMOS puede modificar esta política para
                  eximir de pago a sus miembros por periodos determinados de tiempo;
                  aprobar descuentos sobre este monto por pagos anuales; o
                  implementar otras medidas. En caso de aumentar la tarifa,
                  CLUB DE PRÉSTAMOS se obliga a comunicarlo a sus miembros con
                  tres meses de antelación.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleMenuState,
  }, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(TermsConditions));
