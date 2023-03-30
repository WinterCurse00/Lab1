import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function ColorButtons(props) {
        const { onClick } = props;
        const handleClick = () => {
            onClick();
        };

        const consoleAlert = () => {
        alert("Agachi Daniel")
        console.log("Agachi Daniel");
    }

    return (
        <Stack direction="row" spacing={2}>
            <Button color="secondary" onClick={handleClick} >Main</Button>
            <Button variant="contained" color="success">
                Second
            </Button>
            <Button variant="outlined" color="error" onClick={consoleAlert} >
                Console log
            </Button>
        </Stack>
    );
}