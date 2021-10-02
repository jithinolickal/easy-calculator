import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/Average.module.css";
import AddIcon from '@mui/icons-material/Add';

export default function AverageCalc() {
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(1);
  const [total, setTotal] = useState();

  const handleClick = () => {
    setTotal(value/quantity)
  }
  

  return (
    <>
      <Grid container className={styles.container}>
        <Grid container item xs={12}></Grid>
        <Grid container item xs={12}>
          <Grid item container xs={12} justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <b>Average Calculator</b>
            </Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              className={styles.controlContainer}
              spacing={1}
            >
              <Grid item xs={8} md={6}>
                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={4} md={6}>
                <TextField
                  type="number"
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
            <Grid container className={styles.iconContainer}>
            <AddIcon className={styles.icon}/>
            </Grid>
            <Button variant="outlined" className={styles.btnContainer} onClick={handleClick}>
              Calculate
            </Button>
        </Grid>
        {
            total && 
        <Grid item xs={12} className={styles.resultContainer}>
            <Typography>
                Average price : {(total == Infinity)? 0 : total.toFixed(3)}
            </Typography>
            <Typography>
                Cash Used : {quantity*value}
            </Typography>
        </Grid>
        }
      </Grid>
    </>
  );
}
