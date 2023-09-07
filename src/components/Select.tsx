import React from "react";

type SelectProps = {
  options: string[] | number[];
  id: string;
  name: string;
  defaultValue?: number | string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function Select({
  options,
  id,
  name,
  onChange,
  defaultValue,
}: SelectProps) {
  return (
    <select id={id} name={name} onChange={onChange} defaultValue={defaultValue}>
      {options.length > 0 &&
        options.map((option, index) => {
          return <option key={`${name}-${index}`}>{option}</option>;
        })}
    </select>
  );
}
