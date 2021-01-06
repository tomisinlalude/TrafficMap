import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (state) => {
  return { data: state.APIReducer };
};

export default connect(mapStateToProps)(Home);
