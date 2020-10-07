import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Editor from "./Editor";
const Input = React.forwardRef(
  ({ name, type, label, errors, control }, ref) => {
    return (
      <div>
        <label>{label}</label>
        {type === "rte" ? (
          <>
            <Controller
              name={name}
              control={control}
              render={({ value, onChange }) => (
                <Editor editorState={value} onChange={onChange} />
              )}
            />
          </>
        ) : (
          <input type={type} ref={ref} name={name} />
        )}
        <ErrorMessage errors={errors} className="error" name={name} as="p" />
      </div>
    );
  }
);
export default Input;
