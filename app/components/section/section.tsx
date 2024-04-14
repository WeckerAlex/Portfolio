import { Box, Container } from '@mui/material'
import React, { MutableRefObject } from 'react'

interface Props extends React.PropsWithChildren {
    className: string | undefined
    containerRef: MutableRefObject<HTMLElement | null>
}

const section = ({ children, className, containerRef }: Props) => {
    return (
        <Box ref={containerRef}>
            <Container className={className}>
                {children}
            </Container>
        </Box >
    )
}

export default section