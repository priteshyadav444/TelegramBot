const { default: axios } = require("axios");
const { Telegraf } = require("telegraf");
const bot = new Telegraf("1965093141:AAFaJ7KC5GAtycbD_vOmeDjgLHo1kwzylWE");
var dateFormat = require("dateformat");
var cron = require('node-cron');
var now = new Date();

bot.command("start", (ctx) => {
    console.log(ctx.from);
    bot.telegram.sendMessage(
        ctx.chat.id,
        "hello there! Welcome to my new telegram bot.",
        {}
    );
});
cron.schedule('*/30 * * * *', () => {
    console.log('last update : ' + dateFormat(now, "isoTime"));
    axios
        .get(
            "https://api.apprenticeshipindia.org/opportunities/search?page=1&page_size=1&search=Boiler%20Attendant&locations[0][type]=district&locations[0][id]=5acbb46f1f174875c6506312&minqualification=5c406444c8eeab700c2d5666"
        )
        .then(function (response) {
            response.data.data.forEach((res) => {

                bot.telegram.sendMessage(
                    1978923007,
                    "Comapany Name : " +
                    res.locations[0].location_name +
                    "\nTotal Vacancy : " +
                    res.number_of_vacancies +
                    "\nDate : " +
                    dateFormat(res.created_at.date, "mediumDate") + " " + dateFormat(res.created_at.date, "isoTime") +
                    "\nApplication Count : " +
                    res.application_count +
                    "\nCity : " +
                    res.locations[0].address.city +
                    "\nAddress : " +
                    res.locations[0].address.address_1 +
                    "\n",

                );
            });
        })
        .catch(function (error) {
            console.log("Error!");
            console.log("Chack InternetConnection!")
        });

});
bot.command("boilarstatus", (ctx) => {
    console.log(ctx.from);
    axios
        .get(
            "https://api.apprenticeshipindia.org/opportunities/search?page=1&page_size=3&search=Boiler%20Attendant&locations[0][type]=district&locations[0][id]=5acbb46f1f174875c6506312&minqualification=5c406444c8eeab700c2d5666"
        )
        .then(function (response) {
            response.data.data.forEach((res) => {

                bot.telegram.sendMessage(
                    ctx.chat.id,
                    "Comapany Name : " +
                    res.locations[0].location_name +
                    "\nTotal Vacancy : " +
                    res.number_of_vacancies +
                    "\nDate : " +
                    dateFormat(res.created_at.date, "mediumDate") + " " + dateFormat(res.created_at.date, "isoTime") +
                    "\nApplicationCount : " +
                    res.application_count +
                    "\nCity : " +
                    res.locations[0].address.city +
                    "\nAddress : " +
                    res.locations[0].address.address_1 +
                    "\n",
                    parse_mode = "Markdown"
                );
            });
        })
        .catch(function (error) {
            console.log(error);
        });
});


bot.launch();
