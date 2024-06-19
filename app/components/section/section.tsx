import { Box, Container } from '@mui/material'
import React from 'react'

interface Props extends React.PropsWithChildren {
    className?: string
    id: string
}

const section = ({ children, id, className/*, containerRef*/ }: Props) => {
    return (
        <Box id={id}>
            <Container className={className}>
                {children}
            </Container>
        </Box >
    )
}

export default section