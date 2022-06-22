# TelegramBot
Get Notification Via Telegram Bot using  Rest API



Open the Telegram app and search for the @BotFather bot. 

This is the official Telegram bot. To create and manage your own private bots.

Telegram Bot

1)Inside the chat session with @BotFather, 

Click the Start button and type the command /newbot to create a new Telegram bot.

2)Give your Telegram bot a unique username

3)Telegram will provide you with an API token. 

Put this API Token in your .env file.

Now you can create a bot command which can be executed by calling /commandname in the Telegram app.

    bot.command("commandname ", (ctx) => {
    
    console.log(ctx.from);
    
    bot.telegram.sendMessage(
    
    ctx.chat.id,
    
    "hello there! Welcome to my new telegram bot.",
    
    {}
    
    );
    
    });

Inside command code, RestAPI can be called, 
 corn schedule can be used to automate repetitive tasks for any fixed interval of time.

To send a message to Telegram

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

