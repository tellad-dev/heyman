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

const CustomerShow: React.FC = () => {
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(0)

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event: any, newPage: number) => {
    setPage(newPage)
  }
  const payments = [
    {
      customer_payment_id: 'xxxxxxxx',
      date: '2021/03/01',
      amount: 2000,
    },
    {
      customer_payment_id: 'aaaaaaaa',
      date: '2021/03/03',
      amount: 1500,
    },
    {
      customer_payment_id: 'bbbbbbbb',
      date: '2021/03/12',
      amount: 2400,
    },
  ]

  return (
    <>
      <GenericTemplate title="顧客詳細　ID:xxxxxxxxxxxx">
        <Box m={3}>
          <Card>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="right">日付</TableCell>
                    <TableCell align="right">決済金額</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {payments.slice(0, limit).map((payment) => (
                    <TableRow hover key={payment.customer_payment_id}>
                      <TableCell align="right">{payment.date}</TableCell>
                      <TableCell align="right">{payment.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={payments.length}
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

export default CustomerShow
