class LazyMan {
  constructor(name) {
    this.waitTimeArr = [];
    // this.firstTime = 0;
    console.log(`Hi I am ${name}`);
    // this.testFirst();
  }
  setTime(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this);
      }, time);
    })
  }
  sleep(time) {
    this.waitTimeArr.push(time);
    return this;
  }

  eat(food) {
    const text = `I am eating ${food}`;
    
    this.consoleLog(text);
    return this;
  }
  async testFirst() {
    console.log(this.firstTime);
  }

  async consoleLog(text) {
    await this.setTime(this.sum(this.waitTimeArr));
    await this.setTime(this.firstTime);
    console.log(text);
  }

  /** 数组求和 */
  sum(arr, fixed = 0) {
    try {
      return arr.reduce(function (prev, curr) {
        return (Number(prev) + Number(curr)).toFixed(fixed);
      });
    } catch (err) {
      return Number(0).toFixed(fixed);
    }
  }
  sleepFirst(time) {
    this.firstTime = time;
    return this;
  }
}

new LazyMan('tony').eat('lunch').sleep(1000).eat('dinner').sleepFirst(2000).sleep(2000).eat('11');
