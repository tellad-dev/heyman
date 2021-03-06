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
import { RepositoryFactory } from '../../repositories/RepositoryFactory'
import * as Models from '../../models'

const Customer: React.FC = () => {
  //
  // useState
  //

  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(0)
  const [customers, setCustomers] = useState<Models.Customer[]>([])

  //
  // Data
  //

  const customerRepository = RepositoryFactory.get('customers')

  //
  // Hooks
  //

  useEffect((): void => {
    void getCustomerList()
  }, [])

  //
  // Methods
  //

  const getCustomerList = async (): Promise<void> => {
    const {
      data,
    } = await customerRepository.get<Models.Api.CustomerGetResult>()
    const customerList = data.list.map((l: Models.Api.Customer) =>
      Models.Customer.createFromApi(l)
    )
    setCustomers(customerList)
  }

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
                  {customers.slice(0, limit).map((customer) => (
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
