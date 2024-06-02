import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";
import { useState } from "react";

const MOCK_COUNTRIES = [
  {
    countryCode: "ru",
    label: "Russia",
  },
  {
    countryCode: "tr",
    label: "Turkey",
  },
];

const MOCK_VISA_INFORMATIONS = [
  {
    countryCode: "ru",
    electronicVisa:
      "Граждане Австралии могут путешествовать в Азербайджан c электронный визой.",
    applyForEvisaHTML:
      '<p class="apply_for_evisa"> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">При оформлении электронных виз в Азербайджан, обратите внимание на следующее:</span> </p> <ul class="apply_for_evisa_ul"> <li> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">вы должны подать заявку как минимум за 3 рабочих дня до вашего визита.</span> </li> <li> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">ваш паспорт должен быть действителен не менее 3 месяцев после истечения срока действия электронной визы.э</span> </li> <li> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">электронные визы в Азербайджан можно получить в течение 3 дней со стандартной визой и в течение 3 часов со срочной визой через evisa.gov.az, выполнив 3 простых шага (подать заявку, оплатить и загрузить электронную визу, отправленную по электронной почте)</span> </li> </ul> <p class="apply_for_evisa_foot"> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">Для подробной информации вы можетке посетит&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="https://evisa.gov.az/en/"><span style="white-space:pre-wrap;">evisa.gov.az</span></a> </p>',
    registrationPlaceOfStayHTML:
      '<p class="registration_place"><span style="white-space:pre-wrap;">Все туристы, временно находящиеся в Азербайджанской Республике&nbsp;более 15 дней, должны быть зарегистрированы по месту пребывания в Государственной миграционной службе АР.&nbsp;Для регистрации необходимо обратиться в течение 15 дней (граждане Республики Казахстан в течение 30 дней) с момента приезда иностранца в страну в электронном порядке посредством раздела&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="https://e-regv2.migration.gov.az/Security/SignIn?lang=3"><span style="white-space:pre-wrap;">электронных услуг</span></a><span style="white-space:pre-wrap;">&nbsp;официального сайта Государственной Миграционной Службы, а также непосредственно в&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="https://www.migration.gov.az/ru/offices"><span style="white-space:pre-wrap;">региональные миграционные управления</span></a><span style="white-space:pre-wrap;">&nbsp;и центры "</span><a target="_blank" rel="noopener noreferrer" href="http://www.asan.gov.az/en/service-centers/asan-xidmetler"><span style="white-space:pre-wrap;">Службы&nbsp;ASAN</span></a><span style="white-space:pre-wrap;" &gt;".&nbsp;Это необходимо сделать, даже при наличии действующей электронной визы.&nbsp;</span>". <span style="white-space:pre-wrap;">За регистрацию иностранцев и лиц без гражданства по месту пребывания государственная пошлина не взимается.&nbsp;Для дополнительной информации&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="http://migration.gov.az/ru/oyq/oyq"><span style="white-space:pre-wrap;">посетите официальный сайт&nbsp;Государственной Миграционной Службы</span></a><span style="white-space:pre-wrap;">.</span><br><span style="white-space:pre-wrap;">Отели могут предоставлять эту услугу своим гостям, но персонал гостиницы должен быть проинформирован об этом заранее. Кроме того, граждане, которые собираются проживать в квартирах или частных домах, должны регистрироваться самостоятельно.</span></p>',
  },
  {
    countryCode: "tr",
    electronicVisa:
      "Граждане Австралии могут путешествовать в Азербайджан c электронный визой.",
    applyForEvisaHTML:
      '<p class="apply_for_evisa"> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">При оформлении электронных виз в Азербайджан, обратите внимание на следующее:</span> </p> <ul class="apply_for_evisa_ul"> <li> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">вы должны подать заявку как минимум за 3 рабочих дня до вашего визита.</span> </li> <li> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">ваш паспорт должен быть действителен не менее 3 месяцев после истечения срока действия электронной визы.э</span> </li> <li> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">электронные визы в Азербайджан можно получить в течение 3 дней со стандартной визой и в течение 3 часов со срочной визой через evisa.gov.az, выполнив 3 простых шага (подать заявку, оплатить и загрузить электронную визу, отправленную по электронной почте)</span> </li> </ul> <p class="apply_for_evisa_foot"> <meta charset="utf-8"><span data-metadata=""></span><span data-buffer=""></span><span style="white-space:pre-wrap;">Для подробной информации вы можетке посетит&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="https://evisa.gov.az/en/"><span style="white-space:pre-wrap;">evisa.gov.az</span></a> </p>',
    registrationPlaceOfStayHTML:
      '<p class="registration_place"><span style="white-space:pre-wrap;">Все туристы, временно находящиеся в Азербайджанской Республике&nbsp;более 15 дней, должны быть зарегистрированы по месту пребывания в Государственной миграционной службе АР.&nbsp;Для регистрации необходимо обратиться в течение 15 дней (граждане Республики Казахстан в течение 30 дней) с момента приезда иностранца в страну в электронном порядке посредством раздела&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="https://e-regv2.migration.gov.az/Security/SignIn?lang=3"><span style="white-space:pre-wrap;">электронных услуг</span></a><span style="white-space:pre-wrap;">&nbsp;официального сайта Государственной Миграционной Службы, а также непосредственно в&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="https://www.migration.gov.az/ru/offices"><span style="white-space:pre-wrap;">региональные миграционные управления</span></a><span style="white-space:pre-wrap;">&nbsp;и центры "</span><a target="_blank" rel="noopener noreferrer" href="http://www.asan.gov.az/en/service-centers/asan-xidmetler"><span style="white-space:pre-wrap;">Службы&nbsp;ASAN</span></a><span style="white-space:pre-wrap;" &gt;".&nbsp;Это необходимо сделать, даже при наличии действующей электронной визы.&nbsp;</span>". <span style="white-space:pre-wrap;">За регистрацию иностранцев и лиц без гражданства по месту пребывания государственная пошлина не взимается.&nbsp;Для дополнительной информации&nbsp;</span><a target="_blank" rel="noopener noreferrer" href="http://migration.gov.az/ru/oyq/oyq"><span style="white-space:pre-wrap;">посетите официальный сайт&nbsp;Государственной Миграционной Службы</span></a><span style="white-space:pre-wrap;">.</span><br><span style="white-space:pre-wrap;">Отели могут предоставлять эту услугу своим гостям, но персонал гостиницы должен быть проинформирован об этом заранее. Кроме того, граждане, которые собираются проживать в квартирах или частных домах, должны регистрироваться самостоятельно.</span></p>',
  },
];

