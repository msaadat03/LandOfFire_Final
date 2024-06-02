import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";

export default function Rules() {
  return (
    <Box>
      <Container maxWidth="lg" className="h-[calc(120vh_-_84px)]">
        <img
          className="h-[120vh] w-full absolute left-0 top-0 -z-[1] object-cover brightness-75"
          src="/helpfull_information_banner.png"
        />
        <Box position={"relative"} width={900} top={"120px"} left={"0%"}>
          <Typography
            color="white"
            fontFamily={"georgia"}
            fontWeight={"bold"}
            fontSize={90}
            lineHeight={1}
            marginBottom="27px"
          >
            Что можно и чего нельзя делать в Азербайджане?
          </Typography>
          <Typography color="white" fontFamily={"sf pro"} fontSize={24}>
            Азербайджанцы - добрые люди, легко прощающие ошибки иностранцев, не
            знакомых c местными обычаями. Тем не менее, всем путешественникам
            будет полезно знать o некоторых культурных особенностям страны. Вот
            несколько полезных советов, которые помогут вам в установлении
            дружеских отношений во время путешествия:
          </Typography>
        </Box>
      </Container>
      <Container maxWidth={"lg"}>
        <Box position={"relative"} top={"-220px"} bgcolor={"#f8f8f8"}>
          <Box padding={"60px 48px"}>
            <Grid container spacing={3}>
              <Grid md={6} item>
                <Typography fontSize={26} fontWeight={"bold"} color={"#448243"}>
                  HA ЧТО ОБРАТИТЬ ВНИМАНИЕ?
                </Typography>
                <List sx={{ listStyleType: "disc" }}>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      снимайте обувь перед тем, как войти в мечеть или в
                      чей-либо дом;
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      проявляйте уважение к пожилым людям, уступая им место в
                      общественном транспорте и длинной очереди;
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      если собираетесь присоединиться к ужину в местной семье
                      или остаться на ночевку, возьмите с собой подарок для
                      членов семьи;
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      уточняйте цены у таксистов, прежде чем сесть в машину,
                      чтобы избежать споров и переплат;
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      в беседах с местным населением будьте готовы отвечать на
                      личные вопросы. Люди в Азербайджане будут интересоваться
                      вашей личной жизнью и легко могут задавать вопросы о вашем
                      возрасте, семейном положении, детях и т. д. Это
                      рассматривается как признак интереса и уважения.
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid md={6} item>
                <Typography fontSize={26} fontWeight={"bold"} color={"#FF0000"}>
                  HA ЧТО ОБРАТИТЬ ВНИМАНИЕ?
                </Typography>
                <List sx={{ listStyleType: "disc" }}>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      выбрасывать хлеб в мусорное ведро или оставлять его на
                      земле (азербайджанцы считают это оскорблением);
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      обсуждать политические темы;
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      принимать подарки сразу: если кто-то предлагает подарок,
                      вы должны дважды вежливо отказаться и лишь на третий раз с
                      благодарностью принять его;
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      показывать пальцами знак «ОК»: в Азербайджане такой знак
                      считается оскорбительным;
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item", paddingLeft: "5px" }}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                      сморкаться публично: азербайджанцы считают это грубостью.
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
