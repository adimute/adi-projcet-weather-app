import React, { Component } from 'react'

export default class Talaviv extends Component {

    constructor(props){
        super(props);
        this.state = {
            post: [[
                {
                "Headline": {
                  "EffectiveDate": "2019-10-19T08:00:00+03:00",
                  "EffectiveEpochDate": 1571461200,
                  "Severity": 4,
                  "Text": "Pleasant this weekend",
                  "Category": "",
                  "EndDate": null,
                  "EndEpochDate": null,
                  "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
                  "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
                },
                "DailyForecasts": [
                  {
                    "Date": "2019-10-19T07:00:00+03:00",
                    "EpochDate": 1571457600,
                    "Temperature": {
                      "Minimum": {
                        "Value": 71,
                        "Unit": "F",
                        "UnitType": 18
                      },
                      "Maximum": {
                        "Value": 84,
                        "Unit": "F",
                        "UnitType": 18
                      }
                    },
                    "Day": {
                      "Icon": 1,
                      "IconPhrase": "Sunny",
                      "HasPrecipitation": false
                    },
                    "Night": {
                      "Icon": 35,
                      "IconPhrase": "Partly cloudy",
                      "HasPrecipitation": false
                    },
                    "Sources": [
                      "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
                  },
                  {
                    "Date": "2019-10-20T07:00:00+03:00",
                    "EpochDate": 1571544000,
                    "Temperature": {
                      "Minimum": {
                        "Value": 71,
                        "Unit": "F",
                        "UnitType": 18
                      },
                      "Maximum": {
                        "Value": 84,
                        "Unit": "F",
                        "UnitType": 18
                      }
                    },
                    "Day": {
                      "Icon": 2,
                      "IconPhrase": "Mostly sunny",
                      "HasPrecipitation": false
                    },
                    "Night": {
                      "Icon": 34,
                      "IconPhrase": "Mostly clear",
                      "HasPrecipitation": false
                    },
                    "Sources": [
                      "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
                  },
                  {
                    "Date": "2019-10-21T07:00:00+03:00",
                    "EpochDate": 1571630400,
                    "Temperature": {
                      "Minimum": {
                        "Value": 70,
                        "Unit": "F",
                        "UnitType": 18
                      },
                      "Maximum": {
                        "Value": 83,
                        "Unit": "F",
                        "UnitType": 18
                      }
                    },
                    "Day": {
                      "Icon": 6,
                      "IconPhrase": "Mostly cloudy",
                      "HasPrecipitation": false
                    },
                    "Night": {
                      "Icon": 36,
                      "IconPhrase": "Intermittent clouds",
                      "HasPrecipitation": false
                    },
                    "Sources": [
                      "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
                  },
                  {
                    "Date": "2019-10-22T07:00:00+03:00",
                    "EpochDate": 1571716800,
                    "Temperature": {
                      "Minimum": {
                        "Value": 71,
                        "Unit": "F",
                        "UnitType": 18
                      },
                      "Maximum": {
                        "Value": 80,
                        "Unit": "F",
                        "UnitType": 18
                      }
                    },
                    "Day": {
                      "Icon": 6,
                      "IconPhrase": "Mostly cloudy",
                      "HasPrecipitation": false
                    },
                    "Night": {
                      "Icon": 34,
                      "IconPhrase": "Mostly clear",
                      "HasPrecipitation": false
                    },
                    "Sources": [
                      "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
                  },
                  {
                    "Date": "2019-10-23T07:00:00+03:00",
                    "EpochDate": 1571803200,
                    "Temperature": {
                      "Minimum": {
                        "Value": 69,
                        "Unit": "F",
                        "UnitType": 18
                      },
                      "Maximum": {
                        "Value": 79,
                        "Unit": "F",
                        "UnitType": 18
                      }
                    },
                    "Day": {
                      "Icon": 3,
                      "IconPhrase": "Partly sunny",
                      "HasPrecipitation": true,
                      "PrecipitationType": "Rain",
                      "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                      "Icon": 34,
                      "IconPhrase": "Mostly clear",
                      "HasPrecipitation": false
                    },
                    "Sources": [
                      "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
                  }
                ]
              }
            ]
            
            ]
        }

    }
    render() {

        const cardStyle = {
            border: "1px solid black", 
            margin: '10px',
            fontSize: '12px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: 'rgba(0, 0, 0, 0.73)',
            padding: '6px 5px',
            boxBizing: 'border-box',
            outline: 'none'

        }

       const a =  this.state.post.map(day => {
            let dayx = '';
            if (new Date(day.Date).getDay() === 0) {
                day = 'Sun'
            } else if (new Date(day.Date).getDay() === 1) {
                day = 'Mon'
            } else if (new Date(day.Date).getDay() === 2) {
                day = 'Tue'
            } else if (new Date(day.Date).getDay() === 3) {
                day = 'Wed'
            } else if (new Date(day.Date).getDay() === 4) {
                day = 'Thu'
            } else if (new Date(day.Date).getDay() === 5) {
                day = 'Fri'
            } else if (new Date(day.Date).getDay() === 6) {
                day = 'Sat'
            }

            return (
                <div style={cardStyle}>
                    <p>{dayx}</p>
                    <p>{day.Day.IconPhrase}</p>
                    <p>max - {((Number(day.Temperature.Maximum.Value) - 32) * 5 / 9).toFixed(0) + "°C"}</p>
                    <p>min -{((Number(day.Temperature.Minimum.Value) - 32) * 5 / 9).toFixed(0) + "°C"}</p>

                </div>
            )
            })
        
        return (
            <div className="Tal-aviv-forcast">
                {a}
            </div>
        )
    }
}



// const ForcastPage = () => {
//     return (
//       <div>
//         <ul>
//           {[[
//                 {
//                 "Headline": {
//                   "EffectiveDate": "2019-10-19T08:00:00+03:00",
//                   "EffectiveEpochDate": 1571461200,
//                   "Severity": 4,
//                   "Text": "Pleasant this weekend",
//                   "Category": "",
//                   "EndDate": null,
//                   "EndEpochDate": null,
//                   "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
//                   "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
//                 },
//                 "DailyForecasts": [
//                   {
//                     "Date": "2019-10-19T07:00:00+03:00",
//                     "EpochDate": 1571457600,
//                     "Temperature": {
//                       "Minimum": {
//                         "Value": 71,
//                         "Unit": "F",
//                         "UnitType": 18
//                       },
//                       "Maximum": {
//                         "Value": 84,
//                         "Unit": "F",
//                         "UnitType": 18
//                       }
//                     },
//                     "Day": {
//                       "Icon": 1,
//                       "IconPhrase": "Sunny",
//                       "HasPrecipitation": false
//                     },
//                     "Night": {
//                       "Icon": 35,
//                       "IconPhrase": "Partly cloudy",
//                       "HasPrecipitation": false
//                     },
//                     "Sources": [
//                       "AccuWeather"
//                     ],
//                     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
//                     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
//                   },
//                   {
//                     "Date": "2019-10-20T07:00:00+03:00",
//                     "EpochDate": 1571544000,
//                     "Temperature": {
//                       "Minimum": {
//                         "Value": 71,
//                         "Unit": "F",
//                         "UnitType": 18
//                       },
//                       "Maximum": {
//                         "Value": 84,
//                         "Unit": "F",
//                         "UnitType": 18
//                       }
//                     },
//                     "Day": {
//                       "Icon": 2,
//                       "IconPhrase": "Mostly sunny",
//                       "HasPrecipitation": false
//                     },
//                     "Night": {
//                       "Icon": 34,
//                       "IconPhrase": "Mostly clear",
//                       "HasPrecipitation": false
//                     },
//                     "Sources": [
//                       "AccuWeather"
//                     ],
//                     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
//                     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
//                   },
//                   {
//                     "Date": "2019-10-21T07:00:00+03:00",
//                     "EpochDate": 1571630400,
//                     "Temperature": {
//                       "Minimum": {
//                         "Value": 70,
//                         "Unit": "F",
//                         "UnitType": 18
//                       },
//                       "Maximum": {
//                         "Value": 83,
//                         "Unit": "F",
//                         "UnitType": 18
//                       }
//                     },
//                     "Day": {
//                       "Icon": 6,
//                       "IconPhrase": "Mostly cloudy",
//                       "HasPrecipitation": false
//                     },
//                     "Night": {
//                       "Icon": 36,
//                       "IconPhrase": "Intermittent clouds",
//                       "HasPrecipitation": false
//                     },
//                     "Sources": [
//                       "AccuWeather"
//                     ],
//                     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
//                     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
//                   },
//                   {
//                     "Date": "2019-10-22T07:00:00+03:00",
//                     "EpochDate": 1571716800,
//                     "Temperature": {
//                       "Minimum": {
//                         "Value": 71,
//                         "Unit": "F",
//                         "UnitType": 18
//                       },
//                       "Maximum": {
//                         "Value": 80,
//                         "Unit": "F",
//                         "UnitType": 18
//                       }
//                     },
//                     "Day": {
//                       "Icon": 6,
//                       "IconPhrase": "Mostly cloudy",
//                       "HasPrecipitation": false
//                     },
//                     "Night": {
//                       "Icon": 34,
//                       "IconPhrase": "Mostly clear",
//                       "HasPrecipitation": false
//                     },
//                     "Sources": [
//                       "AccuWeather"
//                     ],
//                     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
//                     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
//                   },
//                   {
//                     "Date": "2019-10-23T07:00:00+03:00",
//                     "EpochDate": 1571803200,
//                     "Temperature": {
//                       "Minimum": {
//                         "Value": 69,
//                         "Unit": "F",
//                         "UnitType": 18
//                       },
//                       "Maximum": {
//                         "Value": 79,
//                         "Unit": "F",
//                         "UnitType": 18
//                       }
//                     },
//                     "Day": {
//                       "Icon": 3,
//                       "IconPhrase": "Partly sunny",
//                       "HasPrecipitation": true,
//                       "PrecipitationType": "Rain",
//                       "PrecipitationIntensity": "Light"
//                     },
//                     "Night": {
//                       "Icon": 34,
//                       "IconPhrase": "Mostly clear",
//                       "HasPrecipitation": false
//                     },
//                     "Sources": [
//                       "AccuWeather"
//                     ],
//                     "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
//                     "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
//                   }
//                 ]
//               }
//             ]
            
//             ].map((Date, Temperature, Day) => {
//             return <li key={Date}>{Temperature} {Day.IconPhrase}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   };
  
//   export default ForcastPage;