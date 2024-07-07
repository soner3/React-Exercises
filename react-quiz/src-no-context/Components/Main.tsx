interface MainType {
  children: React.ReactNode;
}

export default function Main({ children }: MainType) {
  return <main className="main">{children}</main>;
}