export default function TouristVisa() {
  const [selectedCountry, setSelectedCountry] = useState("ru");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box position={"relative"} top={"-120px"}>
      <Box height={"100vh"}>
        <img
          src="https://azerbaijan.travel/resize3200/center/pages/1733/60fb2a42-43d1-48c6-b3dc-cf48108b33e8.jpg"
          className="absolute top-0 left-0 -z-10 object-cover brightness-75 w-full h-screen"
        />
        <Container>
          <Box
            position={"relative"}
            width={1100}
            zIndex={999}
            top={"170px"}
            left={"0%"}
          >
            <Typography
              color="white"
              fontFamily={"georgia"}
              fontWeight={"bold"}
              fontSize={96}
              lineHeight={1}
              marginBottom="27px"
            >
              <h1 >Туристическая</h1> виза в Азербайджан
            </Typography>
            <Typography
              color="white"
              fontFamily={"sf pro"}
              width={700}
              fontSize={24}
            >
              Узнайте, нужна ли вам виза для въезда в Азербайджан и как подать заявление на получение электронной визы. Это легко и быстро.


            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box marginTop={"80px"}>
          <Typography fontSize={22}>
            Пожалуйста, выберите страну, из которой вы путешествуете
          </Typography>
          <FormControl sx={{ mt: 1, minWidth: 700 }}>
            <InputLabel>Olkeler</InputLabel>
            <Select
              onChange={handleChange}
              value={selectedCountry}
              label="Olkeler"
            >
              {MOCK_COUNTRIES.map((countryItem) => {
                return (
                  <MenuItem
                    key={countryItem.countryCode}
                    value={countryItem.countryCode}
                  >
                    {countryItem.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>

        <Typography
          color={"#3F4C3B"}
          marginTop={"65px"}
          fontWeight={"bold"}
          marginBottom={"12px"}
          fontSize={"40px"}
        >
          Электроннаявиза
        </Typography>
        <Typography>
          Граждане Австралии могут путешествовать в Азербайджан c электронный
          визой.
        </Typography>
        <Typography
          color={"#3F4C3B"}
          marginTop={"65px"}
          fontWeight={"bold"}
          marginBottom={"12px"}
          fontSize={"40px"}
        >
          Подайте заявкуна электронную визу
        </Typography>
        <Grid className="apply_for_evisa">
          {parse(
            MOCK_VISA_INFORMATIONS.find(
              (countryItem) => countryItem.countryCode == selectedCountry
            ).applyForEvisaHTML
          )}
        </Grid>
        <Typography
          color={"#3F4C3B"}
          marginTop={"65px"}
          fontWeight={"bold"}
          marginBottom={"12px"}
          fontSize={"40px"}
        >
          Регистрацияпо месту пребывания
        </Typography>
        <Grid>
          {parse(
            MOCK_VISA_INFORMATIONS.find(
              (countryItem) => countryItem.countryCode == selectedCountry
            ).registrationPlaceOfStayHTML
          )}
        </Grid>
      </Container>
    </Box>
  );
}
