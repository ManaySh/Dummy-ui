// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiSlider from '@mui/material/Slider'


const hexToRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '')
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
// Styled component for a success Slider
const SliderSuccess = styled(MuiSlider)(({ theme }) => ({


    color: theme.palette.success.main,
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
        boxShadow: `0 0 0 8px ${hexToRGBA(theme.palette.success.main, 0.16)} !important`
    },
    '@media(hover:none)': {
        '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: 'none'
        }
    },
    '& .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible.Mui-active': {
        boxShadow: `0 0 0 10px ${hexToRGBA(theme.palette.success.main, 0.16)} !important`
    }
}))

// Styled component for a error Slider
const SliderError = styled(MuiSlider)(({ theme }) => ({
    color: theme.palette.error.main,
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
        boxShadow: `0 0 0 8px ${hexToRGBA(theme.palette.error.main, 0.16)} !important`
    },
    '@media(hover:none)': {
        '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: 'none'
        }
    },
    '& .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible.Mui-active': {
        boxShadow: `0 0 0 10px ${hexToRGBA(theme.palette.error.main, 0.16)} !important`
    }
}))

// Styled component for a warning Slider
const SliderWarning = styled(MuiSlider)(({ theme }) => ({
    color: theme.palette.warning.main,
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
        boxShadow: `0 0 0 8px ${hexToRGBA(theme.palette.warning.main, 0.16)} !important`
    },
    '@media(hover:none)': {
        '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: 'none'
        }
    },
    '& .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible.Mui-active': {
        boxShadow: `0 0 0 10px ${hexToRGBA(theme.palette.warning.main, 0.16)} !important`
    }
}))

// Styled component for a info Slider
const SliderInfo = styled(MuiSlider)(({ theme }) => ({
    color: theme.palette.info.main,
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
        boxShadow: `0 0 0 8px ${hexToRGBA(theme.palette.info.main, 0.16)} !important`
    },
    '@media(hover:none)': {
        '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
            boxShadow: 'none'
        }
    },
    '& .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible.Mui-active': {
        boxShadow: `0 0 0 10px ${hexToRGBA(theme.palette.info.main, 0.16)} !important`
    }
}))

const SliderCustomColors = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 500 }}>Success Slider</Typography>
            <SliderSuccess defaultValue={30} aria-labelledby='success-slider' />
            <Typography sx={{ fontWeight: 500 }}>Error Slider</Typography>
            <SliderError defaultValue={30} aria-labelledby='error-slider' />
            <Typography sx={{ fontWeight: 500 }}>Warning Slider</Typography>
            <SliderWarning defaultValue={30} aria-labelledby='warning-slider' />
            <Typography sx={{ fontWeight: 500 }}>Info Slider</Typography>
            <SliderInfo defaultValue={30} aria-labelledby='info-slider' />
        </div>
    )
}

export default SliderCustomColors
