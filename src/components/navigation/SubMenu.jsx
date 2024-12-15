import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const SubMenu = ({ data }) => {
    return (
        <Flex w={"100%"}>
            {
                data.map((item, idx) => {
                    return <Flex key={idx}>
                        <Box>
                            {item.title}
                        </Box>
                        <Box>
                            {item.subMenu}
                        </Box>
                    </Flex>
                })
            }
        </Flex>
    )
}

export default SubMenu