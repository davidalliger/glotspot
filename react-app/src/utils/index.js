export const getAge = (date) => {
    const today = new Date();
    const birthday = new Date(date);
    birthday.setDate(birthday.getUTCDate());
    birthday.setMonth(birthday.getMonth() - 1);
    const year = 1000 * 60 * 60 * 24 * 365;
    const age = Math.floor((today - birthday)/year);
    return age;
}

export const findYear = (date) => {
    const birthday = date.split(", ");
    return birthday[0];
}

export const findMonth = (date) => {
    const birthday = date.split(", ");
    return birthday[1];
}

export const findDay = (date) => {
    const birthday = date.split(", ");
    return birthday[2];
}

export const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'The Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Democratic Republic of the Congo',
    'Republic of the Congo',
    'Costa Rica',
    'Côte d\'Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'The Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'North Korea',
    'South Korea',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Federated States of Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'South Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Other'
]

export const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
]

export const timezones = [
    'Greenwich Mean Time (GMT)',
    'Central European Time (GMT+1:00)',
    'Eastern European Time (GMT+2:00)',
    'Eastern African Time (GMT+3:00)',
    'Middle East Time (GMT+3:30)',
    'Near East Time (GMT+4:00)',
    'Afghanistan Time (GMT+4:30)',
    'Pakistan Lahore Time (GMT+5:00)',
    'India Standard Time (GMT+5:30)',
    'Nepal Standard Time (GMT+5:45)',
    'Bangladesh Standard Time (GMT+6:00)',
    'Myanmar Standard Time (GMT+6:30)',
    'Vietnam Standard Time (GMT+7:00)',
    'China Taiwan Time (GMT+8:00)',
    'Japan Standard Time (GMT+9:00)',
    'Australia Central Time (GMT+9:30)',
    'Australia Eastern Time (GMT+10:00)',
    'Solomon Standard Time (GMT+11:00)',
    'New Zealand Standard Time (GMT+12:00)',
    'Midway Islands Time (GMT-11:00)',
    'Hawaii Standard Time (GMT-10:00)',
    'Alaska Standard Time (GMT-9:00)',
    'Pacific Standard Time (GMT-8:00)',
    'Phoenix Standard Time (GMT-7:00)',
    'Mountain Standard Time (GMT-7:00)',
    'Central Standard Time (GMT-6:00)',
    'Eastern Standard Time (GMT-5:00)',
    'Indiana Eastern Standard Time (GMT-5:00)',
    'Puerto Rico Time (GMT-4:00)',
    'Argentina Standard Time (GMT-3:00)',
    'Brazil Eastern Time (GMT-3:00)',
    'Central African Time (GMT-1:00)'
]

