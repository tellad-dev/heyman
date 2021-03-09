import React, { useState } from 'react'
import {
  Grid,
  Container,
  FormControlLabel,
  Checkbox,
  Box,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import image from '../images/phone-register-image.png'
import logo from '../images/logo-white.png'
import SButton from '../components/atoms/Button'
import BackspaceIcon from '@material-ui/icons/Backspace'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      backgroundColor: '#DCDCDC',
    },
    card: {
      backgroundColor: '#2196F3',
    },
    cardContent: {
      paddingTop: '10vh',
      height: '10vh',
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    cardMediaWrapper: {
      paddingTop: '10vh',
      height: '70vh',
    },
    cardImage: {
      maxHeight: '100%',
      maxWidth: '100%',
    },
    headerLogo: {
      height: '60px',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      widht: '50%',
    },
    checkLabel: {
      color: 'white',
    },
  })
)
const PhoneRegister: React.FC = () => {
  //
  // useState
  //

  const [phoneNumber, setPhoneNumber] = useState<string | null>(null)

  //
  // Methods
  //
  const classes = useStyles()
  const addNumber = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    number: string
  ): void => {
    phoneNumber === null
      ? setPhoneNumber(number)
      : setPhoneNumber(phoneNumber + number)
    phoneNumber?.length === 11 ? setPhoneNumber(phoneNumber.slice(1)) : true
  }

  const deleteOneCharacter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    phoneNumber !== null ? setPhoneNumber(phoneNumber.slice(0, -1)) : true
  }
  //
  // Jsx
  //
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={6}>
            <Container maxWidth={'sm'}>
              <div className={classes.cardContent}>
                お得なキャンペーンや
                <br />
                お知らせを受け取ろう
              </div>
              <div className={classes.cardMediaWrapper}>
                <img src={image} className={classes.cardImage} />
              </div>
            </Container>
          </Grid>
          <Grid item xs={6} className={classes.card}>
            <Container maxWidth={'xs'} className={classes.container}>
              <Box display="flex" justifyContent="center">
                <img src={logo} className={classes.headerLogo} />
              </Box>
              <Box m={3} display="flex" justifyContent="center">
                <SButton
                  width={'100%'}
                  height={'3rem'}
                  fontSize={'1.5rem'}
                  color={'#eee'}
                  backgroundColor={'#1976D2'}
                  margin={'auto'}
                  borderRadius={'30px'}
                  disabled
                >
                  {phoneNumber ? phoneNumber : '電話番号'}
                </SButton>
              </Box>
              <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center">
                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '1')}
                  >
                    1
                  </SButton>

                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '2')}
                  >
                    2
                  </SButton>

                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '3')}
                  >
                    3
                  </SButton>
                </Box>
              </Box>
              <Box mt={5} display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center">
                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '4')}
                  >
                    4
                  </SButton>

                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '5')}
                  >
                    5
                  </SButton>

                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '6')}
                  >
                    6
                  </SButton>
                </Box>
              </Box>
              <Box mt={5} display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center">
                  <div></div>
                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '7')}
                  >
                    7
                  </SButton>

                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '8')}
                  >
                    8
                  </SButton>

                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '9')}
                  >
                    9
                  </SButton>
                </Box>
              </Box>
              <Box mt={5} display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center">
                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#2196F3'}
                    backgroundColor={'#2196F3'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    disabled
                  >
                    -
                  </SButton>
                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    fontSize={'2.5rem'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={(e) => addNumber(e, '0')}
                  >
                    0
                  </SButton>
                  <SButton
                    width={'75px'}
                    height={'75px'}
                    color={'#eee'}
                    backgroundColor={'#1976D2'}
                    margin={'auto'}
                    borderRadius={'50%'}
                    onClick={deleteOneCharacter}
                  >
                    <BackspaceIcon />
                  </SButton>
                </Box>
              </Box>
              <Box mt={1}>
                <FormControlLabel
                  control={
                    <Checkbox name="checkedB" color={'default'} required />
                  }
                  label="利用規約・プライバシーポリシーに同意する"
                  className={classes.checkLabel}
                />
              </Box>
              <Box mt={1}>
                <SButton
                  width={'100%'}
                  height={'3rem'}
                  color={'#eee'}
                  fontSize={'1.5rem'}
                  backgroundColor={'#1976D2'}
                  margin={'auto'}
                  borderRadius={'30px'}
                >
                  受け取る
                </SButton>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default PhoneRegister
