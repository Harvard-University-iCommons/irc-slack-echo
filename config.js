module.exports = {
  slack: {
    host: process.env.SLACK_HOST,
    incomingWebhookToken: process.env.INCOMING_SLACK_WEBHOOK_TOKEN,
    outgoingWebhookToken: process.env.OUTGOING_SLACK_WEBHOOK_TOKEN,
    outgoingWebhookServer: {
      port: process.env.OUTGOING_SLACK_PORT,
      domain: process.env.PUBLIC_IP,
      hookPath: '/irc-echo'
    },
    echoChannel: process.env.SLACK_CHANNEL,
    botName: process.env.SLACK_BOT_NAME,
  },
  irc: {
    server: 'chat.freenode.net',
    nick: process.env.IRC_NICK,
    channel: process.env.IRC_CHANNEL
  },
};
