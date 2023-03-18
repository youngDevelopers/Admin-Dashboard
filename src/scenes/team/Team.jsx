import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

function Team() {
    const theme = useTheme()
    const colors = tokens(theme.palatte.mode)
    const columns = [

        {// for each data item choose id attribute as the first col of the data grid and name using the headerName
            field : "id",
            headerName : "ID"
        },

        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
          },

          {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
          },
    ]

    return (
        <Box >
            <Header title="TEAM" subtitle="Manage our Team Members" />
            <Box >
                <DataGrid 
                    rows = {mockDataTeam}
                    columns = {columns}
                />
            </Box>
        </Box>

    )
}

export default Team
