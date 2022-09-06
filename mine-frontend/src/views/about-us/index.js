import { Badge, Container, Divider, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Logo from '../../assets/logo'
import MemberCard from '../../layouts/internal/member-card'

const members = [
  {
    githubUser: 'ewcastroh',
    name: 'Eimer Castro',
    description: '💻Full Stack Web Developer.🖥️ Enthusiastic about learning new technologies 🏍️Biker that loves to know other places. 😸Cats lover.',
    linkedinUser: 'ewcastroh',
    twitterUser: 'ewcastroh',
    charge: 'CEO'
  },
  {
    githubUser: 'tomkat-cr',
    name: 'Carlos J. Ramirez',
    description: 'Full Stack Software Developer | Python, React, JS, PHP, Solidity, Web 3.0, AWS | Passionate about coding, coffee ☕️ and arepas 🫓 🇻🇪',
    linkedinUser: 'carlosjramirez',
    twitterUser: 'tomkat_cr',
    charge: 'COO'
  },
  {
    githubUser: 'Stratoff',
    name: 'Javier Garcia',
    description: "Hi! I'm a Fullstack web developer. Pythonist | Go | Web3 | React.js | ECMAScript | Solidity",
    linkedinUser: 'javier-eduardo-garcía-nava-b18248116',
    twitterUser: 'stratoff_',
    charge: 'CTO'
  },
  {
    githubUser: 'josevsalina',
    name: 'Jose Valentin Salina',
    description: '👀 I’m interested in backend development, cloud computing and web3 | 🌱 I’m currently learning Solidity',
    linkedinUser: 'josevsalina',
    twitterUser: 'JoseVSalina',
    charge: 'CIO'
  },
  {
    githubUser: 'FidelinaArteaga',
    name: 'Fidelina Arteaga',
    description: 'Desarrolador Web Full Stack Mern Jr /CryptoArtista/ Smart Contracts. Celo Solidity Developer - Blockchain Web 3 Developer',
    linkedinUser: 'fidelina-arteaga',
    twitterUser: 'fidearte',
    charge: 'CCO'
  }
]

function AboutUs () {
  return (
    <Container maxW='3xl' minH='100vh'>
      <Heading textAlign='center' as='h2' size='2xl' marginTop='10' marginBottom='10' noOfLines={1}>
        Esta es nuestra historia
      </Heading>

      <Text marginBottom='4'>Nuestra convocatoria como equipo fue bastante espontánea. Eimer convocó a Carlos,  luego ambos convocaron en el Discord <Badge colorScheme='purple'>#general</Badge> y así aparecieron Javier, José y Fidelina. Finalmente el grupo adoptó el nombre GOF5 (Gang of Five).</Text>
      <Text marginBottom='4'>Entre nosotros hay un espíritu de igualdad y se respetan las intervenciones de cada quién. Esto surgió de manera natural desde el principio.</Text>
      <Text marginBottom='4'>Comenzamos a reunirnos para ver cuáles ideas teníamos. Cada uno expuso su idea, y con mente maestra íbamos agregando detalles y otras cosas que fueron apareciendo.</Text>
      <Text marginBottom='4'>Dejamos aterrizar la idea un dia o dos, y luego se sometió a votación. Nadie hizo presión, ni publicidad, ni lobby. No se compraron votos. No importó tampoco de quién fueron las ideas.</Text>
      <Text marginBottom='4'>Acordamos comenzar a hacer reuniones diarias para poder alcanzar las metas. Las primeras reuniones duran menos de 1 hora para poner a funcionar la mente maestra y darle forma al proyecto. Luego de establecer el tablero Jira, comenzar a crear y asignar tareas en el Backlog, nos reunimos diariamente en Stand Ups de 15-20 minutos para hacer el seguimiento, viendo que se hizo el día anterior, que se planea hacer el día de hoy y la existencia de algún bloqueo.</Text>
      <Text marginBottom='4'>Comenzamos a trabajar en el Whitepaper, en reuniones un tanto maratónicas (3-5 horas) pero muy productivas. Delimitamos el proyecto, describimos actores, procedimientos, y sobre todo, la parte conceptual: la historia, el impacto, valor agregado de la Web 3 sobre hacerlo en la Web 2, posibles problemas, marco legal, el pitch, las tecnologías, entre otras cosas.</Text>
      <Text marginBottom='4'>Ya con la agenda para las próximas 2 semanas más clara, comenzamos a trabajar en equipos para el Frontend, Backend y Operaciones.</Text>

      <HStack my={20} justifyContent='center'>
        <Logo />
      </HStack>
      <Divider />
      <VStack spacing={6} mt={10} mb={10}>
        {members.map(member => <MemberCard key={member.githubUser} {...member} />)}
      </VStack>
    </Container>
  )
}

export default AboutUs
