import { Box, Container, Grid, Typography } from "@mui/material";

const MOCK_PHRASE = [
  {
    phrase: "Necəsizaa?",
    pronunciation: "[неджесиз]",
    translation: "Как у вас дела?",
  },
];

export default function UsefulStatements() {
  return (
    <Box position={"relative"} top={"-120px"}>
      <Box height={"100vh"}>
        <img
          src="/useful_statements_banner.png"
          className="absolute top-0 left-0 -z-10 object-cover brightness-75 w-full h-screen"
        />
        <Container>
          <Box
            position={"relative"}
            width={800}
            zIndex={999}
            top={"170px"}
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
              полезные фразы
            </Typography>
            <Typography color="white" fontFamily={"sf pro"} fontSize={24}>
              Английский и русский широко распространены в столице, но в
              регионах вам может пригодиться знание нескольких слов на
              азербайджанском языке.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box marginBottom={"96px"} marginTop={"60px"}>
          <Typography
            textAlign={"center"}
            color={"#3F4C3B"}
            fontSize={"52px"}
            fontWeight={"bold"}
            fontFamily={"Georgia"}
          >
            Выучите несколько слов
          </Typography>
          <Typography
            fontSize={"24px"}
            fontFamily={"Lato"}
            lineHeight={1}
            textAlign={"center"}
          >
            Азербайджан является многонациональной страной, где говорят на
            различных уникальных языках, но официальным и, безусловно, наиболее
            распространенным является азербайджанский. Это один из тюркских
            языков, на который в разное время повлияли арабский, персидский и
            европейские языки. Вот несколько ключевых слов и фраз, с которых
            можно начать:
          </Typography>
        </Box>
        <Box marginBottom={"96px"}>
          <Typography
            fontSize={64}
            fontWeight={"bold"}
            fontFamily={"Georgia"}
            color={"#3F4C3B"}
            textAlign={"center"}
            marginBottom={"20px"}
          >
            Salamlashma
          </Typography>
          <Grid container rowGap={"10px"}>
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <Grid key={index} md={12} item>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"17px 20px"}
                    bgcolor={"rgba(227, 114, 73, 0.41)"}
                  >
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                    >
                      {MOCK_PHRASE[0].phrase}
                    </Typography>
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      {MOCK_PHRASE[0].pronunciation}
                    </Typography>
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                      textAlign={"right"}
                    >
                      {MOCK_PHRASE[0].translation}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box marginBottom={"96px"}>
          <Typography
            fontSize={64}
            fontWeight={"bold"}
            fontFamily={"Georgia"}
            color={"#3F4C3B"}
            textAlign={"center"}
            marginBottom={"20px"}
          >
            Salamlashma
          </Typography>
          <Grid container rowGap={"10px"}>
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <Grid key={index} md={12} item>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"17px 20px"}
                    bgcolor={"rgba(227, 114, 73, 0.41)"}
                  >
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                    >
                      {MOCK_PHRASE[0].phrase}
                    </Typography>
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      {MOCK_PHRASE[0].pronunciation}
                    </Typography>
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                      textAlign={"right"}
                    >
                      {MOCK_PHRASE[0].translation}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box marginBottom={"96px"}>
          <Typography
            fontSize={64}
            fontWeight={"bold"}
            fontFamily={"Georgia"}
            color={"#3F4C3B"}
            textAlign={"center"}
            marginBottom={"20px"}
          >
            Salamlashma
          </Typography>
          <Grid container rowGap={"10px"}>
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <Grid key={index} md={12} item>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"17px 20px"}
                    bgcolor={"rgba(227, 114, 73, 0.41)"}
                  >
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                    >
                      {MOCK_PHRASE[0].phrase}
                    </Typography>
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      {MOCK_PHRASE[0].pronunciation}
                    </Typography>
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                      textAlign={"right"}
                    >
                      {MOCK_PHRASE[0].translation}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box marginBottom={"96px"}>
          <Typography
            fontSize={64}
            fontWeight={"bold"}
            fontFamily={"Georgia"}
            color={"#3F4C3B"}
            textAlign={"center"}
            marginBottom={"20px"}
          >
            Salamlashma
          </Typography>
          <Grid container rowGap={"10px"}>
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <Grid key={index} md={12} item>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"17px 20px"}
                    bgcolor={"rgba(227, 114, 73, 0.41)"}
                  >
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                    >
                      {MOCK_PHRASE[0].phrase}
                    </Typography>
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                      textAlign={"center"}
                    >
                      {MOCK_PHRASE[0].pronunciation}
                    </Typography>
                    <Typography
                      fontSize={"24px"}
                      width={"20%"}
                      fontWeight={"bold"}
                      textAlign={"right"}
                    >
                      {MOCK_PHRASE[0].translation}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
