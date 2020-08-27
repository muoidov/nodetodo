var configValue = require('./config.json');
module.exports = {
    getDbConnectionString: function (params) {
        return `mongodb+srv://${configValue.username}:bA3BH1HQTvXaGNc0@cluster0.c9ayg.azure.mongodb.net/muoideptrai?retryWrites=true&w=majority`;
    }
}