/**
 * Static functions for unit conversions
 *
 * @author Byte Education
 * @version 1.0.0
 */
export default class UnitConverter {
  public static Imperial = class {
    public static inToFt = (inch: number): number => {
      return inch / 12;
    };

    public static ftToIn = (feet: number): number => {
      return feet * 12;
    };

    public static ftToYds = (feet: number): number => {
      return feet / 3;
    };

    public static ydsToFt = (yards: number): number => {
      return yards * 3;
    };

    public static inToYds = (inch: number): number => {
      return UnitConverter.Imperial.inToFt(inch) / 3;
    };

    public static ydsToIn = (yards: number): number => {
      return yards * 36;
    };

    public static flozToPt = (floz: number): number => {
      return floz / 20;
    };

    public static ptToFlOz = (pt: number): number => {
      return pt * 20;
    };

    public static ptToQt = (pt: number): number => {
      return pt / 2;
    };

    public static qtToPt = (qt: number): number => {
      return qt * 2;
    };

    public static flozToQt = (floz: number): number => {
      return floz / 40;
    };

    public static qtToFlOz = (qt: number): number => {
      return qt * 40;
    };

    public static flozToGal = (floz: number): number => {
      return floz / 160;
    };

    public static galToFlOz = (gal: number): number => {
      return gal * 160;
    };

    public static ptToGal = (pt: number): number => {
      return pt / 8;
    };

    public static galToPt = (gal: number): number => {
      return gal * 8;
    };

    public static qtToGal = (qt: number): number => {
      return qt / 4;
    };

    public static galToQt = (gal: number): number => {
      return gal * 4;
    };

    public static ozToLbs = (oz: number): number => {
      return oz / 16;
    };

    public static lbsToOz = (lbs: number): number => {
      return lbs * 16;
    };
  };

  public static MetricToImperial = class {
    public static cmToIn = (cm: number): number => {
      return cm / 2.54;
    };

    public static mToIn = (meters: number): number => {
      return (meters * 100) / 2.54;
    };

    public static mlToFlOz = (ml: number): number => {
      return ml / 29.57353;
    };

    public static mlToPt = (ml: number): number => {
      return UnitConverter.Imperial.flozToPt(
        UnitConverter.MetricToImperial.mlToFlOz(ml)
      );
    };

    public static mlToQt = (ml: number): number => {
      return UnitConverter.Imperial.flozToQt(
        UnitConverter.MetricToImperial.mlToFlOz(ml)
      );
    };

    public static mlToGal = (ml: number): number => {
      return UnitConverter.Imperial.flozToQt(
        UnitConverter.MetricToImperial.mlToGal(ml)
      );
    };

    public static gToOz = (g: number): number => {
      return g / 28.349523125;
    };

    public static gToLbs = (g: number): number => {
      return UnitConverter.Imperial.ozToLbs(
        UnitConverter.MetricToImperial.gToOz(g)
      );
    };
  };

  public static ImperialToMetric = class {
    public static inToCm = (inch: number): number => {
      return inch * 2.54;
    };

    public static inToM = (inch: number): number => {
      return UnitConverter.ImperialToMetric.inToCm(inch) / 100;
    };

    public static flozToMl = (floz: number): number => {
      return floz * 29.57353;
    };

    public static ptToMl = (pt: number): number => {
      return UnitConverter.ImperialToMetric.flozToMl(
        UnitConverter.Imperial.ptToFlOz(pt)
      );
    };

    public static qtToMl = (qt: number): number => {
      return UnitConverter.ImperialToMetric.flozToMl(
        UnitConverter.Imperial.qtToFlOz(qt)
      );
    };
    public static galToMl = (gal: number): number => {
      return UnitConverter.ImperialToMetric.flozToMl(
        UnitConverter.Imperial.galToFlOz(gal)
      );
    };

    public static ozToG = (oz: number): number => {
      return oz * 28.349523125;
    };

    public static lbsToG = (lbs: number): number => {
      return UnitConverter.ImperialToMetric.ozToG(
        UnitConverter.Imperial.lbsToOz(lbs)
      );
    };
  };

  public static Temperature = class {
    public static fToC = (f: number): number => {
      return (f - 32) * (5 / 9);
    };

    public static cToF = (c: number): number => {
      return (c * 9) / 5 + 32;
    };

    public static kToC = (k: number): number => {
      return k - 273.15;
    };

    public static cToK = (c: number): number => {
      return c + 273.15;
    };

    public static fToK = (f: number): number => {
      return UnitConverter.Temperature.cToK(UnitConverter.Temperature.fToC(f));
    };

    public static kToF = (k: number): number => {
      return UnitConverter.Temperature.cToF(UnitConverter.Temperature.kToC(k));
    };
  };
}
