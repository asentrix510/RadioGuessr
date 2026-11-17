export interface Coordinates {
  lat: number
  lng: number
}

export type Continent =
  | 'North America'
  | 'South America'
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'Oceania'

export interface Station {
  id?: string
  name: string
  city: string
  country: string
  countryCode: string
  continent: Continent
  streamUrl: string
  coordinates: Coordinates
}

export const VERIFIED_STATIONS: Station[] = [
  {
    "name": "Radio Mirchi Top Hits",
    "city": "Mumbai",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://stream-161.zeno.fm/f3wvbbqmdg8uv",
    "coordinates": {
      "lat": 19.076,
      "lng": 72.8777
    }
  },
  {
    "name": "Asia DREAM Radio Japan",
    "city": "Tokyo",
    "country": "Japan",
    "countryCode": "JP",
    "continent": "Asia",
    "streamUrl": "https://kathy.torontocast.com:3340/stream",
    "coordinates": {
      "lat": 35.6762,
      "lng": 139.6503
    }
  },
  {
    "name": "FIP Radio Paris",
    "city": "Paris",
    "country": "France",
    "countryCode": "FR",
    "continent": "Europe",
    "streamUrl": "https://icecast.radiofrance.fr/fip-midfi.mp3",
    "coordinates": {
      "lat": 48.8566,
      "lng": 2.3522
    }
  },
  {
    "name": "Classic FM London",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://media-ice.musicradio.com/ClassicFMMP3",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "Antenne Bayern",
    "city": "Munich",
    "country": "Germany",
    "countryCode": "DE",
    "continent": "Europe",
    "streamUrl": "https://s6-webradio.antenne.de/antenne/stream/mp3",
    "coordinates": {
      "lat": 48.1351,
      "lng": 11.582
    }
  },
  {
    "name": "Radio Swiss Jazz",
    "city": "Basel",
    "country": "Switzerland",
    "countryCode": "CH",
    "continent": "Europe",
    "streamUrl": "https://stream.srg-ssr.ch/m/rsj/mp3_128",
    "coordinates": {
      "lat": 47.5596,
      "lng": 7.5886
    }
  },
  {
    "name": "Athina 98.4 FM",
    "city": "Athens",
    "country": "Greece",
    "countryCode": "GR",
    "continent": "Europe",
    "streamUrl": "https://netradio.live24.gr/athina984",
    "coordinates": {
      "lat": 37.9838,
      "lng": 23.7275
    }
  },
  {
    "name": "Antena 1 São Paulo",
    "city": "São Paulo",
    "country": "Brazil",
    "countryCode": "BR",
    "continent": "South America",
    "streamUrl": "https://antenaone.crossradio.com.br/stream/1",
    "coordinates": {
      "lat": -23.5505,
      "lng": -46.6333
    }
  },
  {
    "name": "Los 40 España",
    "city": "Madrid",
    "country": "Spain",
    "countryCode": "ES",
    "continent": "Europe",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40AAC.aac",
    "coordinates": {
      "lat": 40.4168,
      "lng": -3.7038
    }
  },
  {
    "name": "Radio Paradise",
    "city": "Paradise, California",
    "country": "United States",
    "countryCode": "US",
    "continent": "North America",
    "streamUrl": "https://stream.radioparadise.com/mp3-192",
    "coordinates": {
      "lat": 39.7596,
      "lng": -121.6219
    }
  },
  {
    "name": "WALM 2 HD",
    "city": "New York",
    "country": "United States",
    "countryCode": "US",
    "continent": "North America",
    "streamUrl": "https://icecast.walmradio.com:8443/walm2",
    "coordinates": {
      "lat": 40.7517,
      "lng": -73.9754
    }
  },
  {
    "name": "# RdMix Classic Rock 70s 80s 90s",
    "city": "Ontario",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://cast1.torontocast.com:4610/stream",
    "coordinates": {
      "lat": 43.6379,
      "lng": -79.3876
    }
  },
  {
    "name": "70 80 90 Vibrazioni Rock Radio",
    "city": "ontario",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://maggie.torontocast.com:2020/stream/vibrazionirockradio",
    "coordinates": {
      "lat": 45.4215,
      "lng": -75.6972
    }
  },
  {
    "name": "Nature Radio Rain",
    "city": "Toronto",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://maggie.torontocast.com:2020/stream/natureradiorain",
    "coordinates": {
      "lat": 45.4215,
      "lng": -75.6972
    }
  },
  {
    "name": "# 100 GREATEST HEAVY METAL",
    "city": "Ontario",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://cast1.torontocast.com:4660/stream",
    "coordinates": {
      "lat": 43.6327,
      "lng": -79.3814
    }
  },
  {
    "name": "Gritty Rock Radio",
    "city": "Ottawa",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://listen.radioking.com/radio/10713/stream/224413",
    "coordinates": {
      "lat": 45.4215,
      "lng": -75.6972
    }
  },
  {
    "name": "# 70s 80s 90s RdMix Network",
    "city": "Ontario",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://cast1.torontocast.com:1830/stream",
    "coordinates": {
      "lat": 43.6289,
      "lng": -79.4012
    }
  },
  {
    "name": "# RdMix DJSET 70s 80s 90s",
    "city": "Ontario",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://cast1.torontocast.com:4560/stream",
    "coordinates": {
      "lat": 43.6394,
      "lng": -79.3789
    }
  },
  {
    "name": "70 80 90 ITALIA D'AUTORE",
    "city": "Ontario",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://maggie.torontocast.com:2020/stream/708090italiadautore",
    "coordinates": {
      "lat": 45.4215,
      "lng": -75.6972
    }
  },
  {
    "name": "# RdMix Italo Disco 80s",
    "city": "Ontario",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://cast1.torontocast.com:2130/stream",
    "coordinates": {
      "lat": 43.6398,
      "lng": -79.3959
    }
  },
  {
    "name": "DKFM Shoegaze Radio",
    "city": "Ottawa",
    "country": "Canada",
    "countryCode": "CA",
    "continent": "North America",
    "streamUrl": "https://kathy.torontocast.com:2005/stream",
    "coordinates": {
      "lat": 45.4215,
      "lng": -75.6972
    }
  },
  {
    "name": "El Fonógrafo, Música las 24 horas (elfonografo.mx) - Online - Grupo Radio Centro - Ciudad de México",
    "city": "Ciudad de México",
    "country": "Mexico",
    "countryCode": "MX",
    "continent": "North America",
    "streamUrl": "https://27063.live.streamtheworld.com:443/XEJP_AM_SC",
    "coordinates": {
      "lat": 19.4349,
      "lng": -99.1319
    }
  },
  {
    "name": "Llegó El Mariachi (iHeart Radio) - Online - ACIR Online / iHeart Radio - Ciudad de México",
    "city": "Ciudad de México",
    "country": "Mexico",
    "countryCode": "MX",
    "continent": "North America",
    "streamUrl": "https://13743.live.streamtheworld.com:443/ACIR34_S01AAC.aac",
    "coordinates": {
      "lat": 19.4332,
      "lng": -99.1326
    }
  },
  {
    "name": "EL FONÓGRAFO - 690 AM - XEN-AM - Grupo Radio Centro - Ciudad de México",
    "city": "Ciudad de México",
    "country": "Mexico",
    "countryCode": "MX",
    "continent": "North America",
    "streamUrl": "https://29309.live.streamtheworld.com:443/XEN_AMAAC.aac",
    "coordinates": {
      "lat": 19.4373,
      "lng": -99.1362
    }
  },
  {
    "name": "Teletica Radio",
    "city": "San José",
    "country": "Costa Rica",
    "countryCode": "CR",
    "continent": "North America",
    "streamUrl": "https://g2qd375ol7an-hls-live.5centscdn.com/Radio/eae835e83c0494a376229f254f7d3392.sdp/chunks.m3u8",
    "coordinates": {
      "lat": 9.9388,
      "lng": -84.1076
    }
  },
  {
    "name": "Radio Mil Recuerdos Stereo",
    "city": "San José",
    "country": "Costa Rica",
    "countryCode": "CR",
    "continent": "North America",
    "streamUrl": "https://sechin.grupocentroserver.com/radio/8060/radio.mp3",
    "coordinates": {
      "lat": 9.9462,
      "lng": -84.0529
    }
  },
  {
    "name": "Faro del Caribe 97.1 FM y 1080 AM",
    "city": "San Jose",
    "country": "Costa Rica",
    "countryCode": "CR",
    "continent": "North America",
    "streamUrl": "https://sp.unoredcdn.net/8032/stream",
    "coordinates": {
      "lat": 9.9281,
      "lng": -84.0907
    }
  },
  {
    "name": "Colosal FM 88.3",
    "city": "San Jose",
    "country": "Costa Rica",
    "countryCode": "CR",
    "continent": "North America",
    "streamUrl": "https://5eac7b031d945.streamlock.net/canal3/canal3/playlist.m3u8",
    "coordinates": {
      "lat": 9.9281,
      "lng": -84.0907
    }
  },
  {
    "name": "Tiquicia Rock",
    "city": "Alajuela",
    "country": "Costa Rica",
    "countryCode": "CR",
    "continent": "North America",
    "streamUrl": "https://usa19.fastcast4u.com:5860/;?type=http&nocache=1690470873",
    "coordinates": {
      "lat": 10.0629,
      "lng": -84.0756
    }
  },
  {
    "name": "JAZZ 95.5 FM",
    "city": "San Jose",
    "country": "Costa Rica",
    "countryCode": "CR",
    "continent": "North America",
    "streamUrl": "https://streaming.radio.co/s36bd2a451/listen",
    "coordinates": {
      "lat": 9.9281,
      "lng": -84.0907
    }
  },
  {
    "name": "Dabar",
    "city": "San Jose",
    "country": "Costa Rica",
    "countryCode": "CR",
    "continent": "North America",
    "streamUrl": "https://a1.asurahosting.com:8720/radio.mp3",
    "coordinates": {
      "lat": 9.429,
      "lng": -83.6433
    }
  },
  {
    "name": "Mundo Rock Radio",
    "city": "San Jose",
    "country": "Costa Rica",
    "countryCode": "CR",
    "continent": "North America",
    "streamUrl": "https://as100.globalhost1.com/8046/stream",
    "coordinates": {
      "lat": 9.9281,
      "lng": -84.0907
    }
  },
  {
    "name": "Stereo Vida Panama",
    "city": "Panama City",
    "country": "Panama",
    "countryCode": "PA",
    "continent": "North America",
    "streamUrl": "https://stream.zeno.fm/fz1rcfd1x1zuv",
    "coordinates": {
      "lat": 8.9824,
      "lng": -79.5199
    }
  },
  {
    "name": "RADIO MARIA PANAMA",
    "city": "Panama City",
    "country": "Panama",
    "countryCode": "PA",
    "continent": "North America",
    "streamUrl": "https://dreamsiteradiocp2.com/proxy/rmpanama2?mp=/stream",
    "coordinates": {
      "lat": 8.9824,
      "lng": -79.5199
    }
  },
  {
    "name": "Gospel FM Jamaica",
    "city": "Kingston",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://stream-37.zeno.fm/zpksre88rm0uv",
    "coordinates": {
      "lat": 18.0179,
      "lng": -76.8099
    }
  },
  {
    "name": "SunCity 104.9 FM",
    "city": "Kingston",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://edge.mixlr.com/channel/ibrdq",
    "coordinates": {
      "lat": 18.0179,
      "lng": -76.8099
    }
  },
  {
    "name": "Fyah 105",
    "city": "No States Listed",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://listen.radioking.com/radio/459389/stream/514595",
    "coordinates": {
      "lat": 18.0179,
      "lng": -76.8099
    }
  },
  {
    "name": "Irie FM",
    "city": "Kingston",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://usa19.fastcast4u.com:7430/;",
    "coordinates": {
      "lat": 18.0179,
      "lng": -76.8099
    }
  },
  {
    "name": "The Edge 105 FM",
    "city": "Kingston",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://listen.radioking.com/radio/331171/stream/387835",
    "coordinates": {
      "lat": 18.0179,
      "lng": -76.8099
    }
  },
  {
    "name": "Radio Jamaica 94 FM",
    "city": "Surrey county, Kingston, Lyndhurst drive",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://stream.zeno.fm/ebqnzkvyv9duv",
    "coordinates": {
      "lat": 18.002,
      "lng": -76.8008
    }
  },
  {
    "name": "Love 101 FM",
    "city": "Kingston",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://stream.zeno.fm/webzstrtpy5tv",
    "coordinates": {
      "lat": 18.0179,
      "lng": -76.8099
    }
  },
  {
    "name": "Zip FM 103 FM",
    "city": "Surrey county, Kingston, 1B Courtney Walsh Drive",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://stream.zeno.fm/c0ytcn43vxquv",
    "coordinates": {
      "lat": 18.0139,
      "lng": -76.7994
    }
  },
  {
    "name": "Fame 95 FM Jamaica",
    "city": "Kingston",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://stream.zeno.fm/d5mn12bchkeuv",
    "coordinates": {
      "lat": 18.0179,
      "lng": -76.8099
    }
  },
  {
    "name": "Alpha Boys School Radio",
    "city": "Kingston",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://alphaboys-live.streamguys1.com/alphaboys.aac",
    "coordinates": {
      "lat": 18.0179,
      "lng": -76.8099
    }
  },
  {
    "name": "Stylz FM",
    "city": "Kingston",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://stream.zeno.fm/0d1hpcmqqy5tv",
    "coordinates": {
      "lat": 18.1625,
      "lng": -76.4566
    }
  },
  {
    "name": "Omega KLAS Radio - God and Sports",
    "city": "Cooper’s Hill",
    "country": "Jamaica",
    "countryCode": "JM",
    "continent": "North America",
    "streamUrl": "https://stream.zeno.fm/4uw093pbyvduv",
    "coordinates": {
      "lat": 18.0729,
      "lng": -76.8521
    }
  },
  {
    "name": "Super Radio Tupi 96.5",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "countryCode": "BR",
    "continent": "South America",
    "streamUrl": "https://8923.brasilstream.com.br/stream",
    "coordinates": {
      "lat": -15.8267,
      "lng": -47.9218
    }
  },
  {
    "name": "Smooth Jazz Lounge",
    "city": "Sao Paulo (Brazil)",
    "country": "Brazil",
    "countryCode": "BR",
    "continent": "South America",
    "streamUrl": "https://radio4.vip-radios.fm:18060/stream-128kmp3-SmoothJazzLounge",
    "coordinates": {
      "lat": -15.8267,
      "lng": -47.9218
    }
  },
  {
    "name": "Clube FM 99.1",
    "city": "Brasília",
    "country": "Brazil",
    "countryCode": "BR",
    "continent": "South America",
    "streamUrl": "https://radio.saopaulo01.com.br:10913/stream",
    "coordinates": {
      "lat": -15.8267,
      "lng": -47.9218
    }
  },
  {
    "name": "Rádio MGT Sertanejo",
    "city": "Brasília",
    "country": "Brazil",
    "countryCode": "BR",
    "continent": "South America",
    "streamUrl": "https://cast.mgtradio.net/radio/8000/aac",
    "coordinates": {
      "lat": -15.8267,
      "lng": -47.9218
    }
  },
  {
    "name": "Fm Cumbiambera",
    "city": "Salta",
    "country": "Argentina",
    "countryCode": "AR",
    "continent": "South America",
    "streamUrl": "https://streaming1.locucionar.com/proxy/fmcumbiambera?mp=/stream",
    "coordinates": {
      "lat": -34.6037,
      "lng": -58.3816
    }
  },
  {
    "name": "La Retro 80s Chile",
    "city": "Santiago",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://s2.radio.co:80/s9ecef4f68/listen",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "BioBio Chile",
    "city": "Santiago",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://unlimited3-cl.dps.live/biobiosantiago/aac/icecast.audio",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "Radio Bio Bio",
    "city": "Santiago",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://unlimited3-cl.dps.live/biobiosantiago/mp3/icecast.audio",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "RADIO COOPERATIVA",
    "city": "Santiago",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://unlimited3-cl.dps.live/cooperativafm/mp3/icecast.audio",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "Digital FM",
    "city": "Concepción",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://unlimited11-cl.dps.live/digitalfm/aac/icecast.audio",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "ADN",
    "city": "Santiago",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://27413.live.streamtheworld.com/ADNAAC.aac",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "Duna",
    "city": "Santiago",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://hls-audio-cl-1-isp.dps.live/duna/gotardis/audio/now/livestream1.m3u8",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "Distorsión FM",
    "city": "Santiago",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://tunein.radiomaniacos.cl/distorsion.mp3",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "Radio Contexto Ñuble",
    "city": "Chillán",
    "country": "Chile",
    "countryCode": "CL",
    "continent": "South America",
    "streamUrl": "https://streaming.viphosting.cl/8028/stream",
    "coordinates": {
      "lat": -33.4489,
      "lng": -70.6693
    }
  },
  {
    "name": "Radio Chocolate Rock & Pop",
    "city": "Lima",
    "country": "Peru",
    "countryCode": "PE",
    "continent": "South America",
    "streamUrl": "https://stream.zeno.fm/g2w7ukzh64zuv",
    "coordinates": {
      "lat": -12.0464,
      "lng": -77.0428
    }
  },
  {
    "name": "Radio del Amor",
    "city": "Lima",
    "country": "Peru",
    "countryCode": "PE",
    "continent": "South America",
    "streamUrl": "https://stream.zeno.fm/z7re4u64gd0uv",
    "coordinates": {
      "lat": -12.0464,
      "lng": -77.0428
    }
  },
  {
    "name": "Radio Salsa Peru",
    "city": "Lima",
    "country": "Peru",
    "countryCode": "PE",
    "continent": "South America",
    "streamUrl": "https://stream.zeno.fm/f19941g3teruv",
    "coordinates": {
      "lat": -12.0464,
      "lng": -77.0428
    }
  },
  {
    "name": "StereoLima",
    "city": "Lima",
    "country": "Peru",
    "countryCode": "PE",
    "continent": "South America",
    "streamUrl": "https://panel.innovatestream.pe/8042/stream",
    "coordinates": {
      "lat": -12.0464,
      "lng": -77.0428
    }
  },
  {
    "name": "Sarandi 690",
    "city": "Montevideo",
    "country": "Uruguay",
    "countryCode": "UY",
    "continent": "South America",
    "streamUrl": "https://radiolatina.live:10977/sarandi",
    "coordinates": {
      "lat": -34.9011,
      "lng": -56.1645
    }
  },
  {
    "name": "Zorrilla de San Martin",
    "city": "Montevideo",
    "country": "Uruguay",
    "countryCode": "UY",
    "continent": "South America",
    "streamUrl": "https://server-usa2.radioseninternet.net/9312/stream",
    "coordinates": {
      "lat": -34.9011,
      "lng": -56.1645
    }
  },
  {
    "name": "Fm Inolvidable 93.1",
    "city": "Montevideo",
    "country": "Uruguay",
    "countryCode": "UY",
    "continent": "South America",
    "streamUrl": "https://inolvidable-2.nty.uy/",
    "coordinates": {
      "lat": -34.9011,
      "lng": -56.1645
    }
  },
  {
    "name": "CX 580 Radio Rural",
    "city": "Montevideo",
    "country": "Uruguay",
    "countryCode": "UY",
    "continent": "South America",
    "streamUrl": "https://radiolatina.live/9206/stream",
    "coordinates": {
      "lat": -34.9011,
      "lng": -56.1645
    }
  },
  {
    "name": "24 de Agosto",
    "city": "Montevideo",
    "country": "Uruguay",
    "countryCode": "UY",
    "continent": "South America",
    "streamUrl": "https://24deagosto-zikoxweb.radioca.st/stream",
    "coordinates": {
      "lat": -34.8971,
      "lng": -56.2006
    }
  },
  {
    "name": "Laser FM",
    "city": "Montevideo",
    "country": "Uruguay",
    "countryCode": "UY",
    "continent": "South America",
    "streamUrl": "https://server.laradio.online/proxy/eduardo_correa?mp=/stream",
    "coordinates": {
      "lat": -34.9656,
      "lng": -54.9477
    }
  },
  {
    "name": "Radio Carmelo",
    "city": "Montevideo",
    "country": "Uruguay",
    "countryCode": "UY",
    "continent": "South America",
    "streamUrl": "https://server.laradio.online/proxy/martin_barragan05?mp=/stream",
    "coordinates": {
      "lat": -34.0163,
      "lng": -58.2935
    }
  },
  {
    "name": "Kairos FM Uruguay",
    "city": "Montevideo",
    "country": "Uruguay",
    "countryCode": "UY",
    "continent": "South America",
    "streamUrl": "https://panel.streamenviron.com:8264/radiokairos",
    "coordinates": {
      "lat": -34.9011,
      "lng": -56.1645
    }
  },
  {
    "name": "Radio La Otra - 91.3 FM",
    "city": "Quito",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://laotrafm.makrodigital.com/stream/laotrafmquito",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "Radio Canela Pichincha",
    "city": "Pichincha",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://canelaradio.makrodigital.com:9280/stream",
    "coordinates": {
      "lat": -0.2066,
      "lng": -78.4987
    }
  },
  {
    "name": "Radio Onda Positiva 94.1 FM",
    "city": "Guayas",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://streamingecuador.net:8011/radioondapositiva",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "HCJB La Voz de los Andes 89.3 FM",
    "city": "Pichincha",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://streamingecuador.net:8287/hcjb",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "La Main Street (Radios Ecuador Online)",
    "city": "azuay",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://radiolatina.info/9930/stream",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "Radio Elite 99.7 FM",
    "city": "Guayas",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://streamingecuador.net:8135/radioelite",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "La 961 - Suprema estacion",
    "city": "azuay",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://dattavolt.com/8150/stream",
    "coordinates": {
      "lat": -2.9064,
      "lng": -79.0165
    }
  },
  {
    "name": "Antena Uno 90.5",
    "city": "azuay",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://dattavolt.com/8202/stream",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "Radio Rumba",
    "city": "Quito",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://streamingecuador.net:8078/radiorumbanetwork",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "DIBLU FM 88.9",
    "city": "Quito",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://streamingecuador.net:9002/stream",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "Radio Quito 760 AM",
    "city": "Quito",
    "country": "Ecuador",
    "countryCode": "EC",
    "continent": "South America",
    "streamUrl": "https://streamingecuador.net:8332/radioquito?1679294453918",
    "coordinates": {
      "lat": -0.1807,
      "lng": -78.4678
    }
  },
  {
    "name": "Heart 80s",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://media-ssl.musicradio.com/Heart80sMP3",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "TMM 1",
    "city": "Camden",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://listen-msmn.sharp-stream.com/nme1.mp3",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "Gold",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://media-ssl.musicradio.com/GoldMP3",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "BBC World Service",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "Smooth Chill",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://media-ssl.musicradio.com/ChillMP3",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "Heart Dance",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://media-ssl.musicradio.com/HeartDanceMP3",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "Heart 90s",
    "city": "London",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://media-ssl.musicradio.com/Heart90sMP3",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "TMM 2",
    "city": "Camden",
    "country": "United Kingdom",
    "countryCode": "GB",
    "continent": "Europe",
    "streamUrl": "https://listen-msmn.sharp-stream.com/nme2.mp3",
    "coordinates": {
      "lat": 51.5074,
      "lng": -0.1278
    }
  },
  {
    "name": "EuroDance 90 radio",
    "city": "Paris",
    "country": "France",
    "countryCode": "FR",
    "continent": "Europe",
    "streamUrl": "https://stream-eurodance90.fr/radio/8000/128.mp3?1627933323",
    "coordinates": {
      "lat": 48.8566,
      "lng": 2.3522
    }
  },
  {
    "name": "RMC Info Talk Sport",
    "city": "Paris",
    "country": "France",
    "countryCode": "FR",
    "continent": "Europe",
    "streamUrl": "https://audio.bfmtv.com/rmcradio_128.mp3?aw_0_1st.playerId=RMC_audio_web&aggregator=RMC_audio_web",
    "coordinates": {
      "lat": 47.2792,
      "lng": 3.1641
    }
  },
  {
    "name": "MANGORADIO",
    "city": "Rheinland-Pfalz",
    "country": "Germany",
    "countryCode": "DE",
    "continent": "Europe",
    "streamUrl": "https://mangoradio.stream.laut.fm/mangoradio",
    "coordinates": {
      "lat": 52.52,
      "lng": 13.405
    }
  },
  {
    "name": "- 0 N - 70s on Radio",
    "city": "Bayern",
    "country": "Germany",
    "countryCode": "DE",
    "continent": "Europe",
    "streamUrl": "https://0n-70s.radionetz.de/0n-70s.mp3",
    "coordinates": {
      "lat": 50.3115,
      "lng": 11.923
    }
  },
  {
    "name": "Best Of Rock.FM Alternative Rock",
    "city": "Berlin",
    "country": "Germany",
    "countryCode": "DE",
    "continent": "Europe",
    "streamUrl": "https://bestofrockfm.stream.vip/altrock/mp3-256/bestofrock.fm/",
    "coordinates": {
      "lat": 52.52,
      "lng": 13.405
    }
  },
  {
    "name": "LOS40 Classic",
    "city": "Madrid",
    "country": "Spain",
    "countryCode": "ES",
    "continent": "Europe",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_CLASSIC.mp3",
    "coordinates": {
      "lat": 40.4168,
      "lng": -3.7038
    }
  },
  {
    "name": "Radio Marca Madrid",
    "city": "Madrid",
    "country": "Spain",
    "countryCode": "ES",
    "continent": "Europe",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIOMARCA_NACIONAL_SC",
    "coordinates": {
      "lat": 40.4193,
      "lng": -3.6931
    }
  },
  {
    "name": "Radio Italia Solo Musica Italiana",
    "city": "Lombardia",
    "country": "Italy",
    "countryCode": "IT",
    "continent": "Europe",
    "streamUrl": "https://radioitaliasmi.akamaized.net/hls/live/2093120/RISMI/stream01/streamPlaylist.m3u8",
    "coordinates": {
      "lat": 41.9028,
      "lng": 12.4964
    }
  },
  {
    "name": "ITALIA Italia 70",
    "city": "Lombardia",
    "country": "Italy",
    "countryCode": "IT",
    "continent": "Europe",
    "streamUrl": "https://icy.unitedradio.it/um020.mp3",
    "coordinates": {
      "lat": 41.9028,
      "lng": 12.4964
    }
  },
  {
    "name": "Intense Radio - We love Dance 256K",
    "city": "Burgenland",
    "country": "Netherlands",
    "countryCode": "NL",
    "continent": "Europe",
    "streamUrl": "https://secure.live-streams.nl/main",
    "coordinates": {
      "lat": 52.0035,
      "lng": 4.1607
    }
  },
  {
    "name": "Sky Radio Hits",
    "city": "Amsterdam",
    "country": "Netherlands",
    "countryCode": "NL",
    "continent": "Europe",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR01.mp3?dist=skyradio_web&ttag=talpa_consent:0&gdpr=1&gdpr_consent=BO2svb6O2svb6ADABANLDTAAAAAxKAAA",
    "coordinates": {
      "lat": 52.3676,
      "lng": 4.9041
    }
  },
  {
    "name": "Sjeffm",
    "city": "Weert",
    "country": "Netherlands",
    "countryCode": "NL",
    "continent": "Europe",
    "streamUrl": "https://caster05.streampakket.com/proxy/8112/stream",
    "coordinates": {
      "lat": 52.3676,
      "lng": 4.9041
    }
  },
  {
    "name": "RTBF La Première",
    "city": "Brussels",
    "country": "Belgium",
    "countryCode": "BE",
    "continent": "Europe",
    "streamUrl": "https://radios.rtbf.be/laprem1ere-64.aac",
    "coordinates": {
      "lat": 50.8503,
      "lng": 4.3517
    }
  },
  {
    "name": "Fun Radio",
    "city": "Forest",
    "country": "Belgium",
    "countryCode": "BE",
    "continent": "Europe",
    "streamUrl": "https://funradiobe.ice.infomaniak.ch/funradiobe-high.mp3",
    "coordinates": {
      "lat": 50.8503,
      "lng": 4.3517
    }
  },
  {
    "name": "Nostalgie 80's",
    "city": "Brussels",
    "country": "Belgium",
    "countryCode": "BE",
    "continent": "Europe",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/NOSTALGIEWAF80.mp3",
    "coordinates": {
      "lat": 50.8503,
      "lng": 4.3517
    }
  },
  {
    "name": "RTBF VivaCité Bruxelles",
    "city": "Brussels",
    "country": "Belgium",
    "countryCode": "BE",
    "continent": "Europe",
    "streamUrl": "https://radios.rtbf.be/vivabxl-64.aac",
    "coordinates": {
      "lat": 50.8503,
      "lng": 4.3517
    }
  },
  {
    "name": "RTBF Classic 21",
    "city": "Brussels",
    "country": "Belgium",
    "countryCode": "BE",
    "continent": "Europe",
    "streamUrl": "https://radios.rtbf.be/classic21-64.aac",
    "coordinates": {
      "lat": 50.8503,
      "lng": 4.3517
    }
  },
  {
    "name": "RTBF Classic 21 - 60's",
    "city": "Brussels",
    "country": "Belgium",
    "countryCode": "BE",
    "continent": "Europe",
    "streamUrl": "https://radios.rtbf.be/wr-c21-60-128.mp3",
    "coordinates": {
      "lat": 50.8503,
      "lng": 4.3517
    }
  },
  {
    "name": "RTBF Classic 21 - Route 66",
    "city": "Brussels",
    "country": "Belgium",
    "countryCode": "BE",
    "continent": "Europe",
    "streamUrl": "https://radios.rtbf.be/wr-c21-route66-128.mp3",
    "coordinates": {
      "lat": 50.8503,
      "lng": 4.3517
    }
  },
  {
    "name": "FM4 | ORF",
    "city": "Vienna",
    "country": "Austria",
    "countryCode": "AT",
    "continent": "Europe",
    "streamUrl": "https://orf-live.ors-shoutcast.at/fm4-q1a",
    "coordinates": {
      "lat": 48.1777,
      "lng": 16.2878
    }
  },
  {
    "name": "ORF Hitradio Ö3 | HQ",
    "city": "Vienna",
    "country": "Austria",
    "countryCode": "AT",
    "continent": "Europe",
    "streamUrl": "https://orf-live.ors-shoutcast.at/oe3-q2a",
    "coordinates": {
      "lat": 48.1777,
      "lng": 16.2878
    }
  },
  {
    "name": "Lounge.FM - 100% Austria",
    "city": "Vienna",
    "country": "Austria",
    "countryCode": "AT",
    "continent": "Europe",
    "streamUrl": "https://s35.derstream.net/100austria.mp3",
    "coordinates": {
      "lat": 48.1993,
      "lng": 16.3606
    }
  },
  {
    "name": "FM4 | ORF | HQ",
    "city": "Vienna",
    "country": "Austria",
    "countryCode": "AT",
    "continent": "Europe",
    "streamUrl": "https://orf-live.ors-shoutcast.at/fm4-q2a",
    "coordinates": {
      "lat": 48.1777,
      "lng": 16.2878
    }
  },
  {
    "name": "Arabella Relax",
    "city": "Wien",
    "country": "Austria",
    "countryCode": "AT",
    "continent": "Europe",
    "streamUrl": "https://frontend.streams.arabella.at/arabella-relax?aggregator=arabella-playlistfile",
    "coordinates": {
      "lat": 48.2082,
      "lng": 16.3738
    }
  },
  {
    "name": "Radio Vorarlberg",
    "city": "Vorarlberg",
    "country": "Austria",
    "countryCode": "AT",
    "continent": "Europe",
    "streamUrl": "https://orf-live.ors-shoutcast.at/vbg-q1a",
    "coordinates": {
      "lat": 47.4123,
      "lng": 9.7258
    }
  },
  {
    "name": "Eurodance-X-Press",
    "city": "Vienna",
    "country": "Austria",
    "countryCode": "AT",
    "continent": "Europe",
    "streamUrl": "https://secureonair.krone.at/eurodance.aac",
    "coordinates": {
      "lat": 48.2082,
      "lng": 16.3738
    }
  },
  {
    "name": "Arabella wien",
    "city": "Vienna",
    "country": "Austria",
    "countryCode": "AT",
    "continent": "Europe",
    "streamUrl": "https://frontend.streams.arabella.at/arabella-wien?aggregator=arabella-playlistfile",
    "coordinates": {
      "lat": 48.2082,
      "lng": 16.3738
    }
  },
  {
    "name": "Polushon",
    "city": "Stockholm",
    "country": "Sweden",
    "countryCode": "SE",
    "continent": "Europe",
    "streamUrl": "https://whsh4u-clients.com:18323/proxy/ndhfnbqx?mp=/stream",
    "coordinates": {
      "lat": 59.3293,
      "lng": 18.0686
    }
  },
  {
    "name": "SceneSat Radio (MP3)",
    "city": "Stockholm",
    "country": "Sweden",
    "countryCode": "SE",
    "continent": "Europe",
    "streamUrl": "https://streams.scenesat.com/main/hq.mp3",
    "coordinates": {
      "lat": 59.3293,
      "lng": 18.0686
    }
  },
  {
    "name": "P5 Nonstop Hits (AAC HQ)",
    "city": "Innlandet",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://p5n.p4groupaudio.com/P05AAH",
    "coordinates": {
      "lat": 61.1209,
      "lng": 10.4624
    }
  },
  {
    "name": "P12 Hitmix (MP3 128k)",
    "city": "Innlandet",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://nrj.p4groupaudio.com/NRJ_MM",
    "coordinates": {
      "lat": 61.1209,
      "lng": 10.4624
    }
  },
  {
    "name": "P8 Pop (MP3 128k)",
    "city": "Innlandet",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://p8.p4groupaudio.com/P08_MM",
    "coordinates": {
      "lat": 61.1209,
      "lng": 10.4624
    }
  },
  {
    "name": "P10 Country (AAC HQ)",
    "city": "Innlandet",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://p10.p4groupaudio.com/P10_AH",
    "coordinates": {
      "lat": 61.1209,
      "lng": 10.4624
    }
  },
  {
    "name": "Radio Rock (NO)",
    "city": "Oslo",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://live-bauerno.sharp-stream.com/radiorock_no_mp3",
    "coordinates": {
      "lat": 59.9139,
      "lng": 10.7522
    }
  },
  {
    "name": "P24-7 Mix",
    "city": "Oslo",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://live-bauerno.sharp-stream.com/p247mix_no_mp3",
    "coordinates": {
      "lat": 59.9139,
      "lng": 10.7522
    }
  },
  {
    "name": "P9 Retro (MP3 128k)",
    "city": "Innlandet",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://p9.p4groupaudio.com/P09_MH",
    "coordinates": {
      "lat": 61.1209,
      "lng": 10.4624
    }
  },
  {
    "name": "NRJ Norge",
    "city": "Oslo",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://live-bauerno.sharp-stream.com/kiss_no_mp3",
    "coordinates": {
      "lat": 59.9139,
      "lng": 10.7522
    }
  },
  {
    "name": "P7 Klem (AAC HQ)",
    "city": "Innlandet",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://p7.p4groupaudio.com/P07_AH",
    "coordinates": {
      "lat": 61.1209,
      "lng": 10.4624
    }
  },
  {
    "name": "P12 Hitmix (AAC HQ)",
    "city": "Innlandet",
    "country": "Norway",
    "countryCode": "NO",
    "continent": "Europe",
    "streamUrl": "https://nrj.p4groupaudio.com/NRJ_AH",
    "coordinates": {
      "lat": 61.1209,
      "lng": 10.4624
    }
  },
  {
    "name": "Christmas FM Non-stop!",
    "city": "Helsinki",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://xmas-node1.zip.wf/live.aac",
    "coordinates": {
      "lat": 66.5039,
      "lng": 25.7294
    }
  },
  {
    "name": "YleX",
    "city": "Helsinki",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://icecast.live.yle.fi/radio/YleX/icecast.audio",
    "coordinates": {
      "lat": 59.9549,
      "lng": 24.9087
    }
  },
  {
    "name": "Radio Santa Claus",
    "city": "Uusimaa",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://streaming.radiostreamlive.com/radiosantaclaus_devices",
    "coordinates": {
      "lat": 60.1699,
      "lng": 24.9384
    }
  },
  {
    "name": "NRJ",
    "city": "Uusimaa",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://stream-redirect.bauermedia.fi/nrj/nrj_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein",
    "coordinates": {
      "lat": 60.1712,
      "lng": 24.9417
    }
  },
  {
    "name": "Nostalgia",
    "city": "Uusimaa",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://stream-redirect.bauermedia.fi/nostalgia/nostalgia_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein",
    "coordinates": {
      "lat": 60.1706,
      "lng": 24.9415
    }
  },
  {
    "name": "Yle Vega Österbotten",
    "city": "Helsinki",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://icecast.live.yle.fi/radio/YleVegaOsterbotten/icecast.audio",
    "coordinates": {
      "lat": 60.1699,
      "lng": 24.9384
    }
  },
  {
    "name": "YleRadioSuomiTampere",
    "city": "Pirkanmaa",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://icecast.live.yle.fi/radio/YleTampere/icecast.audio",
    "coordinates": {
      "lat": 61.4899,
      "lng": 23.7704
    }
  },
  {
    "name": "Kasari",
    "city": "Helsinki",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://stream-redirect.bauermedia.fi/kasari/kasari_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein",
    "coordinates": {
      "lat": 60.1699,
      "lng": 24.9384
    }
  },
  {
    "name": "HitMix",
    "city": "Helsinki",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://aud-stream-hitmix.nm-elemental.nelonenmedia.fi/playlist-256000.m3u8",
    "coordinates": {
      "lat": 60.2041,
      "lng": 24.9225
    }
  },
  {
    "name": "YLE radio Suomi, Jyväskylä",
    "city": "Keski-Suomi",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://icecast.live.yle.fi/radio/YleJKL/icecast.audio",
    "coordinates": {
      "lat": 62.2442,
      "lng": 25.7588
    }
  },
  {
    "name": "Yle Klassinen",
    "city": "Helsinki",
    "country": "Finland",
    "countryCode": "FI",
    "continent": "Europe",
    "streamUrl": "https://icecast.live.yle.fi/radio/YleKlassinen/icecast.audio",
    "coordinates": {
      "lat": 60.1699,
      "lng": 24.9384
    }
  },
  {
    "name": "Tango Copenhagen Radio",
    "city": "Copenhagen",
    "country": "Denmark",
    "countryCode": "DK",
    "continent": "Europe",
    "streamUrl": "https://tangocopenhagen.stream.laut.fm/tangocopenhagen?t302=2021-01-15_18-47-40&uuid=64db9a91-4a6e-4bc8-ba24-26a2fa7f24d0",
    "coordinates": {
      "lat": 55.6761,
      "lng": 12.5683
    }
  },
  {
    "name": "DR P8 JAZZ (AAC)",
    "city": "Copenhagen",
    "country": "Denmark",
    "countryCode": "DK",
    "continent": "Europe",
    "streamUrl": "https://drliveradio2.akamaized.net/hls/live/2118698/p8/masterab.m3u8",
    "coordinates": {
      "lat": 55.6761,
      "lng": 12.5683
    }
  },
  {
    "name": "DR P3 (AAC)",
    "city": "Copenhagen",
    "country": "Denmark",
    "countryCode": "DK",
    "continent": "Europe",
    "streamUrl": "https://drliveradio1.akamaized.net/hls/live/2097651/p3/masterab.m3u8",
    "coordinates": {
      "lat": 55.6761,
      "lng": 12.5683
    }
  },
  {
    "name": "RFM",
    "city": "Lisbon",
    "country": "Portugal",
    "countryCode": "PT",
    "continent": "Europe",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/RFMAAC_SC",
    "coordinates": {
      "lat": 38.7223,
      "lng": -9.1393
    }
  },
  {
    "name": "8radio",
    "city": "Dublin",
    "country": "Ireland",
    "countryCode": "IE",
    "continent": "Europe",
    "streamUrl": "https://edge4.audioxi.com/8RADIO",
    "coordinates": {
      "lat": 53.3498,
      "lng": -6.2603
    }
  },
  {
    "name": "Newstalk Ireland",
    "city": "Dublin",
    "country": "Ireland",
    "countryCode": "IE",
    "continent": "Europe",
    "streamUrl": "https://edge.audioxi.com/NT",
    "coordinates": {
      "lat": 52.9821,
      "lng": -7.4927
    }
  },
  {
    "name": "8Radio",
    "city": "Dublin",
    "country": "Ireland",
    "countryCode": "IE",
    "continent": "Europe",
    "streamUrl": "https://stream.rcast.net/66127",
    "coordinates": {
      "lat": 53.3441,
      "lng": -6.267
    }
  },
  {
    "name": "Christmas FM Classical & Carols",
    "city": "Dublin",
    "country": "Ireland",
    "countryCode": "IE",
    "continent": "Europe",
    "streamUrl": "https://christmasfm.cdnstream1.com/2549_64.aac",
    "coordinates": {
      "lat": 53.3498,
      "lng": -6.2603
    }
  },
  {
    "name": "Christmas FM",
    "city": "Dublin",
    "country": "Ireland",
    "countryCode": "IE",
    "continent": "Europe",
    "streamUrl": "https://christmasfm.cdnstream1.com/2547_128.mp3?listenerId=esAdblock0724411&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1671316064&aw_0_req.gdpr=false",
    "coordinates": {
      "lat": 53.3498,
      "lng": -6.2603
    }
  },
  {
    "name": "PHEVER Radio",
    "city": "Dublin",
    "country": "Ireland",
    "countryCode": "IE",
    "continent": "Europe",
    "streamUrl": "https://uk1.internet-radio.com/proxy/phever?mp=/live",
    "coordinates": {
      "lat": 53.3498,
      "lng": -6.2603
    }
  },
  {
    "name": "Christmas FM Ireland",
    "city": "Dublin",
    "country": "Ireland",
    "countryCode": "IE",
    "continent": "Europe",
    "streamUrl": "https://christmasfm.cdnstream1.com/2547_128.mp3?listenerId=esTrackblock097016&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1692448019",
    "coordinates": {
      "lat": 53.3498,
      "lng": -6.2603
    }
  },
  {
    "name": "Limerick's Live 95FM",
    "city": "Limerick",
    "country": "Ireland",
    "countryCode": "IE",
    "continent": "Europe",
    "streamUrl": "https://wg.cdn.tibus.net/Live95fm",
    "coordinates": {
      "lat": 53.3498,
      "lng": -6.2603
    }
  },
  {
    "name": "Kiss Fm Ro",
    "city": "Bucharest",
    "country": "Romania",
    "countryCode": "RO",
    "continent": "Europe",
    "streamUrl": "https://live.kissfm.ro/kissfm.aacp",
    "coordinates": {
      "lat": 44.4268,
      "lng": 26.1025
    }
  },
  {
    "name": "One FM Dance",
    "city": "Bucharest",
    "country": "Romania",
    "countryCode": "RO",
    "continent": "Europe",
    "streamUrl": "https://live.onefm.ro/onefm.aacp",
    "coordinates": {
      "lat": 44.4268,
      "lng": 26.1025
    }
  },
  {
    "name": "Realitatea FM",
    "city": "Bucharest",
    "country": "Romania",
    "countryCode": "RO",
    "continent": "Europe",
    "streamUrl": "https://shout.realitatea.net:8001/rfmweb",
    "coordinates": {
      "lat": 44.4268,
      "lng": 26.1025
    }
  },
  {
    "name": "Oxygen The 80s Hits",
    "city": "Budapest",
    "country": "Hungary",
    "countryCode": "HU",
    "continent": "Europe",
    "streamUrl": "https://oxygenmusic.hu:8443/oxygenthe80shits",
    "coordinates": {
      "lat": 47.4979,
      "lng": 19.0402
    }
  },
  {
    "name": "Retro Rádió",
    "city": "Budapest",
    "country": "Hungary",
    "countryCode": "HU",
    "continent": "Europe",
    "streamUrl": "https://icast.connectmedia.hu/5001/live.mp3",
    "coordinates": {
      "lat": 47.4889,
      "lng": 19.0336
    }
  },
  {
    "name": "Klubrádió 95,3",
    "city": "Budapest",
    "country": "Hungary",
    "countryCode": "HU",
    "continent": "Europe",
    "streamUrl": "https://a7.asurahosting.com:8160/radio.mp3",
    "coordinates": {
      "lat": 47.486,
      "lng": 19.0558
    }
  },
  {
    "name": "Oxygen Magyar Zene",
    "city": "Budapest",
    "country": "Hungary",
    "countryCode": "HU",
    "continent": "Europe",
    "streamUrl": "https://oxygenmusic.hu:8443/oxygenmagyarzene",
    "coordinates": {
      "lat": 47.4979,
      "lng": 19.0402
    }
  },
  {
    "name": "Oxygen Classic Rock",
    "city": "Budapest",
    "country": "Hungary",
    "countryCode": "HU",
    "continent": "Europe",
    "streamUrl": "https://oxygenmusic.hu:8443/oxygenclassicrock",
    "coordinates": {
      "lat": 47.4979,
      "lng": 19.0402
    }
  },
  {
    "name": "Klubrádió - Zebrádió",
    "city": "Budapest",
    "country": "Hungary",
    "countryCode": "HU",
    "continent": "Europe",
    "streamUrl": "https://stream.zebradio.hu:8443/zebradio",
    "coordinates": {
      "lat": 47.4979,
      "lng": 19.0402
    }
  },
  {
    "name": "Oxygen Oldies",
    "city": "Budapest",
    "country": "Hungary",
    "countryCode": "HU",
    "continent": "Europe",
    "streamUrl": "https://oxygenmusic.hu:8443/oxygenoldies",
    "coordinates": {
      "lat": 47.4979,
      "lng": 19.0402
    }
  },
  {
    "name": "Oxygen The 90s Hits",
    "city": "Budapest",
    "country": "Hungary",
    "countryCode": "HU",
    "continent": "Europe",
    "streamUrl": "https://oxygenmusic.hu:8443/oxygenthe90shits",
    "coordinates": {
      "lat": 47.4979,
      "lng": 19.0402
    }
  },
  {
    "name": "TRANCE IS STAR RADIO",
    "city": "Novosyolky",
    "country": "Ukraine",
    "countryCode": "UA",
    "continent": "Europe",
    "streamUrl": "https://myradio24.org/tisradio",
    "coordinates": {
      "lat": 50.4501,
      "lng": 30.5234
    }
  },
  {
    "name": "Єдині новини",
    "city": "Kyiv",
    "country": "Ukraine",
    "countryCode": "UA",
    "continent": "Europe",
    "streamUrl": "https://online-news.radioplayer.ua/RadioNews",
    "coordinates": {
      "lat": 50.4501,
      "lng": 30.5234
    }
  },
  {
    "name": "Brokenbeats",
    "city": "Kyiv",
    "country": "Ukraine",
    "countryCode": "UA",
    "continent": "Europe",
    "streamUrl": "https://stream.brokenbeats.net/tune",
    "coordinates": {
      "lat": 50.4501,
      "lng": 30.5234
    }
  },
  {
    "name": "Bollywood Gaane Purane",
    "city": "New Delhi",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/6n6ewddtad0uv",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    }
  },
  {
    "name": "Goldy Evergreen",
    "city": "New Delhi",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/n2fd0edh9k8uv",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    }
  },
  {
    "name": "Goldy Cool",
    "city": "New Delhi",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/3k1fb86tfm8uv",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    }
  },
  {
    "name": "Goldy Mukesh",
    "city": "New Delhi",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/t39watus1p8uv",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    }
  },
  {
    "name": "Hindi Gold Radio",
    "city": "New Delhi",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://azuracast.vibesounds.in:8010/radio.mp3",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    }
  },
  {
    "name": "Bollywood 2010's",
    "city": "New Delhi",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://drive.uber.radio/uber/bollywood2010s/icecast.audio",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    }
  },
  {
    "name": "Diverse FM",
    "city": "New Delhi",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://carol.epichosts.co.uk:8570/;",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    }
  },
  {
    "name": "All India Radio AIR Punjabi",
    "city": "New Delhi",
    "country": "India",
    "countryCode": "IN",
    "continent": "Asia",
    "streamUrl": "https://air.pc.cdn.bitgravity.com/air/live/pbaudio138/chunklist.m3u8",
    "coordinates": {
      "lat": 28.6139,
      "lng": 77.209
    }
  },
  {
    "name": "Gensokyo Radio",
    "city": "Tokyo",
    "country": "Japan",
    "countryCode": "JP",
    "continent": "Asia",
    "streamUrl": "https://stream.gensokyoradio.net/3",
    "coordinates": {
      "lat": 35.6762,
      "lng": 139.6503
    }
  },
  {
    "name": "Súper Tokio Radio",
    "city": "Tokyo",
    "country": "Japan",
    "countryCode": "JP",
    "continent": "Asia",
    "streamUrl": "https://streamer.radio.co/s83eb8ff39/listen",
    "coordinates": {
      "lat": 35.6762,
      "lng": 139.6503
    }
  },
  {
    "name": "Fred Film Radio(日本語)",
    "city": "Tokyo",
    "country": "Japan",
    "countryCode": "JP",
    "continent": "Asia",
    "streamUrl": "https://s10.webradio-hosting.com/proxy/fredradiojp/stream",
    "coordinates": {
      "lat": 35.6762,
      "lng": 139.6503
    }
  },
  {
    "name": "J-Pop Powerplay Kawaii(asia dream radio)",
    "city": "Tokyo",
    "country": "Japan",
    "countryCode": "JP",
    "continent": "Asia",
    "streamUrl": "https://kathy.torontocast.com:3060/;?shoutcast",
    "coordinates": {
      "lat": 35.6762,
      "lng": 139.6503
    }
  },
  {
    "name": "Jazz Sakura",
    "city": "Tokyo",
    "country": "Japan",
    "countryCode": "JP",
    "continent": "Asia",
    "streamUrl": "https://kathy.torontocast.com:3330/;",
    "coordinates": {
      "lat": 35.6762,
      "lng": 139.6503
    }
  },
  {
    "name": "J-Pop Powerplay Kawaii",
    "city": "Tokyo",
    "country": "Japan",
    "countryCode": "JP",
    "continent": "Asia",
    "streamUrl": "https://kathy.torontocast.com:3060/;",
    "coordinates": {
      "lat": 35.6762,
      "lng": 139.6503
    }
  },
  {
    "name": "大富ラジオ",
    "city": "Tokyo",
    "country": "Japan",
    "countryCode": "JP",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/oaxp6mswcqltv",
    "coordinates": {
      "lat": 35.6762,
      "lng": 139.6503
    }
  },
  {
    "name": "Big B Radio - Kpop",
    "city": "Seoul",
    "country": "South Korea",
    "countryCode": "KR",
    "continent": "Asia",
    "streamUrl": "https://antares.dribbcast.com/proxy/kpop?mp=/s",
    "coordinates": {
      "lat": 37.5665,
      "lng": 126.978
    }
  },
  {
    "name": "KBS Classic FM",
    "city": "Seoul",
    "country": "South Korea",
    "countryCode": "KR",
    "continent": "Asia",
    "streamUrl": "https://1fm.gscdn.kbs.co.kr/1fm_192_2.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8xZm0uZ3NjZG4ua2JzLmNvLmtyLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTUwNTExODB9fX1dfQ__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA&Signature=kb052A55J~c3BMS0~eeIuaFKM8MfJ1fisebrfVnPmgWQJwTS0NGnD3dq9MToCpIBImZ54Bs9KdNBO5tDBHusl~iwRXsGBm0AwO7grvtKvS5g9RZ24v3u93YBwYjkp6kheiW9SUqV0obKArLdrkDGAovn8u731VyBM1M0gEYzSMSqWaDK2M83K3r8234gxAzgKmyj5r5YT4DfhxTCyjwgm-101A75Hl98PE5xLooJ8p5nMJ~lAHkAKK6IwnHIL6MWz1H6wiz3guCKd4F7E3gOv4tkd3zU3jFHSdoKar~coONvnrQ3utb3LJ3w6xzL9NOxzrdtcZCSSjDiL9Egm6Aj8A__",
    "coordinates": {
      "lat": 37.5794,
      "lng": 126.9802
    }
  },
  {
    "name": "MBC FM",
    "city": "Seoul",
    "country": "South Korea",
    "countryCode": "KR",
    "continent": "Asia",
    "streamUrl": "https://minisw.imbc.com/dsfm/_definst_/sfm.stream/playlist.m3u8?_lsu_sa_=6D214F1AB3B937B4464655943BC1E840B5E13B45D4087229330032aE26CA3636C9a9C34834A2504DE05B33E151bE51B213B77F9FE26B279AB804A464475E9C92804C7BBCC4941D71EAAF8323309BFEDF247DAD862661548BD0BA2082A11AC1A06EFAFA0A98EE2762FCDE77E681910FA8",
    "coordinates": {
      "lat": 37.5665,
      "lng": 126.978
    }
  },
  {
    "name": "SBS Power FM",
    "city": "Seoul",
    "country": "South Korea",
    "countryCode": "KR",
    "continent": "Asia",
    "streamUrl": "https://radiolive.sbs.co.kr/powerpc/powerfm.stream/playlist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3OTQ5MTQ0MDksInBhdGgiOiIvcG93ZXJmbS5zdHJlYW0iLCJkdXJhdGlvbiI6LTEsInVubyI6Ijg1OGY2NDc2LTAyNjctNGM4Ni04NzQyLWIyOTEwZjIxODg4OCIsImlhdCI6MTc5NDg3MTIwOX0.SC0Lh7pPAxHr77VbpYs938Q9XWa9QdjrsMtvK5GxFyw",
    "coordinates": {
      "lat": 37.5665,
      "lng": 126.978
    }
  },
  {
    "name": "ebs tune in",
    "city": "Seoul",
    "country": "South Korea",
    "countryCode": "KR",
    "continent": "Asia",
    "streamUrl": "https://ebsonair.ebs.co.kr/fmradiofamilypc/familypc1m/playlist.m3u8",
    "coordinates": {
      "lat": 37.5665,
      "lng": 126.978
    }
  },
  {
    "name": "KBS_kor",
    "city": "Seoul",
    "country": "South Korea",
    "countryCode": "KR",
    "continent": "Asia",
    "streamUrl": "https://1radio-bora.gscdn.kbs.co.kr/1radio-bora-01/1radio-bora-01_hd.m3u8?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8xcmFkaW8tYm9yYS5nc2Nkbi5rYnMuY28ua3IvMXJhZGlvLWJvcmEtMDEvKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5NTA3ODc0MX19fV19&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA&Signature=cU6yHU8Ab~bUXxLS-ZGRGP5~YsAHAyk6UIQ0Yy1FUhYuh1mT5xNU7KZhDzIVSUMXPxDPVtxf9e54pt5k3VsZYT48GQemIMIH9Pe0B0uNIvvimBL4NwYq4FUAdWgO0sNmYxCrZ8tilGI76Q3slNcLUNcR5e7Qr4gX5665dHyI~zYxy3oumM6~Q~a40tKpyIHU7vPnrX2a7KlyFyRTMKk4tTPwnTvVVhBmn3FGB2mzcFD3dasghMos-F-2Hx4Nv9oZ3m33uGskk3PYeCjz4s9yzAgZ~FbJVDto-QbVKidBdH1MnuJbs1~SUkgKriY3ugzEzNouRPCwqOJ9UPggnKJ1dw__",
    "coordinates": {
      "lat": 37.5665,
      "lng": 126.978
    }
  },
  {
    "name": "Fred Film Radio(한국어)",
    "city": "Seoul",
    "country": "South Korea",
    "countryCode": "KR",
    "continent": "Asia",
    "streamUrl": "https://s10.webradio-hosting.com/proxy/fredradiokr/stream",
    "coordinates": {
      "lat": 37.5665,
      "lng": 126.978
    }
  },
  {
    "name": "BKK.FM",
    "city": "Bangkok",
    "country": "Thailand",
    "countryCode": "TH",
    "continent": "Asia",
    "streamUrl": "https://rsas.bkk.fm/radio",
    "coordinates": {
      "lat": 13.6851,
      "lng": 100.6144
    }
  },
  {
    "name": "106 Family News Radio",
    "city": "Bangkok",
    "country": "Thailand",
    "countryCode": "TH",
    "continent": "Asia",
    "streamUrl": "https://radio11.plathong.net/7138/;stream.mp3",
    "coordinates": {
      "lat": 13.7563,
      "lng": 100.5018
    }
  },
  {
    "name": "Flex 104.5",
    "city": "Bangkok",
    "country": "Thailand",
    "countryCode": "TH",
    "continent": "Asia",
    "streamUrl": "https://streaming.flexconnect.net/voiceflex/voiceflex/playlist.m3u8",
    "coordinates": {
      "lat": 13.7563,
      "lng": 100.5018
    }
  },
  {
    "name": "Cool Fahrenheit",
    "city": "Bangkok",
    "country": "Thailand",
    "countryCode": "TH",
    "continent": "Asia",
    "streamUrl": "https://coolism-web.cdn.byteark.com/;stream/1",
    "coordinates": {
      "lat": 13.7563,
      "lng": 100.5018
    }
  },
  {
    "name": "บ้านธัมมะ",
    "city": "กรุงเทพมหานคร",
    "country": "Thailand",
    "countryCode": "TH",
    "continent": "Asia",
    "streamUrl": "https://radio10.plathong.net/7238/;stream.mp3",
    "coordinates": {
      "lat": 13.6962,
      "lng": 100.4863
    }
  },
  {
    "name": "สังฆทานธรรม",
    "city": "Bangkok",
    "country": "Thailand",
    "countryCode": "TH",
    "continent": "Asia",
    "streamUrl": "https://cdn-th2.livestreaming.in.th/shoutcast/8615",
    "coordinates": {
      "lat": 13.7563,
      "lng": 100.5018
    }
  },
  {
    "name": "Chili Radio Thailand",
    "city": "Chiang Mai",
    "country": "Thailand",
    "countryCode": "TH",
    "continent": "Asia",
    "streamUrl": "https://stream.chiliradio.app/chiliclassics",
    "coordinates": {
      "lat": 18.7428,
      "lng": 98.9403
    }
  },
  {
    "name": "ThaiRadio 96.5 thinking",
    "city": "Bangkok",
    "country": "Thailand",
    "countryCode": "TH",
    "continent": "Asia",
    "streamUrl": "https://live-org-01-cdn.mcot.net/radiocdn_edge/fm965.stream_aac/chunklist.m3u8",
    "coordinates": {
      "lat": 13.7301,
      "lng": 100.4672
    }
  },
  {
    "name": "CNN Indonesia",
    "city": "Jakarta",
    "country": "Indonesia",
    "countryCode": "ID",
    "continent": "Asia",
    "streamUrl": "https://live.cnnindonesia.com/livecnn/smil:cnntv/chunklist.m3u8",
    "coordinates": {
      "lat": -6.2088,
      "lng": 106.8456
    }
  },
  {
    "name": "RRI Pro 3 KBRN",
    "city": "Jakarta",
    "country": "Indonesia",
    "countryCode": "ID",
    "continent": "Asia",
    "streamUrl": "https://stream-node0.rri.co.id/streaming/14/9014/kbrn.mp3",
    "coordinates": {
      "lat": -6.2088,
      "lng": 106.8456
    }
  },
  {
    "name": "SB FM tembang kenangan",
    "city": "parepare",
    "country": "Indonesia",
    "countryCode": "ID",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/d16n50mkzhhvv",
    "coordinates": {
      "lat": -6.2088,
      "lng": 106.8456
    }
  },
  {
    "name": "Mettaswara Koplo",
    "city": "Jakarta",
    "country": "Indonesia",
    "countryCode": "ID",
    "continent": "Asia",
    "streamUrl": "https://mettaswara.com:8700//koplo",
    "coordinates": {
      "lat": -6.2023,
      "lng": 106.8215
    }
  },
  {
    "name": "Radio Rodja 756 AM",
    "city": "Jakarta",
    "country": "Indonesia",
    "countryCode": "ID",
    "continent": "Asia",
    "streamUrl": "https://radioislamindonesia.com/rodja.mp3?_=2",
    "coordinates": {
      "lat": -6.2088,
      "lng": 106.8456
    }
  },
  {
    "name": "Tarbiyah Sunnah",
    "city": "Jakarta",
    "country": "Indonesia",
    "countryCode": "ID",
    "continent": "Asia",
    "streamUrl": "https://radioislamindonesia.com/tarbiyah.mp3",
    "coordinates": {
      "lat": -6.2088,
      "lng": 106.8456
    }
  },
  {
    "name": "90s Pinoy Alternative",
    "city": "Manila",
    "country": "Philippines",
    "countryCode": "PH",
    "continent": "Asia",
    "streamUrl": "https://cast3.my-control-panel.com/proxy/ronald/stream",
    "coordinates": {
      "lat": 14.5995,
      "lng": 120.9842
    }
  },
  {
    "name": "Budots FM 98.9",
    "city": "Manila",
    "country": "Philippines",
    "countryCode": "PH",
    "continent": "Asia",
    "streamUrl": "https://stream-171.zeno.fm/2uhuu5hvzqzuv?zs=oGfN_quRRSyJUGCfzxagdw",
    "coordinates": {
      "lat": 14.5995,
      "lng": 120.9842
    }
  },
  {
    "name": "Pinoy Rap Radio",
    "city": "Manila",
    "country": "Philippines",
    "countryCode": "PH",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/0cdp55nqam0uv",
    "coordinates": {
      "lat": 14.5995,
      "lng": 120.9842
    }
  },
  {
    "name": "Clubmix",
    "city": "Manila",
    "country": "Philippines",
    "countryCode": "PH",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/vztn8ux96zhvv",
    "coordinates": {
      "lat": 13.8784,
      "lng": 121.1038
    }
  },
  {
    "name": "Slow Rock 90'",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "countryCode": "MY",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/hiut6cwfoneuv",
    "coordinates": {
      "lat": 3.139,
      "lng": 101.6869
    }
  },
  {
    "name": "988 FM",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "countryCode": "MY",
    "continent": "Asia",
    "streamUrl": "https://28103.live.streamtheworld.com/988_FMAAC.aac",
    "coordinates": {
      "lat": 3.1333,
      "lng": 101.6408
    }
  },
  {
    "name": "Sinar FM",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "countryCode": "MY",
    "continent": "Asia",
    "streamUrl": "https://n08a-eu.rcs.revma.com/azatk0tbv4uvv/8_1ksmof3jo7vso02/playlist.m3u8",
    "coordinates": {
      "lat": 3.0393,
      "lng": 101.692
    }
  },
  {
    "name": "ai fm",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "countryCode": "MY",
    "continent": "Asia",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/AI_FMAAC_SC",
    "coordinates": {
      "lat": 3.139,
      "lng": 101.6869
    }
  },
  {
    "name": "Kelantan FM",
    "city": "Kelantan",
    "country": "Malaysia",
    "countryCode": "MY",
    "continent": "Asia",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/KELANTAN_FMAAC.aac",
    "coordinates": {
      "lat": 3.139,
      "lng": 101.6869
    }
  },
  {
    "name": "DJ DUGEM",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "countryCode": "MY",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/ooaqxeogpfdvv",
    "coordinates": {
      "lat": 3.139,
      "lng": 101.6869
    }
  },
  {
    "name": "Sabah FM",
    "city": "Sabah",
    "country": "Malaysia",
    "countryCode": "MY",
    "continent": "Asia",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/SABAH_FMAAC.aac",
    "coordinates": {
      "lat": 3.139,
      "lng": 101.6869
    }
  },
  {
    "name": "Terengganu FM",
    "city": "terengganu",
    "country": "Malaysia",
    "countryCode": "MY",
    "continent": "Asia",
    "streamUrl": "https://22243.live.streamtheworld.com/TERENGGANU_FMAAC_SC",
    "coordinates": {
      "lat": 3.139,
      "lng": 101.6869
    }
  },
  {
    "name": "RFI Tiếng Việt",
    "city": "Hanoi",
    "country": "Vietnam",
    "countryCode": "VN",
    "continent": "Asia",
    "streamUrl": "https://rfienvietnamien64k.ice.infomaniak.ch/rfienvietnamien-64.mp3",
    "coordinates": {
      "lat": 21.0285,
      "lng": 105.8542
    }
  },
  {
    "name": "VOV1",
    "city": "Hanoi",
    "country": "Vietnam",
    "countryCode": "VN",
    "continent": "Asia",
    "streamUrl": "https://str.vov.gov.vn/vovlive/vov1vov5Vietnamese.sdp_aac/playlist.m3u8",
    "coordinates": {
      "lat": 21.0249,
      "lng": 105.8382
    }
  },
  {
    "name": "ZING BOLERO",
    "city": "Hanoi",
    "country": "Vietnam",
    "countryCode": "VN",
    "continent": "Asia",
    "streamUrl": "https://vnno-ne-3-tf-multi-playlist-zmp3.zmdcdn.me/BJ7DyJjfG_E/zhls/playback-realtime/audio/5bace800d4453d1b6454/audio.m3u8",
    "coordinates": {
      "lat": 21.0285,
      "lng": 105.8542
    }
  },
  {
    "name": "Radyo Şiran",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://live.radyositesihazir.com/8078/stream",
    "coordinates": {
      "lat": 39.9334,
      "lng": 32.8597
    }
  },
  {
    "name": "Power POP",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://listen.powerapp.com.tr/powerpop/128/chunks.m3u8",
    "coordinates": {
      "lat": 39.9334,
      "lng": 32.8597
    }
  },
  {
    "name": "Radyo Fenomen",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://live.radyofenomen.com/fenomen/128/icecast.audio",
    "coordinates": {
      "lat": 39.9334,
      "lng": 32.8597
    }
  },
  {
    "name": "DamarTurk FM",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://live.radyositesihazir.com:10997/stream?type=http&nocache=99881",
    "coordinates": {
      "lat": 39.9334,
      "lng": 32.8597
    }
  },
  {
    "name": "JOY TÜRK TURKEY",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_TURK_SC?/",
    "coordinates": {
      "lat": 39.9334,
      "lng": 32.8597
    }
  },
  {
    "name": "Alem Fm",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://turkmedya.radyotvonline.net/alemfmaac",
    "coordinates": {
      "lat": 39.9334,
      "lng": 32.8597
    }
  },
  {
    "name": "SUPER FM 2 TURKEY",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/SUPER2_SC?/",
    "coordinates": {
      "lat": 39.9334,
      "lng": 32.8597
    }
  },
  {
    "name": "TRT Türkü",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://rd-trtturku.medya.trt.com.tr/master_128.m3u8",
    "coordinates": {
      "lat": 39.9246,
      "lng": 32.8217
    }
  },
  {
    "name": "HOUSELAND TURKEY",
    "city": "Ankara",
    "country": "Turkey",
    "countryCode": "TR",
    "continent": "Asia",
    "streamUrl": "https://moondigitaledge.radyotvonline.net/houseland/playlist.m3u8",
    "coordinates": {
      "lat": 39.9334,
      "lng": 32.8597
    }
  },
  {
    "name": "القارئ علي الحذيفي رواية قالون",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "countryCode": "SA",
    "continent": "Asia",
    "streamUrl": "https://qurango.net/radio/ali_alhuthaifi_qalon",
    "coordinates": {
      "lat": 24.7136,
      "lng": 46.6753
    }
  },
  {
    "name": "Fred Film Radio(لغة عربية)",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "countryCode": "SA",
    "continent": "Asia",
    "streamUrl": "https://s10.webradio-hosting.com/proxy/fredradioar/stream",
    "coordinates": {
      "lat": 24.7136,
      "lng": 46.6753
    }
  },
  {
    "name": "إذاعة الأخبار كل 5 دقائق   REPLAY NEWS - العربية",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "countryCode": "SA",
    "continent": "Asia",
    "streamUrl": "https://replaynewsar.ice.infomaniak.ch/replaynewsar-128.mp3",
    "coordinates": {
      "lat": 24.7136,
      "lng": 46.6753
    }
  },
  {
    "name": "Star KSA 99.9 FM",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "countryCode": "SA",
    "continent": "Asia",
    "streamUrl": "https://eu10.fastcast4u.com:6300/;?type=http&fbclid=IwY2xjawFqDntleHRuA2FlbQIxMQABHTTxwatDLaI3zkRXdSFYydXbOIRIvpABKZ_UJtqR3_vuCOvdsqzoeP80-Q_aem_slP_LtUYWwu6xNl3wmsesA",
    "coordinates": {
      "lat": 24.7136,
      "lng": 46.6753
    }
  },
  {
    "name": "Maura ✨ ( AR )",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "countryCode": "SA",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/fpasc3up26ptv",
    "coordinates": {
      "lat": 24.2097,
      "lng": 46.5759
    }
  },
  {
    "name": "Exclusively Iron Maiden",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/ironmaiden/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively ABBA",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/abba/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusive Radio – Bob Marley",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/bobmarley/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusive Radio – Black Sabbath",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/blacksabbath/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively Guns N’ Roses",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/gunsnroses/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "sky news arabia radio",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://stream.skynewsarabia.com/hls/sna.m3u8",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Radio Relax",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://online.radiorelax.ua/RadioRelax_Int_HD",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Rolling Stones",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/rollingstones/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively Coldplay",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/coldplay/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively Foo Fighters",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/foofighters/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively BTS",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/bts/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Big FM 106.2 UAE",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://funasia.streamguys1.com/live4",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively Led Zeppelin - Only Hits",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er-app/ledzeppelinhits/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively Nirvana",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/nirvana/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively Pet Shop Boys",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/petshopboys/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively Michael Buble",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/michaelbuble/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively George Michael",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/georgemichael/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively The Doors",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er-app/doors/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Exclusively Deep Purple",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "countryCode": "AE",
    "continent": "Asia",
    "streamUrl": "https://streaming.exclusive.radio/er/deeppurple/icecast.audio",
    "coordinates": {
      "lat": 25.2048,
      "lng": 55.2708
    }
  },
  {
    "name": "Radio 103FM",
    "city": "Tel Aviv",
    "country": "Israel",
    "countryCode": "IL",
    "continent": "Asia",
    "streamUrl": "https://cdn.cybercdn.live/103FM/Live/icecast.audio",
    "coordinates": {
      "lat": 32.0853,
      "lng": 34.7818
    }
  },
  {
    "name": "Glglz",
    "city": "Tel Aviv",
    "country": "Israel",
    "countryCode": "IL",
    "continent": "Asia",
    "streamUrl": "https://api.bynetcdn.com/Redirector/glz/glglz/ICE-LIVE",
    "coordinates": {
      "lat": 32.0853,
      "lng": 34.7818
    }
  },
  {
    "name": "اذاعة الشمس - A-Shams",
    "city": "Tel Aviv",
    "country": "Israel",
    "countryCode": "IL",
    "continent": "Asia",
    "streamUrl": "https://cdna.streamgates.net/Ashams/Live/icecast.audio",
    "coordinates": {
      "lat": 32.0853,
      "lng": 34.7818
    }
  },
  {
    "name": "Galgalatz 91.8 FM",
    "city": "Tel Aviv",
    "country": "Israel",
    "countryCode": "IL",
    "continent": "Asia",
    "streamUrl": "https://glzicylv01.bynetcdn.com/glglz_mp3",
    "coordinates": {
      "lat": 32.0853,
      "lng": 34.7818
    }
  },
  {
    "name": "Radios 100FM   רדיוס",
    "city": "Tel Aviv",
    "country": "Israel",
    "countryCode": "IL",
    "continent": "Asia",
    "streamUrl": "https://cdn.cybercdn.live/Radios_100FM/Audio/icecast.audio",
    "coordinates": {
      "lat": 32.107,
      "lng": 34.9711
    }
  },
  {
    "name": "987FM",
    "city": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "continent": "Asia",
    "streamUrl": "https://22393.live.streamtheworld.com/987FM_PREM.aac",
    "coordinates": {
      "lat": 1.2963,
      "lng": 103.8606
    }
  },
  {
    "name": "CAPITAL 958",
    "city": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "continent": "Asia",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FM_PREM.aac",
    "coordinates": {
      "lat": 1.2954,
      "lng": 103.7922
    }
  },
  {
    "name": "Yes 933",
    "city": "Singapore",
    "country": "Singapore",
    "countryCode": "SG",
    "continent": "Asia",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/YES933AAC_SC",
    "coordinates": {
      "lat": 1.3521,
      "lng": 103.8198
    }
  },
  {
    "name": "RTI 臺灣之音",
    "city": "Taipei",
    "country": "Taiwan",
    "countryCode": "TW",
    "continent": "Asia",
    "streamUrl": "https://streamak0138.akamaized.net/live0138lh-mbm9/_definst_/rti3/chunklist.m3u8",
    "coordinates": {
      "lat": 25.033,
      "lng": 121.5654
    }
  },
  {
    "name": "臺北電台AM",
    "city": "Taipei",
    "country": "Taiwan",
    "countryCode": "TW",
    "continent": "Asia",
    "streamUrl": "https://stream.ginnet.cloud/live0130lo-yfyo/_definst_/am/playlist.m3u8",
    "coordinates": {
      "lat": 25.033,
      "lng": 121.5654
    }
  },
  {
    "name": "台北廣播電台",
    "city": "Taipei",
    "country": "Taiwan",
    "countryCode": "TW",
    "continent": "Asia",
    "streamUrl": "https://stream.ginnet.cloud/live0130lo-yfyo/_definst_/fm/playlist.m3u8",
    "coordinates": {
      "lat": 25.033,
      "lng": 121.5654
    }
  },
  {
    "name": "正聲廣播電台FM104",
    "city": "Taipei",
    "country": "Taiwan",
    "countryCode": "TW",
    "continent": "Asia",
    "streamUrl": "https://flv.ccdntech.com/live/_definst_/mp4:vod117_Live/live1/chunklist_w872521607.m3u8",
    "coordinates": {
      "lat": 25.0458,
      "lng": 121.5253
    }
  },
  {
    "name": "正聲廣播公司",
    "city": "Taipei",
    "country": "Taiwan",
    "countryCode": "TW",
    "continent": "Asia",
    "streamUrl": "https://flv.ccdntech.com/live/_definst_/mp4:vod117_Live/live1/playlist.m3u8",
    "coordinates": {
      "lat": 25.033,
      "lng": 121.5654
    }
  },
  {
    "name": "台北古典廣播",
    "city": "Taipei",
    "country": "Taiwan",
    "countryCode": "TW",
    "continent": "Asia",
    "streamUrl": "https://stream.zeno.fm/w66d3dp6ynhvv",
    "coordinates": {
      "lat": 25.033,
      "lng": 121.5654
    }
  },
  {
    "name": "佳音經典音樂網",
    "city": "Taipei",
    "country": "Taiwan",
    "countryCode": "TW",
    "continent": "Asia",
    "streamUrl": "https://stream.ginnet.cloud/live0119lo-p4rb/_definst_/classic/playlist.m3u8",
    "coordinates": {
      "lat": 25.033,
      "lng": 121.5654
    }
  },
  {
    "name": "桃園GO GO104.3",
    "city": "Taipei",
    "country": "Taiwan",
    "countryCode": "TW",
    "continent": "Asia",
    "streamUrl": "https://stream.ginnet.cloud/live0119lo-p4rb/_definst_/fm1043/chunklist_w1108784103.m3u8",
    "coordinates": {
      "lat": 25.033,
      "lng": 121.5654
    }
  },
  {
    "name": "Lesedi",
    "city": "Cape Town",
    "country": "South Africa",
    "countryCode": "ZA",
    "continent": "Africa",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/LESEDIAAC_SC",
    "coordinates": {
      "lat": -33.9249,
      "lng": 18.4241
    }
  },
  {
    "name": "ThobelaFM",
    "city": "Gauteng/limpopo",
    "country": "South Africa",
    "countryCode": "ZA",
    "continent": "Africa",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/THOBELAAAC.aac",
    "coordinates": {
      "lat": -23.8705,
      "lng": 29.4324
    }
  },
  {
    "name": "UbuntuFM",
    "city": "Cape Town",
    "country": "South Africa",
    "countryCode": "ZA",
    "continent": "Africa",
    "streamUrl": "https://streaming.coollective.nl:8443/UbuntuFM",
    "coordinates": {
      "lat": -33.9249,
      "lng": 18.4241
    }
  },
  {
    "name": "Talk Radio 702",
    "city": "Cape Town",
    "country": "South Africa",
    "countryCode": "ZA",
    "continent": "Africa",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/FM702_192AAC.aac",
    "coordinates": {
      "lat": -33.9249,
      "lng": 18.4241
    }
  },
  {
    "name": "إذاعة مشاري العفاسي",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://qurango.net/radio/mishary_alafasi",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "إذاعة مصطفى إسماعيل",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://qurango.net/radio/mustafa_ismail",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "Amr Diab Radio",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://stream-40.zeno.fm/xa4yhh4k838uv?zs=gojgaFRaRrK1wgGIwdv6xA",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "إذاعة ياسر الدوسري",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://qurango.net/radio/yasser_aldosari",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "Abdulrasheed Soufi",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://qurango.net/radio/abdulrasheed_soufi_assosi.mp3",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "Radio Quran",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://stream.radiojar.com/8s5u5tpdtwzuv",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "إذاعة القرآن الكريم",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://n0a.radiojar.com/0tpy1h0kxtzuv?rj-ttl=5&rj-tok=AAABhdgGORQA-2acfyF3_4WY2g",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "Diab FM",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://stream-34.zeno.fm/rf64mx02qa0uv?zs=-xjlLLwRS8uKrffFxK4vLA",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "Radio 9090",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://9090streaming.mobtada.com/9090FMEGYPT",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "SHA3BY FM",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://radio95.radioca.st/;",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "87.8\tMix FM",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://stream-29.zeno.fm/na3vpvn10qruv",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "Radio Hits 88.2 Cairo",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://radiohits882.radioca.st/;",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "Arab Mix FM",
    "city": "Cairo",
    "country": "Egypt",
    "countryCode": "EG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/na3vpvn10qruv",
    "coordinates": {
      "lat": 30.0444,
      "lng": 31.2357
    }
  },
  {
    "name": "Splash FM 105.5",
    "city": "Ibadan",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://edge.mixlr.com/channel/cfeki",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "URBAN RADIO ENUGU",
    "city": "Enugu",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://edge.mixlr.com/channel/cfldr",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "Afrobeats Gospel Radio",
    "city": "Akwa Ibom State",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/zyd9stmdlnlvv",
    "coordinates": {
      "lat": 5.0276,
      "lng": 7.9273
    }
  },
  {
    "name": "Yes FM 101.7",
    "city": "Ibadan",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/kqgbf9g3mfhvv",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "RadioTiwa",
    "city": "Lagos",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/tvqvamkwe5zuv",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "GanGan Radio",
    "city": "Lagos",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/9reuhyz8up8uv",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "Splash FM Abeokuta",
    "city": "Lagos",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/m9x6zr5trp8uv",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "YES 101.7 FM",
    "city": "Ibadan",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://stream.zenolive.com/kqgbf9g3mfhvv",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "Air Gospel",
    "city": "Lagos",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/qkgrhugy908uv",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "RCCG Central Parish Radio",
    "city": "Lagos",
    "country": "Nigeria",
    "countryCode": "NG",
    "continent": "Africa",
    "streamUrl": "https://s2.radio.co/s82911d13a/low",
    "coordinates": {
      "lat": 6.5244,
      "lng": 3.3792
    }
  },
  {
    "name": "Kameme FM",
    "city": "Nairobi",
    "country": "Kenya",
    "countryCode": "KE",
    "continent": "Africa",
    "streamUrl": "https://kamemefm-atunwadigital.streamguys1.com/kamemefm",
    "coordinates": {
      "lat": -1.2921,
      "lng": 36.8219
    }
  },
  {
    "name": "KENYA1 FM",
    "city": "Nairobi",
    "country": "Kenya",
    "countryCode": "KE",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/cmgkmed5u18uv",
    "coordinates": {
      "lat": -1.2921,
      "lng": 36.8219
    }
  },
  {
    "name": "Campus Radio Kenya",
    "city": "Nairobi",
    "country": "Kenya",
    "countryCode": "KE",
    "continent": "Africa",
    "streamUrl": "https://stream.zenolive.com/mayn36v1v8quv.aac",
    "coordinates": {
      "lat": -1.2921,
      "lng": 36.8219
    }
  },
  {
    "name": "Easy FM 101.5",
    "city": "Nairobi",
    "country": "Kenya",
    "countryCode": "KE",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/wvw02zaqpxquv",
    "coordinates": {
      "lat": -1.2921,
      "lng": 36.8219
    }
  },
  {
    "name": "Exclusive radio George Straight",
    "city": "Nairobi",
    "country": "Kenya",
    "countryCode": "KE",
    "continent": "Africa",
    "streamUrl": "https://streaming.exclusive.radio/er/georgestrait/icecast.audio",
    "coordinates": {
      "lat": -1.2921,
      "lng": 36.8219
    }
  },
  {
    "name": "Radio47",
    "city": "Nairobi",
    "country": "Kenya",
    "countryCode": "KE",
    "continent": "Africa",
    "streamUrl": "https://streaming.shoutcast.com/radio-47?ver=690109",
    "coordinates": {
      "lat": -1.2921,
      "lng": 36.8219
    }
  },
  {
    "name": "MA:-Hit Radio Maroc",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/une3a02mb",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "Radio Mars",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://radiomars.ice.infomaniak.ch/radiomars-128.mp3",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "Radio Manarat",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/252934/stream/297385",
    "coordinates": {
      "lat": 33.9794,
      "lng": -6.8594
    }
  },
  {
    "name": "Skyrock Casablanca",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://icecast.skyrock.net/s/casa_aac_64k",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "Aswat FM",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://broadcast.ice.infomaniak.ch/aswat-high.mp3",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "MRC:-Radio Adwaa FM 2",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/5bxh2nh0x1zuv",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "Rap Lbeldi Maroc - Hip Hop Music from Morocco FR AR",
    "city": "casa",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/ivdufrl7q0quv",
    "coordinates": {
      "lat": 33.7931,
      "lng": -7.4158
    }
  },
  {
    "name": "MA:-Radio Sawt Alamal",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/d4u7zbqh5qruv",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "Radio Atbir",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream-156.zeno.fm/bqdbb6hd0neuv?zs=VGAZo-zKSX-08bLa8RiUVg",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "MRC:-Radio Adwaa Music 3",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/x4451xh0x1zuv",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "MRC:-Hip Hop Soul Radio \tRadio Music",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/k7cdrm450s8uv",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "Radio Plus Agadir FM 92.4",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream-158.zeno.fm/bqdbb6hd0neuv",
    "coordinates": {
      "lat": 30.4231,
      "lng": -9.5845
    }
  },
  {
    "name": "MRC:-Radio Adwaa ATFAL 4",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/8wrs2bh0x1zuv",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "Aziz Mustaphi",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://d3ctxlq1ktw2nl.cloudfront.net/production/2022-0-3/240607172-44100-2-afb2485b0c30e.mp3",
    "coordinates": {
      "lat": 33.5731,
      "lng": -7.5898
    }
  },
  {
    "name": "radio yan plus",
    "city": "Casablanca",
    "country": "Morocco",
    "countryCode": "MA",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/7nqu31p6xg0uv",
    "coordinates": {
      "lat": 30.5578,
      "lng": -9.4812
    }
  },
  {
    "name": "Hits 1 Algérie",
    "city": "Alger",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://radio12.pro-fhi.net/listen/whmnrlow/stream",
    "coordinates": {
      "lat": 36.7538,
      "lng": 3.0588
    }
  },
  {
    "name": "France Maghreb 2",
    "city": "Algiers",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3",
    "coordinates": {
      "lat": 36.7538,
      "lng": 3.0588
    }
  },
  {
    "name": "Beur FM",
    "city": "Algiers",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://beurfm.ice.infomaniak.ch/beurfm-high.mp3",
    "coordinates": {
      "lat": 36.7538,
      "lng": 3.0588
    }
  },
  {
    "name": "A ntinea Radio",
    "city": "Tizi-Ouzou",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/6640/stream/347",
    "coordinates": {
      "lat": 36.7538,
      "lng": 3.0588
    }
  },
  {
    "name": "International  radio",
    "city": "Bulgaria",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://radio.jump.bg/proxy/mariana4/stream",
    "coordinates": {
      "lat": 36.7538,
      "lng": 3.0588
    }
  },
  {
    "name": "Hitradio RTL Chemnitz",
    "city": "Sachsen",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://web.radio.hitradio-rtl.de/hrrtl-chemnitz/stream/mp3?aggregator=direktlink",
    "coordinates": {
      "lat": 36.7538,
      "lng": 3.0588
    }
  },
  {
    "name": "Tizi Ouzou  تيزي وزو",
    "city": "Algiers",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://webradio2.tda.dz:8001/TiziOuzou_64K.mp3",
    "coordinates": {
      "lat": 36.7097,
      "lng": 4.0492
    }
  },
  {
    "name": "Oran وهران",
    "city": "Algiers",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://webradio2.tda.dz:8001/Oran_64K.mp3",
    "coordinates": {
      "lat": 35.7028,
      "lng": -0.6447
    }
  },
  {
    "name": "Zaman FM زمان",
    "city": "Algiers",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://webradio2.tda.dz:8001/Zamen_64K.mp3",
    "coordinates": {
      "lat": 36.7823,
      "lng": 3.0507
    }
  },
  {
    "name": "Chaine 2 القناة الثانية",
    "city": "Algiers",
    "country": "Algeria",
    "countryCode": "DZ",
    "continent": "Africa",
    "streamUrl": "https://webradio2.tda.dz:8001/Chaine2_64K.mp3",
    "coordinates": {
      "lat": 36.7798,
      "lng": 3.0525
    }
  },
  {
    "name": "تراتيل",
    "city": "Tunis",
    "country": "Tunisia",
    "countryCode": "TN",
    "continent": "Africa",
    "streamUrl": "https://qurango.net/radio/tarateel",
    "coordinates": {
      "lat": 36.8065,
      "lng": 10.1815
    }
  },
  {
    "name": "Sabra FM",
    "city": "Tunis",
    "country": "Tunisia",
    "countryCode": "TN",
    "continent": "Africa",
    "streamUrl": "https://manager5.streamradio.fr:1905/stream",
    "coordinates": {
      "lat": 36.8065,
      "lng": 10.1815
    }
  },
  {
    "name": "Jawhara FM",
    "city": "Tunis",
    "country": "Tunisia",
    "countryCode": "TN",
    "continent": "Africa",
    "streamUrl": "https://streaming2.toutech.net/jawharafm",
    "coordinates": {
      "lat": 36.8065,
      "lng": 10.1815
    }
  },
  {
    "name": "AlHayet FM",
    "city": "Tunis",
    "country": "Tunisia",
    "countryCode": "TN",
    "continent": "Africa",
    "streamUrl": "https://manager8.streamradio.fr:2885/stream",
    "coordinates": {
      "lat": 36.8065,
      "lng": 10.1815
    }
  },
  {
    "name": "Lotfi Slama",
    "city": "Tunis",
    "country": "Tunisia",
    "countryCode": "TN",
    "continent": "Africa",
    "streamUrl": "https://azuracast.conceptradio.fr:8000/radio.mp3",
    "coordinates": {
      "lat": 36.8065,
      "lng": 10.1815
    }
  },
  {
    "name": "راديو فن    Fenn Radio",
    "city": "Tunis",
    "country": "Tunisia",
    "countryCode": "TN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/76e9f1gsduhvv",
    "coordinates": {
      "lat": 36.8065,
      "lng": 10.1815
    }
  },
  {
    "name": "ChinaGhana Fm",
    "city": "tarkwa",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/3w43axr9mg0uv",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "Peace FM",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://peacefm-atunwadigital.streamguys1.com/peacefm?amsparams=playerid%3ASGplayer%3Bskey%3A1611468493100%3B&awparams=playerid%3ASGplayer%3Bplayerid%3ASGplayer%3Bplayerid%3ASGplayer%3B&us_privacy=1YNN&us_privacy=1YNN&us_privacy=1YNN",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "Adom Fm",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://mmg.streamguys1.com/AdomFM-mp3?key=9099965b0e49394af3be11b42a71f0faa90378311d2d85f5983495217e350f0a4636df5ecf5ea3f63e53cb9026d89102&awparams=playerid%3ASGplayer%3B&amsparams=playerid%3ASGplayer%3Bskey%3A1609841442537%3B&aw_0_req.gdpr=true&us_privacy=1YNN",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "Joy Fm",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://mmg.streamguys1.com/JoyFM-mp3?key=8689cc761932e3151f94ddbdbfdf4aa0f4000234b5caeaaa179a2fc0d59a4be9b8b774c3653cb14d1fd76f5cbf80e482&awparams=playerid%3ASGplayer%3B&amsparams=playerid%3ASGplayer%3Bskey%3A1609840716923%3B&aw_0_req.gdpr=true&us_privacy=1YNN",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "SHATTA Movement",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://stream-167.zeno.fm/pbnss8oxyluuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJwYm5zczhveHlsdXV2IiwiaG9zdCI6InN0cmVhbS0xNjcuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6ImZrWXBkQ2VPUTBDUmJmZUFDMDhjZnciLCJpYXQiOjE3NDcyMTQ2NzcsImV4cCI6MTc0NzIxNDczN30.AGbFH1RVlS4MAdUn9q-5qSWEE4-YfMZgvl_7CiSQaQw&adtonosListenerId=01JV71Q20NNP0MDXMTT3Q4XWAC&aw_0_req_lsid=d1db44d6929b282ed2a68e0472f0de3c",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "HANA RADIO - Ghana",
    "city": "GHANA",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/qqaz1l2tujvuv",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "Citi FM",
    "city": "Greater Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://citi973fm.radioca.st/index.html:80/;stream.mp3",
    "coordinates": {
      "lat": 6.5948,
      "lng": -1.4062
    }
  },
  {
    "name": "Asempa Fm",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://mmg.streamguys1.com/AsempaFM-mp3?key=23f81ad063fc94d769b3f56668d742562a0645bb7ba0f5633dbce7d73d151195adfd4a7b4b2afeeff7fb81cf4ef6e790&awparams=playerid%3ASGplayer%3B&amsparams=playerid%3ASGplayer%3Bskey%3A1609843961148%3B&aw_0_req.gdpr=true&us_privacy=1YNN",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "Angel FM",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://atunwadigital.streamguys1.com/angelfm",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "Ghana Music Radio",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://streaming.radio.co/s92f890821/listen",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "057 radio",
    "city": "Banana state",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://audio.alter-media.hr/9052/stream",
    "coordinates": {
      "lat": 0.405,
      "lng": 9.4389
    }
  },
  {
    "name": "Parousia Radio",
    "city": "Western Region",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://radio.parousiaempire.org:8000/radio.mp3",
    "coordinates": {
      "lat": 4.8914,
      "lng": -1.7523
    }
  },
  {
    "name": "Nhyira 104.5 FM",
    "city": "Ashanti Region",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://mmg.streamguys1.com/NhyiraFM-mp3?key=63d8990dfe4438ae984fd70d2d2b4bd31c842c474987bd810ac0e8e0fd62e8cf2015661105cced63ccfdca89a8422ab1",
    "coordinates": {
      "lat": 6.5554,
      "lng": -0.7725
    }
  },
  {
    "name": "Hitz 103.9 FM",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://mmg.streamguys1.com/HitzFM-mp3?",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "Hello Fm",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://atunwadigital.streamguys1.com/hellofm",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "Oman Fm",
    "city": "Accra",
    "country": "Ghana",
    "countryCode": "GH",
    "continent": "Africa",
    "streamUrl": "https://omanfm-atunwadigital.streamguys1.com/omanfm?amsparams=playerid%3ASGplayer%3Bskey%3A1611555812774%3B&awparams=playerid%3ASGplayer%3Bplayerid%3ASGplayer%3Bplayerid%3ASGplayer%3B&aw_0_req.gdpr=true&us_privacy=1YNN&aw_0_req.gdpr=true&us_privacy=1YNN&aw_0_req.gdpr=true&us_privacy=1YNN",
    "coordinates": {
      "lat": 5.6037,
      "lng": -0.187
    }
  },
  {
    "name": "RTS 92.5 RSI",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://10gb1.acangroup.org:8000/rsi",
    "coordinates": {
      "lat": 14.7114,
      "lng": -17.456
    }
  },
  {
    "name": "Radio Thiossane",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://listen.senemultimedia.net:8112/stream",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Radio Fulbe FM 102.6 Dakar",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/e0grbn8e3rquv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Zig FM 100.8 Ziguinchor",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/zfdk0c69d3quv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "RTS Matam 89.1",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/kxud8vhqt1duv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Zig FM 100.3 Kolda",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/akh0t25nc18uv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Or FM 89.6 Orkadiéré",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/gy7fpc2am1duv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "RTS Tambacounda 92.0",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/nqxg7p8pt1duv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Love FM 107.3 Dakar",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/7cru7g7rcwzuv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Radio Al Fayda 90.1 Kaolack",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://usa5.fastcast4u.com/proxy/lyartech?mp=/stream/1/",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Timtimol FM 91.9 Ourossogui",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/4yx608hnu1duv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Bamtaare FM 103.4 Dodel",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/n1mugn1am1duv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "RTS Kaolack 103",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/2fkd4h0ts1duv.m4a",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Afia FM 93.0 Dakar",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/skjrn6kzzxptv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Central FM 107.1 Thiés",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/t2e45xqkunhvv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "H24 Senegal",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://listen.senemultimedia.net:8072/stream",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "GMS FM 89.3 Ziguinchor",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://myfm.acan.group/radio/8140/radio.mp3?1690707378",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Waar Fi FM 104.9 Sébikhotane",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/rmg4rfewweruv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Diassing FM 93.9 Marsassoum",
    "city": "Dakar",
    "country": "Senegal",
    "countryCode": "SN",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/veaguaqvvk8uv",
    "coordinates": {
      "lat": 14.7167,
      "lng": -17.4677
    }
  },
  {
    "name": "Uganda DJs",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/muzrp86994zuv",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "RX Radio",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://c14.radioboss.fm:18223/stream?1615807421100=",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "107.3 BBC Radio Uganda",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service_west_africa",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "Radio Pacis 90.9",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://radiopacisuganda.radioca.st/stream",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "Gospel Radio East Africa",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://c32.radioboss.fm:18451/stream?1641237600584",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "80's 90's old music radio",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://maggie.torontocast.com:2020/stream/100greatestofthe80s",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "91.3 Lift Worship US",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://emg.streamguys1.com/lift-website",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "crooze fm",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://stream-159.zeno.fm/vyxwdk08apxtv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ2eXh3ZGswOGFweHR2IiwiaG9zdCI6InN0cmVhbS0xNTkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Imt4VUtoZGRnU0dLRGdSc0NkOE1CRHciLCJpYXQiOjE",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "90.6 Busoga One Fm",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/xna2aad7gc9uv",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "95.0 Fame fm Jamaica",
    "city": "Kampala",
    "country": "Uganda",
    "countryCode": "UG",
    "continent": "Africa",
    "streamUrl": "https://stream.zenolive.com/d5mn12bchkeuv",
    "coordinates": {
      "lat": 0.3476,
      "lng": 32.5825
    }
  },
  {
    "name": "Radio One Stereo",
    "city": "Dar es Salaam",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://radioonetanzania.radioca.st/stream",
    "coordinates": {
      "lat": -6.7924,
      "lng": 39.2083
    }
  },
  {
    "name": "Capital Radio",
    "city": "Dar es Salaam",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://capitalradio.radioca.st/stream",
    "coordinates": {
      "lat": -6.7924,
      "lng": 39.2083
    }
  },
  {
    "name": "Radio Uhai",
    "city": "Dar es Salaam",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://s2.citrus3.com:8050/stream",
    "coordinates": {
      "lat": -6.7924,
      "lng": 39.2083
    }
  },
  {
    "name": "ImbaNasi",
    "city": "Dar es Salaam",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/dsfhivkawjiuv",
    "coordinates": {
      "lat": -6.7924,
      "lng": 39.2083
    }
  },
  {
    "name": "Ishizwe FM",
    "city": "Ngara",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/zhhawbqoikatv",
    "coordinates": {
      "lat": -2.5002,
      "lng": 30.6667
    }
  },
  {
    "name": "Glorious Online Radio",
    "city": "Dar es Salaam",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/xnamppblrnlvv",
    "coordinates": {
      "lat": -6.7924,
      "lng": 39.2083
    }
  },
  {
    "name": "Fumba Town Radio",
    "city": "Zanzibar",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://stream.perspektiveausland.app/listen/fumba_town_radio/radio.mp3",
    "coordinates": {
      "lat": -6.316,
      "lng": 39.287
    }
  },
  {
    "name": "BCC-FM Radio",
    "city": "Arusha",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://a7.asurahosting.com/listen/bethel_fm/radio.mp3",
    "coordinates": {
      "lat": -6.7924,
      "lng": 39.2083
    }
  },
  {
    "name": "KiZaZi Radio",
    "city": "Dar es Salaam",
    "country": "Tanzania",
    "countryCode": "TZ",
    "continent": "Africa",
    "streamUrl": "https://a4.asurahosting.com:8430/radio.mp3",
    "coordinates": {
      "lat": -6.7924,
      "lng": 39.2083
    }
  },
  {
    "name": "Radio Maria Ivory Coast",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://dreamsiteradiocp6.com/proxy/rmcosta?mp=/stream",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Life radio Côte d’Ivoire",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://cast4.asurahosting.com/proxy/life/stream",
    "coordinates": {
      "lat": 5.3174,
      "lng": -4.0292
    }
  },
  {
    "name": "Afrobeat international",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/397789/stream/449770",
    "coordinates": {
      "lat": 5.3185,
      "lng": -4.0196
    }
  },
  {
    "name": "Skyrock Abidjan",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://icecast.skyrock.net/s/abidjan_aac_64k",
    "coordinates": {
      "lat": 5.3165,
      "lng": -4.0189
    }
  },
  {
    "name": "Radio Jam",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/61201/stream/98566",
    "coordinates": {
      "lat": 5.9322,
      "lng": -5.3267
    }
  },
  {
    "name": "RadioAgonshu",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://stream10.vestaradio.com/RadioAgonshu",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Radio Côte d'Ivoire",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/732974/stream/799223",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Hit Radio (Côte d'Ivoire)",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://hrci.ice.infomaniak.ch/ci-abidjan-128.mp3",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Radio Pulsar Katiola",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://stream10.vestaradio.com/RADIO-PULSAR-KATIOLA",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "WaveMaster Radio",
    "city": "Lagune",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://wavemaster.diskstation.me/listen/wavemaster_radio/radio.mp3",
    "coordinates": {
      "lat": 5.3504,
      "lng": -4.0098
    }
  },
  {
    "name": "Radio Ermite Cote d'Ivoire",
    "city": "Yamoussoukro",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/5bhsrimkinyuv",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Radio Kabadougou FM",
    "city": "Odienné",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/gfvm7pxkv98uv",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "RVM Radio",
    "city": "Sikensi",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://radio.rvmsikensi.com/radio/8000/radio.mp3",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "RTI Fréquence 2",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/734192/stream/800486",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Adoration Matinale",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/9442/stream/19811",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Les Messagers Du Christ",
    "city": "Yamoussoukro",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/725756/stream/791726",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Radio MEDIA - Yamoussoukro",
    "city": "Yamoussoukro",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://stream.zeno.fm/8af5wodfzkvtv",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Serveur de Messages Prophétiques",
    "city": "Yamoussoukro",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://listen.radioking.com/radio/688134/stream/752823",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "Radio Nuit Blanche",
    "city": "Abidjan",
    "country": "Ivory Coast",
    "countryCode": "CI",
    "continent": "Africa",
    "streamUrl": "https://free.rcast.net/73850",
    "coordinates": {
      "lat": 5.36,
      "lng": -4.0083
    }
  },
  {
    "name": "The Prog Rock Machine",
    "city": "Sydney",
    "country": "Australia",
    "countryCode": "AU",
    "continent": "Oceania",
    "streamUrl": "https://theproganrockmachine.out.airtime.pro/theproganrockmachine_b",
    "coordinates": {
      "lat": -33.8688,
      "lng": 151.2093
    }
  },
  {
    "name": "Gold 104.3",
    "city": "Victoria",
    "country": "Australia",
    "countryCode": "AU",
    "continent": "Oceania",
    "streamUrl": "https://ais-arn.streamguys1.com/au_004_icy",
    "coordinates": {
      "lat": -33.8688,
      "lng": 151.2093
    }
  },
  {
    "name": "Fresh 92.7",
    "city": "South Australia",
    "country": "Australia",
    "countryCode": "AU",
    "continent": "Oceania",
    "streamUrl": "https://live.fresh927.com.au/freshaac",
    "coordinates": {
      "lat": -33.8688,
      "lng": 151.2093
    }
  },
  {
    "name": "Sky News Australia Radio",
    "city": "Sydney NSW",
    "country": "Australia",
    "countryCode": "AU",
    "continent": "Oceania",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_SKYNEWSAAC.aac",
    "coordinates": {
      "lat": -33.9415,
      "lng": 151.0342
    }
  },
  {
    "name": "KIIS 106.5",
    "city": "New South Wales",
    "country": "Australia",
    "countryCode": "AU",
    "continent": "Oceania",
    "streamUrl": "https://ais-arn.streamguys1.com/au_007_icy",
    "coordinates": {
      "lat": -33.8688,
      "lng": 151.2093
    }
  },
  {
    "name": "KIIS 101.1",
    "city": "Victoria",
    "country": "Australia",
    "countryCode": "AU",
    "continent": "Oceania",
    "streamUrl": "https://ais-arn.streamguys1.com/au_001_icy",
    "coordinates": {
      "lat": -33.8688,
      "lng": 151.2093
    }
  },
  {
    "name": "Ski FM",
    "city": "Central Plateau, Desert Road",
    "country": "New Zealand",
    "countryCode": "NZ",
    "continent": "Oceania",
    "streamUrl": "https://s2.radio.co/s6436891bc/listen",
    "coordinates": {
      "lat": -36.8485,
      "lng": 174.7633
    }
  },
  {
    "name": "https://badradio.nz/ - 24/7 PHONK",
    "city": "Auckland",
    "country": "New Zealand",
    "countryCode": "NZ",
    "continent": "Oceania",
    "streamUrl": "https://s2.radio.co/s2b2b68744/listen",
    "coordinates": {
      "lat": -36.8485,
      "lng": 174.7633
    }
  },
  {
    "name": "Newstalk ZB",
    "city": "Auckland",
    "country": "New Zealand",
    "countryCode": "NZ",
    "continent": "Oceania",
    "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/NZME_01AAC.m3u8?aw_0_1st.playerid=iHeartRadioWebPlayer&aw_0_1st.skey=9631949606&clientType=web&companionAds=false&deviceName=web-desktop&dist=iheart&host=webapp.NZ&listenerId=&playedFrom=157&pname=live_profile&profileId=9631949606&stationid=6187&terminalId=162&territory=NZ",
    "coordinates": {
      "lat": -36.8485,
      "lng": 174.7633
    }
  },
  {
    "name": "FM 96",
    "city": "Suva",
    "country": "Fiji",
    "countryCode": "FJ",
    "continent": "Oceania",
    "streamUrl": "https://n03-us2.rcs.revma.com/q8txpfyyay3vv?rj-ttl=5&rj-tok=AAABoYdWCpMAnffnvaD4Mp_VUw",
    "coordinates": {
      "lat": -18.1248,
      "lng": 178.4501
    }
  },
  {
    "name": "Legend FM",
    "city": "Suva",
    "country": "Fiji",
    "countryCode": "FJ",
    "continent": "Oceania",
    "streamUrl": "https://stream.rcs.revma.com/7wnnz47a303vv?ver=864684",
    "coordinates": {
      "lat": -18.1248,
      "lng": 178.4501
    }
  },
  {
    "name": "Life Worship",
    "city": "Suva",
    "country": "Fiji",
    "countryCode": "FJ",
    "continent": "Oceania",
    "streamUrl": "https://streams3.vision.org.au/worshipap.aac",
    "coordinates": {
      "lat": -18.1248,
      "lng": 178.4501
    }
  },
  {
    "name": "Viti FM",
    "city": "Suva",
    "country": "Fiji",
    "countryCode": "FJ",
    "continent": "Oceania",
    "streamUrl": "https://stream.rcs.revma.com/3c11kc9a303vv",
    "coordinates": {
      "lat": -18.1248,
      "lng": 178.4501
    }
  },
  {
    "name": "Radio Navtarang",
    "city": "Suva",
    "country": "Fiji",
    "countryCode": "FJ",
    "continent": "Oceania",
    "streamUrl": "https://stream.rcs.revma.com/5f56gd8a303vv",
    "coordinates": {
      "lat": -18.1248,
      "lng": 178.4501
    }
  },
  {
    "name": "Life FM",
    "city": "Suva",
    "country": "Fiji",
    "countryCode": "FJ",
    "continent": "Oceania",
    "streamUrl": "https://streams3.vision.org.au/fiji.aac",
    "coordinates": {
      "lat": -18.1248,
      "lng": 178.4501
    }
  }
]

/**
 * Get random unique stations for a match
 */
export function getRandomStations(count: number = 5, continent?: string): Station[] {
  let pool = VERIFIED_STATIONS
  if (continent && continent.toLowerCase() !== 'world' && continent.toLowerCase() !== 'global') {
    const filtered = VERIFIED_STATIONS.filter(
      (s) => s.continent.toLowerCase() === continent.toLowerCase()
    )
    if (filtered.length >= count) {
      pool = filtered
    }
  }

  // Fisher-Yates shuffle on a copy
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled.slice(0, Math.min(count, shuffled.length))
}
