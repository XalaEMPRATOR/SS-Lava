//////تکایە دەسکاری پرۆجێکتەکەمەکە تا ریمێکس دەکەیت

const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "hostemprator");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();
//////
client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("reklam")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە تکای بەس لینکە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});
//////

client.on("message", SAEWAN => {

  if (SAEWAN.content.startsWith("Reklam")) {

    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە تکای بەس لینکە**");

    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");

  }

});
///////
//////



client.on("message", SAEWAN => {



  if (SAEWAN.content.startsWith("ریکلام دکەن")) {



    SAEWAN.author.send("** چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە تکای بەس لینکە**");



    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");



  }



});

///////
//////



client.on("message", SAEWAN => {



  if (SAEWAN.content.startsWith("ريكلام دەگۆرنەوە")) {



    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە تکای بەس لینکە**");



    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");



  }



});

///////
client.on("message", SAEWAN => {

  if (SAEWAN.content.startsWith("سلاو ریکلام دگۆرن وە")) {

    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە**");

    SAEWAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");

  }

});

///////
////////



client.on("message", SAEWAN => {

  if (SAEWAN.content.startsWith("slaw reklam agornawa")) {

    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە تکای بەس لینکە**");

    SAEWAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");

  }

});

///////

////////

client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("ریکلام")) {
    SAEWAN.author.send("**چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە تکای بەس لینکە**");
    SAEWAN.reply("**ریـکلاماکەم لە تایـبـەت بـۆ بنێرە**");
  }
});
///////
client.on("message", saewan => {
  if (saewan.channel.type === "dm") {
    if (saewan.content.startsWith("https://discord.gg/")) {
      saewan.author.send(`کردم تۆش ئەمە دانی
      https://discord.gg/vbMTCjZhZU`); /// لینکە سیرڤەرە خۆت

      client.channels.get("785815755493081100").send(////ئایدی ژوری تێکست
 
        `> Nerdra la layan <@${saewan.author.id}> 
${saewan.content}`
      );
    }
  }
});
/////

client.on("message", message => {

  if (!message.guild) return;

  if (message.content === ".") {

    if (message.member.voiceChannel) {

      message.member.voiceChannel

        .join()

        .then(connection => {

          message.reply("");

        })

        .catch(console.log);

    } else {

      message.reply("");

    }

  }

});
// ======== { • TOKENN • }======== //

client.login("NzM4MTU1NjkwNjE0NTg3NTUz.X9dwiA.0W6xxrqkolbasy6eCLqKbfppgCs");
////////////////تکایە دەسکاری ئێرەمەکە تا ریمێکس دەیکت
