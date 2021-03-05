import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { fetchCustomers } from '../../features/Customer/customerSlice'
import * as Model from '../../models'

const Customer: React.FC = () => {
  //
  // useState
  //

  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(0)

  //
  // Data
  //

  const customers = useAppSelector<Model.Customer[] | null>(
    (state) => state.customers.customers
  )
  const dispatch = useAppDispatch()

  //
  // Hooks
  //

  useEffect(() => {
    if (customers === null) {
      void dispatch(fetchCustomers())
    }
  }, [])

  //
  // Methods
  //

  const handleLimitChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setLimit(Number(event.target.value))
  }

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ): void => {
    setPage(newPage)
  }

  //
  // Jsx
  //

  return (
    <>
      <GenericTemplate title="顧客管理">
        <Box m={3}>
          <Card>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>氏名</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">性別</TableCell>
                    <TableCell align="right">住所</TableCell>
                    <TableCell align="right">生年月日</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers?.slice(0, limit).map((customer) => (
                    <TableRow hover key={customer.customerId}>
                      <TableCell>
                        <Link to={`/customer/${customer.customerId}`}>
                          {customer.customerName}
                        </Link>
                      </TableCell>
                      <TableCell align="right">{customer.email}</TableCell>
                      <TableCell align="right">
                        {customer.phoneNumber}
                      </TableCell>
                      <TableCell align="right">{customer.sex}</TableCell>
                      <TableCell align="right">{customer.address}</TableCell>
                      <TableCell align="right">{customer.birthday}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={customers ? customers.length : 1}
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
