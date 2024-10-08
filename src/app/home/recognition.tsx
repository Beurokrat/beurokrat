import React from 'react'
import Container from '../_components/container'

interface Props {}

function Recognition(props: Props) {
    const {} = props
    return (
        <Container>
            <div className="flex flex-col">
                <h1 className="text-[60px]">Recognised by</h1>
                <div className="flex flex-row"></div>
            </div>
        </Container>
    )
}

export default Recognition
