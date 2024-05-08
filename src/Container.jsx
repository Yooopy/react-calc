import React, { useState } from "react";
import "./Container.css";

function Container() {
  const [field, setField] = useState("");

  const addToField = (n) => {
    setField(String(field + n.toString()));
  };
  const equal = () => {
    const evale = eval(field);
    setField(evale.toString());
  };
  const clear = () => {
    setField("");
  };
  const backspace = () => {
    setField(field.slice(0, -1));
  };

  const atEndOfInput = () => {
    const input = document.getElementById("inp");
    input.selectionStart = input.selectionEnd = input.value.length;
  };

  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <input
        onInput={() => atEndOfInput()}
        id="inp"
        type="text"
        value={field}
        // readOnly
      ></input>
      <table>
        <tr>
          <td>
            <div onClick={() => clear()} className="butt corner">
              C
            </div>
          </td>
          <td>
            <div onClick={() => backspace()} className="butt corner">
              <span
                style={{ position: "relative", top: "4px", left: "-1px" }}
                class="material-symbols-outlined"
              >
                backspace
              </span>
            </div>
          </td>
          <td>
            <div onClick={() => addToField("**")} className="butt corner">
              x<sup>2</sup>
            </div>
          </td>
          <td>
            <div onClick={() => addToField("*")} className="butt corner">
              &times;
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div onClick={() => addToField(7)} className="butt">
              7
            </div>
          </td>
          <td>
            <div onClick={() => addToField(8)} className="butt">
              8
            </div>
          </td>
          <td>
            <div onClick={() => addToField(9)} className="butt">
              9
            </div>
          </td>
          <td>
            <div onClick={() => addToField("/")} className="butt corner">
              ÷
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div onClick={() => addToField(4)} className="butt">
              4
            </div>
          </td>
          <td>
            <div onClick={() => addToField(5)} className="butt">
              5
            </div>
          </td>
          <td>
            <div onClick={() => addToField(6)} className="butt">
              6
            </div>
          </td>
          <td>
            <div onClick={() => addToField("-")} className="butt corner">
              &minus;
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div onClick={() => addToField(1)} className="butt">
              1
            </div>
          </td>
          <td>
            <div onClick={() => addToField(2)} className="butt">
              2
            </div>
          </td>
          <td>
            <div onClick={() => addToField(3)} className="butt">
              3
            </div>
          </td>
          <td>
            <div onClick={() => addToField("+")} className="butt corner">
              +
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div onClick={() => addToField(0)} className="butt">
              0
            </div>
          </td>
          <td>
            <div onClick={() => addToField(3.14159265)} className="butt">
              &pi;
            </div>
          </td>
          <td>
            <div onClick={() => addToField(".")} className="butt">
              .
            </div>
          </td>
          <td>
            <div onClick={() => equal()} className="butt equal">
              =
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Container;
