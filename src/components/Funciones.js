import React from 'react'
import { Card } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 5,
    marginBottom: 40,
    webkitBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    mozBoxShadow: '2px -1px 21px -1px rgba(189,185,189,1)',
    boxShadow: '2px -1px 21px -1px rgba(189,185,189,1)'
  }
})

export const Funciones = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root} name='funciones' id='funciones'>
      <Card.Body>
        <div className='text-center'>
          <Card.Title>
            <h4>DECRETO 3355 DE 2009</h4>
            <h5>CAPÍTULO IV</h5>
            <Card.Subtitle>
                ORGANIZACIÓN Y FUNCIONAMIENTO DE LAS MISIONES EN EL EXTERIOR
              <p> ARTÍCULO 22. MISIONES DIPLOMÁTICAS </p>
            </Card.Subtitle>
          </Card.Title>
        </div>
        <Card.Text>
          <br />
          <ol>
            <p>
              <li>
                    Promover y salvaguardar los intereses del país y de sus nacionales ante los demás Estados, Organismos y Conferencias Internacionales y la Comunidad Internacional.<br />
              </li>
            </p>
            <p>
              <li>
                Ejecutar la política exterior colombiana en materia de relaciones bilaterales y multilaterales ante los países y Organismos Internacionales a su cargo, con fundamento en los lineamientos del Ministerio de Relaciones Exteriores.<br />
              </li>
            </p>
            <p>
              <li>
                    Participar en las negociaciones internacionales que involucren a Colombia y a los países y Organismos Internacionales ante los cuales se encuentre acreditado.<br />
              </li>
            </p>
            <p>
              <li>
                Hacer seguimiento a la evolución del contexto político, económico, social, cultural, de los países y Organismos Internacionales ante los cuales se encuentre acreditado, así como prever las posibles implicaciones que pueda tener sobre la política exterior e intereses nacionales, e informar y proponer oportunamente a los Viceministerios correspondientes, los ajustes pertinentes a la política exterior colombiana.<br />
              </li>
            </p>
            <p>
              <li>
                    Identificar los espacios políticos, económicos, culturales, de los países y Organismos Internacionales correspondientes, que pueden ser aprovechados para la ejecución de la política exterior y para la promoción de los intereses de Colombia.<br />
              </li>
            </p>
            <p>
              <li>
                    Presidir las delegaciones que representen al país, cuando así lo disponga el Ministerio de Relaciones Exteriores, en las reuniones de carácter bilateral y multilateral.<br />
              </li>
            </p>
            <p>
              <li>
                    Ejecutar la política migratoria bajo su jurisdicción y proponer acciones en la materia cuando proceda.<br />
              </li>
            </p>
            <p>
              <li>
                    Ejecutar la política en materia de desarrollo fronterizo del país, en el caso de las representaciones ante países fronterizos y proponer acciones en la materia cuando proceda.<br />
              </li>
            </p>
            <p>
              <li>
                    Suministrar a las Direcciones de los Viceministerios correspondientes los elementos técnicos y conceptuales para la definición de la política exterior en materia de las relaciones bilaterales y multilaterales con los países y Organismos Internacionales a su cargo ante los cuales está acreditado.<br />
              </li>
            </p>
            <p>
              <li>
                    Mantener permanentemente informadas a las Direcciones de los Viceministerios correspondientes, sobre el estado de ejecución de las directrices de política exterior en materia de relaciones bilaterales y multilaterales a su cargo.<br />
              </li>
            </p>
            <p>
              <li>
                    Ejecutar y dar seguimiento al plan de acción de los países y Organismos Internacionales a su cargo, con fundamento en las directrices, métodos y criterios que establezca la Oficina Asesora de Planeación y Desarrollo Organizacional.<br />
              </li>
            </p>
            <p>
              <li>
                    Ejercer funciones consulares, cuando sea el caso, en coordinación con la Dirección de Asuntos Migratorios, Consulares y Servicio al Ciudadano.<br />
              </li>
            </p>
            <p>
              <li>
                    Ejecutar la política de promoción de Colombia en el exterior, en coordinación con la Dirección de Asuntos Culturales.<br />
              </li>
            </p>
            <p>
              <li>
                Orientar, evaluar y hacer seguimiento a la gestión de los Consulados de su jurisdicción, teniendo en cuenta los intereses del país y la necesaria protección de los derechos fundamentales de los colombianos en el exterior y coordinar lo pertinente con las políticas adoptadas por el Ministerio en esta materia.<br />
              </li>
            </p>
            <p>
              <li>
                    Coadyuvar en la promoción de los vínculos de todo orden de las comunidades colombianas en el exterior con el país, como medio de exaltar la identidad y valores nacionales y contribuir al mantenimiento de la buena imagen de Colombia en el exterior.<br />
              </li>
            </p>
          </ol>
          <strong>
            Las demás funciones que les sean asignadas.
          </strong>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
