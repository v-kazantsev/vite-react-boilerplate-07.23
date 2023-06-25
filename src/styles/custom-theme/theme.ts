import { extendTheme } from '@chakra-ui/react';
import { typography } from '@/styles/custom-theme';

export const theme = extendTheme({
  textStyles: typography,
});