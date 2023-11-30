export interface YandexWeather {
  now: number;
  now_dt: string;
  info: Info;
  fact: Fact;
  forecast: Forecast;
}

export interface Info {
  url: string;
  lat: number;
  lon: number;
}

export interface Fact {
  obs_time: number;
  temp: number;
  feels_like: number;
  icon: string;
  condition: string;
  wind_speed: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  daytime: string;
  polar: boolean;
  season: string;
  wind_gust: number;
}

export interface Forecast {
  date: string;
  date_ts: number;
  week: number;
  sunrise: string;
  sunset: string;
  moon_code: number;
  moon_text: string;
  parts: Part[];
}

export interface Part {
  part_name: string;
  temp_min: number;
  temp_avg: number;
  temp_max: number;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  prec_mm: number;
  prec_prob: number;
  prec_period: number;
  icon: string;
  condition: string;
  feels_like: number;
  daytime: string;
  polar: boolean;
}
