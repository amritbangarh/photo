import React, { useState } from "react";
import { Box, Button, Typography, Container, Paper } from "@mui/material";
import PhotographerPopup from "../components/PhotographerPopup";
import CameraAltIcon from "@mui/icons-material/CameraAlt"; // Added camera icon

const Dashboard = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72 30%, #2a5298 100%)", // Deep blue gradient
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Container maxWidth="md">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mt: 5, mb: 3 }}>
          <Typography variant="h3" fontWeight="bold" color="white" gutterBottom>
            📸 Photographer Booking
          </Typography>
          <Typography variant="subtitle1" color="white" sx={{ opacity: 0.8 }}>
            Find the perfect photographer for your special moments. Customize your preferences and book easily!
          </Typography>
        </Box>

        {/* Booking Section */}
        <Paper
          elevation={6}
          sx={{
            p: 5,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight transparency
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)", // Stronger shadow
            backdropFilter: "blur(10px)", // Blurred effect
          }}
        >
          <CameraAltIcon sx={{ fontSize: 50, color: "#1976d2" }} />
          <Typography variant="h5" fontWeight="600" color="#333">
            Ready to Capture Memories?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Click below to start the booking process and customize your photography session.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              backgroundColor: "#ff4081", // Vibrant pink
              "&:hover": { backgroundColor: "#c60055" },
              borderRadius: "25px",
              textTransform: "uppercase",
            }}
            onClick={() => setOpenPopup(true)}
          >
            Book Now
          </Button>
        </Paper>

        {/* Popup Component */}
        <PhotographerPopup open={openPopup} onClose={() => setOpenPopup(false)} />
      </Container>
    </Box>
  );
};

export default Dashboard;
