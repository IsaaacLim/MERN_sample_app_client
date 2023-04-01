import type { ReactNode } from "react";
import React from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";

interface IButton {
  enabled: boolean;
  onClick: () => void | undefined;
}

interface IDotButton {
  selected: boolean;
  onClick: () => void | undefined;
}

export const DotButton = ({ selected, onClick }: IDotButton) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

const NavButton = ({
  children,
  onClick,
  disabled,
}: {
  children: ReactNode;
  onClick: any;
  disabled: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="z-10 flex h-10 w-10 cursor-pointer touch-manipulation items-center justify-center outline-none"
    >
      {children}
    </button>
  );
};

export const PrevButton = ({ enabled, onClick }: IButton) => (
  <NavButton onClick={onClick} disabled={!enabled}>
    <HiOutlineChevronLeft className="text-xl text-gray-100" />
  </NavButton>
);

export const NextButton = ({ enabled, onClick }: IButton) => (
  <NavButton onClick={onClick} disabled={!enabled}>
    <HiOutlineChevronRight className="text-xl text-gray-100" />
  </NavButton>
);
