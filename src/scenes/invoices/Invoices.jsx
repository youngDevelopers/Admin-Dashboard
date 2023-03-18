import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

function Invoices() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
        },

        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
    ]

    return (
        <Box m="40px">
            <Header title="INVOICES" subtitle="Invoices List" />
            <Box >
                <DataGrid 
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Invoices
