import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Link } from 'gatsby'
import Skus from '../components/Skus'
import CartOverview from '../components/CartOverview'
import Header from '../components/AppBar'

const Index = () => (
  <>
    <Header />
    <CssBaseline />
    <Link to="/dev">Dev</Link>
    <main>
      <CartOverview />
      <Skus />
    </main>
  </>
)

export default Index
