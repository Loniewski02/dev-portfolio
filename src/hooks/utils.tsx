import { useMediaQuery } from '@mui/material';

export const useIsMedium = () => useMediaQuery('(min-width: 768px)');
export const useIsLarge = () => useMediaQuery('(min-width: 992px)');
