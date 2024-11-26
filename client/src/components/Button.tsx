interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`px-4 py-2 bg-blue-500 text-white rounded-md ${className}`}>
            {children}
        </button>
    );
};

export default Button;
