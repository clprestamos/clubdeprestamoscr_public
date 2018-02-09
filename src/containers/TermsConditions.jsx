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
            Estos Términos y Condiciones Generales de <strong>CLUB DE PRÉSTAMOS</strong> explican el funcionamiento y utilización del sitio web, y los requisitos para inscribirse como usuario en calidad de prestamista y prestatario.
          </p>
          <ol>
            <li>
              El titular del sitio web www.clubdeprestamos.com (en adelante “la Plataforma”) es CLUB DE PRESTAMOS WEB, S.A. (en adelante “CLUB DE PRÉSTAMOS”), sociedad con cédula jurídica número 3-101-713922.
            </li>
            <li>
              El usuario debe leer, aceptar y cumplir los Términos y Condiciones Generales para convertirse en usuario de CLUB DE PRÉSTAMOS, debiendo aceptar además la Política de Privacidad.
            </li>
            <li>
              Mediante el uso del sitio web y de los servicios prestados, el usuario asegura y confirma haber leído, entendido y está de acuerdo con estos Términos y Condiciones Generales y con la Política de Privacidad. Si el usuario no está de acuerdo con estos Términos y Condiciones Generales y con la Política de Privacidad deberá abandonar y no hacer uso del sitio web.
            </li>
            <li>
              La Plataforma de CLUB DE PRÉSTAMOS tiene por objeto conectar a prestamistas y a prestatarios y en particular:
              <ol type="a">
                <li>
                  Facilitar la publicación de ofertas de préstamos y de necesidades de financiamiento;
                </li>
                <li>
                  Ser el punto de encuentro entre personas que deseen colocar dinero y personas que requieran fondos.
                </li>
                <li>
                  Ser el canal de comunicación entre un prestamista y un prestatario, y el vehículo por medio del cual acuerdan y firman contratos de préstamo.
                </li>
              </ol>
            </li>
            <li>
              CLUB DE PRÉSTAMOS no realiza funciones de asesoramiento al prestamista ni al prestatario ni a través de su Plataforma se recibe o se transfiere dinero. El prestamista decide por sí mismo sobre si concede o no un préstamo, a quién se lo concede y en qué condiciones; así mismo el prestatario decide por sí mismo sobre si obtiene o no un crédito, de quién lo obtiene y en qué condiciones.
            </li>
            <li>
              CLUB DE PRÉSTAMOS y la Plataforma no realiza ni ha sido diseñada con la finalidad de asesorar o recomendar suscribir un contrato de préstamo en particular.
            </li>
            <li>
              CLUB DE PRÉSTAMOS no forma parte de los acuerdos de préstamo ni tiene o mantiene interés en ellos. CLUB DE PRÉSTAMOS no participa en los contratos de préstamos como deudor, codeudor, fiador o avalista, por lo que no garantiza ni asegura, bajo ninguna circunstancia, el pago del préstamo.
            </li>
            <li>
              Si el usuario está actuando en nombre y por cuenta de una persona jurídica declara que está debidamente autorizado para actuar en su representación y que tiene capacidad suficiente de la persona que representa.
            </li>
            <li>
              Cada acuerdo de préstamo entre cada prestamista y prestatario es un contrato independiente.
            </li>
            <li>
              CLUB DE PRÉSTAMOS podrá realizar la gestión de cobro de un préstamo en particular, si así se lo solicita el prestamista.
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
                              debe registrar sus datos en la Plaforma;
                            </li>
                            <li>
                              debe registrarse en CLUB DE PRÉSTAMOS por medio del sitio web.
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      Para poder acceder a los servicios ofrecidos por CLUB DE PRÉSTAMOS es necesario registrarse en la Plataforma. Algunos de los datos solicitados son:
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
                          Nombre de usuario: Será el nombre que se utilizará en la Plataforma para identificarse.
                        </li>
                        <li>
                          Contraseña: Permitirá el acceso del usuario a su cuenta de usuario.
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
                          En el caso del socio que este solicitando un credito debera pagar el estudio crediticio realizado por el Club de Prestamos. El costo del mismo es de $15 y le cubre 15 dias dentro de la pagina.
                        </li>
                      </ol>
                    </li>
                    <li>
                      El detalle completo de los datos personales se encuentra en la Plataforma, y el manejo que CLUB DE PRÉSTAMOS haga de ellos, así como sus derechos como usuario se detallan en la Política de Privacidad.
                    </li>
                    <li>
                      El usuario garantiza a CLUB DE PRÉSTAMOS que toda la información que proporcione en el proceso de registro de usuario y formalización de préstamos es verdadera y exacta en todos los aspectos y se compromete a actualizarla si ésta ha cambiado.
                    </li>
                  </ol>
                </li>
                <li>
                  Acceso a la cuenta de usuario
                  <ol type="i">
                    <li>
                      Los datos solicitados en el proceso de registro son utilizados para acceder a la Plataforma una vez la cuenta haya sido activada. Cada vez que el usuario acceda a su cuenta en CLUB DE PRÉSTAMOS tendrá que introducir su dirección de correo electrónico y contraseña. El nombre de usuario y la contraseña para el acceso a la cuenta en CLUB DE PRÉSTAMOS es personal e intransferible.
                    </li>
                    <li>
                      Uso adecuado del usuario y contraseña
                      <ol>
                        <li>
                          El nombre de usuario y contraseña son los medios utilizados para identificar a los usuarios, por lo que deben mantenerse seguros. El usuario es responsable de la actividad realizada en la Plataforma, por lo que cualquier violación de seguridad, extravío, robo o uso no autorizado de información de usuario o contraseña debe ser notificado inmediatamente. CLUB DE PRÉSTAMOS podrá bloquear el acceso en caso que se produzcan varios intentos erróneos de acceso a la cuenta de usuario.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Uso adecuado del sitio web
                      <ol>
                        <li>
                          El usuario se compromete a no adaptar o esquivar los sistemas establecidos en relación con la Plataforma, ni a acceder a la misma para un uso distinto al normal. CLUB DE PRÉSTAMOS tiene el derecho a no actuar según instrucciones del usuario en los casos en los que sospeche que la persona que ha accedido a una cuenta no es el titular, o bien esté realizando alguna actividad ilegal, fraudulenta o no autorizada.
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
                  Una vez que exista acuerdo entre prestamista y prestatario para un préstamo, el prestamista pasará a ser parte en un contrato de préstamo con el prestatario por el monto, plazo y tasa de interés acordada, y se transferirá el dinero directamente de la cuenta cliente del prestamista a la cuenta cliente del prestatario o de una tercera persona según lo indique el prestatario.
                </li>
                <li>
                  El prestamista y el prestatario pueden visualizar y descargar en todo momento el formato del contrato de préstamo y el contrato debidamente formalizado.
                </li>
                <li>
                  El contrato de préstamo completado, acordado y formalizado por medio del sitio web deberá ser firmado, tanto por el prestamista como por el prestatario, utilizando firma digital certificada.
                </li>
                <li>
                  La responsabilidad sobre el cobro del préstamo es del prestamista, debiendo éste llevar un registro de pagos.
                </li>
                <li>
                  Los modelos de documentos, que incluye contrato de préstamo y título ejecutivo, son ofrecidos por CLUB DE PRÉSTAMOS como modelos. CLUB DE PRÉSTAMOS no asume responsabilidad alguna sobre su contenido ni garantiza su exigibilidad una vez firmados, siendo responsabilidad de cada parte asesorarse de previo a la firma de los documentos.
                </li>
              </ol>
            </li>
            <li>
              Las Tarifas de CLUB DE PRÉSTAMO
              <ol type="a">
                <li>
                  CLUB DE PRÉSTAMOS devengará una membresía mensual pagada por los prestatarios por el hecho de estar asociados. La membresía mensual corresponde a la suma de US$5,00. A los usuarios que se afilien como prestamistas no se les cobrará membresía mensual. Una vez aprobado un prestamo, la mensualidad se cobrara por el plazo otorgado.
                  <ol type="i">
                    <li>
                      La membresia es no reembolsable.
                    </li>
                    <li>
                      El monto de la comisión es transferido a CLUB DE PRÉSTAMOS en el mismo acto en que el dinero del préstamo es transferido a su destinatario. El monto de la comisión no forma parte del monto del préstamo.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Desafiliación como usuario en CLUB DE PRÉSTAMO: Si un usuario no quiere seguir siendo parte de CLUB DE PRÉSTAMOS puede efectuar el trámite de desafiliación por medio del sitio web. Los prestatarios no podrán desafiliarse mientras mantengan una operación de crédito por medio de la Plataforma. La membresía mensual, de los meses en que el prestatario no mantuvo una operación de crédito, se le devolverá una vez que de desafile como usuario de CLUB DE PRÉSTAMOS.
            </li>
            <li>
              CLUB DE PRÉSTAMOS puede dar por terminada la membresía de cualquier usuario, en cualquier momento y por cualquier motivo, incluido pero no limitado:
              <ol type="a">
                <li>
                  si se ha utilizado la Plataforma de CLUB DE PRÉSTAMOS de manera que haya causado o pueda causar daños en su funcionamiento o acceso,
                </li>
                <li>
                  se haya hecho con fines fraudulentos o en conexión con un delito,
                </li>
                <li>
                  se haya hecho para enviar, usar o reutilizar cualquier material que sea ilegal, ofensivo o difamatorio, o en violación de los derechos de autor, marca registrada, confidencialidad, privacidad o cualquier otro derecho,
                </li>
                <li>
                  el usuario haya incumplido los Términos y Condiciones Generales, y
                </li>
                <li>
                  se haya hecho para enviar o usar cualquier material que sea ilegal o difamatorio.
                </li>
              </ol>
            </li>
            <li>
              Exoneración de responsabilidad
              <ol type="a">
                <li>
                  La información de usuarios que muestra la Plataforma acerca de tipos de interés, niveles de solvencia u otros elementos relacionados con el retorno de los usuarios y de los préstamos, lo son a modo de guía y no representan ningún tipo de garantía.
                </li>
                <li>
                  La información proporcionada en la Plataforma o a través de otros medios de comunicación no constituyen consejos, recomendaciones o aprobaciones de préstamos. La información proporcionada no está destinada a ser considerada por:
                  <ol type="i">
                    <li>
                      el prestamista como la única base para decidir si le presta o no a una persona.
                    </li>
                    <li>
                      el prestatario como la única base para decidir si accede o no a un préstamo de una persona.
                    </li>
                  </ol>
                </li>
                <li>
                  CLUB DE PRÉSTAMOS no da ninguna garantía en cuanto a la exactitud de los datos que se muestran en la Plataforma, ni se asumen responsabilidades por el contenido descargado o subido por los prestamistas o los prestatarios en la Plataforma.
                </li>
                <li>
                  CLUB DE PRÉSTAMOS no garantiza que habrá suficientes prestatarios ni prestamistas, ni solicitudes de préstamo ni ofertas de fondos.
                </li>
                <li>
                  CLUB DE PRÉSTAMOS no garantiza la disponibilidad continua y permanente de los servicios y del sitio web, quedando de este modo exonerado de cualquier responsabilidad por posibles daños y perjuicios causados como consecuencia de la falta de disponibilidad de éstos por motivos de fuerza mayor o errores en las redes de telecomunicaciones.
                </li>
                <li>
                  CLUB DE PRÉSTAMOS no se hace responsable de los posibles errores u omisiones en la información facilitada al usuario, ni de los posibles perjuicios que se puedan derivar del uso de la información por parte del usuario.
                </li>
                <li>
                  El usuario se compromete a utilizar la Plataforma sólo para fines legales y de una manera que no infrinja los derechos de las otras personas o restrinja o inhiba a cualquier otra persona el uso y disfrute de la misma.
                </li>
                <li>
                  CLUB DE PRÉSTAMOS no se hace responsable si las comunicaciones enviadas a través del sitio web son interceptadas por terceros, mal entregadas o no entregadas en virtud de que la información transmitida a través del sitio web pasará a través de redes públicas de telecomunicaciones.
                </li>
              </ol>
            </li>
            <li>
              Derechos de propiedad intelectual y confidencialidad
              <ol type="a">
                <li>CLUB DE PRÉSTAMOS posee todos los derechos de autor, marcas registradas y no registradas, derechos de diseño, diseños no registrados, derechos de base de datos y todos los demás derechos de propiedad intelectual en relación con la Plataforma.</li>
                <li>Se permite descargar la Plataforma únicamente para uso personal y para utilizar los servicios ofrecidos.</li>
                <li>El usuario se compromete a no difundir la información que obtenga a través del sitio web referente a los demás usuarios.</li>
              </ol>
            </li>
            <li>
              Protección de Datos de Carácter Personal
              <ol type="a">
                <li>CLUB DE PRÉSTAMOS solicitará los datos pertinentes que se detallan en la Plataforma y en la Política de Privacidad del sitio web.</li>
                <li>Si el usuario lo autoriza a través del sitio web, estos datos también se utilizarán para mantener informado al usuario sobre las novedades del sitio web o sobre nuevos servicios o novedades relacionadas con la actividad de CLUB DE PRÉSTAMOS.</li>
                <li>CLUB DE PRÉSTAMOS obtiene datos personales por medio del formulario para suscribirse como usuario que consiste en una plantilla de recolección de datos. Estos datos solo serán accesibles para los otros usuarios del sitio web y sitio web, cuando así lo autorizó el usuario.</li>
                <li>CLUB DE PRÉSTAMOS recolectará los datos personales junto con el consentimiento informado del titular de los mismos, para sus respectivas bases de datos, únicamente para la finalidad indicada en el formulario.</li>
                <li>Los usuarios pueden ejercer sus derechos de acceso, rectificación, cancelación y oposición en relación con el tratamiento de sus datos personales contactando a CLUB DE PRÉSTAMOS a info@clubdeprestamos.cr</li>
                <li>Los usuarios se obligan a cumplir con la Política de Privacidad, así como con las medidas de seguridad implementas por CLUB DE PRÉSTAMOS para salvaguardar los datos personales que posee en sus bases de datos y su tratamiento.</li>
                <li>CLUB DE PRÉSTAMOS tiene medidas físicas y lógicas que garantizan la seguridad de la información contenida en sus bases de datos, asegurando la privacidad, confidencialidad e integridad de la información. CLUB DE PRÉSTAMOS no garantiza que dichas medidas prevengan todo tipo de accesos no autorizados a la información confidencial almacenada.</li>
                <li>CLUB DE PRÉSTAMOS puede modificar la Política de Privacidad en cualquier momento. La nueva versión entra en vigencia apenas sea publicada, quedando los titulares de los datos personales notificados por ese medio, pudiendo el titular podrá revocar el consentimiento informado otorgado.</li>
              </ol>
            </li>
            <li>
              Modificaciones a estos Términos y Condiciones Generales
              <ol type="a">
                <li>
                  CLUB DE PRÉSTAMOS podrá actualizar o modificar los Términos y Condiciones Generales para cumplir con la ley o para cumplir con los requerimientos del negocio. Al utilizar la Plataforma, el usuario acepta que quedará vinculado por los términos de las actualizaciones y modificaciones.
                </li>
              </ol>
            </li>
            <li>
              Nulidad e ineficacia de las cláusulas
              <ol type="a">
                <li>
                  Si cualquier cláusula incluida en los Términos y Condiciones Generales resultara declarada, total o parcialmente, nula o ineficaz, tal nulidad o ineficacia tan sólo afectará a dicha disposición o a la parte de la misma que resulte nula o ineficaz, subsistiendo todo lo demás, considerándose tal disposición total o parcialmente por no incluida.
                </li>
              </ol>
            </li>
            <li>
              Legislación aplicable y Jurisdicción competente
              <ol type="a">
                <li>
                  Los Términos y Condiciones Generales se rigen por la ley de la República de Costa Rica y las partes, con renuncia al fuero propio o a cualquier otro que pudiera corresponderles, se someten a la jurisdicción de los Juzgados y Tribunales de la República de Costa Rica, para cuantas acciones y reclamaciones pudieran derivarse de la presente relación.
                </li>
              </ol>
            </li>
            <li>
              Omisión en el ejercicio de derechos
              <ol type="a">
                <li>
                  El hecho de que CLUB DE PRÉSTAMOS omita ejercer cualquiera de sus derechos, no significará su renuncia a tal derecho, a menos que notifique tal renuncia por escrito. Asimismo, si CLUB DE PRÉSTAMOS renuncia a alguno de sus derechos, ello no significará su renuncia a cualquier derecho de naturaleza similar, posiblemente nacido con posterioridad. Por su parte, el hecho de que CLUB DE PRÉSTAMOS permita (una o varias veces) que un usuario incumpla sus obligaciones, o que las cumpla imperfectamente o en forma distinta, o que no insista en el cumplimiento exacto de tales obligaciones, o no ejerza oportunamente los derechos legales que le correspondan, ello no se reputará ni equivaldrá a modificación alguna de estos Términos y Condiciones Generales, ni obstará en ningún caso para que en el futuro insista en el cumplimiento fiel y específico de las obligaciones que corren a cargo del usuario, y para que ejerza los derechos convencionales o legales de los cuales sea titular.
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
