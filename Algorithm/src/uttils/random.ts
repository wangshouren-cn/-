import { testByTime } from "./test"

const random = {


  /**
   * @description: 包前不包后
   * @param {number} min
   * @param {number} max
   * @return {*}
   */
  int(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
  }

}


testByTime(3000, (assert) => {

  const num = random.int(-100, 100);
  return assert(num < 100 && num >= -100, `${num}<100 && ${num} >= -100`);

})


export default random