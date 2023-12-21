// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
// import CustomCheckBox from '../../views/form/formElements/customInputs/CustomCheckBox'
// import CustomRadio from '../../views/form/formElements/customInputs/customRadio
import CustomCheckBox from '../../../../views/form/formElements/customInputs/CustomCheckBox';
import CustomRadio from '../../../../views/form/formElements/customInputs/customRadio';
import CustomCheckBoxWithIcon from '../../../../views/form/formElements/customInputs/CustomCheckBoxWithIcon';
import CustomRadioWithIcon from '../../../../views/form/formElements/customInputs/CustomRadioWithIcon';
import CustomCheckBoxImage from '../../../../views/form/formElements/customInputs/CustomCheckBoxImage';
import CustomRadioImage from '../../../../views/form/formElements/customInputs/CustomRadioImage';

const CustomInputs = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} >
        <CustomCheckBox />
      </Grid>
      <Grid item xs={12} sm={6} >
        <CustomRadio />
      </Grid>
      <Grid item xs={12} sm={6} >
        <CustomCheckBoxWithIcon />
      </Grid>
      <Grid item xs={12} sm={6} >
        <CustomRadioWithIcon />
      </Grid>
      <Grid item xs={12} sm={6} >
        <CustomCheckBoxImage />
      </Grid>
      <Grid item xs={12} sm={6} >
        <CustomRadioImage />
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ComplexCard/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MediaCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <UserCard/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MoneyTransactionCard />
      </Grid> */}
    </Grid>
  )
}

export default CustomInputs

