const { app, Menu } = require('electron');

const isMac = process.platform === "darwin";

const template = [
	// { role: 'appMenu' }
	...(isMac
			? [
				{
					label: app.name,
					submenu: [
						{ role: "about" },
						{ type: "separator" },
						{ role: "quit" },
					],
				},
			]
			: []
	),
	// {role: 'filemenu'}
	{
		label: "File",
		submenu: [
			{
				label: "Open File",
				click: async () => {
					// doOpenFile();
				},
			},
		],
	},
	{
		label: "Edit",
		submenu: [
			{ role: "undo" },
			{ role: "redo" },
			{ type: "separator" },
			{ role: "copy" },
			{ role: "cut" },
			{ role: "paste" },
			...(isMac
				? [
					{ role: "pasteAndMatchStyle" },
					{ role: "delete" },
					{ role: "selectAll" },
					{ type: "separator" },
					{
						label: "Speech",
						submenu: [{ role: "startSpeaking" }, { role: "stopSpeaking" }],
					},
				]
				: [{ role: "delete" }, { type: "separator" }, { role: "selectAll" }]),
		],
	},
	{
		label: "View",
		submenu: [{ role: "reload" }, { role: "forceReload" }],
	},
	{
		label: "Window",
		submenu: [
			{ role: "minimize" },
			{ role: "zoom" },
			...(isMac
				? [
					{ type: "separator" },
					{ role: "front" },
					{ type: "separator" },
					{ role: "window" },
				]
				: [{ role: "close" }]),
		],
	},
];

module.exports.mainMenu = Menu.buildFromTemplate(template);