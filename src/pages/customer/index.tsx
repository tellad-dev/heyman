import React, { useState } from 'react'
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Paper,
} from '@material-ui/core'
import GenericTemplate from '../../components/templates/GenericTemplate'

const Customer: React.FC = () => {
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(0)

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event: any, newPage: number) => {
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
      name: 'name6',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 7,
      name: 'name7',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 8,
      name: 'name8',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 9,
      name: 'name9',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 10,
      name: 'name10',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 11,
      name: 'name11',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
    {
      id: 12,
      name: 'name12',
      email: 'mail',
      address: 'address',
      phone: 'phone',
    },
  ]
  return (
    <>
      <GenericTemplate title="トップページ">
        <Box m={3}>
          <Card>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Location</TableCell>
                    <TableCell align="right">Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.slice(0, limit).map(customer => (
                    <TableRow hover key={customer.id}>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell align="right">{customer.email}</TableCell>
                      <TableCell align="right">{customer.address}</TableCell>
                      <TableCell align="right">{customer.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={customers.length}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
              />
            </TableContainer>
          </Card>
        </Box>
      </GenericTemplate>
    </>
  )
}

export default Customer
