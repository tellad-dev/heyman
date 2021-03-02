import React, { useState } from 'react'
import {
  Box,
  List,
  Typography,
  Divider,
  makeStyles,
  Hidden,
  Drawer,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core'
// import PerfectScrollbar from 'react-perfect-scrollbar'
import { Users as UsersIcon, User as UserIcon, BarChart as BarChartIcon, Settings as SettingsIcon } from 'react-feather'
import NavItem from '../../components/NavItem'

const Customer: React.FC = () => {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage)
  }
  const customers = [
    {
      id: 1,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 2,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 3,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 4,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 5,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 6,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 7,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 8,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 9,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 10,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 11,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 12,
      name: 'name',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
  ]
  const items = [
    {
      href: '/login',
      icon: BarChartIcon,
      title: 'Dashboard',
    },
    {
      href: '/customers',
      icon: UsersIcon,
      title: 'Customers',
    },
    {
      href: '/customers',
      icon: UserIcon,
      title: 'Account',
    },
    {
      href: '/login',
      icon: SettingsIcon,
      title: 'Setting',
    },
  ]
  const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#F4F6F8',
      display: 'flex',
      height: '100%',
      overflow: 'hidden',
      width: '100%',
    },
    wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: 64,
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 256,
      },
    },
    mobileDrawer: {
      width: 256,
    },
    desktopDrawer: {
      width: 256,
      top: 64,
      height: 'calc(100% - 64px)',
    },
    contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    content: {
      flex: '1 1 auto',
      height: '100%',
      overflow: 'auto',
    },
  }))
  const classes = useStyles()
  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Typography color="textPrimary" variant="h5">
          店舗名
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map(item => (
            <NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
          ))}
        </List>
      </Box>
    </Box>
  )
  return (
    <>
      <div className={classes.root}>
        <Hidden lgUp>
          <Drawer anchor="left" classes={{ paper: classes.mobileDrawer }} variant="temporary">
            {content}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer anchor="left" classes={{ paper: classes.desktopDrawer }} open variant="persistent">
            {content}
          </Drawer>
        </Hidden>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <Box m={3}>
                <Card>
                  <Box minWidth={1050}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Location</TableCell>
                          <TableCell>Phone</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {customers.slice(0, limit).map(customer => (
                          <TableRow hover key={customer.id}>
                            <TableCell>
                              <Box alignItems="center" display="flex">
                                <Typography color="textPrimary" variant="body1">
                                  {customer.name}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.address}</TableCell>
                            <TableCell>{customer.phone}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                  <TablePagination
                    component="div"
                    count={customers.length}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleLimitChange}
                    page={page}
                    rowsPerPage={limit}
                    rowsPerPageOptions={[5, 10, 25]}
                  />
                </Card>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Customer
