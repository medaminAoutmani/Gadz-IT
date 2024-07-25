import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../../../data'
import { TextMsg, TimeLine, MediaMsg, ReplyMsg, LinkMsg, DocMsg } from '../MssgTypes'

export default function Messages({ starredMsg }) {
  return (
    <Box p={starredMsg ? 1 : 3} >
      <Stack spacing={starredMsg ? 2 : 3} >
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} starredMsg={starredMsg} />
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el} starredMsg={starredMsg} />
                case "doc":
                  return <DocMsg el={el} starredMsg={starredMsg} />
                case "link":
                  return <LinkMsg el={el} starredMsg={starredMsg} />
                case "reply":
                  return <ReplyMsg el={el} />
                default:
                  return <TextMsg el={el} />
              }
              break;
            default:
              return <></>
          }
        }
        )}
      </Stack>
    </Box>
  )
}
