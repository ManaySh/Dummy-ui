// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardHeader, Box } from '@mui/material';
// ** Demo Components Imports
import BasicPagination from '../../views/components/paginations/BasicPagination';
import CustomIcons from '../../views/components/paginations/CustomIcons';
import OutlinedPagintion from '../../views/components/paginations/OutlinedPagination';
import PaginationButtons from '../../views/components/paginations/PaginationButtons';
import PaginationControlled from '../../views/components/paginations/paginationControlled';
import PaginationSize from '../../views/components/paginations/PaginationSize';
import PaginationRanges from '../../views/components/paginations/PaginationsRanges';
import RoundedPaginations from '../../views/components/paginations/RoundedPagination';
import UsePagination from '../../views/components/paginations/usePagination';
import TablePaginations from '../../views/components/paginations/TablePaginations';

const Paginations = () => {
    return (
        <div>
            <h1 style={{color:"#1976d2"}}>Pagination</h1>
            <p>The Pagination component enables the user to select a specific page from a range of pages.</p>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Basic Pagination' />
                            <CardContent>
                                <Box textAlign="center">
                                    <BasicPagination />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>



                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Outlined pagination' />
                            <CardContent>
                                <Box textAlign="center">
                                    <OutlinedPagintion/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>



                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Rounded pagination' />
                            <CardContent>
                                <Box textAlign="center">
                                    <RoundedPaginations/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>



                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Pagination size' />
                            <CardContent>
                                <Box textAlign="center">
                                    <PaginationSize/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>



                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Buttons' />
                            
                            <CardContent>
                            <Typography>You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.</Typography>
                                <Box textAlign="center" style={{marginTop:"20px"}}>
                                    <PaginationButtons/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Custom icons' />
                            <CardContent>
                            <Typography>It's possible to customize the control icons.</Typography>
                                <Box textAlign="center" style={{marginTop:"20px"}}>
                                    <CustomIcons/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Pagination ranges' />
                            <CardContent>
                            <Typography>You can specify how many digits to display either side of current page with the siblingCount prop, and adjacent to the start and end page number with the boundaryCount prop.</Typography>
                                <Box textAlign="center" style={{marginTop:"20px"}}>
                                    <PaginationRanges/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Controlled pagination' />
                            <CardContent>
                                <Box textAlign="center">
                                    <PaginationControlled/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='usePagination' />
                            
                            <CardContent>
                            <Typography>For advanced customization use cases, a headless usePagination() hook is exposed. It accepts almost the same options as the Pagination component minus all the props related to the rendering of JSX. The Pagination component is built on this hook.</Typography>
                                <Box textAlign="center" style={{marginTop:"20px"}}>
                                    <UsePagination/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <Grid container spacing={3} className='match-height'>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Table pagination' />
                            
                            <CardContent>
                            <Typography>The Pagination component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog.</Typography>
                            <br/>
                            <Typography>For the pagination of a large set of tabular data, you should use the TablePagination component.</Typography>
                                <Box textAlign="center" style={{marginTop:"20px"}}>
                                    <TablePaginations/>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default Paginations;