export const countriesDefaultTimezones = {
    'United States': 'Pacific Standard Time (GMT-8:00)',
    'Canada': 'Pacific Standard Time (GMT-8:00)',
    'United Kingdom': 'Greenwich Mean Time (GMT)',
    'Afghanistan': 'Afghanistan Time (GMT+4:30)',
    'Albania': 'Central European Time (GMT+1:00)',
    'Algeria': 'Central European Time (GMT+1:00)',
    'Andorra': 'Central European Time (GMT+1:00)',
    'Angola': 'Central European Time (GMT+1:00)',
    'Antigua and Barbuda': 'Puerto Rico Time (GMT-4:00)',
    'Argentina': 'Argentina Standard Time (GMT-3:00)',
    'Armenia': 'Near East Time (GMT+4:00)',
    'Australia': 'Australia Central Time (GMT+9:30)',
    'Austria': 'Central European Time (GMT+1:00)',
    'Azerbaijan': 'Near East Time (GMT+4:00)',
    'The Bahamas': 'Eastern Standard Time (GMT-5:00)',
    'Bahrain': 'Eastern African Time (GMT+3:00)',
    'Bangladesh': 'Bangladesh Standard Time (GMT+6:00)',
    'Barbados': 'Puerto Rico Time (GMT-4:00)',
    'Belarus': 'Eastern African Time (GMT+3:00)',
    'Belgium': 'Central European Time (GMT+1:00)',
    'Belize': 'Central Standard Time (GMT-6:00)',
    'Benin': 'Central European Time (GMT+1:00)',
    'Bhutan': 'Bangladesh Standard Time (GMT+6:00)',
    'Bolivia': 'Puerto Rico Time (GMT-4:00)',
    'Bosnia and Herzegovina': 'Central European Time (GMT+1:00)',
    'Botswana': 'Eastern European Time (GMT+2:00)',
    'Brazil': 'Argentina Standard Time (GMT-3:00)',
    'Brunei': 'China Taiwan Time (GMT+8:00)',
    'Bulgaria': 'Eastern European Time (GMT+2:00)',
    'Burkina Faso': 'Greenwich Mean Time (GMT)',
    'Burundi': 'Eastern European Time (GMT+2:00)',
    'Cabo Verde': 'Central African Time (GMT-1:00)',
    'Cambodia': 'Vietnam Standard Time (GMT+7:00)',
    'Cameroon': 'Central European Time (GMT+1:00)',
    'Central African Republic': 'Central European Time (GMT+1:00)',
    'Chad': 'Central European Time (GMT+1:00)',
    'Chile': 'Puerto Rico Time (GMT-4:00)',
    'China': 'China Taiwan Time (GMT+8:00)',
    'Colombia': 'Eastern Standard Time (GMT-5:00)',
    'Comoros': 'Eastern African Time (GMT+3:00)',
    'Democratic Republic of the Congo': 'Central European Time (GMT+1:00)',
    'Republic of the Congo': 'Central European Time (GMT+1:00)',
    'Costa Rica': 'Central Standard Time (GMT-6:00)',
    'Côte d\'Ivoire': 'Greenwich Mean Time (GMT)',
    'Croatia': 'Central European Time (GMT+1:00)',
    'Cuba': 'Eastern Standard Time (GMT-5:00)',
    'Cyprus': 'Eastern European Time (GMT+2:00)',
    'Czech Republic': 'Central European Time (GMT+1:00)',
    'Denmark': 'Central European Time (GMT+1:00)',
    'Djibouti': 'Eastern African Time (GMT+3:00)',
    'Dominica': 'Puerto Rico Time (GMT-4:00)',
    'Dominican Republic': 'Puerto Rico Time (GMT-4:00)',
    'East Timor': 'Japan Standard Time (GMT+9:00)',
    'Ecuador': 'Eastern Standard Time (GMT-5:00)',
    'Egypt': 'Eastern European Time (GMT+2:00)',
    'El Salvador': 'Central Standard Time (GMT-6:00)',
    'Equatorial Guinea': 'Central European Time (GMT+1:00)',
    'Eritrea': 'Eastern African Time (GMT+3:00)',
    'Estonia': 'Eastern European Time (GMT+2:00)',
    'Eswatini': 'Eastern European Time (GMT+2:00)',
    'Ethiopia': 'Eastern African Time (GMT+3:00)',
    'Fiji': 'New Zealand Standard Time (GMT+12:00)',
    'Finland': 'Eastern European Time (GMT+2:00)',
    'France': 'Central European Time (GMT+1:00)',
    'Gabon': 'Central European Time (GMT+1:00)',
    'Gambia': 'Greenwich Mean Time (GMT)',
    'Georgia': 'Near East Time (GMT+4:00)',
    'Germany': 'Central European Time (GMT+1:00)',
    'Ghana': 'Greenwich Mean Time (GMT)',
    'Greece': 'Eastern European Time (GMT+2:00)',
    'Grenada': 'Puerto Rico Time (GMT-4:00)',
    'Guatemala': 'Central Standard Time (GMT-6:00)',
    'Guinea': 'Greenwich Mean Time (GMT)',
    'Guinea-Bissau': 'Greenwich Mean Time (GMT)',
    'Guyana': 'Puerto Rico Time (GMT-4:00)',
    'Haiti': 'Eastern Standard Time (GMT-5:00)',
    'Honduras': 'Central Standard Time (GMT-6:00)',
    'Hungary': 'Central European Time (GMT+1:00)',
    'Iceland': 'Greenwich Mean Time (GMT)',
    'India': 'India Standard Time (GMT+5:30)',
    'Indonesia': 'Vietnam Standard Time (GMT+7:00)',
    'Iran': 'Middle East Time (GMT+3:30)',
    'Iraq': 'Eastern African Time (GMT+3:00)',
    'Ireland': 'Greenwich Mean Time (GMT)',
    'Israel': 'Eastern European Time (GMT+2:00)',
    'Italy': 'Central European Time (GMT+1:00)',
    'Jamaica': 'Eastern Standard Time (GMT-5:00)',
    'Japan': 'Japan Standard Time (GMT+9:00)',
    'Jordan': 'Eastern European Time (GMT+2:00)',
    'Kazakhstan': 'Bangladesh Standard Time (GMT+6:00)',
    'Kenya': 'Eastern African Time (GMT+3:00)',
    'Kiribati': 'Midway Islands Time (GMT-11:00)',
    'North Korea': 'Japan Standard Time (GMT+9:00)',
    'South Korea': 'Japan Standard Time (GMT+9:00)',
    'Kosovo': 'Central European Time (GMT+1:00)',
    'Kuwait': 'Eastern African Time (GMT+3:00)',
    'Kyrgyzstan': 'Bangladesh Standard Time (GMT+6:00)',
    'Laos': 'Vietnam Standard Time (GMT+7:00)',
    'Latvia': 'Eastern European Time (GMT+2:00)',
    'Lebanon': 'Eastern European Time (GMT+2:00)',
    'Lesotho': 'Eastern European Time (GMT+2:00)',
    'Liberia': 'Greenwich Mean Time (GMT)',
    'Libya': 'Eastern European Time (GMT+2:00)',
    'Liechtenstein': 'Central European Time (GMT+1:00)',
    'Lithuania': 'Eastern European Time (GMT+2:00)',
    'Luxembourg': 'Central European Time (GMT+1:00)',
    'Madagascar': 'Eastern African Time (GMT+3:00)',
    'Malawi': 'Eastern European Time (GMT+2:00)',
    'Malaysia': 'China Taiwan Time (GMT+8:00)',
    'Maldives': 'Pakistan Lahore Time (GMT+5:00)',
    'Mali': 'Greenwich Mean Time (GMT)',
    'Malta': 'Central European Time (GMT+1:00)',
    'Marshall Islands': 'New Zealand Standard Time (GMT+12:00)',
    'Mauritania': 'Greenwich Mean Time (GMT)',
    'Mauritius': 'Near East Time (GMT+4:00)',
    'Mexico': 'Pacific Standard Time (GMT-8:00)',
    'Federated States of Micronesia': 'Solomon Standard Time (GMT+11:00)',
    'Moldova': 'Eastern European Time (GMT+2:00)',
    'Monaco': 'Central European Time (GMT+1:00)',
    'Mongolia': 'China Taiwan Time (GMT+8:00)',
    'Montenegro': 'Central European Time (GMT+1:00)',
    'Morocco': 'China Taiwan Time (GMT+8:00)',
    'Mozambique': 'Eastern European Time (GMT+2:00)',
    'Myanmar': 'Myanmar Standard Time (GMT+6:30)',
    'Namibia': 'Eastern European Time (GMT+2:00)',
    'Nauru': 'New Zealand Standard Time (GMT+12:00)',
    'Nepal': 'Nepal Standard Time (GMT+5:45)',
    'Netherlands': 'Central European Time (GMT+1:00)',
    'New Zealand': 'New Zealand Standard Time (GMT+12:00)',
    'Nicaragua': 'Central Standard Time (GMT-6:00)',
    'Niger': 'Central European Time (GMT+1:00)',
    'Nigeria': 'Central European Time (GMT+1:00)',
    'North Macedonia': 'Central European Time (GMT+1:00)',
    'Norway': 'Central European Time (GMT+1:00)',
    'Oman': 'Near East Time (GMT+4:00)',
    'Pakistan': 'Pakistan Lahore Time (GMT+5:00)',
    'Palau': 'Japan Standard Time (GMT+9:00)',
    'Panama': 'Eastern Standard Time (GMT-5:00)',
    'Papua New Guinea': 'Australia Eastern Time (GMT+10:00)',
    'Paraguay': 'Puerto Rico Time (GMT-4:00)',
    'Peru': 'Eastern Standard Time (GMT-5:00)',
    'Philippines': 'China Taiwan Time (GMT+8:00)',
    'Poland': 'Central European Time (GMT+1:00)',
    'Portugal': 'Universal Coordinated Time (GMT)',
    'Qatar': 'Eastern African Time (GMT+3:00)',
    'Romania': 'Eastern European Time (GMT+2:00)',
    'Russia': 'Eastern African Time (GMT+3:00)',
    'Rwanda': 'Eastern European Time (GMT+2:00)',
    'Saint Kitts and Nevis': 'Puerto Rico Time (GMT-4:00)',
    'Saint Lucia': 'Puerto Rico Time (GMT-4:00)',
    'Saint Vincent and the Grenadines': 'Puerto Rico Time (GMT-4:00)',
    'Samoa': 'Midway Islands Time (GMT-11:00)',
    'San Marino': 'Central European Time (GMT+1:00)',
    'Sao Tome and Principe': 'Universal Coordinated Time (GMT)',
    'Saudi Arabia': 'Eastern African Time (GMT+3:00)',
    'Senegal': 'Greenwich Mean Time (GMT)',
    'Serbia': 'Central European Time (GMT+1:00)',
    'Seychelles': 'Near East Time (GMT+4:00)',
    'Sierra Leone': 'Greenwich Mean Time (GMT)',
    'Singapore': 'China Taiwan Time (GMT+8:00)',
    'Slovakia': 'Central European Time (GMT+1:00)',
    'Slovenia': 'Central European Time (GMT+1:00)',
    'Solomon Islands': 'Solomon Standard Time (GMT+11:00)',
    'Somalia': 'Eastern African Time (GMT+3:00)',
    'South Africa': 'Eastern European Time (GMT+2:00)',
    'Spain': 'Central European Time (GMT+1:00)',
    'Sri Lanka': 'India Standard Time (GMT+5:30)',
    'Sudan': 'Eastern European Time (GMT+2:00)',
    'South Sudan': 'Eastern European Time (GMT+2:00)',
    'Suriname': 'Argentina Standard Time (GMT-3:00)',
    'Sweden': 'Central European Time (GMT+1:00)',
    'Switzerland': 'Central European Time (GMT+1:00)',
    'Syria': 'Eastern European Time (GMT+2:00)',
    'Taiwan': 'China Taiwan Time (GMT+8:00)',
    'Tajikistan': 'Pakistan Lahore Time (GMT+5:00)',
    'Tanzania': 'Eastern African Time (GMT+3:00)',
    'Thailand': 'Vietnam Standard Time (GMT+7:00)',
    'Togo': 'Greenwich Mean Time (GMT)',
    'Tonga': 'Midway Islands Time (GMT-11:00)',
    'Trinidad and Tobago': 'Puerto Rico Time (GMT-4:00)',
    'Tunisia': 'Central European Time (GMT+1:00)',
    'Turkey': 'Eastern African Time (GMT+3:00)',
    'Turkmenistan': 'Pakistan Lahore Time (GMT+5:00)',
    'Tuvalu': 'New Zealand Standard Time (GMT+12:00)',
    'Uganda': 'Eastern African Time (GMT+3:00)',
    'Ukraine': 'Eastern European Time (GMT+2:00)',
    'United Arab Emirates': 'Near East Time (GMT+4:00)',
    'Uruguay': 'Argentina Standard Time (GMT-3:00)',
    'Uzbekistan': 'Pakistan Lahore Time (GMT+5:00)',
    'Vanuatu': 'Solomon Standard Time (GMT+11:00)',
    'Vatican City': 'Central European Time (GMT+1:00)',
    'Venezuela': 'Puerto Rico Time (GMT-4:00)',
    'Vietnam': 'Vietnam Standard Time (GMT+7:00)',
    'Yemen': 'Eastern African Time (GMT+3:00)',
    'Zambia': 'Eastern European Time (GMT+2:00)',
    'Zimbabwe': 'Eastern European Time (GMT+2:00)'
}

