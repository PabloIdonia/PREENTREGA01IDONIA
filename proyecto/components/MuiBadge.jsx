import {Stack, Badge} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={'row'}>
        <Badge badgeContent={1} color='secondary'>
            <ShoppingCartIcon />
        </Badge>
    </Stack>
  )

  
}
