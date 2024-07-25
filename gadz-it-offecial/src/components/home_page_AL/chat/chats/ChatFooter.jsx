import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import SendIcon from '@mui/icons-material/Send';
import { useTheme, styled } from "@mui/material/styles";
import React, { useRef, useState, useEffect } from "react";
import useResponsive from "../../../../hooks/useResponsive";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    height: '40px',
    paddingLeft: "16px !important",
    paddingRight: "16px !important",
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    color: 'white'
  },
  "& .MuiInputBase-root": {
    paddingLeft: '0 !important',
    marginLeft: '16px',
    border: '0.8px solid #8102ff',
    borderRadius: '20px',
    backgroundColor: 'rgba(129, 2, 255, 0.08)'
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const ChatInput = ({
  openPicker,
  setOpenPicker,
  openActions,
  setOpenActions,
  setValue,
  value,
  inputRef,
}) => {

  return (
    <StyledInput
      fullWidth
      inputRef={inputRef}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}

      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,

      }}
    />
  );
};

export default function ChatFooter() {

  const theme = useTheme();
  const isMobile = useResponsive("between", "md", "xs", "sm");


  const [openPicker, setOpenPicker] = React.useState(false);
  const [openActions, setOpenActions] = React.useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [emojiPickerRef, setEmojiPickerRef] = useState(null);
  const [actionsRef, setActionsRef] = useState(null);

  useEffect(() => {
    let handlerPicker = (e) => {
      if (emojiPickerRef && !emojiPickerRef.contains(e.target)) {
        setOpenPicker(false);
      }
    };

    let handlerActions = (e) => {
      if (actionsRef && !actionsRef.contains(e.target)) {
        setOpenActions(false);
      }
    };

    document.addEventListener("mousedown", handlerPicker);
    document.addEventListener("mousedown", handlerActions);

    return () => {
      document.removeEventListener("mousedown", handlerPicker);
      document.removeEventListener("mousedown", handlerActions);
    };
  }, [emojiPickerRef, actionsRef]);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "transparent !important",
      }}
    >
      <Box
        p={isMobile ? 1 : 2}
        width={"clac(100% - 32px)"}
        sx={{
          backgroundColor: 'rgba(129, 2, 255, 0.01)',
          boxShadow: "0px 0px 2px #ab0cdf",
        }}
      >
        <Stack direction="row" alignItems={"center"} spacing={isMobile ? 1 : 3}>
          <Stack direction="row" alignItems={"center"} sx={{ width: "100%" }}>
            <Box
              style={{
                zIndex: 10,
                position: "fixed",
                display: openPicker ? "inline" : "none",
                bottom: 81,

              }}
            >
              {openPicker && (
                <div ref={(ref) => setEmojiPickerRef(ref)}>
                  <Picker
                    theme={'black'}
                    data={data}
                  /**onEmojiSelect={(emoji) => {
                    handleEmojiClick(emoji.native);
                  }}*/

                  />
                </div>
              )}
            </Box>
            <InputAdornment sx={{ width: '40px', height: '40px' }}>
              <IconButton
                ref={(ref) => setEmojiPickerRef(ref)}
                sx={{
                  color: '#8102ff',
                  "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
                }}
                onClick={() => {
                  setOpenPicker(!openPicker);
                }}
              >
                <Smiley />
              </IconButton>
            </InputAdornment>
            <InputAdornment sx={{ width: '40px', height: '40px' }}>
              <IconButton
                ref={(ref) => setActionsRef(ref)}
                sx={{
                  color: '#8102ff',
                  "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
                }}
                onClick={() => {
                  setOpenActions(!openActions);
                }}
              >
                <LinkSimple />
              </IconButton>
              <Stack sx={{ width: "max-content" }}>
                <Stack
                  ref={(ref) => setActionsRef(ref)}
                  sx={{
                    position: "absolute",
                    left: '50px',
                    display: openActions ? "inline-block" : "none",
                  }}
                >
                  {Actions.map((el) => (
                    <Tooltip placement="right" title={el.title}>
                      <Fab
                        onClick={() => {
                          setOpenActions(!openActions);
                        }}
                        sx={{
                          position: "absolute",
                          top: -el.y,
                          backgroundColor: el.color,
                        }}
                        aria-label="add"
                      >
                        {el.icon}
                      </Fab>
                    </Tooltip>
                  ))}
                </Stack>
              </Stack>
            </InputAdornment>
            {/* Chat Input */}
            <ChatInput


              inputRef={inputRef}
              value={value}
              setValue={setValue}
              openPicker={openPicker}
              setOpenPicker={setOpenPicker}
              openActions={openActions}
              setOpenActions={setOpenActions}
            />
          </Stack>
          <Box
            sx={{
              height: 48,
              width: 48,
              margin: ' 1px 0 1px 16px !important'
            }}
          >
            <Stack
              sx={{ height: "100%" }}
              alignItems={"center"}
              justifyContent="center"
            >
              <IconButton
                sx={{
                  color: '#8102ff',
                  "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
                }}
                onClick={() => {
                  socket.emit("text_message", {
                    message: linkify(value),
                    conversation_id: room_id,
                    from: user_id,
                    to: current_conversation.user_id,
                    type: containsUrl(value) ? "Link" : "Text",
                  });
                }}
              >
                <SendIcon color="#ffffff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