export const statesDefaultTimezones = {
    'Alabama':'Central Standard Time (GMT-6:00)',
    'Alaska': 'Alaska Standard Time (GMT-9:00)',
    'Arizona': 'Mountain Standard Time (GMT-7:00)',
    'Arkansas': 'Central Standard Time (GMT-6:00)',
    'California': 'Pacific Standard Time (GMT-8:00)',
    'Colorado': 'Mountain Standard Time (GMT-7:00)',
    'Connecticut': 'Eastern Standard Time (GMT-5:00)',
    'Delaware': 'Eastern Standard Time (GMT-5:00)',
    'Florida': 'Eastern Standard Time (GMT-5:00)',
    'Georgia': 'Eastern Standard Time (GMT-5:00)',
    'Hawaii': 'Hawaii Standard Time (GMT-10:00)',
    'Idaho': 'Mountain Standard Time (GMT-7:00)',
    'Illinois': 'Central Standard Time (GMT-6:00)',
    'Indiana': 'Eastern Standard Time (GMT-5:00)',
    'Iowa': 'Central Standard Time (GMT-6:00)',
    'Kansas': 'Central Standard Time (GMT-6:00)',
    'Kentucky': 'Central Standard Time (GMT-6:00)',
    'Louisiana': 'Central Standard Time (GMT-6:00)',
    'Maine': 'Eastern Standard Time (GMT-5:00)',
    'Maryland': 'Eastern Standard Time (GMT-5:00)',
    'Massachusetts': 'Eastern Standard Time (GMT-5:00)',
    'Michigan': 'Eastern Standard Time (GMT-5:00)',
    'Minnesota': 'Central Standard Time (GMT-6:00)',
    'Mississippi': 'Central Standard Time (GMT-6:00)',
    'Missouri': 'Central Standard Time (GMT-6:00)',
    'Montana': 'Mountain Standard Time (GMT-7:00)',
    'Nebraska': 'Central Standard Time (GMT-6:00)',
    'Nevada': 'Pacific Standard Time (GMT-8:00)',
    'New Hampshire': 'Eastern Standard Time (GMT-5:00)',
    'New Jersey': 'Eastern Standard Time (GMT-5:00)',
    'New Mexico': 'Mountain Standard Time (GMT-7:00)',
    'New York': 'Eastern Standard Time (GMT-5:00)',
    'North Carolina': 'Eastern Standard Time (GMT-5:00)',
    'North Dakota': 'Central Standard Time (GMT-6:00)',
    'Ohio': 'Eastern Standard Time (GMT-5:00)',
    'Oklahoma': 'Central Standard Time (GMT-6:00)',
    'Oregon': 'Pacific Standard Time (GMT-8:00)',
    'Pennsylvania': 'Eastern Standard Time (GMT-5:00)',
    'Rhode Island': 'Eastern Standard Time (GMT-5:00)',
    'South Carolina': 'Eastern Standard Time (GMT-5:00)',
    'South Dakota': 'Central Standard Time (GMT-6:00)',
    'Tennessee': 'Central Standard Time (GMT-6:00)',
    'Texas': 'Central Standard Time (GMT-6:00)',
    'Utah': 'Mountain Standard Time (GMT-7:00)',
    'Vermont': 'Eastern Standard Time (GMT-5:00)',
    'Virginia': 'Eastern Standard Time (GMT-5:00)',
    'Washington': 'Pacific Standard Time (GMT-8:00)',
    'West Virginia': 'Eastern Standard Time (GMT-5:00)',
    'Wisconsin': 'Central Standard Time (GMT-6:00)',
    'Wyoming': 'Mountain Standard Time (GMT-7:00)'
}

