var config = {
	load_data: function() {
		data = localStorage.getItem("config_data");
		
		if (data != null) {
			try {
				config.data = JSON.parse(data);
			}
			catch (SyntaxError) {
				alert("Error: Wrong data structure!");
			}
		}
		
	},
	
	save_data: function(new_data) {
		localStorage.setItem("config_data", JSON.stringify(new_data));
	},
	
	reset_data: function() {
		localStorage.removeItem("config_data");
	},

	data: {
		language: "en",

		timetable: [
			{
				day: "Monday",
				schedule: [
					{subject: "PC 329", room: 11},
					{subject: "AP 4", room: 11},
					{subject: "--", room: 11},
					{subject: "GEE-PEE", room: 11},
					{subject: "PC 3210", room: 11},
					{subject: "--", room:11}, 

				]
			},

			{
				day: "Tuesday",
				schedule: [
					{subject: "PC 329", room: 11},
					{subject: "GEE-PEE", room: 11},
					{subject: "GEC-AA", room: 11},
					{subject: "PC 3211", room: 11},
					{subject: "--", room: 11},
					{subject: "--", room:11}, 

				]
			},

			{
				day: "Wednesday",
				schedule: [
					{subject: "PC 329", room: 11},
					{subject: "GEE-PEE", room: 11},
					{subject: "GEC-AA", room: 11},
					{subject: "--", room: 11},
					{subject: "AP 5", room: 11},
					{subject: "--", room:11}, 
				]
			},

			{
				day: "Thursday",
				schedule: [
					{subject: "AP 4", room: 11},
					{subject: "--", room: 11},
					{subject: "--", room: 11},
					{subject: "PC 3211L", room: 11},
					{subject: "--", room: 11},
					{subject: "--", room:11}, 
				]
			},

			{
				day: "Friday",
				schedule: [
					{subject: "PC 3210", room: 11},
					{subject: "PC 3211", room: 11},
					{subject: "--", room: 11},
					{subject: "AP 5", room: 11},
					{subject: "--", room: 11},
					{subject: "--", room:11}, 
				]
			}
			
		],
	
	
	
		periods: [
			{start: "04:00", end: "5:00"},
			{start: "05:00", end: "06:00"},
			{start: "06:00", end: "07:00"},
			{start: "07:00", end: "08:00"},
			{start: "08:00", end: "09:00"},
			{start: "09:00", end: "10:00"},

		],
	
	
	
		colors: {
			"AP 5":				"#552200",
			"PC 329": 			"#337732",
			"AP 4":				"#0055AA",
			"GEE-PEE": 			"#FF8800",
			"PC 3210":			"#447777",
			"GEC-AA": 			"#009922",
			"PC 3211": 			"#DD2222",
			"PC 3211L": 		"#0088FF",

		}
	}
};
