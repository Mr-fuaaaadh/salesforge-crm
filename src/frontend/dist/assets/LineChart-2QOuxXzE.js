import { T as generateCategoricalChart, a7 as Line, a3 as XAxis, a4 as YAxis, aa as formatAxisMap } from "./BarChart-CaYUu0ud.js";
var LineChart = generateCategoricalChart({
  chartName: "LineChart",
  GraphicalChild: Line,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
export {
  LineChart as L
};
