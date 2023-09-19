function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-100 h-full flex items-center justify-center">
            {children}
        </div>
    );
}
export default AuthLayout;
