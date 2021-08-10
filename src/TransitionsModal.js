import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Chart from './Chart';
import DetailedView from './DetailedView';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth:"35vw",
  },
}));

const TransitionsModal = ({data, optionalCall}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if(data !== null){
      setOpen(true);
    }
  }, [data])

  const handleClose = () => {
    setOpen(false);

    if(optionalCall){
      //this could be more generic but it is beyond the scope of this task.
      optionalCall(null);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {data && <DetailedView data={data} />}
            <br/>
            {data && <Chart endDates={data.EndDates} />}
            <Button style={{marginTop:"5%"}} onClick={handleClose}>
              <CloseIcon/>
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal