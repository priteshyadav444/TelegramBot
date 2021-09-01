const { default: axios } = require("axios");
const { Telegraf } = require("telegraf");
const bot = new Telegraf("1965093141:AAFaJ7KC5GAtycbD_vOmeDjgLHo1kwzylWE");
var dateFormat = require("dateformat");
var cron = require('node-cron');

bot.command("start", (ctx) => {
    console.log(ctx.from);
    bot.telegram.sendMessage(
        ctx.chat.id,
        "hello there! Welcome to my new telegram bot.",
        {}
    );
});
cron.schedule('*/1 * * * *', () => {
    console.log('running a task every minute');


    axios
        .get(
            "https://api.apprenticeshipindia.org/opportunities/search?page=1&page_size=1&search=Boiler%20Attendant&locations[0][type]=district&locations[0][id]=5acbb46f1f174875c6506312&minqualification=5c406444c8eeab700c2d5666"
        )
        .then(function (response) {
            response.data.data.forEach((res) => {

                bot.telegram.sendMessage(
                    1978923007,
                    " Comapany Name : " +
                    res.locations[0].location_name +
                    " \n Total Vacancy : " +
                    res.number_of_vacancies +
                    " \n Date : " +
                    dateFormat(res.created_at.date, "mediumDate") +
                    " \n Application Count : " +
                    res.application_count +
                    " \n City : " +
                    res.locations[0].address.city +
                    " \nAddress : " +
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
                    " Comapany Name : " +
                    res.locations[0].location_name +
                    " \n Total Vacancy : " +
                    res.number_of_vacancies +
                    " \n Date : " +
                    dateFormat(res.created_at.date, "mediumDate") +
                    " \n Application Count : " +
                    res.application_count +
                    " \n City : " +
                    res.locations[0].address.city +
                    " \nAddress : " +
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
