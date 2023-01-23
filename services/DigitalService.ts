export default class DigitalService {
  getYoutube() {
    return fetch('/data/youtube.json').then(res => res.json()).then(d => d.data);
  }
}
