import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

export default props => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query SkusForProducts {
          skus: allStripeSku(sort: { fields: [price] }) {
            edges {
              node {
                id
                currency
                price
                image
                attributes {
                  name
                }
                product {
                  metadata {
                    description
                  }
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {skus.edges.map(({ node: sku }) => {
              const newSku = {
                sku: sku.id,
                image: sku.image,
                name: sku.attributes.name,
                price: sku.price,
                currency: sku.currency,
                description: sku.product.metadata.description
              }
              return (
                <Grid item key={sku.id} xs={12} sm={6} md={4}>
                  <SkuCard sku={newSku} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      )}
    />
  )
}
