import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './MovieModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MovieModal({ open, handleClose, id, title, poster, overview  }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img className='poster' src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {id} - {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {overview}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}