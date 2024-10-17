import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import * as Colors from "@mui/material/colors";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Container,
  Box,
  Typography,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Divider,
  Dialog,
  DialogContent,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Button,
  Chip,
  Avatar,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub, Instagram } from "@mui/icons-material";
import profile from "./assets/me.png";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import pdffile from "./sample.pdf";
import { tages, Images, Projects } from "./utils/helpers";
function App() {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isnight, setIsnight] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  useEffect(() => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      dayPeriod: "long",
    };
    setInterval(() => {
      const mode_checker = new Intl.DateTimeFormat("en-IN", options).format(
        new Date()
      );
      if (mode_checker.includes("evening") || mode_checker.includes("night")) {
        setIsnight(true);
      } else {
        setIsnight(false);
      }
    }, 100);
  }, [isnight]);
  const dark_theme = createTheme({
    palette: {
      mode: isnight ? "dark" : "light",
    },
  });
  let url = "https://www.instagram.com/lakshman__saladi/";
  const callComponent = (
    <Box
      component="a"
      href="tel:+919121357499"
      sx={{
        color: isnight ? "black" : "white",
        textDecoration: "none",
      }}
    >
      9121357499
    </Box>
  );
  return (
    <ThemeProvider theme={dark_theme}>
      <CssBaseline />
      <Container
        sx={{
          marginBlockEnd: { xs: 4, lg: "" },
        }}
      >
        <Dialog open={showPdf} fullScreen>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setShowPdf(false)}
            onClose={() => setShowPdf(false)}
          >
            close Pdf
          </Button>
          <DialogContent
            sx={{
              display: "block",
              margin: "auto",
            }}
          >
            <object
              type="application/pdf"
              data={pdffile}
              width={Mobile ? "100%" : "800px"}
              height="100%"
            ></object>
          </DialogContent>
        </Dialog>
        <Stack
          direction={{ xs: "column-reverse", lg: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            component={motion.div}
            initial={{
              x: -150,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
            }}
          >
            <Box className="text-box">
              <Typography variant={Mobile ? "h5" : "h3"} className="h1">
                {`Hi, I'm Saladi Lakshman`}
              </Typography>
              <Typography variant={Mobile ? "h6" : "h4"}>
                Analyst & Frontend developer
              </Typography>
            </Box>
            <Stack
              direction="row"
              justifyContent="start"
              alignItems="center"
              sx={{
                paddingBlockStart: 2,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "grey",
                  }}
                >
                  Connect with me :
                </Typography>
              </Box>
              <Box>
                <IconButton
                  color="info"
                  size="small"
                  component="a"
                  href="https://www.linkedin.com/in/lakshman-saladi/"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  sx={{ color: isnight ? "white" : "#252525" }}
                  size="small"
                  component="a"
                  onClick={() =>
                    window.open("https://github.com/saladilakshman")
                  }
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  color="error"
                  size="small"
                  component="a"
                  onClick={() => window.open(url)}
                >
                  <Instagram />
                </IconButton>
              </Box>
            </Stack>
            <Box
              sx={{
                paddingBlockStart: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.purple[400],
                  "&:hover,&:focus": {
                    backgroundColor: Colors.purple[500],
                  },
                  textTransform: "capitalize",
                  color: "white",
                  fontWeight: 400,
                }}
                size="small"
                onClick={() => setShowPdf(true)}
              >
                show resume
              </Button>
              <Button
                variant="outlined"
                component="a"
                href="mailto:lakshmansaladi123@gmail.com"
                size="small"
                sx={{
                  borderColor: isnight ? "white" : "black",
                  color: isnight ? "white" : "black",
                  textTransform: "capitalize",
                  marginInline: 1.2,
                  fontWeight: 400,
                  "&:hover,&:focus": {
                    borderColor: isnight ? "white" : "black",
                    color: isnight ? "white" : "black",
                  },
                }}
              >
                Hire me
              </Button>
            </Box>
          </Box>

          <Box
            component={motion.div}
            initial={{
              x: 150,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              type: "spring",
            }}
          >
            <Box
              component={LazyLoadImage}
              alt=""
              className="img"
              src={profile}
              placeholderSrc="https://via.placeholder.com/640x360/485764/FFFFFF?text="
              sx={{
                width: Mobile ? 200 : 250,
                borderRadius: "50%",
                outline: "1.8px solid rgb(238,174,202)",
                mt: 2,
                outlineOffset: 0.8,
              }}
            />
          </Box>
        </Stack>
      </Container>
      <Box
        sx={{
          paddingBlockStart: 5,
          backgroundColor: isnight ? "" : "rgb(243, 236, 236)",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              paddingBlockEnd: 2,
            }}
            component={motion.div}
            initial={{
              y: -120,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffnes: 5,
            }}
          >
            My Journey
          </Typography>
          <Divider
            sx={{
              marginBlockEnd: 2,
            }}
          />
        </Container>
        <VerticalTimeline animate>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "inherit",
              fontFamily: "helvetica",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022(Feb) - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ color: "white", fontFamily: "roboto" }}
            >
              Analyst III Infrastructure services
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ color: "white", fontFamily: "roboto" }}
            >
              DXC Technology
            </h4>
            <p>
              {" "}
              Skills : ITIL, ITSM, SQL, PowerBI, BMC Remedy, PagerDuty, Excel
            </p>
            <p style={{ fontWeight: "400" }}>
              As an infrastructure support specialist for the AT&T project, I
              focus on monitoring tickets, resolving incidents, and enhancing
              operational efficiency. Utilizing SQL for data analysis and
              PowerShell scripting for automation, I work closely with delivery
              teams to ensure timely incident acknowledgment and resolution,
              contributing to improved service restoration times.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ fontFamily: "helvetica" }}
            date="2018(Jun) - 2021(Sep)"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ fontFamily: "roboto", color: "black" }}
            >
              BVRAJU Degree College
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ fontFamily: "roboto", color: "black" }}
            >
              Bhimavaram, Andra Pradesh
            </h4>
            <p style={{ fontFamily: "roboto", color: "black" }}>
              Acquired Bachelor Degree in Computer Science with 82.4%
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
      <Container>
        <Box
          sx={{
            paddingBlockStart: 12,
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              paddingBlockEnd: 2,
            }}
            component={motion.div}
            initial={{
              y: -120,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffnes: 5,
            }}
          >
            Tools and Technologies
          </Typography>
          <Divider />
          <Box>
            <Stack
              direction="row"
              gap={2}
              flexWrap="wrap"
              justifyContent={"center"}
              alignItems={"start"}
              sx={{ py: 3 }}
            >
              {tages.map((tag, index) => {
                return (
                  <Chip
                    label={tag}
                    key={index}
                    variant={isnight ? "outlined" : "contained"}
                    size="medium"
                    avatar={<Avatar alt="" size="large" src={Images[index]} />}
                    sx={{
                      fontSize: 15,
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
        </Box>
        <Box sx={{ paddingBlockStart: { xs: 8, lg: 12 } }}>
          <Container>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{
                paddingBlockEnd: 2,
              }}
              component={motion.div}
              initial={{
                y: -120,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffnes: 5,
              }}
            >
              Projects
            </Typography>
            <Divider />
          </Container>
          <Grid
            container
            spacing={1.2}
            sx={{ paddingBlockStart: 4, paddingBlockEnd: 7 }}
          >
            {Projects.map((project, index) => {
              const { demo, image, code, desc } = project;
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  lg={4}
                  component={motion.div}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    transitionDelay: 2,
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      boxShadow: 4,
                      border: isnight ? 1 : 0,
                      p: isnight ? 0.8 : 0,
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={image}
                      alt=""
                      height="200"
                      loading="eager"
                      sx={{ borderRadius: 1 }}
                    />
                    <CardContent>
                      <Typography variant="body1" color="inherit">
                        {desc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        component="a"
                        href={demo}
                        size="small"
                        sx={{
                          bgcolor: Colors.purple[400],
                          textTransform: "capitalize",
                          color: "white",
                          fontWeight: 400,
                          "&:hover,&:focus": {
                            bgcolor: Colors.purple[500],
                          },
                        }}
                      >
                        view demo
                      </Button>
                      <Button
                        variant="outlined"
                        color="inherit"
                        component="a"
                        href={code}
                        size="small"
                        sx={{ textTransform: "capitalize" }}
                      >
                        get code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Box
            component={motion.div}
            initial={{
              y: -40,
            }}
            whileInView={{
              y: 10,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="outlined"
                component="a"
                href="https://github.com/saladilakshman"
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  marginBlockEnd: 5,
                  borderColor: Colors.purple[400],
                  color: Colors.purple[400],
                  "&:hover,&:focus": {
                    borderColor: Colors.purple[500],
                    color: Colors.purple[500],
                  },
                  textTransform: "capitalize",
                }}
              >
                View more projects
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: Colors.purple[300],
        }}
      >
        <Typography
          color="inherit"
          textAlign="center"
          sx={{
            display: "block",
            margin: "auto",
            p: 2,
            fontSize: { xs: 14, sm: 17, lg: 18 },
          }}
        >
          If my profile meet your requirements, you can email me or call{" "}
          {callComponent}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
