import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const MOCK_HOLIDAYS = [
  {
    holidayId: 1,
    hoverText:
      "Один из самых популярных праздников в стране. Это радостное время, которое принято проводить с родственниками и друзьями. Он начинается вечером 31 декабря великолепным застольем. Как только часы бьют полночь, по всей стране стартует захватывающее шоу фейерверков.",
    title: "Новый год",
    dateString: "1-2 января",
    imgPath: "/holidays_1.png",
    bannerText:
      "Новый год – это один из любимейших праздников для населения всего мира. Миллионы жителей по всему свету отмечают этот праздник в ночь с 31 декабря на 1 января. В Азербайджане Новый год начали праздновать с приходом первых русских поселенцев, кроме того в течение многих веков Новый год праздновали жители Азербайджана, исповедующие православие и католицизм.",
    introText:
      "Большая часть жителей Азербайджана – мусульмане, поэтому Новый год традиционно праздновался в день весеннего равноденствия – в праздник Новруз. В XIX веке Азербайджан попадает под протекторат Российской империи и с приходом русских в страну начинают проникать западные традиции. После присоединения Азербайджана к Советскому Союзу Новый год стал официально отмечаться в ночь с 31 декабря на 1 января, а после обретения независимости 31 декабря стали отмечать новый праздник – День солидарности азербайджанцев всего мира, а 1 января стал официальным днем празднования Нового года.",
    firstParagraph:
      "Новый год в Азербайджане отмечают также как и в других постсоветских странах. Главными атрибутами Нового года считаются ёлка и Дед Мороз со Снегурочкой. У азербайджанцев Дед Мороз зовётся Шахта Баба, а Снегурочка - Каркыз, при этом Шахта Баба одет в голубой, а не в красный костюм.",
    secondParagraph:
      "Новый год в Азербайджане отмечают также как и в других постсоветских странах. Главными атрибутами Нового года считаются ёлка и Дед Мороз со Снегурочкой. У азербайджанцев Дед Мороз зовётся Шахта Баба, а Снегурочка - Каркыз, при этом Шахта Баба одет в голубой, а не в красный костюм.",
    bannerPhoto: "https://azerbaijan.travel/resize3200/center/pages/3660/b5b1a99e-9625-4f19-9761-533f2d0a3764.jpg",
    widePhoto: "/holiday_1_1.png",
    secondPhoto: "/holiday_1_2.png",
    thirdPhoto: "/holiday_1_3.png",
  },
  {
    holidayId: 2,
    hoverText:
      "один из самых популярных праздников в стране. Это радостное время, которое принято проводить с родственниками и друзьями. Он начинается вечером 31 декабря великолепным застольем. Как только часы бьют полночь, по всей стране стартует захватывающее шоу фейерверков.",
    title: "Новруз",
    dateString: "20-25 марта",
    imgPath: "/holidays_2.png",
  },
  {
    holidayId: 3,
    hoverText:
      "один из самых популярных праздников в стране. Это радостное время, которое принято проводить с родственниками и друзьями. Он начинается вечером 31 декабря великолепным застольем. Как только часы бьют полночь, по всей стране стартует захватывающее шоу фейерверков.",
    title: "День Республики",
    dateString: "28 мая",
    imgPath: "/holidays_3.png",
  },
  {
    holidayId: 4,
    hoverText:
      "один из самых популярных праздников в стране. Это радостное время, которое принято проводить с родственниками и друзьями. Он начинается вечером 31 декабря великолепным застольем. Как только часы бьют полночь, по всей стране стартует захватывающее шоу фейерверков.",
    title: "Новруз",
    dateString: "20-25 марта",
    imgPath: "/holidays_4.png",
  },
  {
    holidayId: 5,
    hoverText:
      "один из самых популярных праздников в стране. Это радостное время, которое принято проводить с родственниками и друзьями. Он начинается вечером 31 декабря великолепным застольем. Как только часы бьют полночь, по всей стране стартует захватывающее шоу фейерверков.",
    title: "Новый год",
    dateString: "1-2 января",
    imgPath: "/holidays_5.png",
  },
  {
    holidayId: 6,
    hoverText:
      "один из самых популярных праздников в стране. Это радостное время, которое принято проводить с родственниками и друзьями. Он начинается вечером 31 декабря великолепным застольем. Как только часы бьют полночь, по всей стране стартует захватывающее шоу фейерверков.",
    title: "Новруз",
    dateString: "20-25 марта",
    imgPath: "/holidays_6.png",
  },
];

