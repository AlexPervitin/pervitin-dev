import { Box, styled } from '@mui/material';

export const ProjectSliderWrapper = styled(Box)({
  width: '100%',
  position: 'relative',

  '.swiper': {
    width: '100%',
    height: '400px',
    borderRadius: '16px',
  },
  '.swiper-slide': {
    width: '100% !important',
    img: {
      display: 'block',
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    },
  },
  '.swiper-pagination-bullet': {
    background: '#000',
    border: '1px solid #fff',
    width: '10px',
    height: '10px',
  },
});
