// This file is automatically generated. Do not edit.

cah.$ = {};

cah.$.AjaxOperation = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.AjaxOperation.prototype.dummyForAutocomplete = undefined;
cah.$.AjaxOperation.START_GAME = "sg";
cah.$.AjaxOperation.FIRST_LOAD = "fl";
cah.$.AjaxOperation.SPECTATE_GAME = "vg";
cah.$.AjaxOperation.LOG_OUT = "lo";
cah.$.AjaxOperation.JUDGE_SELECT = "js";
cah.$.AjaxOperation.BAN = "b";
cah.$.AjaxOperation.SCORE = "SC";
cah.$.AjaxOperation.GAME_LIST = "ggl";
cah.$.AjaxOperation.CHANGE_GAME_OPTIONS = "cgo";
cah.$.AjaxOperation.GET_GAME_INFO = "ggi";
cah.$.AjaxOperation.PLAY_CARD = "pc";
cah.$.AjaxOperation.CREATE_GAME = "cg";
cah.$.AjaxOperation.KICK = "K";
cah.$.AjaxOperation.GAME_CHAT = "GC";
cah.$.AjaxOperation.ADMIN_SET_VERBOSE_LOG = "svl";
cah.$.AjaxOperation.GET_CARDS = "gc";
cah.$.AjaxOperation.JOIN_GAME = "jg";
cah.$.AjaxOperation.REGISTER = "r";
cah.$.AjaxOperation.CHAT = "c";
cah.$.AjaxOperation.NAMES = "gn";
cah.$.AjaxOperation.LEAVE_GAME = "lg";

cah.$.AjaxRequest = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.AjaxRequest.prototype.dummyForAutocomplete = undefined;
cah.$.AjaxRequest.WALL = "wall";
cah.$.AjaxRequest.USE_TIMER = "ut";
cah.$.AjaxRequest.CARD_SETS = "css";
cah.$.AjaxRequest.GAME_ID = "gid";
cah.$.AjaxRequest.EMOTE = "me";
cah.$.AjaxRequest.OP = "o";
cah.$.AjaxRequest.PLAYER_LIMIT = "pL";
cah.$.AjaxRequest.NICKNAME = "n";
cah.$.AjaxRequest.SCORE_LIMIT = "sl";
cah.$.AjaxRequest.CARD_ID = "cid";
cah.$.AjaxRequest.MESSAGE = "m";
cah.$.AjaxRequest.BLANKS_LIMIT = "bl";
cah.$.AjaxRequest.SPECTATOR_LIMIT = "vL";
cah.$.AjaxRequest.SERIAL = "s";
cah.$.AjaxRequest.PASSWORD = "pw";

cah.$.AjaxResponse = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.AjaxResponse.prototype.dummyForAutocomplete = undefined;
cah.$.AjaxResponse.WHITE_CARDS = "wc";
cah.$.AjaxResponse.CARD_SETS = "css";
cah.$.AjaxResponse.GAME_ID = "gid";
cah.$.AjaxResponse.HAND = "h";
cah.$.AjaxResponse.PLAYER_INFO = "pi";
cah.$.AjaxResponse.BLACK_CARD = "bc";
cah.$.AjaxResponse.IN_PROGRESS = "ip";
cah.$.AjaxResponse.GAMES = "gl";
cah.$.AjaxResponse.NICKNAME = "n";
cah.$.AjaxResponse.CARD_ID = "cid";
cah.$.AjaxResponse.NEXT = "next";
cah.$.AjaxResponse.GAME_INFO = "gi";
cah.$.AjaxResponse.ERROR = "e";
cah.$.AjaxResponse.ERROR_CODE = "ec";
cah.$.AjaxResponse.SERIAL = "s";
cah.$.AjaxResponse.MAX_GAMES = "mg";
cah.$.AjaxResponse.NAMES = "nl";

cah.$.BlackCardData = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.BlackCardData.prototype.dummyForAutocomplete = undefined;
cah.$.BlackCardData.TEXT = "T";
cah.$.BlackCardData.PICK = "PK";
cah.$.BlackCardData.ID = "cid";
cah.$.BlackCardData.WATERMARK = "W";
cah.$.BlackCardData.DRAW = "D";

cah.$.CardSetData = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.CardSetData.prototype.dummyForAutocomplete = undefined;
cah.$.CardSetData.CARD_SET_DESCRIPTION = "csd";
cah.$.CardSetData.WEIGHT = "w";
cah.$.CardSetData.CARD_SET_NAME = "csn";
cah.$.CardSetData.ID = "cid";
cah.$.CardSetData.WHITE_CARDS_IN_DECK = "wcid";
cah.$.CardSetData.BLACK_CARDS_IN_DECK = "bcid";
cah.$.CardSetData.BASE_DECK = "bd";