export default function HolidaysAndFestivals() {
  return (
    <Box>
      <Container maxWidth="lg" className="h-[calc(120vh_-_84px)]">
        <img
          className="h-[120vh] w-full absolute left-0 top-0 -z-[1] object-cover brightness-50"
          src="https://azerbaijan.travel/resize3200/center/pages/3660/b5b1a99e-9625-4f19-9761-533f2d0a3764.jpg"
        />
        <Box position={"relative"} width={820} top={"20px"} left={"0%"}>
          <Typography
            color="white"
            fontFamily={"georgia"}
            fontWeight={"bold"}
            fontSize={95}
            width={650}
            lineHeight={1}
            marginBottom="20px"
          >
            Праздники и фестивали
          </Typography>
          <Typography
            color="white"
            fontFamily={"sf pro"}
            fontSize={22}
            lineHeight={1}
          >
            Азербайджан - единственная мусульманская страна на Южном Кавказе.
            Культура и обычаи страны часто сильно отличаются от остальной части
            региона, в котором преобладают христианские традиции. Разница
            заметна и в праздничных мероприятиях. Как мусульмане азербайджанцы
            празднуют Рамадан Байрам и Курбан Байрам (Ид аль-Адха), но не
            празднуют Рождество или Пасху. Персидский Новый год Новруз также
            широко отмечается в стране.
          </Typography>
        </Box>
      </Container>
      <Container maxWidth={"lg"}>
        <Box position={"relative"} top={"-220px"} bgcolor={"#f8f8f8"}>
          <Box padding={"61px 66px"}>
            <Typography
              fontSize={48}
              fontWeight={"bold"}
              fontFamily={"Georgia"}
              color={"#3F4C3B"}
              textAlign={"center"}
              lineHeight={1}
              style={{ textDecoration: "none" }}
              marginBottom={"74px"}
            >
              Праздники и фестивали
            </Typography>
            <Grid container spacing={3}>
              {MOCK_HOLIDAYS.map((holidayData, index) => {
                return <HolidayCardItem key={index} {...holidayData} />;
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
const HolidayCardItem = ({ hoverText, holidayId, title, dateString, imgPath, }) => {
  return (
    <Grid md={6} item>
      <Button href={`/holiday/${holidayId}`} className="group">
        <Box position={"relative"}>
          <Box
            position={"absolute"}
            className="opacity-0 group-hover:opacity-100 transition-all bg-[rgba(94,109,98,0.7)] backdrop-blur-sm"
            top={0}
            padding={"50px 17px"}
            left={0}
            width={"100%"}
            height={"100%"}
          >
            <Typography color={"white"} fontSize={"19px"}>
              {hoverText}
            </Typography>
          </Box>
          <img src={imgPath} alt="" />
          <Box position={"absolute"} bottom={17} left={17}>
            <Typography
              marginBottom={"6px"}
              color={"white"}
              fontSize={"30px"}
              fontWeight={"bold"}
              className="group-hover:opacity-0 transition-all"
            >
              {title}
            </Typography>
            <Box
              bgcolor={"#3F4C3B"}
              width={225}
              height={55}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography color={"white"} fontSize={"25px"} fontWeight={"bold"}>
                {dateString}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Button>
    </Grid>
  );
};
