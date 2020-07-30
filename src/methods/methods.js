const close_session = require("./close_session/sampleRequest.json");
const create_group = require("./create_group/sampleRequest.json");
const get_games = require("./get_games/sampleRequest.json");
const get_groups = require("./get_groups/sampleRequest.json");
const open_default_sw_session = require("./open_default_sw_session/sampleRequest.json");
const refresh_sw_balance = require("./refresh_sw_balance/sampleRequest.json");

module.exports = {
    "close_session": close_session,
    "create_group": create_group,
    "get_games": get_games,
    "get_groups": get_groups,
    "open_default_sw_session": open_default_sw_session,
    "refresh_sw_balance": refresh_sw_balance
}