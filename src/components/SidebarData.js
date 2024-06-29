import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "ホーム",
        icon: <HomeIcon />, 
        link: "/home", 
    },
    {
        title: "メール",
        icon: <EmailIcon />, 
        link: "/mail", 
    },
    {
        title: "アップロード",
        icon: <CloudUploadIcon />, 
        link: "/upload", 
    },
    {
        title: "設定",
        icon: <SettingsIcon />, 
        link: "/rocket", 
    },
];