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
		return '<h3>Supported commands</h3>'
				+ '<ul>'
				+ '<li>hi - A greeting message from Juho.</li>'
				+ '<li>clear - Clear the screen.</li>'
				+ '<li>intro - Juho\'s introduction</li>'
				+ '<li>status - Juho\'s current status</li>'
				+ '<li>work - Work experiences</li>'
				+ '</ul>';
	},
	hi: function() {
		return readCommand('commands/hi.txt');
	},
	clear: function() {
		location.reload();
		return '';
	},
	intro: function() {
		return '<p>I was born in South Korea and educated in Singapore. I am super interested '
				+ 'in building products and find how people may like them. I spend most of '
				+ 'my time learning new stuff and when I am rather free, I like to listen to '
				+ 'music and go to concerts. Yay!</p>';
	},
	status: function() {
		return '<p>I am currently interning as a software developer at Playphone Inc. in Sunnyvale,'
				+ ' California. At the same time, I am a junior in National University of Singapore.</p>'
	},
	work: function() {
		return '<table>'
				+ '<thead><th>id</th><th>period</th><th>company/organisation</th><th>position</th><th>location</th></thead>'
				+ '<tbody>'
			  //+ '<tr><td></td><td></td><td></td><td></td><td></td></tr>'
				+ '<tr><td>7</td><td>Aug 2016-Jul 2017</td><td>Playphone, Inc.</td><td>Software Engineering Intern</td><td>Sunnyvale, California</td></tr>'
				+ '<tr><td>6</td><td>Jan 2016-Jun 2016</td><td>Intraix Pte Ltd</td><td>Software Engineering Intern</td><td>Singapore</td></tr>'
				+ '<tr><td>5</td><td>Aug 2015-Jun 2016</td><td>Ridge View Residential College, NUS</td><td>Student Fellow</td><td>Singapore</td></tr>'
				+ '<tr><td>4</td><td>Aug 2015-Nov 2015</td><td>National University of Singapore</td><td>Teaching Assistant, CS1010J Programming Methodology</td><td>Singapore</td></tr>'
				+ '<tr><td>3</td><td>May 2015-Aug 2015</td><td>Intraix Pte Ltd</td><td>Business Development Intern</td><td>Singapore</td></tr>'
				+ '<tr><td>2</td><td>Dec 2013-Jun 2014</td><td>Master System Co., Ltd.</td><td>Professional Interpreter</td><td>Ahmedabad, India</td></tr>'
				+ '<tr><td>1</td><td>Jan 2012-Oct 2013</td><td>Ministry of National Defense</td><td>Army Interpreter</td><td>South Korea</td></tr>'
				+ '</tbody></table>';
	}
}
