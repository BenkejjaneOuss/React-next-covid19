import Head from 'next/head'
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-labels";
import NumberFormat from "react-number-format";

export default function Home({data}) {

  const actives = data.confirmed.value - data.deaths.value - data.recovered.value

  return (
    <div className="container">
      <Head>
        <title>Covid19 (Corona) Stats in Morocco</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Covid19 (Corona) Stats
        </h1>

        <div className="grid">

          <a className="card confirmed">
            <h3>Confirmed</h3>
            <p>
              <NumberFormat
                value={data.confirmed.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
          </a>

          <a className="card death">
            <h3>Deaths</h3>
            <p>
              <NumberFormat
                value={data.deaths.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
          </a>

          <a className="card recovered">
            <h3>Recovered</h3>
            <p>
              <NumberFormat
                value={data.recovered.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
          </a>

          <a className="card active">
            <h3>Active</h3>
            <p>
              <NumberFormat
                value={actives}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
          </a>

        </div>

        <Doughnut data={{
                    labels: [
                      'Confirmed',
                      'Deaths',
                      'Recovered'
                    ],
                    datasets: [{
                      data: [data.confirmed.value, data.deaths.value, data.recovered.value],
                      backgroundColor: [
                      '#36A2EB',
                      '#FF6384',
                      '#06AC6E'
                      ],
                      hoverBackgroundColor: [
                      '#36A2EB',
                      '#FF6384',
                      '#06AC6E'
                      ]
                    }]
                  }} 
                  />
        
      </main>

      <footer>
        <a
          href="https://github.com/BenkejjaneOuss/React-next-covid19"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute
        </a> 
        | 
        <a
          href="https://covid19.mathdro.id/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Source
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 10px;
          margin-right: 10px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card.death {
          color: #FF6384;
        }

        .card.recovered {
          color: #06AC6E;
        }

        .card.active {
          color: #3d3dff;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}