cah.$.DisconnectReason = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.DisconnectReason.prototype.dummyForAutocomplete = undefined;
cah.$.DisconnectReason.BANNED = "B&";
cah.$.DisconnectReason.PING_TIMEOUT = "pt";
cah.$.DisconnectReason.KICKED = "k";
cah.$.DisconnectReason.MANUAL = "man";

cah.$.ErrorCode = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.ErrorCode.prototype.dummyForAutocomplete = undefined;
cah.$.ErrorCode.TOO_MANY_GAMES = "tmg";
cah.$.ErrorCode.NO_CARD_SPECIFIED = "ncs";
cah.$.ErrorCode.ACCESS_DENIED = "ad";
cah.$.ErrorCode.NOT_GAME_HOST = "ngh";
cah.$.ErrorCode.CANNOT_JOIN_ANOTHER_GAME = "cjag";
cah.$.ErrorCode.INVALID_CARD = "ic";
cah.$.ErrorCode.RESERVED_NICK = "rn";
cah.$.ErrorCode.NO_GAME_SPECIFIED = "ngs";
cah.$.ErrorCode.SESSION_EXPIRED = "se";
cah.$.ErrorCode.BAD_OP = "bo";
cah.$.ErrorCode.TOO_FAST = "tf";
cah.$.ErrorCode.NO_SESSION = "ns";
cah.$.ErrorCode.NOT_REGISTERED = "nr";
cah.$.ErrorCode.OP_NOT_SPECIFIED = "ons";
cah.$.ErrorCode.NOT_JUDGE = "nj";
cah.$.ErrorCode.WRONG_PASSWORD = "wp";
cah.$.ErrorCode.NOT_IN_THAT_GAME = "nitg";
cah.$.ErrorCode.NICK_IN_USE = "niu";
cah.$.ErrorCode.SERVER_ERROR = "serr";
cah.$.ErrorCode.GAME_FULL = "gf";
cah.$.ErrorCode.NO_NICK_SPECIFIED = "nns";
cah.$.ErrorCode.NOT_ADMIN = "na";
cah.$.ErrorCode.NOT_YOUR_TURN = "nyt";
cah.$.ErrorCode.BANNED = "B&";
cah.$.ErrorCode.INVALID_NICK = "in";
cah.$.ErrorCode.ALREADY_STARTED = "as";
cah.$.ErrorCode.BAD_REQUEST = "br";
cah.$.ErrorCode.NO_SUCH_USER = "nsu";
cah.$.ErrorCode.DO_NOT_HAVE_CARD = "dnhc";
cah.$.ErrorCode.MESSAGE_TOO_LONG = "mtl";
cah.$.ErrorCode.NOT_ENOUGH_PLAYERS = "nep";
cah.$.ErrorCode.INVALID_GAME = "ig";
cah.$.ErrorCode.NO_MSG_SPECIFIED = "nms";
cah.$.ErrorCode.NOT_ENOUGH_CARDS = "nec";
cah.$.ErrorCode_msg = {};
cah.$.ErrorCode_msg['tmg'] = "There are too many games already in progress. Either join an existing game, or wait for one to become available.";
cah.$.ErrorCode_msg['ncs'] = "No card specified.";
cah.$.ErrorCode_msg['ns'] = "Session not detected. Make sure you have cookies enabled.";
cah.$.ErrorCode_msg['rn'] = "That nick is reserved.";
cah.$.ErrorCode_msg['nr'] = "Not registered. Refresh the page.";
cah.$.ErrorCode_msg['nitg'] = "You are not in that game.";
cah.$.ErrorCode_msg['nep'] = "There are not enough players to start the game.";
cah.$.ErrorCode_msg['tf'] = "You are chatting too fast. Wait a few seconds and try again.";
cah.$.ErrorCode_msg['nyt'] = "It is not your turn to play a card.";
cah.$.ErrorCode_msg['mtl'] = "Messages cannot be longer than 200 characters.";
cah.$.ErrorCode_msg['gf'] = "That game is full. Join another.";
cah.$.ErrorCode_msg['br'] = "Bad request.";
cah.$.ErrorCode_msg['ngs'] = "No game specified.";
cah.$.ErrorCode_msg['ic'] = "Invalid card specified.";
cah.$.ErrorCode_msg['bo'] = "Invalid operation.";
cah.$.ErrorCode_msg['dnhc'] = "You don't have that card.";
cah.$.ErrorCode_msg['ons'] = "Operation not specified.";
cah.$.ErrorCode_msg['cjag'] = "You cannot join another game.";
cah.$.ErrorCode_msg['ig'] = "Invalid game specified.";
cah.$.ErrorCode_msg['nns'] = "No nickname specified.";
cah.$.ErrorCode_msg['ngh'] = "Only the game host can do that.";
cah.$.ErrorCode_msg['nec'] = "You must select at least one base card set.";
cah.$.ErrorCode_msg['serr'] = "An error occured on the server.";
cah.$.ErrorCode_msg['nsu'] = "No such user.";
cah.$.ErrorCode_msg['wp'] = "That password is incorrect.";
cah.$.ErrorCode_msg['as'] = "The game has already started.";
cah.$.ErrorCode_msg['se'] = "Your session has expired. Refresh the page.";
cah.$.ErrorCode_msg['in'] = "Nickname must contain only upper and lower case letters, numbers, or underscores, must be 3 to 30 characters long, and must not start with a number.";
cah.$.ErrorCode_msg['nms'] = "No message specified.";
cah.$.ErrorCode_msg['na'] = "You are not an administrator.";
cah.$.ErrorCode_msg['niu'] = "Nickname is already in use.";
cah.$.ErrorCode_msg['B&'] = "Banned.";
cah.$.ErrorCode_msg['ad'] = "Access denied.";
cah.$.ErrorCode_msg['nj'] = "You are not the judge.";

