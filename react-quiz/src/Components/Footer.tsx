interface FooterPropType {
  children: React.ReactNode;
}

export default function Footer({ children }: FooterPropType) {
  return <footer>{children}</footer>;
}
