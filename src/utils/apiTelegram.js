const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export async function sendTelegramMessage(fields) {
    if (!BOT_TOKEN || !CHAT_ID) {
        throw new Error("Bot token or chat id missing.");
    }

    // Create a well-organized message with emojis and formatting
    const message = `
🌟 <b>NOUVELLE DEMANDE DE CONTACT</b> 🌟
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 <b>Nom:</b> ${fields.name}
${fields.company ? `🏢 <b>Société:</b> ${fields.company}\n` : ''}📧 <b>Email:</b> ${fields.email}

💬 <b>Message:</b>
<pre>${fields.message}</pre>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ <b>Reçu le:</b> ${new Date().toLocaleString('fr-FR')}
🎯 <b>Source:</b> Site Web CIMEF
`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const body = {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML"
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}