cah.$.GameInfo = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.GameInfo.prototype.dummyForAutocomplete = undefined;
cah.$.GameInfo.HOST = "H";
cah.$.GameInfo.STATE = "S";
cah.$.GameInfo.PLAYERS = "P";
cah.$.GameInfo.USE_TIMER = "ut";
cah.$.GameInfo.BLANKS_LIMIT = "bl";
cah.$.GameInfo.CARD_SETS = "css";
cah.$.GameInfo.SPECTATORS = "V";
cah.$.GameInfo.SPECTATOR_LIMIT = "vL";
cah.$.GameInfo.ID = "gid";
cah.$.GameInfo.PLAYER_LIMIT = "pL";
cah.$.GameInfo.PASSWORD = "pw";
cah.$.GameInfo.HAS_PASSWORD = "hp";
cah.$.GameInfo.SCORE_LIMIT = "sl";

cah.$.GamePlayerInfo = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.GamePlayerInfo.prototype.dummyForAutocomplete = undefined;
cah.$.GamePlayerInfo.NAME = "N";
cah.$.GamePlayerInfo.SCORE = "sc";
cah.$.GamePlayerInfo.STATUS = "st";

cah.$.GamePlayerStatus = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.GamePlayerStatus.prototype.dummyForAutocomplete = undefined;
cah.$.GamePlayerStatus.SPECTATOR = "sv";
cah.$.GamePlayerStatus.HOST = "sh";
cah.$.GamePlayerStatus.IDLE = "si";
cah.$.GamePlayerStatus.WINNER = "sw";
cah.$.GamePlayerStatus.PLAYING = "sp";
cah.$.GamePlayerStatus.JUDGE = "sj";
cah.$.GamePlayerStatus.JUDGING = "sjj";
cah.$.GamePlayerStatus_msg = {};
cah.$.GamePlayerStatus_msg['sp'] = "Playing";
cah.$.GamePlayerStatus_msg['sv'] = "Spectator";
cah.$.GamePlayerStatus_msg['sh'] = "Host";
cah.$.GamePlayerStatus_msg['sw'] = "Winner!";
cah.$.GamePlayerStatus_msg['sj'] = "Card Czar";
cah.$.GamePlayerStatus_msg['sjj'] = "Selecting";
cah.$.GamePlayerStatus_msg['si'] = "";
cah.$.GamePlayerStatus_msg_2 = {};
cah.$.GamePlayerStatus_msg_2['sp'] = "Select a card to play.";
cah.$.GamePlayerStatus_msg_2['sv'] = "You are just spectating.";
cah.$.GamePlayerStatus_msg_2['sh'] = "Wait for players then click Start Game.";
cah.$.GamePlayerStatus_msg_2['sw'] = "You have won!";
cah.$.GamePlayerStatus_msg_2['sj'] = "You are the Card Czar.";
cah.$.GamePlayerStatus_msg_2['sjj'] = "Select a winning card.";
cah.$.GamePlayerStatus_msg_2['si'] = "Waiting for players...";

