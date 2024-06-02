import { useParams } from "react-router-dom";
import { MOCK_HOLIDAYS } from "../HolidaysAndFestivals/HolidaysAndFestivals";
import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Holiday() {
  const { id } = useParams();
  const [selectedHoliday, setSelectedHoliday] = useState();

  useEffect(() => {
    setSelectedHoliday(() => {
      return MOCK_HOLIDAYS.find((holidayItem) => {
        return holidayItem.holidayId == id;
      });
    });
  }, [id]);

  if (!selectedHoliday) return null;

  return (
    <Box position={"relative"} top={"-120px"}>
      <Box height={"100vh"}>
        <img
          src={selectedHoliday.bannerPhoto}
          className="absolute top-0 left-0 -z-10 object-cover brightness-75 w-full h-screen"
        />
        <Container>
          <Box
            position={"relative"}
            width={800}
            zIndex={999}
            top={"200px"}
            left={"0%"}
          >
            <Typography
              color="white"
              fontFamily={"georgia"}
              fontWeight={"bold"}
              fontSize={119}
              lineHeight={1}
              marginBottom="27px"
            >
              {selectedHoliday.title}
            </Typography>
            <Typography color="white" fontFamily={"sf pro"} fontSize={24}>
              {selectedHoliday.bannerText}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box margin={"60px 0"}>
          <Typography fontSize={20} marginBottom={"60px"} textAlign={"center"}>
            {selectedHoliday.introText}
          </Typography>
          <img
            src={selectedHoliday.widePhoto}
            className="mx-auto w-full mb-[35px]"
          />
          <Grid container spacing={4}>
            <Grid
              display={"flex"}
              fontSize={20}
              alignItems={"center"}
              item
              md={6}
            >
              {selectedHoliday.firstParagraph}
            </Grid>
            <Grid item md={6}>
              <img
                className="w-full h-[300px] object-cover"
                src={selectedHoliday.secondPhoto}
                alt=""
              />
            </Grid>
            <Grid item md={6}>
              <img className="w-full h-[300px] object-cover" src={selectedHoliday.thirdPhoto} alt="" />
            </Grid>
            <Grid
              display={"flex"}
              fontSize={20}
              alignItems={"center"}
              item
              md={6}
            >
              {selectedHoliday.secondParagraph}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
