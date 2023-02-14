import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  btnHandler = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState((state1) => ({
      ...state1,
      ...result,
    }));
  };

  render() {
    const { total, next } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="result">{next || total || 0}</div>

          <div className="wrapper">
            <div className="main-cal">
              <div className="top-cal">
                <button type="button" onClick={this.btnHandler}>
                  AC
                </button>
                <button type="button" onClick={this.btnHandler}>
                  +/-
                </button>
                <button type="button" onClick={this.btnHandler}>
                  %
                </button>
              </div>

              <div className="digits">
                <button type="button" onClick={this.btnHandler}>
                  7
                </button>
                <button type="button" onClick={this.btnHandler}>
                  8
                </button>
                <button type="button" onClick={this.btnHandler}>
                  9
                </button>
                <button type="button" onClick={this.btnHandler}>
                  4
                </button>
                <button type="button" onClick={this.btnHandler}>
                  5
                </button>
                <button type="button" onClick={this.btnHandler}>
                  6
                </button>
                <button type="button" onClick={this.btnHandler}>
                  1
                </button>
                <button type="button" onClick={this.btnHandler}>
                  2
                </button>
                <button type="button" onClick={this.btnHandler}>
                  3
                </button>
              </div>
              <div className="bottom-cal">
                <button type="button" onClick={this.btnHandler}>
                  .
                </button>
                <button
                  type="button"
                  onClick={this.btnHandler}
                  className="btn-0"
                >
                  0
                </button>
              </div>
            </div>

            <div className="operatorss">
              <button type="button" onClick={this.btnHandler}>
                ÷
              </button>
              <button type="button" onClick={this.btnHandler}>
                x
              </button>
              <button type="button" onClick={this.btnHandler}>
                -
              </button>
              <button type="button" onClick={this.btnHandler}>
                +
              </button>
              <button type="button" onClick={this.btnHandler}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