cah.$.GameState = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.GameState.prototype.dummyForAutocomplete = undefined;
cah.$.GameState.PLAYING = "p";
cah.$.GameState.ROUND_OVER = "ro";
cah.$.GameState.LOBBY = "l";
cah.$.GameState.JUDGING = "j";
cah.$.GameState.DEALING = "d";
cah.$.GameState_msg = {};
cah.$.GameState_msg['ro'] = "In Progress";
cah.$.GameState_msg['d'] = "In Progress";
cah.$.GameState_msg['p'] = "In Progress";
cah.$.GameState_msg['l'] = "Not Started";
cah.$.GameState_msg['j'] = "In Progress";

cah.$.LongPollEvent = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.LongPollEvent.prototype.dummyForAutocomplete = undefined;
cah.$.LongPollEvent.BANNED = "B&";
cah.$.LongPollEvent.KICKED = "k";
cah.$.LongPollEvent.HURRY_UP = "hu";
cah.$.LongPollEvent.GAME_SPECTATOR_LEAVE = "gvl";
cah.$.LongPollEvent.KICKED_FROM_GAME_IDLE = "kfgi";
cah.$.LongPollEvent.GAME_JUDGE_SKIPPED = "gjs";
cah.$.LongPollEvent.GAME_PLAYER_LEAVE = "gpl";
cah.$.LongPollEvent.NEW_PLAYER = "np";
cah.$.LongPollEvent.GAME_SPECTATOR_JOIN = "gvj";
cah.$.LongPollEvent.GAME_PLAYER_JOIN = "gpj";
cah.$.LongPollEvent.GAME_LIST_REFRESH = "glr";
cah.$.LongPollEvent.GAME_ROUND_COMPLETE = "grc";
cah.$.LongPollEvent.NOOP = "_";
cah.$.LongPollEvent.GAME_PLAYER_INFO_CHANGE = "gpic";
cah.$.LongPollEvent.GAME_PLAYER_KICKED_IDLE = "gpki";
cah.$.LongPollEvent.GAME_BLACK_RESHUFFLE = "gbr";
cah.$.LongPollEvent.GAME_WHITE_RESHUFFLE = "gwr";
cah.$.LongPollEvent.GAME_STATE_CHANGE = "gsc";
cah.$.LongPollEvent.GAME_OPTIONS_CHANGED = "goc";
cah.$.LongPollEvent.GAME_PLAYER_SKIPPED = "gps";
cah.$.LongPollEvent.PLAYER_LEAVE = "pl";
cah.$.LongPollEvent.HAND_DEAL = "hd";
cah.$.LongPollEvent.CHAT = "c";
cah.$.LongPollEvent.GAME_JUDGE_LEFT = "gjl";

cah.$.LongPollResponse = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.LongPollResponse.prototype.dummyForAutocomplete = undefined;
cah.$.LongPollResponse.WALL = "wall";
cah.$.LongPollResponse.WHITE_CARDS = "wc";
cah.$.LongPollResponse.REASON = "qr";
cah.$.LongPollResponse.GAME_ID = "gid";
cah.$.LongPollResponse.EMOTE = "me";
cah.$.LongPollResponse.HAND = "h";
cah.$.LongPollResponse.INTERMISSION = "i";
cah.$.LongPollResponse.PLAYER_INFO = "pi";
cah.$.LongPollResponse.BLACK_CARD = "bc";
cah.$.LongPollResponse.WINNING_CARD = "WC";
cah.$.LongPollResponse.GAME_STATE = "gs";
cah.$.LongPollResponse.NICKNAME = "n";
cah.$.LongPollResponse.PLAY_TIMER = "Pt";
cah.$.LongPollResponse.MESSAGE = "m";
cah.$.LongPollResponse.FROM_ADMIN = "fa";
cah.$.LongPollResponse.GAME_INFO = "gi";
cah.$.LongPollResponse.ERROR = "e";
cah.$.LongPollResponse.EVENT = "E";
cah.$.LongPollResponse.FROM = "f";
cah.$.LongPollResponse.ERROR_CODE = "ec";
cah.$.LongPollResponse.TIMESTAMP = "ts";
cah.$.LongPollResponse.ROUND_WINNER = "rw";

cah.$.ReconnectNextAction = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.ReconnectNextAction.prototype.dummyForAutocomplete = undefined;
cah.$.ReconnectNextAction.GAME = "game";
cah.$.ReconnectNextAction.NONE = "none";

cah.$.WhiteCardData = function() {
  // Dummy constructor to make Eclipse auto-complete.
};
cah.$.WhiteCardData.prototype.dummyForAutocomplete = undefined;
cah.$.WhiteCardData.TEXT = "T";
cah.$.WhiteCardData.ID = "cid";
cah.$.WhiteCardData.WATERMARK = "W";

