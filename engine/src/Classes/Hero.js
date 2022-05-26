export default class Hero {
  constructor(props) {
    for (let value of Object.keys(props)) {
      this[value] = props[value];
    }
  }
}
