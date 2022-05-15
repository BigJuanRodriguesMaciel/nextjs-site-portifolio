import { Box, Container } from '@mui/material'
import React from 'react'
import MenuNavLinks from '../menu-nav'

export default function Header() {
  return (
    <header>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="d-flex c-center j-c-c-center">
            <h2 className="f-size-36 f-w-700">Juan Maciel</h2>
          </div>
          <MenuNavLinks choice={0}/>
        </Box>
      </Container>
    </header>
  )
}