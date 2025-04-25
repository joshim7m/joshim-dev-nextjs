import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode;
  type: 'button' | 'submit';
  variant: string;
}

const Button = ({ children, type, variant }: ButtonProps) => {
  return (
    <button type={type} className={`fxy-center gap-1 ${variant}`}>
      { children }
    </button>
  )
}

export default Button