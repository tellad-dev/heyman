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
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(0)
  const [customers, setCustomers] = useState<Models.Customer[]>([])
  const customerRepository = RepositoryFactory.get('customers')

  const getCustomerList = async () => {
    const customerGetResult: any = await customerRepository.get()
    const customersGetResult: Models.ICustomerGetResult[] = customerGetResult.data.list.map(
      (p: any) => {
        return p
      }
    )
    const customerList: Models.Customer[] = customersGetResult.map(
      (p: Models.ICustomerGetResult) => {
        console.log('customersGetResult.payments.map', p.notifications)
        return new Models.Customer({
          customerId: p.customer_id,
          customerName: p.customer_name,
          email: p.email,
          phoneNumber: p.phone_number,
          sex: p.sex,
          address: p.address,
          birthday: p.birthday,
          payments: p.payments.map((p: any) => {
            return new Models.Payment({
              customerPaymentId: p.customer_payment_id,
              date: p.date,
              amount: p.amount,
            })
          }),
          notifications: p.notifications.map((p: any) => {
            return new Models.Notification({
              notificationId: p.notification_id,
              receivedDate: p.received_date,
              category: p.category,
            })
          }),
        })
      }
    )
    console.log(customerList)
    setCustomers(customerList)
  }
  useEffect(() => {
    void getCustomerList()
  }, [])

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event: any, newPage: number) => {
    setPage(newPage)
  }

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
