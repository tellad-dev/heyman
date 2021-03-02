import React from 'react'
import clsx from 'clsx'
import { Button, ListItem, makeStyles } from '@material-ui/core'

type NavItemProps = {
  propClassName?: string
  href?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any
  title?: string
}
const NavItem: React.FC<NavItemProps> = ({ propClassName, href, icon: Icon, title }) => {
  const useStyles = makeStyles(theme => ({
    item: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0,
    },
    button: {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
      justifyContent: 'flex-start',
      letterSpacing: 0,
      padding: '10px 8px',
      textTransform: 'none',
      width: '100%',
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    title: {
      marginRight: 'auto',
    },
    active: {
      color: theme.palette.primary.main,
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium,
      },
      '& $icon': {
        color: theme.palette.primary.main,
      },
    },
  }))
  const classes = useStyles()
  return (
    <ListItem className={clsx(classes.item, propClassName)}>
      <Button className={classes.button} href={href}>
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
      </Button>
    </ListItem>
  )
}

export default NavItem
