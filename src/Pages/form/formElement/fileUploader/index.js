// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import SingleFileUploader from '../../../../views/form/formElements/fileUploader/SingleFileUpload'
import MultipleFileUploader from '../../../../views/form/formElements/fileUploader/MultipleFileUpload'

const FileUploader = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} >
        <Typography variant='h6'>React Drag-and-Drop Container</Typography>
        <Typography >Effortless HTML5 Drag-and-Drop Zone Using React.js</Typography>
      </Grid>
      <Grid item xs={12}>
        <SingleFileUploader />
      </Grid>
      <Grid item xs={12}>
        <MultipleFileUploader />
      </Grid>
    </Grid>
  )
}

export default FileUploader

