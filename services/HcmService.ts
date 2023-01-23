export default class HcmService {
  getData() {
    return fetch('/data/hcm.json').then(res => res.json()).then(d => d.data);
  }
}
