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
///////
client.on("message", SAEWAN => {
  if (SAEWAN.content.startsWith("ریکلام دکەن")) {
    SAEWAN.author.send("** چاوەکەم ریـکـلامـەکـەم بـۆ بنێرە تکای بەس لینکە**");
    SAEWAN.reply("**ریـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});
///////
client.on("message", saewan => {
  if (saewan.channel.type === "dm") {
    if (saewan.content.startsWith("https://discord.gg/")) {
      saewan.author.send(`https://discord.gg/nAyfg566`); /// لینکە سیرڤەرە خۆت

      client.channels.get("833726369401405530").send(////ئایدی ژوری تێکست
 
        `${saewan.content}`
      );
    }
  }
});
/////
// ======== { • TOKENN • }======== /
client.login("OTg4MTg4MDI0NDY0NjA1MjA0.Gp3l7I.EMQCy-uP-fcF7JyKE2E6kOTzx2KKzIqvUXFU_w");
////////////////تکایە دەسکاری ئێرەمەکە تا ریمێکس دەیکت
