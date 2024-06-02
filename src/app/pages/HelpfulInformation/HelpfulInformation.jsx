import { Box, Container, Grid, Typography } from "@mui/material";

const MOCK_CARDDATA = [
  {
    title: "Безопасность",
    photo: "/helpfull_information_1.png",
    text: "Путешественники могут быть уверены, что в Азербайджане они находятся в абсолютной безопасности. Страна является одним из самых благополучных  туристических направлений в мире. Азербайджан славится своим низким уровнем преступности, что позволяет вам в полной мере насладиться открытием новых мест, не думая о своей  безопасности. Для вызова полиции звоните по номеру 102, доступному 24 часа в сутки.",
    props: { md: 4 },
  },
  {
    photo: "/helpfull_information_2.png",
    title: "Шопинг",
    text: "Баку представлен большой выбор известных международных брендов. Свидетельство на право вывоза требуется только для, которые легко можно найти на Кроме того, существует ограничение на экспорт икры, максимальный вес  которой не должен превышать 125 грамм.",
    props: { md: 4 },
  },
  {
    photo: "/helpfull_information_3.png",
    title: "Доступ к интернету",
    text: "Большинство хороших отелей оснащены полным сервисом Wi-Fi, а в больших отелях есть также бизнес-центры хотя бы с несколькими компьютерами. В крупных отелях иногда взимается плата за использование Wi-Fi, но не расстраивайтесь -  он бесплатный в десятках кафе, парков и ресторанов. Операторы мобильной связи предлагают относительно недорогие USB-модемы, чтобы вы могли получить доступ к Интернету через мобильные сети 4G.",
    props: { md: 4 },
  },
  {
    photo: "/helpfull_information_4.png",
    title: "Бюджет поездки",
    text: "Азербайджан является одной из самых экономически выгодных стран в мире. Например, в среднем пребывание в Баку стоит заметно меньше, чем в любом другом европейском мегаполисе. Высококачественные услуги по низким ценам предлагаются повсюду, от красивых ультрасовременных отелей до недорогих квартир, снятых для отпуска, что является приятным бонусом для посещения этой захватывающей страны.",
    props: { md: 6 },
  },
  {
    photo: "/helpfull_information_5.png",
    title: "Деньги",
    text: "Наша валюта – это манат (AZN). Платежи по картам доступны в большинстве магазинов и ресторанов в столице Азербайджана и больших городах, а в других частях страны предпочтительны наличные. Банкоматы Mastercard / Visa легко доступны в центральных регионах. Обменять  разменянные деньги на свою валюту не станет для вас проблемой.",
    props: { md: 6 },
  },
  {
    photo: "/helpfull_information_6.png",
    title: "Религия",
    text: "Азербайджан - светская страна, но абсолютное большинство населения исповедует ислам. Мусульманские одеяния здесь вы встретите редко. Алкоголь - широко доступен. Мы гордимся нашим мультикультурализмом, который в значительной степени является наследием Шелкового пути. Здесь есть все условия для исповедания любой религии - кроме мусульман в Азербайджане проживают христиане, евреи, индуисты, зороастрийцы и другие.",
    props: { md: 6 },
  },
  {
    photo: "/helpfull_information_7.png",
    title: "Часовой пояс",
    text: "Время в Азербайджане на 4 часа опережает среднее время по Гринвичу (GMT+4:00). С 2016 года переход на летнее время отменен, поэтому в зимнее время в Азербайджане на 3-4 часа позже, чем в Западной Европе и Великобритании, а в период с апреля по октябрь промежуток сокращается до 2—3 часов. Разница во времени между Баку и Москвой составляет один час на протяжении всего года.",
    props: { md: 6 },
  },
];

