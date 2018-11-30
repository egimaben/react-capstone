import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInstructions } from '../../actions/instructions';
import { fetchUserName, fetchToken } from '../../actions/auth'
import Instruction from '../Instruction/Instruction'
import NavBar from '../NavBar/NavBar';
import SearchInput from '../../components/SearchInput'
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  wrapper: {
    display: 'flex',
    padding: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  }
}
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }
  componentDidMount() {
    this.props.fetchToken()
    this.props.fetchInstructions();
  }
  componentWillReceiveProps() {
    const { token, fetchUserName, name } = this.props
    if (token !== "" && name === "") {
      fetchUserName(token)
    }
  }
  handleQueryChange = (e) => {
    this.setState({ query: e.target.value.toLowerCase() })
  }
  render() {
    const { name, instructions, classes } = this.props
    const { query } = this.state
    return (
      <main>
        <NavBar name={name} />
        <SearchInput onSearchQueryChange={this.handleQueryChange} label='Search for a nugget' value={query} />
        <div className={classes.wrapper}>
          {instructions.filter(instruction => {
            const tagMatches = instruction.tag.toLowerCase().includes(query);
            const labelMatches = instruction.label.toLowerCase().includes(query);
            const nuggetMatches = instruction.nuggets.filter(nugget =>
              nugget.text.toLowerCase().includes(query) ||
              nugget.code.toLowerCase().includes(query)).length > 0;
            return tagMatches || nuggetMatches || labelMatches;
          }).map(instruction => <Instruction key={instruction._id} data={instruction} />)}
        </div>
      </main>
    );
  }
}
const mapStateToProps = state => ({
  instructions: state.instructions,
  token: state.auth.token,
  name: state.auth.name
});

export default withStyles(styles)(connect(mapStateToProps, { fetchToken, fetchInstructions, fetchUserName })(Home));
