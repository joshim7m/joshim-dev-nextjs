import { X } from "lucide-react";
import React from "react";

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Navbar Content */}
      <div
        className={`absolute left-0 top-0 h-full w-full max-w-[400px] bg-accent transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="head fy-jb px-2 py-3">
            <div>
              <p className="text-2xl font-semibold">
                Joshim <span className="text-primary">Dev</span>
              </p>
            </div>
            <div>
              <button onClick={onClose} aria-label="Close navigation menu">
                <X size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
