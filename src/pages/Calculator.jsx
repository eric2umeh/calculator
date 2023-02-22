import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state1, setState1] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnHandler = (e) => {
    const result = calculate(state1, e.target.textContent);
    setState1((state1) => ({
      ...state1,
      ...result,
    }));
  };

  const { total, next } = state1;

  return (
    <div className="App">
      <div className="title-cal">
        <h2>Let&apos;s do some math!</h2>
      </div>

      <div className="container">
        <div className="result">{next || total || 0}</div>

        <div className="wrapper">
          <div className="main-cal">
            <div className="top-cal">
              <button type="button" onClick={btnHandler}>
                AC
              </button>
              <button type="button" onClick={btnHandler}>
                +/-
              </button>
              <button type="button" onClick={btnHandler}>
                %
              </button>
            </div>

            <div className="digits">
              <button type="button" onClick={btnHandler}>
                7
              </button>
              <button type="button" onClick={btnHandler}>
                8
              </button>
              <button type="button" onClick={btnHandler}>
                9
              </button>
              <button type="button" onClick={btnHandler}>
                4
              </button>
              <button type="button" onClick={btnHandler}>
                5
              </button>
              <button type="button" onClick={btnHandler}>
                6
              </button>
              <button type="button" onClick={btnHandler}>
                1
              </button>
              <button type="button" onClick={btnHandler}>
                2
              </button>
              <button type="button" onClick={btnHandler}>
                3
              </button>
            </div>
            <div className="bottom-cal">
              <button type="button" onClick={btnHandler}>
                .
              </button>
              <button type="button" onClick={btnHandler} className="btn-0">
                0
              </button>
            </div>
          </div>

          <div className="operatorss">
            <button type="button" onClick={btnHandler}>
              ÷
            </button>
            <button type="button" onClick={btnHandler}>
              x
            </button>
            <button type="button" onClick={btnHandler}>
              -
            </button>
            <button type="button" onClick={btnHandler}>
              +
            </button>
            <button type="button" onClick={btnHandler}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
