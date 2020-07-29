/**
 * Utility class to calculate elapsed time between two dates
 *
 * @author Byte Education
 * @version 1.0.0
 */
export default class DateCalculator {
  /**
   * Starting Date used to calculate elapsed days
   * @type Date
   */
  private startDate: Date;

  /**
   * Ending Date used to calculate elapsed days
   * @type Date
   */
  private endDate: Date;

  /**
   * Constructor used to create a new Date Calculator Object
   * @param startDate starting date used to calculate elapsed days
   * @param endDate ending date used to calculate elapsed days
   */
  constructor(startDate: Date, endDate: Date) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  /**
   * Static function to calculate elapsed days between two days
   * @param startDate starting date used to calculate elapsed days
   * @param endDate Ending date used to calculate elapsed days
   */
  public static getDays = (startDate: Date, endDate: Date): number => {
    let start = startDate.valueOf();
    let end = endDate.valueOf();
    let elapsed = end - start;
    elapsed /= 1000 * 60 * 60 * 24;
    return elapsed;
  };

  /**
   * Static function used to calculate elapsed weeks
   * @param startDate Starting date used to calculate elapsed weeks
   * @param endDate Ending date used to calculate elapsed weeks
   */
  public static getWeeks = (startDate: Date, endDate: Date): number => {
    return DateCalculator.getDays(startDate, endDate) / 7;
  };

  /**
   * Static function used to calculate elapsed months
   * @param startDate Starting date used to calculate elapsed months
   * @param endDate Ending date used to calculate elapsed months
   */
  public static getMonths = (startDate: Date, endDate: Date): number => {
    return DateCalculator.getDays(startDate, endDate) / 30;
  };

  /**
   * Static function used to calculate elapsed years
   * @param startDate Starting date to calculate elapsed years
   * @param endDate Ending date to calculate elapsed years
   */
  public static getYears = (startDate: Date, endDate: Date): number => {
    return DateCalculator.getDays(startDate, endDate) / 365;
  };

  /**
   * Non static function used to calculate elapsed days
   */
  public getDays = (): number => {
    return DateCalculator.getDays(this.startDate, this.endDate);
  };

  /**
   * Non static function used to calculate elapsed weeks
   */
  public getWeeks = (): number => {
    return DateCalculator.getWeeks(this.startDate, this.endDate);
  };

  /**
   * Non static function used to calculate elapsed months
   */
  public getMonths = (): number => {
    return DateCalculator.getMonths(this.startDate, this.endDate);
  };

  /**
   * Non static function used to calculate elapsed years
   */
  public getYears = (): number => {
    return DateCalculator.getYears(this.startDate, this.endDate);
  };

  /**
   * To String function, used when calling an Elapsed object as a String
   *
   * Prints out the starting date, ending date, elapsed days, weeks, months, and years
   */
  public toString = (): string => {
    let str = "";
    str += `Start Date: ${this.startDate.toDateString()}, End Date: ${this.endDate.toDateString()}\n`;
    str += `Days: ${this.getDays()}\n`;
    str += `Weeks: ${this.getWeeks().toFixed(2)}\n`;
    str += `Months: ${this.getMonths().toFixed(2)}\n`;
    str += `Years: ${this.getYears().toFixed(0)}\n`;

    return str;
  };
}
