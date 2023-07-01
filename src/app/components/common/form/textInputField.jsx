import React from "react";
import PropTypes from "prop-types";

function TextInputField({ label, type, name, value, onChange }) {
    return (
        <div className="mb-3">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {type === "text" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        // onClick={}
                    >
                    </button>
                )}
            </div>
        </div>
    );
}
TextInputField.defaultProps = {
    type: "text"
};
TextInputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default TextInputField;

/*
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> */
