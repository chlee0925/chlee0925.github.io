function readCommand(path)
{
		var request = new XMLHttpRequest();
		request.open('GET', path, false);
		request.send(null);

		if (request.status === 200 || request.status === 0) {
			return request.responseText;
		} else {
			return '';
		}
}

var commands = {
	help: function() {
		return readCommand('commands/help.txt');
	},
	hi: function() {
		return readCommand('commands/hi.txt');
	},
	clear: function() {
		location.reload();
		return '';
	},
	intro: function() {
		return readCommand('commands/intro.txt');
	},
	status: function() {
		return readCommand('commands/status.txt');
	},
	work: function() {
		return readCommand('commands/work.txt');
	}
}
