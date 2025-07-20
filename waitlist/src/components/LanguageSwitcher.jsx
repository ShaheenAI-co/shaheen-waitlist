"use client";
import React, { useEffect, useRef, useState } from "react";

const LanguageSwitcher = ({
  options,
  placeholder = "Lang",
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option); // Update selected item
    setOpen(false); // Close the dropdown
    if (onChange) onChange(option); // Notify parent component
  };

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="py-4 px-6 bg-blue-100"
      >
        {selected ? selected.label : placeholder}
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-100 
          ${selected?.value === option.value ? "bg-blue-50 font-semibold" : ""}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
