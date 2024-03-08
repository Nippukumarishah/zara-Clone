import { Box } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <Box as='div' width='100vw' height='100vh' style={{backgroundImg:`url("loading.jpg")`}}>
       {/* <img  src="jumpingletters.gif" alt="" /> */}
    </Box>
  )
}

export default Loading
