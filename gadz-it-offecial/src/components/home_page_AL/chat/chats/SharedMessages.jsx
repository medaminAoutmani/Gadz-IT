import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Tabs,
  Tab,
  Grid,
  Link
} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ArrowLeft } from "phosphor-react";
import useResponsive from "../../../../hooks/useResponsive";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../../../../redux/slices/app";
import { faker } from "@faker-js/faker";
import { DocMsg, LinkMsg } from "../MssgTypes";
import { Shared_docs, Shared_links } from "../../../../data";


const SharedMessages = () => {

  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ width: 320, maxHeight: "100vh", height: 'calc(100vh - 72px)', borderLeft: '0.8px solid #ab0cdf', transition: 'width 0.5s' }}>
      <Stack sx={{ height: "100%" }}>
        {/**Header */}
        <Box
          sx={{
            backgroundColor: 'rgba(129, 2, 255, 0.04)',
            boxShadow: "0px 0px 2px #ab0cdf",
            width: "100%",
          }}
        >
          <Stack
            sx={{ p: 2 }}
            direction="row"
            alignItems={"center"}
            justifyContent="flex-start"
            spacing={6}
            height={'43px'}
          >

            <IconButton
              sx={{
                color: '#8102ff',
                "&:hover": { backgroundColor: 'rgba(129, 2, 255, 0.04)' }
              }}
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
            <Typography variant="subtitle1" color="white" sx={{ fontWeight: '500' }}>Shared Messages</Typography>
          </Stack>
        </Box>

        <Tabs
          value={value}
          onChange={handleChange}
          centered


          TabIndicatorProps={{
            sx: {
              backgroundColor: '#8102ff',
            },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "gray",
            },
            "& .Mui-selected": {
              color: '#8102ff',
              textColor: '#8102ff !important'
            },
          }}

        >
          <Tab label="Media" color={'white'} />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        {/**body */}

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowX: "scroll",
            overflowX: 'hidden',
            marginTop: '10px',
            paddingTop: '8px',
            '&::-webkit-scrollbar': {
              width: '4px'
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent'
            },
            '&::-webkit-scrollbar-corner': {
              backgroundColor: 'transparent'
            },
          }}
          spacing={3}
          padding={1}
          alignItems={'center'}
        >
          {/* <Conversation starred={true} /> */}
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 1, md: 1.5 }}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el) => (
                      <Grid item xl={2} rowSpacing={1} >
                        <img
                          src={faker.image.city()}
                          alt={faker.internet.userName()}
                          style={{ width: '140px', borderRadius: '8px' }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                );
              case 1:
                return Shared_links.map((el) =>
                  <Stack width={"100%"} sx >
                    <Box
                      p={1.5}
                      sx={{
                        backgroundColor: '#3B82F6',
                        borderRadius: 1.5,
                        width: 'max-content'
                      }}
                    >
                      <Stack >
                        <Stack
                          p={2}
                          direction="column"
                          spacing={3}

                          alignItems="flex-start"
                          sx={{
                            backgroundColor: '#5492f8',
                            borderRadius: 1

                          }}
                        >
                          <img src={el.preview} alt={el.message} style={{ maxHeight: 180, borderRadius: '10px' }} />
                          <Stack spacing={2}>
                            <Typography variant='subtitle2' color={'white'} >
                              Creating Chat App
                            </Typography>
                            <Typography
                              variant='subtitle2'
                              component={Link}
                              to="https://www.youtube.com"
                              color={'#1e417b'}
                            >
                              www.youtube.com
                            </Typography>
                          </Stack>
                          <Typography variant='body2' color={'white'} >
                            {el.message}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                );

              case 2:
                return Shared_docs.map((el) => <DocMsg el={el} />);

              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  )
}

export default SharedMessages