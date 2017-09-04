export class CardOrd {
  public static shuffle<T>(items: T[]): T[] {
    const shuffled = [ ...items ];
    let ll = items.length;
    let temp: T;
    let ii: number;

    while (ll) {

      // Pick a remaining element…
      ii = Math.floor(Math.random() * ll--);

      // And swap it with the current element.
      temp = shuffled[ll];
      shuffled[ll] = shuffled[ii];
      shuffled[ii] = temp;
    }

    return shuffled;
  }
}
