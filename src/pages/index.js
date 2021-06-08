import * as React from 'react';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle ='Home page'>
      <h1>Teste de título qualquer</h1>
      <p>testando a primeira page</p>
      <StaticImage
        alt='Gato bonitinho'
        src='https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
        />
    </Layout>
  )
}

export default IndexPage