export const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Russian',
    'Mandarin',
    'Japanese',
    'Arabic',
    'Korean',
    'Vietnamese',
    'Armenian',
    'Azerbaijani',
    'Bengali',
    'Bulgarian',
    'Cantonese',
    'Croatian',
    'Czech',
    'Danish',
    'Dutch',
    'Finnish',
    'Farsi',
    'Gujarati',
    'Greek',
    'Ganda',
    'Hindi',
    'Hebrew',
    'Hungarian',
    'Hawaiian',
    'Indonesian',
    'Irish',
    'Kashmiri',
    'Latin',
    'Lakota',
    'Malayalam',
    'Maya',
    'Navajo',
    'Norwegian',
    'Pashto',
    'Punjabi',
    'Portuguese',
    'Polish',
    'Romanian',
    'Serbian',
    'Swahili',
    'Swedish',
    'Samoan',
    'Tamil',
    'Telugu',
    'Tagalog',
    'Turkish',
    'Ukrainian',
    'Urdu',
    'Uzbek',
    'Welsh',
    'Esperanto',
    'Elvish',
    'Klingon'
]

export const levels = [
    'A1: Beginner',
    'A2: Elementary',
    'B1: Intermediate',
    'B2: Upper Intermediate',
    'C1: Advanced',
    'C2: Proficient'
]

export const levelsWithDescriptions = {
    'A1: Beginner': 'I can introduce myself and ask and answer simple questions about personal details.',
    'A2: Elementary': 'I can understand and use common expressions related to areas like family, routines, and employment.',
    'B1: Intermediate': 'I can describe experiences, express ambitions, and briefly give reasons for opinions and plans.',
    'B2: Upper Intermediate': 'I can speak with a degree of fluency and spontaneity that makes it fairly easy to communicate with native speakers.',
    'C1: Advanced': 'I can use language effectively for social, academic, and professional purposes, without much obvious searching for expressions.',
    'C2: Proficient': 'I can express myself spontaneously and precisely and can understand virtually everything I hear. '
}

export const levelsWithValues = {
    'A1: Beginner': 1,
    'A2: Elementary': 2,
    'B1: Intermediate': 3,
    'B2: Upper Intermediate': 4,
    'C1: Advanced': 5,
    'C2: Proficient': 6
}
