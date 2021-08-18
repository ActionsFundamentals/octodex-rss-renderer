import Head from 'next/head'
import {getOctocats} from "../lib/octodex";
import Octocats from '../components/octocats'
import {Container} from "@material-ui/core";
import OctodexHeader from "../components/octodexHeader";
import OctodexFooter from "../components/octodexFooter";

export default function Index({octocats}) {
  return (
    <Container>
      <Head>
        <title>GitHub Octodex Renderer</title>
        <meta name="description" content="Octodex RRS Feed Renderer"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <OctodexHeader />
      <Octocats octocats={octocats}/>
      <OctodexFooter />
    </Container>
  )
}

export async function getStaticProps() {
  const data = await getOctocats();
  return {
    props: {octocats: data}
  };
}
