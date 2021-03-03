import React, { useState } from 'react'
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
      customer_id: 1,
      customer_name: 'Shinichi Matoba',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '199x/xx/xx',
    },
    {
      customer_id: 2,
      customer_name: 'Shinichi Matoba',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '199x/xx/xx',
    },
    {
      customer_id: 3,
      customer_name: 'Shinichi Matoba',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '199x/xx/xx',
    },
    {
      customer_id: 4,
      customer_name: 'Shinichi Matoba',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '199x/xx/xx',
    },
    {
      customer_id: 5,
      customer_name: 'Shinichi Matoba',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '199x/xx/xx',
    },
    {
      customer_id: 6,
      customer_name: 'Michihiro Doi',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '199x/xx/xx',
    },
    {
      customer_id: 7,
      customer_name: 'Michihiro Doi',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '199x/xx/xx',
    },
    {
      customer_id: 8,
      customer_name: 'Ryosuke Kobayashi',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '198x/xx/xx',
    },
    {
      customer_id: 9,
      customer_name: 'Ryosuke Kobayashi',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '198x/xx/xx',
    },
    {
      customer_id: 10,
      customer_name: 'Ryosuke Kobayashi',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '198x/xx/xx',
    },
    {
      customer_id: 11,
      customer_name: 'Ryosuke Kobayashi',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '198x/xx/xx',
    },
    {
      customer_id: 12,
      customer_name: 'Ryosuke Kobayashi',
      email: 'xxxxx@gamil.com',
      phone_number: '080xxxxxxxx',
      sex: 'male',
      address: '兵庫県神戸市西区xxxxxxxxxxxxxx',
      birthday: '198x/xx/xx',
    },
  ]
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
                    <TableRow hover key={customer.customer_id}>
                      <TableCell>
                        <Link to={`/customer/${customer.customer_id}`}>
                          {customer.customer_name}
                        </Link>
                      </TableCell>
                      <TableCell align="right">{customer.email}</TableCell>
                      <TableCell align="right">
                        {customer.phone_number}
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
