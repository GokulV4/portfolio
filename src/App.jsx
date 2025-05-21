import React, { useRef, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PCImage from './assets/PC.jpg';
import skillsImage from './assets/skills.jpg';
import GradImage from './assets/grad.png';

import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJs,
  FaCode,
  FaCuttlefish,
  FaGraduationCap
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#f4f6f8", paper: "#ffffff" },
  },
  typography: { fontFamily: "'Roboto', sans-serif" },
});

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  const skills = [
    { icon: <FaHtml5 size={30} color="#e34c26" />, name: "HTML" },
    { icon: <FaCss3Alt size={30} color="#264de4" />, name: "CSS" },
    { icon: <FaBootstrap size={30} color="#563d7c" />, name: "Bootstrap" },
    { icon: <FaJs size={30} color="#f0db4f" />, name: "JavaScript" },
    { icon: <FaReact size={30} color="#61dbfb" />, name: "React.js" },
    { icon: <FaCode size={30} color="#0868ac" />, name: "jQuery" },
    { icon: <FaCuttlefish size={30} color="#00599C" />, name: "C" },
    { icon: <SiCplusplus size={30} color="#004482" />, name: "C++" },
  ];

  const projects = [
    {
      name: "Project-1",
      description: "Facebook Like UI ",
      link: "https://github.com/GokulV4/Facebook-like-Page"
    },
    {
      name: "Project-2",
      description: "A responsive ",
      link: "https://github.com/GokulV4/Ateam-website"
    },
    {
      name: "Project-3",
      description: "Jquery validation ",
      link: "https://github.com/GokulV4/Jquery-Form-Validation"
    },
    {
      name: "Project-4",
      description: "A fully responsive page ",
      link: "https://github.com/GokulV4/Responsive-Web-site"
    },
    {
      name: "Project-5",
      description: "Simple Validation.",
      link: "https://github.com/GokulV4/Form-ValidationWeekendTask-1"
    },
    {
      name: "Project-6",
      description: "Project 6 description",
      link: "https://github.com/GokulV4/Project-6"
    },
    {
      name: "Project-7",
      description: "Project 7 description",
      link: "https://github.com/GokulV4/Project-6"
    },
    {
      name: "Project-8",
      description: "Project 8 description",
      link: "https://github.com/GokulV4/Project-6"
    },
    {
      name: "Project-9",
      description: "Project 9 description",
      link: "https://github.com/GokulV4/Project-6"
    },
    
  ];

  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    scrollSnapAlign: "start",
    px: { xs: 2, sm: 4 },
    py: { xs: 4, sm: 8 }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                >
                  <List>
                    {sections.map((section) => (
                      <ListItem
                        button
                        key={section.id}
                        onClick={() => scrollToSection(refs[section.id])}
                      >
                        <ListItemText primary={section.label} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              sections.map((section) => (
                <motion.div
                  key={section.id}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    color="inherit"
                    onClick={() => scrollToSection(refs[section.id])}
                    sx={{ mx: 0.5, fontWeight: "bold", textTransform: "none", fontSize: { xs: 12, sm: 14 } }}
                  >
                    {section.label}
                  </Button>
                </motion.div>
              ))
            )}
          </Toolbar>
        </AppBar>
        <Box
  sx={{
    flexGrow: 1,
    background: "linear-gradient(to bottom right, #e0f7fa, #e1bee7, #fce4ec)",
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    height: "100vh",
  }}
>

        <Box sx={{ scrollSnapType: "y mandatory", overflowY: "scroll", height: "100vh" }}>
          {sections.map(({ id }, index) => (
            <Box key={id} ref={refs[id]} id={id} sx={sectionStyle}>
              <Container maxWidth="md">
                {/* Home Section */}
                { id === "home" && (
  <Box>
    <Typography variant="h3" align="center" sx={{ mb: 2 }}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        &lt;Welcome to my Portfolio /&gt;
      </motion.span>
    </Typography>
    <Typography variant="h5" align="center">
      I'm a passionate developer with skills in front-end technologies.
    </Typography>
  </Box>
)}

                {/* About Section */}
                { id === "about" && (
  <Box
    sx={{
      position: "relative",
      width: "100%", // Full width of the viewport
      height: "100vh", // Full height of the viewport
      backgroundImage: `url(${PCImage})`, // Your background image
      backgroundSize: "cover", // Ensure the image covers the full section
      backgroundPosition: "center", // Center the image
      backgroundRepeat: "no-repeat", // Prevent image repetition
      display: "flex",
      alignItems: "center", // Center the text vertically
      justifyContent: "center", // Center the text horizontally
      textAlign: "center", // Align text to the center
      color: "#fff", // Text color
    }}
  >
    {/* Semi-transparent overlay for better readability */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
        zIndex: 1, // Ensure it sits behind the text
      }}
    />

    {/* Content */}
    <Box sx={{ zIndex: 2, px: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600 }}>
        I am a passionate developer with a strong foundation in various programming languages and frameworks.
      </Typography>
    </Box>
  </Box>
)}

                {/* Skills Section */}
                { id === "skills" && (
  <Box
    sx={{
      position: "relative",
      width: "100%", // Ensure it takes full width
      height: "100vh", // Ensure it takes the full height of the viewport
      backgroundImage: `url(${skillsImage}})`, // Updated to your skills.jpg
      backgroundSize: "cover", // Ensure the background image covers the container
      backgroundPosition: "center", // Center the image
      backgroundRepeat: "no-repeat", // Prevent tiling of the image
      display: "flex",
      alignItems: "center", // Center content vertically
      justifyContent: "center", // Center content horizontally
      textAlign: "center", // Align text to the center
      color: "#fff", // White text color
    }}
  >
    {/* Gradient overlay to make the image lighter */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))", // Light gradient effect
        zIndex: 1, // Ensure overlay stays behind the text
      }}
    />

    {/* Content */}
    <Box sx={{ zIndex: 2, px: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        My Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ textAlign: "center" }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                {skill.icon}
                <Typography variant="body1">{skill.name}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
)}


                {/* Education Section */}
                { id === "education" && (
  <Box textAlign="center">
    <Typography variant="h4" sx={{ mb: 2 }}>
      Education
    </Typography>

    {/* Slow To-and-Fro Shaking Graduation Hat */}
    <motion.img
      src={GradImage}
      alt="Graduation Hat"
      initial={{ x: 0 }}
      animate={{
        x: [0, 5, -5, 5, 0],  // Shakes to and fro with a subtle effect
      }}
      transition={{
        duration: 3,  // Duration for one full shake cycle
        repeat: Infinity,  // Repeat indefinitely
        repeatType: "loop",  // Loop the shaking effect
        ease: "easeInOut",  // Smooth transition between shakes
      }}
      style={{
        width: "120px",
        marginBottom: "24px",
      }}
    />

    <Typography variant="body1" maxWidth="600px" mx="auto">
      I have a degree in Computer Science from XYZ University.
    </Typography>
  </Box>
)}

                {/* Projects Section */}
           { id === "projects" && (
  <Box sx={{ backgroundColor: "#f9f9f9", py: 8 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Paper
                elevation={6}
                sx={{
                  height: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 3,
                  textAlign: "center",
                  overflow: "hidden",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                  },
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    flexGrow: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    color: "#444",
                  }}
                >
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                    px: 3,
                  }}
                >
                  View on GitHub
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)}

                {/* Contact Section */}
               {/* Contact Section */}
{id === "contact" && (
  <Box>
    <Typography variant="h4" align="center" sx={{ mb: 2 }}>
      Contact Me
    </Typography>
    <Box display="flex" justifyContent="center" sx={{ gap: 3 }}>
      {/* GitHub Icon with Link */}
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
        <IconButton
          color="primary"
          href="https://github.com/GokulV4" // Replace with your GitHub link
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </IconButton>
      </motion.div>

      {/* LinkedIn Icon with Link */}
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
        <IconButton
          color="primary"
          href="https://www.linkedin.com/in/gokul-s-krishnan-8b622a215/" // Replace with your LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
      </motion.div>

      {/* Email Icon with Link */}
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
        <IconButton
          color="primary"
          href="mailto:gsk33399@gmail.com" // Replace with your email address
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
        </IconButton>
      </motion.div>
    </Box>
  </Box>
)}

              </Container>
            </Box>
          ))}
        </Box>
      </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
