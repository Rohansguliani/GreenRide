import React from 'react'
import "./Footer.css"

import { Home } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from "@material-ui/core";
import SettingsIcon from '@mui/icons-material/Settings';

const Footer = () => (
    <div className="Footer">
        <div className="Footer-Icons">
            <IconButton>
                <Home className="icon" />
            </IconButton>
            <IconButton>
                <AccountCircleIcon className="icon" />
            </IconButton>
            <IconButton>
                <SettingsIcon className="icon" />
            </IconButton>
        </div>
    </div>
);

export default Footer;