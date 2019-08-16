import { connect } from 'react-redux';
import { addChartDataItem, getChartData, getBarChartData, getThresholdValue, getLineChartData } from "./duck/charts";
import { ChartsPage } from "./ChartsPage";

const mapStateToProps = store => ({
  chartData: getChartData(store),
  barChartData: getBarChartData(store),
  lineChartData: getLineChartData(store),
  thresholdValue: getThresholdValue(store),
});

const mapDispatchToProps = {
  addChartDataItem,
};

export const ChartsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ChartsPage);
