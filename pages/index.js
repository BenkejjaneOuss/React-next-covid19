import fetch from 'node-fetch'
import Home from "../components/Home";

export default ({ data }) => (
  <>
    <Home data={data}/>
  </>
);

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('https://covid19.mathdro.id/api/countries/morocco')
  const data = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}