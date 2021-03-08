import React, { useState } from 'react'
import {
  Grid,
  Container,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import image from '../images/phone-register-image.png'
import logo from '../images/logo-white.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#00acee',
      height: '100vh',
    },
    card: {
      backgroundColor: 'white',
    },
    cardContent: {
      height: '20vh',
      position: 'relative',
      textAlign: 'center',
      fontSize: '2rem',
    },
    cardMediaWrapper: {
      height: '80vh',
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
    },
    numberButton: {
      margin: theme.spacing(1),
      backgroundColor: 'white',
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
          <Grid item xs={6} className={classes.card}>
            <div className={classes.cardContent}>
              お得なキャンペーンやお知らせを受け取ろう
            </div>
            <div className={classes.cardMediaWrapper}>
              <img src={image} className={classes.cardImage} />
            </div>
          </Grid>
          <Grid item xs={6} container>
            <Container className={classes.container}>
              <Grid item xs={12}>
                <img src={logo} className={classes.headerLogo} />
              </Grid>
              <Grid item xs={12}>
                <h1>{phoneNumber ? phoneNumber : '電話番号'}</h1>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '1')}
                  >
                    1
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '2')}
                  >
                    2
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '3')}
                  >
                    3
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '4')}
                  >
                    4
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '5')}
                  >
                    5
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '6')}
                  >
                    6
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '7')}
                  >
                    7
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '8')}
                  >
                    8
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '9')}
                  >
                    9
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={(e) => addNumber(e, '0')}
                  >
                    0
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.numberButton}
                    onClick={deleteOneCharacter}
                  >
                    ×
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox name="checkedB" color="primary" required />
                  }
                  label="利用規約に同意する"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={!phoneNumber}
                >
                  受け取る
                </Button>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default PhoneRegister