export default function HelpfulInformation() {
  return (
    <Box>
      <Container maxWidth="lg" className="h-[calc(120vh_-_84px)]">
        <img
          className="h-[120vh] w-full absolute left-0 top-0 -z-[1] object-cover brightness-75"
          src="/helpfull_information_banner.png"
        />
        <Box position={"relative"} top={"170px"} left={"0%"}>
          <Typography
            color="white"
            fontFamily={"georgia"}
            fontWeight={"bold"}
            fontSize={119}
            lineHeight={1}
            marginBottom="27px"
          >
            полезная информация
          </Typography>
          <Typography color="white" fontFamily={"sf pro"} fontSize={24}>
            Планирование поездки может стать действительно сложной задачей. Мы
            облегчили ваши поиски и составили список самых важных вопросов, на
            которые следует обратить внимание собираясь в путешествие в
            Азербайджан.
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box position="relative" top="-220px" bgcolor={"#f8f8f8"}>
          <Box padding={"45px 77px"}>
            <Typography
              color="#3F4C3B"
              fontFamily={"georgia"}
              fontWeight={"bold"}
              fontSize={52}
              lineHeight={1}
              marginBottom="27px"
              textAlign={"center"}
            >
              Что нужно учитывать при планировании поездки в Азербайджан
            </Typography>
            <Typography
              color="black"
              textAlign={"center"}
              fontFamily={"sf pro"}
              fontSize={24}
            >
              Планирование поездки может стать действительно сложной задачей. Мы
              облегчили ваши поиски и составили список самых важных вопросов, на
              которые следует обратить внимание собираясь в путешествие в
              Азербайджан.
            </Typography>
          </Box>
          <Grid container padding={"0 28px 45px 28px"} spacing={2}>
            {MOCK_CARDDATA.map((cardData, index) => {
              return <CardItem {...cardData} key={index} />;
            })}
            <Grid item md>
              <Box padding={"16px"} height="100%" bgcolor={"white"}>
                <Box display={"flex"} gap={"25px"}>
                  <img
                    src={"/helpfull_information_8.png"}
                    alt=""
                    className="mb-5 overflow-hidden object-cover"
                  />
                  <img
                    src={"/helpfull_information_9.png"}
                    alt=""
                    className="mb-5 overflow-hidden object-cover"
                  />
                </Box>
                <Typography
                  color="#3F4C3B"
                  fontFamily={"georgia"}
                  fontWeight={"bold"}
                  fontSize={27}
                  marginBottom={"20px"}
                  lineHeight={1}
                >
                  Общественный транспорт
                </Typography>

                <Box display={"flex"} gap={"25px"}>
                  <Typography
                    color="black"
                    fontFamily={"lato"}
                    fontSize={14}
                    textAlign={"justify"}
                  >
                    Метро работает только в столице и обслуживает пассажиров с
                    06:00 до 00:00. Станции и вагоны - чистые и безопасные,
                    поезда ходят через каждые две-три минуты. Поезда ходят по
                    двум линиям: Красной - от станции «Ичеришехер» до станции
                    «Ази Асланова», и Зеленой - от станции «Хатаи» до станции
                    «Лянкяран».Автобусы – еще один недорогой способ передвижения
                    в Баку; их расписание обычно можно найти на автобусных
                    остановках. Одна поездка в автобусе или Бакинском
                    метрополитене стоит 30 гяпиков. В качестве альтернативы
                    доступен широкий выбор служб такси, наиболее известными из
                    которых являются Baku Taxi Company, 189 Taxi и UBER.
                  </Typography>
                  <Typography
                    color="black"
                    fontFamily={"lato"}
                    fontSize={14}
                    textAlign={"justify"}
                  >
                    Автобусы курсируют из международного аэропорта имени Гейдара
                    Алиева в центр города и работают круглосуточно. Поездка
                    стоит 1,30 AZN и оплачивается картой BakuCard, которую можно
                    приобрести в аэропорту или на автобусной остановке за 2
                    AZN.Автобусы и поезда также являются удобным и доступным
                    способом передвижения по стране.Есть прямые железнодорожные
                    сообщения в Шеки, Гянджу, Габалу, Ленкорань, Шамкир и другие
                    города. В Нахчыван из международного аэропорта имени Гейдара
                    Алиева ежедневно отправляются прямые рейсы, а из Бакинского
                    международного автовокзала — автобусы. Билеты на автобусы и
                    поезда можно купить онлайн.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
function CardItem({ props, photo, text, title }) {
  return (
    <Grid item {...props}>
      <Box padding={"16px"} height="100%" bgcolor={"white"}>
        <img src={photo} alt="" className="mb-5" />
        <Typography
          color="#3F4C3B"
          fontFamily={"georgia"}
          fontWeight={"bold"}
          fontSize={27}
          marginBottom={"20px"}
          lineHeight={1}
        >
          {title}
        </Typography>
        <Typography
          color="black"
          fontFamily={"lato"}
          fontSize={14}
          textAlign={"justify"}
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
}
