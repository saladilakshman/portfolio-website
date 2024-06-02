import { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
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
  Paper,
  Grid,
  Divider,
  Dialog,
  DialogContent,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import profile from "./assets/me.png";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  react,
  git,
  express,
  css,
  html,
  js,
  mongo,
  mui,
  node,
  country,
  crypto,
  ricky,
  shop,
  translate,
  resort,
} from "./assets/index";
import pdffile from "./sample.pdf";
function App() {
  const Images = [react, git, express, css, html, js, mongo, mui, node];
  const Projects = [
    {
      image: country,
      desc: "A web application that provides information about countries around the world.",
      demo: "https://saladilakshman.github.io/country-app/",
      code: "https://github.com/saladilakshman/country-app",
    },
    {
      image: crypto,
      desc: "A web application that provides cryptocurrency market statistics and trending crypto-related news",
      demo: "https://saladilakshman.github.io/cryptolist/",
      code: "https://github.com/saladilakshman/cryptolist",
    },
    {
      image: ricky,
      desc: 'A web application that provides information about the characters from the animated TV series "Rick and Morty".',
      demo: "https://saladilakshman.github.io/rickymorty/",
      code: "https://github.com/saladilakshman/rickymorty",
    },
    {
      image: shop,
      desc: "A web application for a Eye Glasses E-Commerce App to explore various glasswears for eye",
      demo: "https://saladilakshman.github.io/shopping-app/",
      code: "https://github.com/saladilakshman/shopping-app",
    },
    {
      image: translate,
      desc: "Google Web-translator, whcih translates texts to various languages supported by google and can copy the text too ",
      demo: "https://saladilakshman.github.io/translator-app/",
      code: "https://github.com/saladilakshman/translator-app",
    },
    {
      image: resort,
      desc: "Beach resort website, allowing users to explore available rooms, amenities, and nearby attractions",
      demo: "https://react-kefkhw.stackblitz.io/",
      code: "https://github.com/saladilakshman/Beach-resort-app",
    },
  ];
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
                Hi, I`m Saladi Lakshman
              </Typography>
              <Typography variant={Mobile ? "h6" : "h4"}>
                Analyst & MERN Stack Enthusiast
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
                  color="warning"
                  size="small"
                  component="a"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/lakshman_saladi?igsh=dDY0cGMyMGNid2Pr"
                    )
                  }
                >
                  <InstagramIcon />
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
                  backgroundColor: "#c27094",
                  "&:hover,&:focus": {
                    backgroundColor: "#c27094",
                  },
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
                  marginInline: 1.2,
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
              sx={{
                width: Mobile ? 200 : 370,
                clipPath: "circle(40%)",
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
        <VerticalTimeline>
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
            <p>Incident Management, SQL, PowerBi, Shell Scripting, Excel</p>
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
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              spacing={1.2}
              sx={{
                palceItems: "center",
                width: { lg: 800, sm: 440, xs: 490 },
                marginBlockStart: 3,
                marginBlockEnd: 5,
              }}
            >
              {Array.from(Images, (image, index) => {
                return (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    lg={2}
                    spacing={1}
                    key={index}
                    component={motion.div}
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transitionDelay: 2,
                    }}
                  >
                    <Paper
                      sx={{
                        width: { lg: 120, xs: 100 },
                        height: 120,
                        p: 1,
                      }}
                    >
                      <Box
                        component="img"
                        src={image}
                        alt=""
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                        }}
                      />
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
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
              Projects I built
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
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={image}
                      alt=""
                      height="200"
                      loading="lazy"
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
                          bgcolor: "#c27094",
                          "&:hover,&:focus": {
                            bgcolor: "#c27094",
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
            <Button
              variant="outlined"
              component="a"
              href="https://github.com/saladilakshman"
              sx={{
                display: "block",
                margin: "auto",
                width: 190,
                marginBlockEnd: 5,
                borderColor: "#c27094",
                color: "#c27094",
                "&:hover,&:focus": {
                  borderColor: "#c27094",
                  color: "#c27094",
                },
              }}
            >
              View more projects
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: "#c27094",
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
