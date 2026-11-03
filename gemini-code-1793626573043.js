// 1. ضع توكن البوت ومعرف حسابك هنا
const TELEGRAM_BOT_TOKEN = "ضع_هنا_توكن_البوت_من_BotFather";
const TELEGRAM_CHAT_ID = "ضع_هنا_رقم_الـ_ID_لحسابك_من_userinfobot";

// 2. دالة إرسال النتيجة مباشرة إلى تيليغرام
function sendResultToTelegram(userName, userScore, totalScore, userAnswersDetails) {
  const percent = Math.round((userScore / totalScore) * 100);
  
  const textMsg = 
    `🎯 *نتيجة اختبار كفاءة جديدة*\n\n` +
    `👤 *اسم المتقدم:* ${userName}\n` +
    `📊 *الدرجة:* ${userScore} من ${totalScore}\n` +
    `📈 *النسبة المئوية:* ${percent}%\n\n` +
    `📋 *تفاصيل الإجابات:*\n${userAnswersDetails}`;

  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: textMsg,
      parse_mode: "Markdown"
    })
  })
  .then(res => res.json())
  .then(data => console.log("تم الإرسال بنجاح:", data))
  .catch(err => console.error("خطأ بالإرسال:", err));
}