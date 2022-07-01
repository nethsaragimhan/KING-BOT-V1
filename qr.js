/* Copyright (C) 2021 T-REX
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License
T-REX HIRUWA
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [3,3234, 9]

  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('function/20px')}${chalk.green.bold('replit.js-start')}
${chalk.white.italic('TEAM-KING-BOT')}
${chalk.blue.bold('ℹ️  Loading Qr... Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('King-Bot QR Code: '),
      'KINGBOT:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'KINGBOT:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ King-Bot Successfully Scanned✅️*\n*▪️Thanks For Choosing King-Bot 😻💫*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ King-Bot Successfully Scanned✅️*\n*▪️Thanks For Choosing King-Bot 😻💫*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "methanin session eka ganna bari nm qr eka scan karapu whatsapp eke oyage num eken msg ekak avilla athi..eke balanna\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
