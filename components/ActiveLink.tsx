import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}
export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  console.log(asPath);

  return (
    <Link href={href}>
      <span style={asPath === href ? style : undefined}>{text}</span>
    </Link>
  );
};
