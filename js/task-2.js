const message = "Curabitur ligula sapien";
const maxLength = 16;

function formatMessage(message, maxLength) {
    if (message.length > maxLength) {
        return message.slice(0, maxLength) + "...";
    }
    else {
        return message;
    }
}