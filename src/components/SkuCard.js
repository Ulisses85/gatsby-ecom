import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import AddIcon from '@material-ui/icons/Add'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
}))

const SkuCard = ({ sku }) => {
  const classes = useStyles()
  const { addItem } = useShoppingCart()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={sku.image}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {sku.name}
        </Typography>
        <Typography gutterBottom component="h6">
          {sku.description}
        </Typography>
        <Typography color="textPrimary">
          Price:{' '}
          {formatCurrencyString({
            value: parseInt(sku.price),
            currency: sku.currency,
            language: navigator.language,
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            addItem(sku)
          }}
        >
          Add
        </Button>
        <IconButton
          aria-label="show 11 new notifications"
          color="primary"
          onClick={() => {
            addItem(sku)
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>{' '}
        <IconButton
          aria-label="show 11 new notifications"
          color="primary"
          onClick={() => {
            addItem(sku)
          }}
        >
          <AddIcon />
        </IconButton>{' '}
        <IconButton
          aria-label="show 11 new notifications"
          color="primary"
          onClick={() => {
            addItem(sku)
          }}
        >
          <AddCircleIcon />
        </IconButton>{' '}
      </CardActions>
    </Card>
  )
}

export default SkuCard
