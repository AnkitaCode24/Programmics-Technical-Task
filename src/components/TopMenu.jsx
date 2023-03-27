import { Box, Button, IconButton, InputAdornment, TextField, } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TopMenu = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(event.target.value)
    };

    return (
        <div>
            <Box style={{ display: 'flex', alignItems: 'center', color: 'white', backgroundColor: 'rebeccapurple' }}>
                <Box sx={{ mr: 'auto', p: 2 }}>PRO OTT</Box>
                <Box sx={{ mr: '40px', p: 2 }}>Home</Box>
                <Box sx={{ mr: '40px', p: 2 }}>Show</Box>
                <Box sx={{ mr: '40px', p: 2 }}>Movie</Box>
                <Box sx={{ mr: '40px', p: 2 }}>Comedy</Box>
                <Box sx={{ mr: '40px', p: 2 }}>News</Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <TextField
                        id="search"
                        type="search"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder='search...'
                        sx={{ width: 250, height: '8px', mr: 2 }}
                        InputProps={{
                            sx: { height: '40px', border: '1px solid white', color: 'white' },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon sx={{ color: 'white' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button sx={{ borderRadius: '30px', backgroundColor: 'red', color: 'white', paddingInline: '20px', mr: 2 }}>Subscribe</Button>
                    <Button sx={{ borderRadius: '30px', backgroundColor: 'green', color: 'white', paddingInline: '25px', mr: 2 }}>Login</Button>
                </Box>
            </Box>
        </div>
    )
}
