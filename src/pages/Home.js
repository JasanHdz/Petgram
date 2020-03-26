import React from 'react'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout title='Pedgram - Tu app de fotos de mascotas'
      subtitle='con pedgram puedes encontrar fotos de animales domésticos muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}